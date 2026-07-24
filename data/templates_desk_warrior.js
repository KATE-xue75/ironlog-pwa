// ============================================================
// Desk Warrior: Posture Reset — Premium Program ($3.99)
// 久坐战士：体态重塑 — 针对办公室人群的体态矫正课表
// ============================================================

var DESK_WARRIOR_TEMPLATES = [
  // ==========================================================
  // LEVEL 1 — Release（释放紧张）· Weeks 1-2
  // ==========================================================
  {
    "id": "desk_warrior_l1",
    "name": "久坐战士 L1：释放（1-2周）",
    "name_en": "Desk Warrior L1: Release (Weeks 1-2)",
    "desc": "释放久坐积累的肌肉紧张。每天只需20分钟，重点拉伸髋屈肌、胸肌、颈部，激活沉睡的臀肌和核心。适合任何久坐办公人群。",
    "difficulty": "初级",
    "days_per_week": 5,
    "source": "IronLog Premium — Desk Warrior Program",
    "color": "#FF6B6B",
    "premium": true,
    "price": "$9.99",
    "program": "desk_warrior",
    "level": 1,
    "level_name": "Release（释放）",
    "duration": "2周（免费预览）",
    "progression_criteria": "所有动作无疼痛、活动度明显改善 → 购买完整版解锁Level 2+3",
    "free_preview": true,
    "gumroad_url": "https://howlwind7126.gumroad.com/l/desk-warrior",
    "level_desc": "Level 1 聚焦于释放。用2周时间解除髋屈肌、胸肌和颈部的长期紧张，同时激活沉睡的核心与臀肌。每天20分钟，5天/周，轻松融入午休或下班后。",
    "level_desc_en": "Level 1 focuses on releasing tension built up from sitting. 2 weeks to unlock tight hip flexors, chest, and neck while waking up dormant core and glutes. Just 20 min/day, 5x/week — easy to fit into lunch break or after work.",
    "days": [
      {
        "day": 1,
        "focus": "下半身释放 + 核心激活",
        "warmup": "5分钟：猫牛式10次 + 骨盆前后倾10次 + 肩绕环各10次",
        "exercises": [
          { "tag": "bw_lunge", "sets": "2", "reps": "30秒/侧（静态拉伸）", "note": "髋屈肌拉伸 — 弓步姿势保持，后腿髋部向前推，感受大腿前侧拉伸" },
          { "tag": "core_01", "sets": "3", "reps": "20-30秒", "note": "平板支撑 — 核心收紧，臀部不塌，从短时开始逐步增加" },
          { "tag": "bw_glute_bridge", "sets": "3", "reps": "12-15", "note": "臀桥 — 顶峰收缩2秒，唤醒久坐沉睡的臀部" },
          { "tag": "bw_bird_dog", "sets": "2", "reps": "8/侧（慢速3秒）", "note": "鸟狗式 — 对侧伸展，核心稳定不晃动" }
        ],
        "focus_en": "Lower Body Release + Core Activation"
      },
      {
        "day": 2,
        "focus": "上半身释放 + 背部唤醒",
        "warmup": "5分钟：颈部缓慢绕环 + 肩胛骨收缩15次 + 胸椎旋转各5次",
        "exercises": [
          { "tag": "chest_06", "sets": "2", "reps": "8-10（慢速离心3秒）", "note": "倾斜俯卧撑 — 手在桌沿/墙上，打开胸腔，感受胸肌拉伸" },
          { "tag": "bw_dead_hang", "sets": "3", "reps": "20-30秒", "note": "死挂 — 完全放松肩胛，重力自然拉伸脊柱和背阔肌" },
          { "tag": "core_01", "sets": "3", "reps": "25-35秒", "note": "平板支撑 — 比昨天多坚持5秒" },
          { "tag": "bw_glute_bridge", "sets": "3", "reps": "15", "note": "单腿臀桥 — 每侧10次，加强臀部不对称力量" }
        ],
        "focus_en": "Upper Body Release + Back Activation"
      },
      {
        "day": 3,
        "focus": "全身流动 + 活动度",
        "warmup": "5分钟：开合跳30秒 + 高抬腿30秒 + 世界最伟大拉伸（每侧3次）",
        "exercises": [
          { "tag": "bw_squat", "sets": "3", "reps": "10-12（慢速3秒离心）", "note": "自重深蹲 — 关注下蹲幅度，能蹲多深蹲多深，不勉强" },
          { "tag": "bw_lunge", "sets": "2", "reps": "8/侧（动态）", "note": "弓步走 — 每步保持2秒底部停顿，提高髋关节活动度" },
          { "tag": "core_01", "sets": "3", "reps": "30秒", "note": "平板支撑 — 从头到脚一条直线" },
          { "tag": "bw_bird_dog", "sets": "3", "reps": "10/侧", "note": "鸟狗式 — 提高次数，保持核心稳定" }
        ],
        "focus_en": "Full Body Flow + Mobility"
      },
      { "day": 4, "rest": true, "focus_en": "" },
      {
        "day": 5,
        "focus": "核心耐力 + 体态强化",
        "warmup": "5分钟：臀桥脉冲15次 + 死虫式10次/侧 + 肩胛骨后缩15次",
        "exercises": [
          { "tag": "core_01", "sets": "4", "reps": "30-45秒", "note": "平板支撑 — 终极核心耐力，目标是45秒标准姿势" },
          { "tag": "bw_glute_bridge", "sets": "3", "reps": "15-20", "note": "臀桥 — 顶峰收缩3秒，臀部发力最大化" },
          { "tag": "bw_dead_hang", "sets": "3", "reps": "25-35秒", "note": "死挂 — 感受脊柱减压，肩部完全放松" },
          { "tag": "chest_06", "sets": "2", "reps": "10", "note": "倾斜俯卧撑 — 保持胸腔打开，为Level 2做准备" }
        ],
        "focus_en": "Core Endurance + Posture Reinforcement"
      },
      { "day": 6, "rest": true, "focus_en": "" },
      { "day": 7, "rest": true, "focus_en": "" }
    ]
  },

  // ==========================================================
  // LEVEL 2 — Activate（激活重建）· Weeks 3-4
  // ==========================================================
  {
    "id": "desk_warrior_l2",
    "name": "久坐战士 L2：激活（3-4周）",
    "name_en": "Desk Warrior L2: Activate (Weeks 3-4)",
    "desc": "从释放进入激活。增加训练强度，建立正确的动作模式和肌肉记忆。每天25分钟，开始感受到体态的明显改善。",
    "difficulty": "中级",
    "days_per_week": 4,
    "source": "IronLog Premium — Desk Warrior Program",
    "color": "#FF6B6B",
    "premium": true,
    "price": "$9.99",
    "program": "desk_warrior",
    "level": 2,
    "level_name": "Activate（激活）",
    "duration": "2周",
    "progression_criteria": "所有动作3组标准完成 → 解锁Level 3",
    "level_desc": "Level 2 从「释放」过渡到「重建」。加大核心和背部的训练量，增加跪姿俯卧撑和划船类动作，帮你建立正确的体态肌肉记忆。4天/周，每次25分钟。",
    "level_desc_en": "Level 2 transitions from 'release' to 'rebuild'. Increased core and back volume, adding knee pushups and rowing movements. Building postural muscle memory. 4x/week, 25 min each.",
    "days": [
      {
        "day": 1,
        "focus": "推 + 核心",
        "warmup": "5分钟：猫牛式10次 + 胸椎旋转各8次 + 肩胛骨收缩15次",
        "exercises": [
          { "tag": "chest_06", "sets": "3", "reps": "10-15", "note": "跪姿俯卧撑 — 膝盖着地，保持身体直线，胸部触地" },
          { "tag": "core_01", "sets": "3", "reps": "35-45秒", "note": "平板支撑 — 核心全程收紧，不摇晃" },
          { "tag": "arms_07", "sets": "3", "reps": "10-12", "note": "板凳臂屈伸 — 双手撑椅边，肘部后弯90度，锻炼三头肌" },
          { "tag": "bw_glute_bridge", "sets": "3", "reps": "15-20（单腿各10）", "note": "单腿臀桥 — 加强单侧臀肌力量" }
        ],
        "focus_en": "Push + Core"
      },
      {
        "day": 2,
        "focus": "拉 + 活动度",
        "warmup": "5分钟：死挂15秒 + 肩绕环各10次 + 髋绕环各10次",
        "exercises": [
          { "tag": "bw_dead_hang", "sets": "4", "reps": "30-40秒", "note": "死挂 — 逐步延长时间，增强握力和脊柱减压" },
          { "tag": "bw_squat", "sets": "3", "reps": "12-15", "note": "自重深蹲 — 关注离心控制，3秒下放" },
          { "tag": "bw_lunge", "sets": "3", "reps": "10/侧", "note": "弓步蹲 — 动态行走式弓步，保持躯干直立" },
          { "tag": "bw_bird_dog", "sets": "3", "reps": "12/侧", "note": "鸟狗式 — 对侧手脚保持5秒顶峰" }
        ],
        "focus_en": "Pull + Mobility"
      },
      { "day": 3, "rest": true, "focus_en": "" },
      {
        "day": 4,
        "focus": "全身力量 + 体态整合",
        "warmup": "5分钟：开合跳60秒 + 高抬腿30秒 + 臀桥脉冲15次",
        "exercises": [
          { "tag": "chest_06", "sets": "3", "reps": "15-20", "note": "跪姿俯卧撑 — 增加次数，挑战肌耐力" },
          { "tag": "bw_squat", "sets": "3", "reps": "12-15", "note": "自重深蹲 — 每组比上次多蹲一个" },
          { "tag": "core_01", "sets": "3", "reps": "45秒", "note": "平板支撑 — 目标是标准姿势45秒无塌腰" },
          { "tag": "bw_glute_bridge", "sets": "3", "reps": "20", "note": "臀桥 — 顶峰收缩3秒，核心与臀部协同发力" },
          { "tag": "bw_dead_hang", "sets": "2", "reps": "35秒", "note": "死挂 — 训练收尾，脊柱完全减压" }
        ],
        "focus_en": "Full Body Strength + Posture Integration"
      },
      { "day": 5, "rest": true, "focus_en": "" },
      {
        "day": 6,
        "focus": "核心 + 活动度强化",
        "warmup": "5分钟：死虫式10次/侧 + 猫牛式10次 + 臀桥15次",
        "exercises": [
          { "tag": "core_01", "sets": "4", "reps": "45-60秒", "note": "平板支撑 — Level 2 终极挑战：60秒标准支撑" },
          { "tag": "bw_bird_dog", "sets": "3", "reps": "12/侧（慢速）", "note": "鸟狗式 — 缓慢控制，核心完全稳定" },
          { "tag": "bw_lunge", "sets": "3", "reps": "10/侧（慢速）", "note": "弓步蹲 — 底部停顿3秒，提高髋关节活动度" },
          { "tag": "arms_07", "sets": "3", "reps": "12-15", "note": "板凳臂屈伸 — 椅边或沙发边即可，强化手臂" }
        ],
        "focus_en": "Core + Mobility Enhancement"
      },
      { "day": 7, "rest": true, "focus_en": "" }
    ]
  },

  // ==========================================================
  // LEVEL 3 — Strengthen（力量巩固）· Weeks 5-6
  // ==========================================================
  {
    "id": "desk_warrior_l3",
    "name": "久坐战士 L3：巩固（5-6周）",
    "name_en": "Desk Warrior L3: Strengthen (Weeks 5-6)",
    "desc": "进入稳固期。标准俯卧撑、悬挂举腿、动态核心——你已经从久坐伏案变成了站立挺拔的战士。这套训练可以长期循环使用。",
    "difficulty": "中高级",
    "days_per_week": 4,
    "source": "IronLog Premium — Desk Warrior Program",
    "color": "#FF6B6B",
    "premium": true,
    "price": "$9.99",
    "program": "desk_warrior",
    "level": 3,
    "level_name": "Strengthen（巩固）",
    "duration": "长期循环",
    "level_desc": "Level 3 进入稳固期。标准俯卧撑、悬挂举腿、30分钟高效全身训练，助你维持理想体态。这套训练可作为长期日常维护方案循环使用。",
    "level_desc_en": "Level 3 enters the consolidation phase. Standard pushups, hanging leg raises, 30-min efficient full-body sessions. This routine can be cycled indefinitely as a daily posture maintenance protocol.",
    "days": [
      {
        "day": 1,
        "focus": "推力 + 核心力量",
        "warmup": "5分钟：猫牛式10次 + 肩绕环15次 + 俯卧撑平板支撑30秒",
        "exercises": [
          { "tag": "chest_06", "sets": "3", "reps": "8-15", "note": "标准俯卧撑 — 从跪姿升级到标准俯卧撑，按自己能完成的次数" },
          { "tag": "core_01", "sets": "4", "reps": "45-60秒", "note": "平板支撑 — 每次训练比上次多坚持5秒" },
          { "tag": "arms_07", "sets": "3", "reps": "15-20", "note": "板凳臂屈伸 — 双脚放远增加难度" },
          { "tag": "bw_bird_dog", "sets": "3", "reps": "15/侧", "note": "鸟狗式 — 全力稳定核心，动作慢而精准" }
        ],
        "focus_en": "Push + Core Strength"
      },
      {
        "day": 2,
        "focus": "拉力 + 下半身",
        "warmup": "5分钟：死挂20秒 + 开合跳60秒 + 弓步走10步/侧",
        "exercises": [
          { "tag": "bw_dead_hang", "sets": "4", "reps": "40-60秒", "note": "死挂 — 目标60秒，完全放松脊柱" },
          { "tag": "bw_squat", "sets": "4", "reps": "15-20", "note": "自重深蹲 — 全程控制，底部停顿1秒" },
          { "tag": "bw_lunge", "sets": "3", "reps": "12/侧", "note": "弓步蹲 — 动态行走式，核心收紧保持平衡" },
          { "tag": "bw_glute_bridge", "sets": "4", "reps": "20", "note": "臀桥 — 单腿各10次 + 双腿10次，臀部灼烧感" }
        ],
        "focus_en": "Pull + Lower Body"
      },
      { "day": 3, "rest": true, "focus_en": "" },
      {
        "day": 4,
        "focus": "全身 HIIT + 体态耐力",
        "warmup": "5分钟：开合跳60秒 + 高抬腿30秒 + 登山者30秒 + 休息30秒",
        "exercises": [
          { "tag": "chest_06", "sets": "4", "reps": "12-18", "note": "标准俯卧撑 — 4组力竭式训练，每组做到做不动为止" },
          { "tag": "bw_squat", "sets": "4", "reps": "20", "note": "自重深蹲 — 高次数耐力训练，保持标准姿势" },
          { "tag": "core_01", "sets": "3", "reps": "60秒", "note": "平板支撑 — 满1分钟标准支撑，终极核心考验" },
          { "tag": "bw_lunge", "sets": "3", "reps": "15/侧", "note": "弓步跳 — 跳跃式交替弓步，提高心率和协调性" },
          { "tag": "bw_glute_bridge", "sets": "3", "reps": "20", "note": "臀桥 — 顶峰收缩3秒，收尾燃烧臀部" }
        ],
        "focus_en": "Full Body HIIT + Posture Endurance"
      },
      { "day": 5, "rest": true, "focus_en": "" },
      {
        "day": 6,
        "focus": "体态维护 + 灵活度",
        "warmup": "5分钟：猫牛式15次 + 胸椎旋转各10次 + 髋绕环各10次",
        "exercises": [
          { "tag": "bw_dead_hang", "sets": "3", "reps": "45-60秒", "note": "死挂 — 脊柱减压是久坐人群的每日必需品" },
          { "tag": "core_01", "sets": "3", "reps": "45-60秒", "note": "平板支撑 — 维持核心耐力" },
          { "tag": "bw_bird_dog", "sets": "3", "reps": "12/侧", "note": "鸟狗式 — 慢速精准控制，训练核心稳定性" },
          { "tag": "bw_glute_bridge", "sets": "2", "reps": "15", "note": "臀桥 — 激活臀部，为一天的好体态做准备" }
        ],
        "focus_en": "Posture Maintenance + Mobility"
      },
      { "day": 7, "rest": true, "focus_en": "" }
    ]
  }
];
