// ============================================================
// Travel Fit: Anywhere Strength — Premium Program ($3.99)
// 旅者训练：随地力量 — 零器材、酒店房间友好、30分钟高效训练
// ============================================================

var TRAVEL_FIT_TEMPLATES = [
  // ==========================================================
  // LEVEL 1 — Essential（基础维持）· 适合出差/旅行新手
  // ==========================================================
  {
    "id": "travel_fit_l1",
    "name": "旅者训练 L1：基础维持",
    "name_en": "Travel Fit L1: Essential Maintenance",
    "desc": "出差或旅行中保持训练的最低配方案。25分钟，纯自重，酒店房间、公园、沙滩——任何地方都能完成。不找借口。",
    "difficulty": "初级",
    "days_per_week": 3,
    "source": "IronLog Premium — Travel Fit Program",
    "color": "#4ECDC4",
    "premium": true,
    "price": "$3.99",
    "program": "travel_fit",
    "level": 1,
    "level_name": "Essential（基础）",
    "duration": "2周（免费预览）",
    "progression_criteria": "完整完成所有训练 → 购买完整版解锁Level 2+3",
    "free_preview": true,
    "gumroad_url": "https://howlwind7126.gumroad.com/l/travel-fit",
    "level_desc": "Level 1 是最低维护方案。出差中不需要健身房、不需要器材，25分钟全身自重训练保持状态。3天/周，穿插在会议间隙或早晨起床后。",
    "level_desc_en": "Level 1 is the minimum viable training protocol. No gym, no equipment — 25 min full-body bodyweight sessions to maintain fitness on the road. 3x/week, squeeze between meetings or right after waking up.",
    "days": [
      {
        "day": 1,
        "focus": "全身 A",
        "warmup": "3分钟：原地慢跑60秒 + 开合跳30秒 + 高抬腿30秒 + 肩绕环30秒",
        "exercises": [
          { "tag": "chest_06", "sets": "3", "reps": "10-15", "note": "俯卧撑 — 根据能力选择标准/跪姿/倾斜，保持标准姿势" },
          { "tag": "bw_squat", "sets": "3", "reps": "15-20", "note": "自重深蹲 — 双手抱胸前或前平举增加平衡挑战" },
          { "tag": "bw_lunge", "sets": "3", "reps": "10/侧", "note": "弓步蹲 — 酒店走廊做行走式弓步，一步一蹲" },
          { "tag": "core_01", "sets": "3", "reps": "30-45秒", "note": "平板支撑 — 铺条毛巾在地板上即可" },
          { "tag": "bw_glute_bridge", "sets": "3", "reps": "15-20", "note": "臀桥 — 躺在床上或地板上做，顶峰收缩2秒" }
        ],
        "focus_en": "Full Body A"
      },
      { "day": 2, "rest": true, "focus_en": "" },
      {
        "day": 3,
        "focus": "全身 B",
        "warmup": "3分钟：高抬腿30秒 + 登山者30秒 + 臀桥脉冲15次 + 猫牛式10次",
        "exercises": [
          { "tag": "chest_06", "sets": "3", "reps": "12-18", "note": "窄距俯卧撑 — 双手并拢，锻炼三头肌和胸肌内侧" },
          { "tag": "bw_squat", "sets": "3", "reps": "15-20", "note": "深蹲脉冲 — 底部停留做3次小幅脉冲再起，灼烧大腿" },
          { "tag": "core_01", "sets": "4", "reps": "30-45秒", "note": "平板支撑 — 增加一组，核心耐力稳步提升" },
          { "tag": "bw_lunge", "sets": "3", "reps": "12/侧", "note": "反向弓步 — 向后迈步蹲，对膝盖更友好" },
          { "tag": "bw_glute_bridge", "sets": "3", "reps": "20", "note": "单腿臀桥 — 每侧10次，均衡发展臀肌" }
        ],
        "focus_en": "Full Body B"
      },
      { "day": 4, "rest": true, "focus_en": "" },
      {
        "day": 5,
        "focus": "全身 C + 核心",
        "warmup": "3分钟：开合跳60秒 + 肩绕环15次 + 死虫式10次/侧",
        "exercises": [
          { "tag": "chest_06", "sets": "4", "reps": "10-15", "note": "俯卧撑 — 4组力竭式，每组做到接近力竭" },
          { "tag": "bw_squat", "sets": "3", "reps": "20", "note": "深蹲 — 最后一周给自己加点量，挑战20次" },
          { "tag": "core_01", "sets": "4", "reps": "45秒", "note": "平板支撑 — 目标是45秒标准姿势" },
          { "tag": "bw_bird_dog", "sets": "3", "reps": "10/侧", "note": "鸟狗式 — 训练核心稳定性和协调性" },
          { "tag": "arms_07", "sets": "3", "reps": "12-15", "note": "板凳臂屈伸 — 用酒店椅子或床沿做三头肌训练" }
        ],
        "focus_en": "Full Body C + Core"
      },
      { "day": 6, "rest": true, "focus_en": "" },
      { "day": 7, "rest": true, "focus_en": "" }
    ]
  },

  // ==========================================================
  // LEVEL 2 — Express（极速燃脂）· 20分钟HIIT
  // ==========================================================
  {
    "id": "travel_fit_l2",
    "name": "旅者训练 L2：极速燃脂",
    "name_en": "Travel Fit L2: Express HIIT",
    "desc": "时间更短、强度更高。20分钟HIIT模式，燃脂效果拉满。适合只有午休或晨间20分钟空档的紧凑日程。",
    "difficulty": "中级",
    "days_per_week": 3,
    "source": "IronLog Premium — Travel Fit Program",
    "color": "#4ECDC4",
    "premium": true,
    "price": "$3.99",
    "program": "travel_fit",
    "level": 2,
    "level_name": "Express（极速）",
    "duration": "灵活使用",
    "level_desc": "Level 2 采用EMOM（Every Minute On the Minute）模式：每分钟开始做指定次数，剩余时间休息。20分钟榨干体能，燃脂效果比慢跑40分钟还好。3天/周即可。",
    "level_desc_en": "Level 2 uses EMOM (Every Minute On the Minute) format: do prescribed reps at the start of each minute, rest the remainder. 20 minutes of all-out effort — burns more than 40 min of jogging. Just 3x/week.",
    "days": [
      {
        "day": 1,
        "focus": "EMOM 推拉模式 · 20分钟",
        "warmup": "3分钟快速热身：开合跳60秒 + 登山者30秒 + 高抬腿30秒 + 休息30秒",
        "exercises": [
          { "tag": "chest_06", "sets": "10轮 EMOM", "reps": "10/轮", "note": "EMOM俯卧撑 — 每分钟开始做10个俯卧撑，做完剩余时间休息。共10分钟" },
          { "tag": "bw_squat", "sets": "10轮 EMOM", "reps": "15/轮", "note": "EMOM深蹲 — 每分钟开始做15个深蹲。共10分钟。总计：10分钟俯卧撑 + 10分钟深蹲 = 20分钟" }
        ],
        "focus_en": "EMOM Push-Pull · 20 min"
      },
      { "day": 2, "rest": true, "focus_en": "" },
      {
        "day": 3,
        "focus": "EMOM 下肢 + 核心 · 20分钟",
        "warmup": "3分钟：臀桥15次 + 弓步走10步/侧 + 猫牛式10次",
        "exercises": [
          { "tag": "bw_lunge", "sets": "10轮 EMOM", "reps": "10/侧/轮", "note": "EMOM交替弓步 — 每分钟10次/侧。共10分钟。股四头肌和臀肌灼烧" },
          { "tag": "core_01", "sets": "10轮 EMOM", "reps": "30秒/轮", "note": "EMOM平板支撑 — 每分钟支撑30秒，休息30秒。共10分钟。核心极限耐力" }
        ],
        "focus_en": "EMOM Lower Body + Core · 20 min"
      },
      { "day": 4, "rest": true, "focus_en": "" },
      {
        "day": 5,
        "focus": "EMOM 全身混合 · 20分钟",
        "warmup": "3分钟：开合跳60秒 + 高抬腿30秒 + 登山者30秒 + 休息30秒",
        "exercises": [
          { "tag": "chest_06", "sets": "5轮 EMOM", "reps": "12/轮", "note": "俯卧撑 EMOM — 5轮" },
          { "tag": "bw_squat", "sets": "5轮 EMOM", "reps": "18/轮", "note": "深蹲 EMOM — 5轮" },
          { "tag": "bw_lunge", "sets": "5轮 EMOM", "reps": "10/侧/轮", "note": "弓步 EMOM — 5轮" },
          { "tag": "bw_glute_bridge", "sets": "5轮 EMOM", "reps": "20/轮", "note": "臀桥 EMOM — 5轮。总计：20轮交替 = 20分钟火力全开" }
        ],
        "focus_en": "EMOM Full Body Mix · 20 min"
      },
      { "day": 6, "rest": true, "focus_en": "" },
      { "day": 7, "rest": true, "focus_en": "" }
    ]
  },

  // ==========================================================
  // LEVEL 3 — Power（力量进阶）· 高强度徒手
  // ==========================================================
  {
    "id": "travel_fit_l3",
    "name": "旅者训练 L3：力量进阶",
    "name_en": "Travel Fit L3: Power Progression",
    "desc": "高强度徒手训练。弓步跳、爆发俯卧撑、保加利亚分腿蹲——出差也能持续进步。适用于已有训练基础的旅者。",
    "difficulty": "高级",
    "days_per_week": 3,
    "source": "IronLog Premium — Travel Fit Program",
    "color": "#4ECDC4",
    "premium": true,
    "price": "$3.99",
    "program": "travel_fit",
    "level": 3,
    "level_name": "Power（进阶）",
    "duration": "灵活使用",
    "level_desc": "Level 3 面向已有训练基础的旅者。加入爆发性动作和单侧训练，在出差/旅行中持续进步而非仅仅维持。30分钟高强度，3天/周。",
    "level_desc_en": "Level 3 for travelers with training experience. Adds explosive movements and unilateral work — keep progressing on the road, not just maintaining. 30 min high-intensity, 3x/week.",
    "days": [
      {
        "day": 1,
        "focus": "爆发推力 + 核心",
        "warmup": "5分钟：开合跳60秒 + 登山者30秒 + 俯卧撑平板30秒 + 休息重复一轮",
        "exercises": [
          { "tag": "chest_06", "sets": "4", "reps": "15-25", "note": "爆发俯卧撑 — 推起时手离地，或从标准俯卧撑力竭开始" },
          { "tag": "core_01", "sets": "4", "reps": "60秒", "note": "平板支撑 — 满60秒标准姿势，核心极限耐力" },
          { "tag": "arms_07", "sets": "4", "reps": "20-25", "note": "板凳臂屈伸 — 双脚抬高增加难度，三头肌力竭" },
          { "tag": "bw_bird_dog", "sets": "3", "reps": "15/侧（静态5秒）", "note": "鸟狗式 — 每侧保持5秒顶峰收缩" }
        ],
        "focus_en": "Explosive Push + Core"
      },
      { "day": 2, "rest": true, "focus_en": "" },
      {
        "day": 3,
        "focus": "下肢力量 + 单侧训练",
        "warmup": "5分钟：弓步走20步 + 深蹲15次 + 开合跳30秒 + 休息30秒",
        "exercises": [
          { "tag": "bw_squat", "sets": "5", "reps": "20-30", "note": "自重深蹲 — 5组高次数，每组做到接近力竭" },
          { "tag": "bw_lunge", "sets": "4", "reps": "15/侧", "note": "保加利亚分腿蹲 — 后脚垫在椅子/床上，前腿全蹲，每侧15次" },
          { "tag": "bw_glute_bridge", "sets": "4", "reps": "20（单腿各10）", "note": "单腿臀桥 — 每侧10次，顶峰收缩3秒" },
          { "tag": "core_01", "sets": "3", "reps": "60秒", "note": "平板支撑 — 每周维持核心耐力底线" }
        ],
        "focus_en": "Lower Body Power + Unilateral"
      },
      { "day": 4, "rest": true, "focus_en": "" },
      {
        "day": 5,
        "focus": "全身 HIIT 终极挑战",
        "warmup": "5分钟：开合跳60秒 + 高抬腿30秒 + 登山者30秒 + 臀桥15次 + 休息30秒",
        "exercises": [
          { "tag": "chest_06", "sets": "5", "reps": "12-15", "note": "俯卧撑 — 5组，间歇45秒，保持标准姿势" },
          { "tag": "bw_squat", "sets": "5", "reps": "20-25", "note": "深蹲 — 间歇45秒，心率全程不降" },
          { "tag": "bw_lunge", "sets": "4", "reps": "12/侧", "note": "弓步跳 — 跳跃式换腿弓步，爆发力和心率双挑战" },
          { "tag": "core_01", "sets": "4", "reps": "45-60秒", "note": "平板支撑 — 穿插在动作间，核心不休息" },
          { "tag": "bw_glute_bridge", "sets": "4", "reps": "20", "note": "臀桥 — 每组间歇30秒，灼烧收尾" }
        ],
        "focus_en": "Full Body HIIT Ultimate Challenge"
      },
      { "day": 6, "rest": true, "focus_en": "" },
      { "day": 7, "rest": true, "focus_en": "" }
    ]
  }
];
