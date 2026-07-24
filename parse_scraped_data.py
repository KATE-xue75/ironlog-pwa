#!/usr/bin/env python3
"""
parse_scraped_data.py
解析 scrape_reddit_wiki.ps1 的输出 JSON，提取结构化动作数据
运行环境：WSL
输入：fitness_data/exercises_scraped.json
输出：可直接合并到 exercises_v6.js 的补充数据
"""

import json, re, sys
from pathlib import Path

INPUT = Path("/mnt/c/Users/19031/WorkBuddy/fitness-pwa/fitness_data/exercises_scraped.json")
OUTPUT = Path("/mnt/c/Users/19031/WorkBuddy/fitness-pwa/fitness_data/exercises_supplement.json")

def extract_progressions(md_text):
    """从 Reddit Wiki markdown 中提取进退阶信息"""
    progressions = []
    
    # Pattern: "Progression: X → Y → Z" or numbered lists with progression keywords
    prog_patterns = [
        r'(?:Progression|Progressions?|Pathway)[\s:]*\n((?:(?:[-*]\s+.+\n)+))',
        r'(?:easier|harder|easier variation|harder variation)[\s:]*\n((?:(?:[-*]\s+.+\n)+))',
    ]
    
    for pat in prog_patterns:
        matches = re.findall(pat, md_text, re.IGNORECASE)
        for m in matches:
            items = re.findall(r'[-*]\s+(.+)', m)
            if items:
                progressions.append(items)
    
    return progressions

def extract_safety_tips(md_text):
    """提取安全提示和常见错误"""
    tips = []
    
    safety_patterns = [
        r'(?:Common (?:Mistakes?|Errors?|Pitfalls?)|Safety (?:Tips?|Notes?|Warnings?)|Watch out for|Avoid)[\s:]*\n((?:(?:[-*]\s+.+\n)+))',
        r'(?:Mistakes?|Errors?|Pitfalls?)[\s:]*\n((?:(?:[-*]\s+.+\n)+))',
    ]
    
    for pat in safety_patterns:
        matches = re.findall(pat, md_text, re.IGNORECASE)
        for m in matches:
            items = re.findall(r'[-*]\s+(.+)', m)
            if items:
                tips.extend(items)
    
    return tips

def extract_exrx_instructions(text):
    """从 ExRx.net 提取的结构化数据中解析动作要领"""
    result = {}
    
    prep_match = re.search(r'Preparation:\s*(.+?)(?:\n\n|\n(?:Execution|Comments):)', text, re.DOTALL)
    exec_match = re.search(r'Execution:\s*(.+?)(?:\n\n|\n(?:Preparation|Comments):|$)', text, re.DOTALL)
    comments_match = re.search(r'Comments:\s*(.+?)(?:\n\n|$)', text, re.DOTALL)
    
    if prep_match:
        result['preparation'] = prep_match.group(1).strip()
    if exec_match:
        result['execution'] = exec_match.group(1).strip()
    if comments_match:
        result['comments'] = comments_match.group(1).strip()
    
    return result

def parse_reddit_wiki(md_text, page_name):
    """解析 Reddit Wiki markdown 提取结构化信息"""
    result = {
        'source': page_name,
        'progressions': extract_progressions(md_text),
        'safety_tips': extract_safety_tips(md_text),
        'exercises_found': [],
    }
    
    # Extract exercise names from headers and lists
    exercises = re.findall(r'(?:^|\n)#+\s*(.+?)(?:\n|$)', md_text)
    result['exercises_found'] = [e.strip() for e in exercises if len(e.strip()) > 3]
    
    return result

def main():
    if not INPUT.exists():
        print(f"ERROR: Input file not found: {INPUT}")
        print("Run scrape_reddit_wiki.ps1 from Windows first.")
        sys.exit(1)
    
    with open(INPUT, 'r', encoding='utf-8') as f:
        pages = json.load(f)
    
    print(f"Loaded {len(pages)} pages from {INPUT}\n")
    
    supplement_data = []
    
    for page in pages:
        if page.get('Status') != 'ok':
            print(f"[SKIP] {page['Name']} — {page.get('Status', 'N/A')}")
            continue
        
        name = page['Name']
        content = page.get('Content', '')
        source = page.get('Source', '')
        
        print(f"[PROCESS] {name} ({len(content)} chars, source: {source})")
        
        if source == 'Reddit JSON API':
            parsed = parse_reddit_wiki(content, name)
            # Extract specific exercise data from wiki sections
            # RR wiki has sections like "### Pull-up Progression"
            sections = re.split(r'(?:^|\n)#{2,3}\s+', content)
            for section in sections:
                section = section.strip()
                if not section:
                    continue
                lines = section.split('\n', 1)
                section_title = lines[0].strip() if lines else ''
                section_body = lines[1] if len(lines) > 1 else ''
                
                # Only keep sections that are clearly exercise-related
                if any(kw in section_title.lower() for kw in ['progression', 'exercise', 'pull', 'push', 'squat', 'hinge', 'row', 'dip', 'core', 'l-sit', 'handstand', 'plank']):
                    supplement_data.append({
                        'source_page': name,
                        'section': section_title,
                        'content': section_body[:500],  # first 500 chars
                        'type': 'wiki_section'
                    })
        elif source == 'ExRx.net HTML':
            exrx = extract_exrx_instructions(content)
            if exrx:
                supplement_data.append({
                    'source_page': name,
                    'preparation': exrx.get('preparation', ''),
                    'execution': exrx.get('execution', ''),
                    'comments': exrx.get('comments', ''),
                    'type': 'exrx_instructions'
                })
    
    # Save supplement data
    output = {
        'scraped_at': str(INPUT.stat().st_mtime),
        'total_pages': len(pages),
        'processed': len([p for p in pages if p.get('Status') == 'ok']),
        'exercises': supplement_data
    }
    
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT, 'w', encoding='utf-8') as f:
        json.dump(output, f, ensure_ascii=False, indent=2)
    
    print(f"\n=== Done ===")
    print(f"Extracted {len(supplement_data)} exercise entries")
    print(f"Output: {OUTPUT}")

if __name__ == '__main__':
    main()
