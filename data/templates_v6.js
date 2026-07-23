var WORKOUT_TEMPLATES = [
  {
    "id": "ppl_6day",
    "name": "PPL 推拉腿（6天版）",
    "name_en": "PPL 6-Day Split",
    "desc": "Reddit r/Fitness 经典推荐。推/拉/腿循环，每周每个肌群两次刺激，增肌黄金模板。",
    "difficulty": "中级",
    "days_per_week": 6,
    "source": "Reddit r/Fitness PPL by Metallicadpa",
    "color": "#ff6b6b",
    "days": [
      {
        "day": 1,
        "focus": "推（胸+肩+三头）",
        "warmup": "5分钟关节活动 + 空杆卧推2组热身",
        "exercises": [
          {
            "tag": "chest_01",
            "sets": "5",
            "reps": "5",
            "note": "大重量，最后一组AMRAP"
          },
          {
            "tag": "chest_02",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "chest_03",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "shoulder_01",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "shoulder_03",
            "sets": "3",
            "reps": "15-20",
            "note": "控制离心"
          },
          {
            "tag": "arms_06",
            "sets": "3",
            "reps": "12-15",
            "note": "超级组"
          },
          {
            "tag": "arms_07",
            "sets": "3",
            "reps": "12-15",
            "note": "超级组"
          }
        ],
        "focus_en": "Push (Chest + Shoulders + Triceps)"
      },
      {
        "day": 2,
        "focus": "拉（背+二头）",
        "warmup": "5分钟肩胛激活 + 弹力带热身",
        "exercises": [
          {
            "tag": "back_06",
            "sets": "1",
            "reps": "5+",
            "note": "大重量，做1组力竭组"
          },
          {
            "tag": "back_03",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "back_02",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "back_05",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "arms_01",
            "sets": "4",
            "reps": "10-12",
            "note": "超级组"
          },
          {
            "tag": "shoulder_05",
            "sets": "4",
            "reps": "15-20",
            "note": "超级组，后束优先"
          }
        ],
        "focus_en": "Pull (Back + Biceps)"
      },
      {
        "day": 3,
        "focus": "腿（股四+腘绳+小腿）",
        "warmup": "5分钟动态拉伸 + 空杆深蹲热身",
        "exercises": [
          {
            "tag": "legs_01",
            "sets": "3",
            "reps": "5",
            "note": "大重量"
          },
          {
            "tag": "legs_07",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "legs_03",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "legs_05",
            "sets": "3",
            "reps": "12-15",
            "note": ""
          },
          {
            "tag": "legs_06",
            "sets": "3",
            "reps": "12-15",
            "note": ""
          },
          {
            "tag": "legs_08",
            "sets": "5",
            "reps": "15-20",
            "note": "超级组，全程控制"
          }
        ],
        "focus_en": "Legs (Quads + Hamstrings + Calves)"
      },
      {
        "day": 4,
        "focus": "推（胸+肩+三头）",
        "warmup": "同第1天",
        "exercises": [
          {
            "tag": "chest_02",
            "sets": "3",
            "reps": "10-12",
            "note": "哑铃，感受收缩"
          },
          {
            "tag": "chest_03",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "chest_05",
            "sets": "3",
            "reps": "15-20",
            "note": "慢速离心"
          },
          {
            "tag": "shoulder_02",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "shoulder_08",
            "sets": "3",
            "reps": "15-20",
            "note": ""
          },
          {
            "tag": "arms_08",
            "sets": "3",
            "reps": "8-12",
            "note": "超级组"
          },
          {
            "tag": "arms_09",
            "sets": "3",
            "reps": "12-15",
            "note": "超级组"
          }
        ],
        "focus_en": "Push (Chest + Shoulders + Triceps)"
      },
      {
        "day": 5,
        "focus": "拉（背+二头）",
        "warmup": "同第2天",
        "exercises": [
          {
            "tag": "back_01",
            "sets": "3",
            "reps": "8-12",
            "note": "可负重"
          },
          {
            "tag": "back_08",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "back_04",
            "sets": "3",
            "reps": "10-15",
            "note": "每侧"
          },
          {
            "tag": "back_07",
            "sets": "3",
            "reps": "12-15",
            "note": ""
          },
          {
            "tag": "shoulder_05",
            "sets": "4",
            "reps": "15-20",
            "note": "后束"
          },
          {
            "tag": "arms_03",
            "sets": "4",
            "reps": "10-15",
            "note": "控制离心"
          }
        ],
        "focus_en": "Pull (Back + Biceps)"
      },
      {
        "day": 6,
        "focus": "腿（深蹲+臀+小腿）",
        "warmup": "同第3天",
        "exercises": [
          {
            "tag": "legs_01",
            "sets": "3",
            "reps": "6-8",
            "note": "中等重量，控速"
          },
          {
            "tag": "legs_09",
            "sets": "3",
            "reps": "10-15",
            "note": ""
          },
          {
            "tag": "legs_10",
            "sets": "3",
            "reps": "8-12",
            "note": "每侧"
          },
          {
            "tag": "legs_04",
            "sets": "3",
            "reps": "10-12",
            "note": ""
          },
          {
            "tag": "legs_05",
            "sets": "3",
            "reps": "15-20",
            "note": ""
          },
          {
            "tag": "legs_06",
            "sets": "3",
            "reps": "15-20",
            "note": ""
          },
          {
            "tag": "legs_08",
            "sets": "5",
            "reps": "15-20",
            "note": ""
          }
        ],
        "focus_en": "Legs (Squat + Glutes + Calves)"
      },
      {
        "day": 7,
        "focus": "休息",
        "rest": true,
        "focus_en": "Rest"
      }
    ],
    "desc_en": "Reddit r/Fitness classic. Push/Pull/Legs rotation, each muscle group hit twice per week — the gold standard for hypertrophy."
  },
  {
    "id": "upper_lower_4day",
    "name": "上下肢分化（4天版）",
    "name_en": "Upper/Lower 4-Day",
    "desc": "上半身/下半身交替，每周每个肌群2次刺激。适合时间有限但想高效增肌的中级训练者。",
    "difficulty": "中级",
    "days_per_week": 4,
    "source": "PHUL / Lyle McDonald Generic Bulking Routine",
    "color": "#4ecdc4",
    "days": [
      {
        "day": 1,
        "focus": "上肢力量日",
        "warmup": "5分钟肩胛+肘关节激活",
        "exercises": [
          {
            "tag": "chest_01",
            "sets": "4",
            "reps": "5",
            "note": "大重量"
          },
          {
            "tag": "back_03",
            "sets": "4",
            "reps": "5",
            "note": "大重量"
          },
          {
            "tag": "shoulder_01",
            "sets": "3",
            "reps": "6-8",
            "note": ""
          },
          {
            "tag": "back_02",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "arms_01",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "arms_06",
            "sets": "3",
            "reps": "10-15",
            "note": ""
          }
        ],
        "focus_en": "Upper Body - Strength"
      },
      {
        "day": 2,
        "focus": "下肢力量日",
        "warmup": "5分钟动态拉伸 + 空杆热身",
        "exercises": [
          {
            "tag": "legs_01",
            "sets": "4",
            "reps": "5",
            "note": "大重量"
          },
          {
            "tag": "legs_06",
            "sets": "3",
            "reps": "6-8",
            "note": "大重量"
          },
          {
            "tag": "legs_03",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "legs_05",
            "sets": "3",
            "reps": "12-15",
            "note": ""
          },
          {
            "tag": "legs_08",
            "sets": "4",
            "reps": "15-20",
            "note": ""
          },
          {
            "tag": "core_01",
            "sets": "3",
            "reps": "30-60秒",
            "note": ""
          }
        ],
        "focus_en": "Lower Body - Strength"
      },
      {
        "day": 3,
        "focus": "上肢增肌日",
        "warmup": "同第1天",
        "exercises": [
          {
            "tag": "chest_02",
            "sets": "3",
            "reps": "10-12",
            "note": "感受收缩"
          },
          {
            "tag": "chest_05",
            "sets": "3",
            "reps": "15-20",
            "note": ""
          },
          {
            "tag": "shoulder_03",
            "sets": "4",
            "reps": "15-20",
            "note": "控制离心"
          },
          {
            "tag": "back_05",
            "sets": "3",
            "reps": "12-15",
            "note": ""
          },
          {
            "tag": "arms_04",
            "sets": "3",
            "reps": "12-15",
            "note": ""
          },
          {
            "tag": "arms_07",
            "sets": "3",
            "reps": "12-15",
            "note": ""
          },
          {
            "tag": "shoulder_05",
            "sets": "3",
            "reps": "15-20",
            "note": ""
          }
        ],
        "focus_en": "Upper Body - Hypertrophy"
      },
      {
        "day": 4,
        "focus": "下肢增肌日",
        "warmup": "同第2天",
        "exercises": [
          {
            "tag": "legs_02",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "legs_07",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "legs_04",
            "sets": "3",
            "reps": "10-15",
            "note": ""
          },
          {
            "tag": "legs_10",
            "sets": "3",
            "reps": "10-12",
            "note": "每侧"
          },
          {
            "tag": "legs_05",
            "sets": "4",
            "reps": "15-20",
            "note": "超级组"
          },
          {
            "tag": "legs_06",
            "sets": "4",
            "reps": "15-20",
            "note": "超级组"
          },
          {
            "tag": "core_02",
            "sets": "3",
            "reps": "20-25",
            "note": ""
          }
        ],
        "focus_en": "Lower Body - Hypertrophy"
      },
      {
        "day": 5,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 6,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 7,
        "rest": true,
        "focus_en": ""
      }
    ],
    "desc_en": "Upper/Lower alternating split, each muscle group trained twice weekly. Ideal for intermediate lifters with limited time."
  },
  {
    "id": "fullbody_3day",
    "name": "全身训练（3天版）",
    "name_en": "Full Body 3-Day",
    "desc": "每次训练覆盖全身。适合新手入门、恢复期训练、或时间紧张的老手维持。效率最高。",
    "difficulty": "初级",
    "days_per_week": 3,
    "source": "Starting Strength / StrongLifts 改编",
    "color": "#45b7d1",
    "days": [
      {
        "day": 1,
        "focus": "全身 A",
        "warmup": "5分钟全身动态拉伸",
        "exercises": [
          {
            "tag": "legs_01",
            "sets": "3",
            "reps": "5",
            "note": "核心动作，大重量"
          },
          {
            "tag": "chest_01",
            "sets": "3",
            "reps": "5",
            "note": ""
          },
          {
            "tag": "back_03",
            "sets": "3",
            "reps": "5",
            "note": ""
          },
          {
            "tag": "shoulder_01",
            "sets": "3",
            "reps": "8",
            "note": ""
          },
          {
            "tag": "arms_01",
            "sets": "2",
            "reps": "10-12",
            "note": ""
          },
          {
            "tag": "core_01",
            "sets": "2",
            "reps": "30-60秒",
            "note": ""
          }
        ],
        "focus_en": "Full Body A"
      },
      {
        "day": 2,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 3,
        "focus": "全身 B",
        "warmup": "同全身A",
        "exercises": [
          {
            "tag": "back_06",
            "sets": "1",
            "reps": "5",
            "note": "大重量"
          },
          {
            "tag": "legs_01",
            "sets": "3",
            "reps": "5",
            "note": ""
          },
          {
            "tag": "chest_02",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "back_01",
            "sets": "3",
            "reps": "8-12",
            "note": "可负重"
          },
          {
            "tag": "arms_06",
            "sets": "2",
            "reps": "10-15",
            "note": ""
          },
          {
            "tag": "core_03",
            "sets": "2",
            "reps": "10-15",
            "note": ""
          }
        ],
        "focus_en": "Full Body B"
      },
      {
        "day": 4,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 5,
        "focus": "全身 C",
        "warmup": "同全身A",
        "exercises": [
          {
            "tag": "chest_01",
            "sets": "3",
            "reps": "5",
            "note": "最后AMRAP"
          },
          {
            "tag": "legs_02",
            "sets": "3",
            "reps": "6-8",
            "note": ""
          },
          {
            "tag": "back_03",
            "sets": "3",
            "reps": "5",
            "note": ""
          },
          {
            "tag": "shoulder_03",
            "sets": "3",
            "reps": "12-15",
            "note": ""
          },
          {
            "tag": "legs_08",
            "sets": "3",
            "reps": "15-20",
            "note": ""
          },
          {
            "tag": "core_04",
            "sets": "2",
            "reps": "20",
            "note": "每侧"
          }
        ],
        "focus_en": "Full Body C"
      },
      {
        "day": 6,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 7,
        "rest": true,
        "focus_en": ""
      }
    ],
    "desc_en": "Full-body workout 3x/week. Beginner-friendly and time-efficient — the smartest path to getting strong."
  },
  {
    "id": "bro_split_5day",
    "name": "五分化健美（5天版）",
    "name_en": "Bro Split 5-Day",
    "desc": "经典健美分化。每天专注一个肌群，容量大、泵感强。适合时间充裕、追求肌肉细节的爱好者。",
    "difficulty": "中级",
    "days_per_week": 5,
    "source": "传统健美分化训练",
    "color": "#a29bfe",
    "days": [
      {
        "day": 1,
        "focus": "胸部",
        "warmup": "5分钟胸肩激活",
        "exercises": [
          {
            "tag": "chest_01",
            "sets": "4",
            "reps": "6-10",
            "note": ""
          },
          {
            "tag": "chest_02",
            "sets": "4",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "chest_03",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "chest_05",
            "sets": "3",
            "reps": "12-15",
            "note": ""
          },
          {
            "tag": "chest_04",
            "sets": "3",
            "reps": "10-15",
            "note": ""
          },
          {
            "tag": "chest_06",
            "sets": "3",
            "reps": "AMRAP",
            "note": "收尾"
          }
        ],
        "focus_en": "Chest"
      },
      {
        "day": 2,
        "focus": "背部",
        "warmup": "5分钟肩胛激活",
        "exercises": [
          {
            "tag": "back_06",
            "sets": "3",
            "reps": "5",
            "note": ""
          },
          {
            "tag": "back_03",
            "sets": "4",
            "reps": "6-10",
            "note": ""
          },
          {
            "tag": "back_02",
            "sets": "3",
            "reps": "10-12",
            "note": ""
          },
          {
            "tag": "back_05",
            "sets": "3",
            "reps": "10-12",
            "note": ""
          },
          {
            "tag": "back_04",
            "sets": "3",
            "reps": "12-15",
            "note": "每侧"
          },
          {
            "tag": "back_08",
            "sets": "3",
            "reps": "10-12",
            "note": ""
          }
        ],
        "focus_en": "Back"
      },
      {
        "day": 3,
        "focus": "肩部",
        "warmup": "5分钟肩袖热身",
        "exercises": [
          {
            "tag": "shoulder_01",
            "sets": "4",
            "reps": "6-10",
            "note": ""
          },
          {
            "tag": "shoulder_02",
            "sets": "3",
            "reps": "10-12",
            "note": ""
          },
          {
            "tag": "shoulder_03",
            "sets": "4",
            "reps": "15-20",
            "note": "核心动作"
          },
          {
            "tag": "shoulder_04",
            "sets": "3",
            "reps": "12-15",
            "note": ""
          },
          {
            "tag": "shoulder_05",
            "sets": "4",
            "reps": "15-20",
            "note": "后束优先"
          },
          {
            "tag": "shoulder_06",
            "sets": "3",
            "reps": "10-12",
            "note": ""
          }
        ],
        "focus_en": "Shoulders"
      },
      {
        "day": 4,
        "focus": "腿部",
        "warmup": "5分钟动态拉伸 + 空杆热身",
        "exercises": [
          {
            "tag": "legs_01",
            "sets": "4",
            "reps": "6-10",
            "note": ""
          },
          {
            "tag": "legs_03",
            "sets": "4",
            "reps": "10-12",
            "note": ""
          },
          {
            "tag": "legs_07",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "legs_04",
            "sets": "3",
            "reps": "10-15",
            "note": ""
          },
          {
            "tag": "legs_05",
            "sets": "4",
            "reps": "15-20",
            "note": ""
          },
          {
            "tag": "legs_06",
            "sets": "4",
            "reps": "15-20",
            "note": ""
          },
          {
            "tag": "legs_08",
            "sets": "5",
            "reps": "15-20",
            "note": ""
          }
        ],
        "focus_en": "Legs"
      },
      {
        "day": 5,
        "focus": "手臂",
        "warmup": "3分钟肘腕活动",
        "exercises": [
          {
            "tag": "arms_01",
            "sets": "4",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "arms_06",
            "sets": "4",
            "reps": "10-15",
            "note": ""
          },
          {
            "tag": "arms_02",
            "sets": "3",
            "reps": "10-12",
            "note": ""
          },
          {
            "tag": "arms_07",
            "sets": "3",
            "reps": "10-15",
            "note": ""
          },
          {
            "tag": "arms_05",
            "sets": "3",
            "reps": "12-15",
            "note": "顶峰收缩"
          },
          {
            "tag": "arms_08",
            "sets": "3",
            "reps": "10-15",
            "note": ""
          }
        ],
        "focus_en": "Arms"
      },
      {
        "day": 6,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 7,
        "rest": true,
        "focus_en": ""
      }
    ],
    "desc_en": "Classic bodybuilding split — one muscle group per day, maximum volume and pump. The old-school way to build mass."
  },
  {
    "id": "phul_4day",
    "name": "PHUL 力量+增肌（4天版）",
    "name_en": "PHUL Power+Hypertrophy",
    "desc": "前2天力量（大重量低次数）+ 后2天增肌（中等重量高次数）。力量与维度兼得。",
    "difficulty": "中高级",
    "days_per_week": 4,
    "source": "PHUL by Brandon Campbell",
    "color": "#fd79a8",
    "days": [
      {
        "day": 1,
        "focus": "上肢力量",
        "warmup": "5分钟关节激活 + 递增热身组",
        "exercises": [
          {
            "tag": "chest_01",
            "sets": "4",
            "reps": "3-5",
            "note": "力量优先"
          },
          {
            "tag": "back_03",
            "sets": "4",
            "reps": "3-5",
            "note": ""
          },
          {
            "tag": "shoulder_01",
            "sets": "3",
            "reps": "5-8",
            "note": ""
          },
          {
            "tag": "back_02",
            "sets": "3",
            "reps": "6-10",
            "note": ""
          },
          {
            "tag": "arms_01",
            "sets": "3",
            "reps": "6-10",
            "note": ""
          },
          {
            "tag": "arms_08",
            "sets": "3",
            "reps": "6-10",
            "note": ""
          }
        ],
        "focus_en": "Upper Body - Strength"
      },
      {
        "day": 2,
        "focus": "下肢力量",
        "warmup": "5分钟动态拉伸",
        "exercises": [
          {
            "tag": "legs_01",
            "sets": "4",
            "reps": "3-5",
            "note": "力量优先"
          },
          {
            "tag": "back_06",
            "sets": "3",
            "reps": "3-5",
            "note": ""
          },
          {
            "tag": "legs_03",
            "sets": "4",
            "reps": "6-10",
            "note": ""
          },
          {
            "tag": "legs_06",
            "sets": "3",
            "reps": "6-10",
            "note": ""
          },
          {
            "tag": "legs_08",
            "sets": "4",
            "reps": "8-12",
            "note": ""
          }
        ],
        "focus_en": "Lower Body - Strength"
      },
      {
        "day": 3,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 4,
        "focus": "上肢增肌",
        "warmup": "同第1天",
        "exercises": [
          {
            "tag": "chest_02",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "chest_05",
            "sets": "3",
            "reps": "12-15",
            "note": ""
          },
          {
            "tag": "back_05",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "back_04",
            "sets": "3",
            "reps": "10-15",
            "note": "每侧"
          },
          {
            "tag": "shoulder_03",
            "sets": "4",
            "reps": "15-20",
            "note": ""
          },
          {
            "tag": "shoulder_05",
            "sets": "3",
            "reps": "15-20",
            "note": ""
          },
          {
            "tag": "arms_03",
            "sets": "3",
            "reps": "12-15",
            "note": "超级组"
          },
          {
            "tag": "arms_06",
            "sets": "3",
            "reps": "12-15",
            "note": "超级组"
          }
        ],
        "focus_en": "Upper Body - Hypertrophy"
      },
      {
        "day": 5,
        "focus": "下肢增肌",
        "warmup": "同第2天",
        "exercises": [
          {
            "tag": "legs_02",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "legs_07",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "legs_04",
            "sets": "3",
            "reps": "10-15",
            "note": ""
          },
          {
            "tag": "legs_05",
            "sets": "4",
            "reps": "15-20",
            "note": "超级组"
          },
          {
            "tag": "legs_06",
            "sets": "4",
            "reps": "15-20",
            "note": "超级组"
          },
          {
            "tag": "core_02",
            "sets": "3",
            "reps": "20-25",
            "note": ""
          },
          {
            "tag": "legs_08",
            "sets": "4",
            "reps": "15-20",
            "note": ""
          }
        ],
        "focus_en": "Lower Body - Hypertrophy"
      },
      {
        "day": 6,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 7,
        "rest": true,
        "focus_en": ""
      }
    ],
    "desc_en": "Power/Hypertrophy Upper/Lower. Combines strength-focused work with high-volume hypertrophy for balanced gains."
  },
  {
    "id": "beginner_3day",
    "name": "新手入门（3天版）",
    "name_en": "Beginner 3-Day",
    "desc": "最简练的基础课表。只做最核心的复合动作，每次训练45分钟。适合零基础新手建立力量根基。",
    "difficulty": "初级",
    "days_per_week": 3,
    "source": "Starting Strength 简化版",
    "color": "#00b894",
    "days": [
      {
        "day": 1,
        "focus": "训练A",
        "exercises": [
          {
            "tag": "legs_01",
            "sets": "3",
            "reps": "5",
            "note": "核心"
          },
          {
            "tag": "chest_01",
            "sets": "3",
            "reps": "5",
            "note": ""
          },
          {
            "tag": "back_06",
            "sets": "1",
            "reps": "5",
            "note": ""
          }
        ],
        "focus_en": "Workout A"
      },
      {
        "day": 2,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 3,
        "focus": "训练B",
        "exercises": [
          {
            "tag": "legs_01",
            "sets": "3",
            "reps": "5",
            "note": ""
          },
          {
            "tag": "shoulder_01",
            "sets": "3",
            "reps": "5",
            "note": ""
          },
          {
            "tag": "back_06",
            "sets": "1",
            "reps": "5",
            "note": ""
          }
        ],
        "focus_en": "Workout B"
      },
      {
        "day": 4,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 5,
        "focus": "训练A（重复）",
        "exercises": [
          {
            "tag": "legs_01",
            "sets": "3",
            "reps": "5",
            "note": "比上次+2.5kg"
          },
          {
            "tag": "chest_01",
            "sets": "3",
            "reps": "5",
            "note": "比上次+2.5kg"
          },
          {
            "tag": "back_06",
            "sets": "1",
            "reps": "5",
            "note": "比上次+5kg"
          }
        ],
        "focus_en": "Workout A (Repeat)"
      },
      {
        "day": 6,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 7,
        "rest": true,
        "focus_en": ""
      }
    ],
    "desc_en": "Minimalist beginner program. Only the most essential compound lifts, 45 minutes per session. Build your strength foundation."
  },
  {
    "id": "bodyweight_anytime",
    "name": "家庭徒手训练",
    "name_en": "Home Bodyweight",
    "desc": "0器械，在家就能练。适合出差、居家、或不想去健身房的日子。全身循环，燃脂+塑形。",
    "difficulty": "初级",
    "days_per_week": 3,
    "source": "r/bodyweightfitness Recommended Routine 简化",
    "color": "#55efc4",
    "days": [
      {
        "day": 1,
        "focus": "全身徒手 A",
        "exercises": [
          {
            "tag": "chest_06",
            "sets": "3",
            "reps": "8-15",
            "note": ""
          },
          {
            "tag": "chest_07",
            "sets": "3",
            "reps": "5-10",
            "note": "椅子辅助"
          },
          {
            "tag": "back_01",
            "sets": "3",
            "reps": "5-10",
            "note": "弹力带辅助"
          },
          {
            "tag": "core_01",
            "sets": "3",
            "reps": "10-15",
            "note": "每侧"
          },
          {
            "tag": "core_02",
            "sets": "3",
            "reps": "10-12",
            "note": "每侧"
          },
          {
            "tag": "core_01",
            "sets": "3",
            "reps": "30-60秒",
            "note": ""
          },
          {
            "tag": "cond_01",
            "sets": "3",
            "reps": "10-15",
            "note": "收尾"
          }
        ],
        "focus_en": "Bodyweight A"
      },
      {
        "day": 2,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 3,
        "focus": "全身徒手 B",
        "exercises": [
          {
            "tag": "arms_09",
            "sets": "3",
            "reps": "8-15",
            "note": ""
          },
          {
            "tag": "chest_07",
            "sets": "3",
            "reps": "8-15",
            "note": ""
          },
          {
            "tag": "legs_12",
            "sets": "3",
            "reps": "15-20",
            "note": ""
          },
          {
            "tag": "core_02",
            "sets": "3",
            "reps": "20-25",
            "note": ""
          },
          {
            "tag": "cond_02",
            "sets": "3",
            "reps": "20-30",
            "note": ""
          },
          {
            "tag": "core_04",
            "sets": "3",
            "reps": "20",
            "note": "每侧"
          }
        ],
        "focus_en": "Bodyweight B"
      },
      {
        "day": 4,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 5,
        "focus": "全身徒手 C",
        "exercises": [
          {
            "tag": "chest_06",
            "sets": "4",
            "reps": "10-20",
            "note": "变式：宽距"
          },
          {
            "tag": "back_01",
            "sets": "4",
            "reps": "6-10",
            "note": ""
          },
          {
            "tag": "core_01",
            "sets": "3",
            "reps": "12-15",
            "note": "每侧"
          },
          {
            "tag": "cond_01",
            "sets": "4",
            "reps": "12-15",
            "note": ""
          },
          {
            "tag": "core_03",
            "sets": "3",
            "reps": "10-15",
            "note": ""
          },
          {
            "tag": "cond_02",
            "sets": "3",
            "reps": "30-45秒",
            "note": "可用背包加重"
          }
        ],
        "focus_en": "Bodyweight C"
      },
      {
        "day": 6,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 7,
        "rest": true,
        "focus_en": ""
      }
    ],
    "desc_en": "Zero equipment, anywhere. Calisthenics circuits and bodyweight progressions. Perfect for travel, home, or lazy days."
  },
  {
    "id": "dumbbell_home",
    "name": "哑铃居家训练（4天版）",
    "name_en": "Dumbbell Home 4-Day",
    "desc": "只需一对可调哑铃。上下肢分化，在家完全替代健身房。适合家庭健身空间有限的用户。",
    "difficulty": "初级",
    "days_per_week": 4,
    "source": "Reddit Dumbbell Stopgap PPL 改编",
    "color": "#fdcb6e",
    "days": [
      {
        "day": 1,
        "focus": "上肢推（胸+肩+三头）",
        "exercises": [
          {
            "tag": "chest_02",
            "sets": "4",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "shoulder_02",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "chest_04",
            "sets": "3",
            "reps": "10-15",
            "note": ""
          },
          {
            "tag": "shoulder_03",
            "sets": "4",
            "reps": "15-20",
            "note": ""
          },
          {
            "tag": "arms_07",
            "sets": "3",
            "reps": "10-15",
            "note": ""
          },
          {
            "tag": "arms_09",
            "sets": "3",
            "reps": "10-20",
            "note": ""
          }
        ],
        "focus_en": "Upper Push (Chest + Shoulders + Triceps)"
      },
      {
        "day": 2,
        "focus": "下肢（腿+臀）",
        "exercises": [
          {
            "tag": "legs_11",
            "sets": "4",
            "reps": "8-15",
            "note": "用哑铃做"
          },
          {
            "tag": "legs_07",
            "sets": "3",
            "reps": "8-12",
            "note": "哑铃罗马尼亚硬拉"
          },
          {
            "tag": "legs_10",
            "sets": "3",
            "reps": "8-12",
            "note": "每侧，拿哑铃"
          },
          {
            "tag": "legs_04",
            "sets": "3",
            "reps": "10-12",
            "note": "每侧"
          },
          {
            "tag": "core_01",
            "sets": "3",
            "reps": "40-60秒",
            "note": ""
          }
        ],
        "focus_en": "Lower Body (Legs + Glutes)"
      },
      {
        "day": 3,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 4,
        "focus": "上肢拉（背+二头+后束）",
        "exercises": [
          {
            "tag": "back_04",
            "sets": "4",
            "reps": "8-12",
            "note": "每侧"
          },
          {
            "tag": "shoulder_05",
            "sets": "4",
            "reps": "15-20",
            "note": ""
          },
          {
            "tag": "arms_02",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "arms_04",
            "sets": "3",
            "reps": "12-15",
            "note": ""
          },
          {
            "tag": "arms_05",
            "sets": "3",
            "reps": "12-15",
            "note": ""
          }
        ],
        "focus_en": "Upper Pull (Back + Biceps + Rear Delts)"
      },
      {
        "day": 5,
        "focus": "全身+核心",
        "exercises": [
          {
            "tag": "cond_03",
            "sets": "4",
            "reps": "15-20",
            "note": "用哑铃做"
          },
          {
            "tag": "chest_06",
            "sets": "3",
            "reps": "10-15",
            "note": ""
          },
          {
            "tag": "core_02",
            "sets": "3",
            "reps": "20-25",
            "note": ""
          },
          {
            "tag": "core_04",
            "sets": "3",
            "reps": "20",
            "note": "每侧"
          },
          {
            "tag": "cond_01",
            "sets": "3",
            "reps": "10-15",
            "note": "收尾"
          }
        ],
        "focus_en": "Full Body + Core"
      },
      {
        "day": 6,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 7,
        "rest": true,
        "focus_en": ""
      }
    ],
    "desc_en": "All you need is a pair of adjustable dumbbells. Upper/lower split, full gym replacement for home workouts."
  },
  {
    "id": "glute_focus",
    "name": "翘臀专项（4天版）",
    "name_en": "Glute Focus 4-Day",
    "desc": "下肢主导，髋铰链+臀推为核心。每个下肢日都从臀部激活开始。适合臀部训练有需求的用户。",
    "difficulty": "中级",
    "days_per_week": 4,
    "source": "Bret Contreras 臀部训练理论改编",
    "color": "#e17055",
    "days": [
      {
        "day": 1,
        "focus": "下肢A（深蹲+臀）",
        "exercises": [
          {
            "tag": "legs_01",
            "sets": "4",
            "reps": "6-10",
            "note": ""
          },
          {
            "tag": "legs_09",
            "sets": "4",
            "reps": "10-15",
            "note": "核心动作"
          },
          {
            "tag": "legs_07",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "legs_10",
            "sets": "3",
            "reps": "10-12",
            "note": "每侧"
          },
          {
            "tag": "legs_05",
            "sets": "3",
            "reps": "15-20",
            "note": ""
          }
        ],
        "focus_en": "Lower A (Squat + Glutes)"
      },
      {
        "day": 2,
        "focus": "上肢推（保持平衡）",
        "exercises": [
          {
            "tag": "shoulder_02",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "chest_02",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "shoulder_03",
            "sets": "3",
            "reps": "15-20",
            "note": ""
          },
          {
            "tag": "arms_06",
            "sets": "3",
            "reps": "12-15",
            "note": ""
          },
          {
            "tag": "arms_01",
            "sets": "3",
            "reps": "10-12",
            "note": ""
          }
        ],
        "focus_en": "Upper Push (Balance)"
      },
      {
        "day": 3,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 4,
        "focus": "下肢B（硬拉+臀）",
        "exercises": [
          {
            "tag": "back_06",
            "sets": "3",
            "reps": "5-8",
            "note": ""
          },
          {
            "tag": "legs_12",
            "sets": "4",
            "reps": "12-20",
            "note": "顶峰收缩2秒"
          },
          {
            "tag": "legs_03",
            "sets": "3",
            "reps": "10-15",
            "note": ""
          },
          {
            "tag": "legs_04",
            "sets": "3",
            "reps": "10-15",
            "note": "每侧"
          },
          {
            "tag": "legs_06",
            "sets": "4",
            "reps": "15-20",
            "note": ""
          }
        ],
        "focus_en": "Lower B (Deadlift + Glutes)"
      },
      {
        "day": 5,
        "focus": "上肢拉+核心",
        "exercises": [
          {
            "tag": "back_02",
            "sets": "3",
            "reps": "10-12",
            "note": ""
          },
          {
            "tag": "back_05",
            "sets": "3",
            "reps": "10-12",
            "note": ""
          },
          {
            "tag": "shoulder_05",
            "sets": "3",
            "reps": "15-20",
            "note": ""
          },
          {
            "tag": "core_01",
            "sets": "3",
            "reps": "45-60秒",
            "note": ""
          },
          {
            "tag": "core_03",
            "sets": "3",
            "reps": "10-15",
            "note": ""
          }
        ],
        "focus_en": "Upper Pull + Core"
      },
      {
        "day": 6,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 7,
        "rest": true,
        "focus_en": ""
      }
    ],
    "desc_en": "Lower-body dominant split built around hip hinges and glute bridges. Every leg day starts with glute activation."
  },
  {
    "id": "arnold_split",
    "name": "阿诺德分化（6天版）",
    "name_en": "Arnold Split 6-Day",
    "desc": "施瓦辛格经典：胸+背 / 肩+臂 / 腿，循环两次。拮抗肌超级组，效率极高。",
    "difficulty": "高级",
    "days_per_week": 6,
    "source": "Arnold Schwarzenegger 训练法",
    "color": "#6c5ce7",
    "days": [
      {
        "day": 1,
        "focus": "胸+背 A",
        "exercises": [
          {
            "tag": "chest_01",
            "sets": "4",
            "reps": "6-10",
            "note": "超级组"
          },
          {
            "tag": "back_01",
            "sets": "4",
            "reps": "6-10",
            "note": "超级组"
          },
          {
            "tag": "chest_02",
            "sets": "3",
            "reps": "8-12",
            "note": "超级组"
          },
          {
            "tag": "back_03",
            "sets": "3",
            "reps": "8-12",
            "note": "超级组"
          },
          {
            "tag": "chest_05",
            "sets": "3",
            "reps": "12-15",
            "note": ""
          },
          {
            "tag": "back_05",
            "sets": "3",
            "reps": "10-12",
            "note": ""
          }
        ],
        "focus_en": "Chest + Back A"
      },
      {
        "day": 2,
        "focus": "肩+臂 A",
        "exercises": [
          {
            "tag": "shoulder_01",
            "sets": "4",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "shoulder_03",
            "sets": "4",
            "reps": "15-20",
            "note": ""
          },
          {
            "tag": "shoulder_07",
            "sets": "3",
            "reps": "10-15",
            "note": ""
          },
          {
            "tag": "arms_01",
            "sets": "4",
            "reps": "8-12",
            "note": "超级组"
          },
          {
            "tag": "arms_06",
            "sets": "4",
            "reps": "10-15",
            "note": "超级组"
          },
          {
            "tag": "arms_02",
            "sets": "3",
            "reps": "10-12",
            "note": ""
          }
        ],
        "focus_en": "Shoulders + Arms A"
      },
      {
        "day": 3,
        "focus": "腿 A",
        "exercises": [
          {
            "tag": "legs_01",
            "sets": "5",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "legs_03",
            "sets": "4",
            "reps": "10-15",
            "note": ""
          },
          {
            "tag": "legs_07",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "legs_05",
            "sets": "4",
            "reps": "15-20",
            "note": "超级组"
          },
          {
            "tag": "legs_06",
            "sets": "4",
            "reps": "15-20",
            "note": "超级组"
          },
          {
            "tag": "legs_08",
            "sets": "5",
            "reps": "15-20",
            "note": ""
          }
        ],
        "focus_en": "Legs A"
      },
      {
        "day": 4,
        "focus": "胸+背 B",
        "exercises": [
          {
            "tag": "chest_03",
            "sets": "4",
            "reps": "8-12",
            "note": "超级组"
          },
          {
            "tag": "back_08",
            "sets": "4",
            "reps": "8-12",
            "note": "超级组"
          },
          {
            "tag": "chest_04",
            "sets": "3",
            "reps": "10-15",
            "note": ""
          },
          {
            "tag": "back_04",
            "sets": "3",
            "reps": "10-15",
            "note": "每侧"
          },
          {
            "tag": "chest_07",
            "sets": "3",
            "reps": "8-15",
            "note": ""
          }
        ],
        "focus_en": "Chest + Back B"
      },
      {
        "day": 5,
        "focus": "肩+臂 B",
        "exercises": [
          {
            "tag": "shoulder_02",
            "sets": "4",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "shoulder_03",
            "sets": "4",
            "reps": "15-20",
            "note": ""
          },
          {
            "tag": "shoulder_05",
            "sets": "4",
            "reps": "15-20",
            "note": ""
          },
          {
            "tag": "arms_03",
            "sets": "3",
            "reps": "12-15",
            "note": "超级组"
          },
          {
            "tag": "arms_07",
            "sets": "3",
            "reps": "10-15",
            "note": "超级组"
          }
        ],
        "focus_en": "Shoulders + Arms B"
      },
      {
        "day": 6,
        "focus": "腿 B",
        "exercises": [
          {
            "tag": "legs_02",
            "sets": "4",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "legs_11",
            "sets": "3",
            "reps": "10-15",
            "note": ""
          },
          {
            "tag": "legs_04",
            "sets": "3",
            "reps": "10-15",
            "note": "每侧"
          },
          {
            "tag": "legs_12",
            "sets": "3",
            "reps": "15-20",
            "note": ""
          },
          {
            "tag": "core_01",
            "sets": "3",
            "reps": "45-60秒",
            "note": ""
          }
        ],
        "focus_en": "Legs B"
      },
      {
        "day": 7,
        "rest": true,
        "focus_en": ""
      }
    ],
    "desc_en": "The Austrian Oak's classic: Chest+Back / Shoulders+Arms / Legs, twice per cycle. Antagonist supersets for maximum efficiency."
  },
  {
    "id": "kettlebell_3day",
    "name": "壶铃全身（3天版）",
    "name_en": "Kettlebell Full Body 3-Day",
    "desc": "只用一个壶铃。摇摆+高脚杯深蹲+土耳其起立为核心，极简高效。适合居家壶铃爱好者。",
    "difficulty": "初级",
    "days_per_week": 3,
    "source": "Simple & Sinister 改编",
    "color": "#a29bfe",
    "days": [
      {
        "day": 1,
        "focus": "壶铃A",
        "exercises": [
          {
            "tag": "cond_03",
            "sets": "5",
            "reps": "15-20",
            "note": "核心"
          },
          {
            "tag": "legs_11",
            "sets": "4",
            "reps": "10-15",
            "note": ""
          },
          {
            "tag": "back_04",
            "sets": "3",
            "reps": "10-15",
            "note": "每侧"
          },
          {
            "tag": "shoulder_07",
            "sets": "3",
            "reps": "10-15",
            "note": "用壶铃"
          },
          {
            "tag": "core_04",
            "sets": "3",
            "reps": "20",
            "note": "用壶铃"
          }
        ],
        "focus_en": "Kettlebell A"
      },
      {
        "day": 2,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 3,
        "focus": "壶铃B",
        "exercises": [
          {
            "tag": "cond_03",
            "sets": "5",
            "reps": "15-20",
            "note": "单手交替"
          },
          {
            "tag": "legs_11",
            "sets": "4",
            "reps": "10-15",
            "note": ""
          },
          {
            "tag": "legs_07",
            "sets": "3",
            "reps": "10-12",
            "note": "单腿RDL"
          },
          {
            "tag": "arms_01",
            "sets": "3",
            "reps": "12-15",
            "note": "壶铃弯举"
          },
          {
            "tag": "core_02",
            "sets": "3",
            "reps": "20-25",
            "note": ""
          }
        ],
        "focus_en": "Kettlebell B"
      },
      {
        "day": 4,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 5,
        "focus": "壶铃C",
        "exercises": [
          {
            "tag": "cond_03",
            "sets": "5",
            "reps": "20-25",
            "note": "双手"
          },
          {
            "tag": "legs_10",
            "sets": "3",
            "reps": "8-12",
            "note": "每侧，持壶铃"
          },
          {
            "tag": "shoulder_02",
            "sets": "3",
            "reps": "10-12",
            "note": "用壶铃做"
          },
          {
            "tag": "cond_01",
            "sets": "3",
            "reps": "10-15",
            "note": ""
          },
          {
            "tag": "core_01",
            "sets": "3",
            "reps": "45-60秒",
            "note": ""
          }
        ],
        "focus_en": "Kettlebell C"
      },
      {
        "day": 6,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 7,
        "rest": true,
        "focus_en": ""
      }
    ],
    "desc_en": "Just one kettlebell. Swings, goblet squats, and Turkish get-ups form the core. Minimalist and effective."
  },
  {
    "id": "chest_specialization",
    "name": "胸部强化（4天版）",
    "name_en": "Chest Specialization 4-Day",
    "desc": "每周两次胸部训练，从不同角度刺激。适合想突破卧推重量或加强上胸的用户。",
    "difficulty": "中级",
    "days_per_week": 4,
    "source": "专项强化训练法",
    "color": "#ff6b6b",
    "days": [
      {
        "day": 1,
        "focus": "胸部A（力量）+肩",
        "exercises": [
          {
            "tag": "chest_01",
            "sets": "5",
            "reps": "5",
            "note": "大重量"
          },
          {
            "tag": "chest_03",
            "sets": "4",
            "reps": "8-10",
            "note": ""
          },
          {
            "tag": "chest_06",
            "sets": "3",
            "reps": "AMRAP",
            "note": "收尾"
          },
          {
            "tag": "shoulder_03",
            "sets": "4",
            "reps": "15-20",
            "note": ""
          },
          {
            "tag": "arms_06",
            "sets": "3",
            "reps": "12-15",
            "note": ""
          }
        ],
        "focus_en": "Chest A (Strength) + Shoulders"
      },
      {
        "day": 2,
        "focus": "背部+后束",
        "exercises": [
          {
            "tag": "back_03",
            "sets": "4",
            "reps": "6-10",
            "note": ""
          },
          {
            "tag": "back_02",
            "sets": "3",
            "reps": "10-12",
            "note": ""
          },
          {
            "tag": "back_05",
            "sets": "3",
            "reps": "10-12",
            "note": ""
          },
          {
            "tag": "shoulder_05",
            "sets": "4",
            "reps": "15-20",
            "note": ""
          },
          {
            "tag": "arms_04",
            "sets": "3",
            "reps": "12-15",
            "note": ""
          }
        ],
        "focus_en": "Back + Rear Delts"
      },
      {
        "day": 3,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 4,
        "focus": "胸部B（增肌）+三头",
        "exercises": [
          {
            "tag": "chest_02",
            "sets": "4",
            "reps": "10-12",
            "note": "感受收缩"
          },
          {
            "tag": "chest_04",
            "sets": "3",
            "reps": "10-15",
            "note": ""
          },
          {
            "tag": "chest_05",
            "sets": "3",
            "reps": "15-20",
            "note": "慢速离心"
          },
          {
            "tag": "chest_07",
            "sets": "3",
            "reps": "AMRAP",
            "note": ""
          },
          {
            "tag": "arms_07",
            "sets": "3",
            "reps": "12-15",
            "note": ""
          }
        ],
        "focus_en": "Chest B (Hypertrophy) + Triceps"
      },
      {
        "day": 5,
        "focus": "下肢",
        "exercises": [
          {
            "tag": "legs_01",
            "sets": "3",
            "reps": "6-10",
            "note": ""
          },
          {
            "tag": "legs_07",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "legs_10",
            "sets": "3",
            "reps": "10-12",
            "note": "每侧"
          },
          {
            "tag": "legs_08",
            "sets": "4",
            "reps": "15-20",
            "note": ""
          }
        ],
        "focus_en": "Lower Body"
      },
      {
        "day": 6,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 7,
        "rest": true,
        "focus_en": ""
      }
    ],
    "desc_en": "Chest twice a week from every angle. For those looking to break through bench plateaus or build a bigger upper chest."
  },
  {
    "id": "back_specialization",
    "name": "背部强化（4天版）",
    "name_en": "Back Specialization 4-Day",
    "desc": "每周两次背部训练，宽度+厚度兼顾。适合想提升引体向上或突破硬拉的用户。",
    "difficulty": "中级",
    "days_per_week": 4,
    "source": "专项强化训练法",
    "color": "#74b9ff",
    "days": [
      {
        "day": 1,
        "focus": "背部A（厚度）+硬拉",
        "exercises": [
          {
            "tag": "back_06",
            "sets": "3",
            "reps": "5",
            "note": "核心"
          },
          {
            "tag": "back_03",
            "sets": "4",
            "reps": "6-10",
            "note": ""
          },
          {
            "tag": "back_04",
            "sets": "3",
            "reps": "10-15",
            "note": "每侧"
          },
          {
            "tag": "back_07",
            "sets": "3",
            "reps": "12-15",
            "note": ""
          },
          {
            "tag": "arms_01",
            "sets": "3",
            "reps": "10-12",
            "note": ""
          }
        ],
        "focus_en": "Back A (Thickness) + Deadlift"
      },
      {
        "day": 2,
        "focus": "胸部+肩",
        "exercises": [
          {
            "tag": "chest_01",
            "sets": "3",
            "reps": "6-10",
            "note": ""
          },
          {
            "tag": "shoulder_02",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "chest_05",
            "sets": "3",
            "reps": "12-15",
            "note": ""
          },
          {
            "tag": "shoulder_03",
            "sets": "4",
            "reps": "15-20",
            "note": ""
          }
        ],
        "focus_en": "Chest + Shoulders"
      },
      {
        "day": 3,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 4,
        "focus": "背部B（宽度）+后束",
        "exercises": [
          {
            "tag": "back_01",
            "sets": "4",
            "reps": "8-12",
            "note": "负重"
          },
          {
            "tag": "back_02",
            "sets": "4",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "back_05",
            "sets": "3",
            "reps": "12-15",
            "note": ""
          },
          {
            "tag": "shoulder_05",
            "sets": "4",
            "reps": "15-20",
            "note": ""
          },
          {
            "tag": "cond_03",
            "sets": "3",
            "reps": "15-20",
            "note": "收尾"
          }
        ],
        "focus_en": "Back B (Width) + Rear Delts"
      },
      {
        "day": 5,
        "focus": "下肢",
        "exercises": [
          {
            "tag": "legs_01",
            "sets": "3",
            "reps": "6-10",
            "note": ""
          },
          {
            "tag": "legs_03",
            "sets": "3",
            "reps": "10-12",
            "note": ""
          },
          {
            "tag": "legs_07",
            "sets": "3",
            "reps": "8-12",
            "note": ""
          },
          {
            "tag": "legs_05",
            "sets": "3",
            "reps": "15-20",
            "note": ""
          }
        ],
        "focus_en": "Lower Body"
      },
      {
        "day": 6,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 7,
        "rest": true,
        "focus_en": ""
      }
    ],
    "desc_en": "Back twice a week — width AND thickness. For those chasing higher pull-up numbers or a bigger deadlift."
  },
  {
    "id": "minimalist_2day",
    "name": "最低维护（2天版）",
    "name_en": "Minimalist 2-Day",
    "desc": "每周只练2次。每次高强度复合动作。适合忙到飞起但不想掉力量的老手维持。",
    "difficulty": "中高级",
    "days_per_week": 2,
    "source": "Minimum Effective Dose 训练法",
    "color": "#636e72",
    "days": [
      {
        "day": 1,
        "focus": "全身力量A",
        "exercises": [
          {
            "tag": "legs_01",
            "sets": "3",
            "reps": "5",
            "note": "大重量"
          },
          {
            "tag": "chest_01",
            "sets": "3",
            "reps": "5",
            "note": ""
          },
          {
            "tag": "back_03",
            "sets": "3",
            "reps": "5",
            "note": ""
          },
          {
            "tag": "shoulder_01",
            "sets": "3",
            "reps": "5",
            "note": ""
          }
        ],
        "focus_en": "Full Body Strength A"
      },
      {
        "day": 2,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 3,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 4,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 5,
        "focus": "全身力量B",
        "exercises": [
          {
            "tag": "back_06",
            "sets": "1",
            "reps": "5",
            "note": "大重量"
          },
          {
            "tag": "legs_01",
            "sets": "3",
            "reps": "5",
            "note": ""
          },
          {
            "tag": "chest_01",
            "sets": "3",
            "reps": "5",
            "note": ""
          },
          {
            "tag": "back_01",
            "sets": "3",
            "reps": "5-8",
            "note": "负重"
          }
        ],
        "focus_en": "Full Body Strength B"
      },
      {
        "day": 6,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 7,
        "rest": true,
        "focus_en": ""
      }
    ],
    "desc_en": "Only 2 sessions per week. High-intensity compound lifts. For experienced lifters who are slammed but refuse to lose strength."
  },
  {
    "id": "hiit_conditioning",
    "name": "HIIT 燃脂循环（3天版）",
    "name_en": "HIIT Conditioning 3-Day",
    "desc": "高强度间歇训练。动作间不休息或极短休息。适合减脂期、提升心肺、突破平台期。",
    "difficulty": "中级",
    "days_per_week": 3,
    "source": "CrossFit/代谢 conditioning 改编",
    "color": "#e84393",
    "days": [
      {
        "day": 1,
        "focus": "循环A（全身）",
        "exercises": [
          {
            "tag": "cond_01",
            "sets": "4",
            "reps": "15",
            "note": "45秒做/15秒休"
          },
          {
            "tag": "cond_03",
            "sets": "4",
            "reps": "20",
            "note": "45秒做/15秒休"
          },
          {
            "tag": "cond_02",
            "sets": "4",
            "reps": "30",
            "note": "45秒做/15秒休"
          },
          {
            "tag": "legs_11",
            "sets": "4",
            "reps": "15",
            "note": "45秒做/15秒休"
          },
          {
            "tag": "core_01",
            "sets": "4",
            "reps": "30-45秒",
            "note": "收尾"
          }
        ],
        "focus_en": "Circuit A (Full Body)"
      },
      {
        "day": 2,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 3,
        "focus": "循环B（核心+体能）",
        "exercises": [
          {
            "tag": "chest_06",
            "sets": "4",
            "reps": "10-15",
            "note": "40秒做/20秒休"
          },
          {
            "tag": "legs_10",
            "sets": "4",
            "reps": "10",
            "note": "每侧"
          },
          {
            "tag": "cond_04",
            "sets": "4",
            "reps": "30-45秒",
            "note": "负重"
          },
          {
            "tag": "core_03",
            "sets": "3",
            "reps": "12-15",
            "note": ""
          },
          {
            "tag": "core_04",
            "sets": "3",
            "reps": "20",
            "note": "每侧"
          }
        ],
        "focus_en": "Circuit B (Core + Conditioning)"
      },
      {
        "day": 4,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 5,
        "focus": "循环C（Tabata风格）",
        "exercises": [
          {
            "tag": "cond_02",
            "sets": "8",
            "reps": "20",
            "note": "20秒做/10秒休 ×8"
          },
          {
            "tag": "cond_01",
            "sets": "8",
            "reps": "10",
            "note": "20秒做/10秒休 ×8"
          }
        ],
        "focus_en": "Circuit C (Tabata Style)"
      },
      {
        "day": 6,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 7,
        "rest": true,
        "focus_en": ""
      }
    ],
    "desc_en": "High-intensity conditioning circuits. Tabata, HIIT, and metabolic finishers. For those who want to suffer."
  },
  {
    "id": "reddit_rr",
    "name": "Reddit RR 黄金课表",
    "name_en": "Reddit Recommended Routine (RR)",
    "desc": "r/bodyweightfitness 340万会员公认的黄金自重圣经。3x/周全身训练，动作成对交替（Paired Sets），90秒组间休息。从热身到核心全覆盖。",
    "desc_en": "The gold standard from r/bodyweightfitness (3.4M members). 3x/week full body, paired sets with 90s rest. Complete from warm-up to core.",
    "difficulty": "初级",
    "days_per_week": 3,
    "source": "r/bodyweightfitness Official RR",
    "color": "#ff6b6b",
    "days": [
      {
        "day": 1,
        "focus": "全身 RR（周一）",
        "focus_en": "Full Body RR (Mon)",
        "exercises": [
          {
            "tag": "chest_06",
            "sets": "3",
            "reps": "5-8",
            "note": "🅰️ Pair 1: 做不动→退阶斜角/跪姿"
          },
          {
            "tag": "legs_01",
            "sets": "3",
            "reps": "5-8",
            "note": "🅰️ 休息90s再换"
          },
          {
            "tag": "back_01",
            "sets": "3",
            "reps": "5-8",
            "note": "🅱️ Pair 2: 引体→弹力带辅助"
          },
          {
            "tag": "chest_07",
            "sets": "3",
            "reps": "5-8",
            "note": "🅱️ ⚠️肩胛骨下沉 手肘勿外展"
          },
          {
            "tag": "legs_12",
            "sets": "3",
            "reps": "8-12",
            "note": "🅲 Pair 3: 臀桥"
          },
          {
            "tag": "back_10",
            "sets": "3",
            "reps": "8-12",
            "note": "🅲 山羊挺身"
          },
          {
            "tag": "core_01",
            "sets": "3",
            "reps": "30-60秒",
            "note": "Core: 平板支撑"
          },
          {
            "tag": "core_04",
            "sets": "3",
            "reps": "20",
            "note": "俄罗斯转体（每侧）"
          },
          {
            "tag": "core_02",
            "sets": "3",
            "reps": "15-20",
            "note": "卷腹"
          }
        ]
      },
      {
        "day": 2,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 3,
        "focus": "全身 RR（周三）",
        "focus_en": "Full Body RR (Wed)",
        "exercises": [
          {
            "tag": "chest_06",
            "sets": "3",
            "reps": "5-8",
            "note": "🅰️ 退阶：墙壁→斜角→跪姿→标准"
          },
          {
            "tag": "legs_01",
            "sets": "3",
            "reps": "5-8",
            "note": "🅰️ 深蹲"
          },
          {
            "tag": "back_01",
            "sets": "3",
            "reps": "5-8",
            "note": "🅱️ 引体向上"
          },
          {
            "tag": "chest_07",
            "sets": "3",
            "reps": "5-8",
            "note": "🅱️ ⚠️手肘勿外展"
          },
          {
            "tag": "legs_12",
            "sets": "3",
            "reps": "8-12",
            "note": "🅲 臀桥"
          },
          {
            "tag": "back_10",
            "sets": "3",
            "reps": "8-12",
            "note": "🅲 山羊挺身"
          },
          {
            "tag": "core_01",
            "sets": "3",
            "reps": "40-60秒",
            "note": "平板支撑"
          },
          {
            "tag": "core_04",
            "sets": "3",
            "reps": "20",
            "note": "俄罗斯转体"
          },
          {
            "tag": "core_02",
            "sets": "3",
            "reps": "15-20",
            "note": "卷腹"
          }
        ]
      },
      {
        "day": 4,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 5,
        "focus": "全身 RR（周五）",
        "focus_en": "Full Body RR (Fri)",
        "exercises": [
          {
            "tag": "arms_09",
            "sets": "3",
            "reps": "8-15",
            "note": "🅰️ 窄距俯卧撑"
          },
          {
            "tag": "legs_04",
            "sets": "3",
            "reps": "8-12",
            "note": "🅰️ 弓步蹲（每侧）"
          },
          {
            "tag": "back_01",
            "sets": "3",
            "reps": "5-8",
            "note": "🅱️ 引体向上"
          },
          {
            "tag": "chest_07",
            "sets": "3",
            "reps": "5-8",
            "note": "🅱️ ⚠️退阶→Bench Dips"
          },
          {
            "tag": "legs_12",
            "sets": "3",
            "reps": "10-15",
            "note": "🅲 臀桥行进"
          },
          {
            "tag": "back_10",
            "sets": "3",
            "reps": "10-12",
            "note": "🅲 山羊挺身"
          },
          {
            "tag": "core_01",
            "sets": "3",
            "reps": "45-60秒",
            "note": "平板支撑"
          },
          {
            "tag": "core_03",
            "sets": "3",
            "reps": "12-15",
            "note": "坐姿举腿"
          },
          {
            "tag": "core_04",
            "sets": "3",
            "reps": "20",
            "note": "俄罗斯转体"
          }
        ]
      },
      {
        "day": 6,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 7,
        "rest": true,
        "focus_en": ""
      }
    ]
  },
  {
    "id": "bwsf",
    "name": "BWSF 零基础自重",
    "name_en": "Bodyweight Strength Foundation (BWSF)",
    "desc": "r/bodyweightfitness 官方零基础课表。动作更安全、强度更低，专为大体重/久坐/完全零基础的初学者设计。退阶路线清晰。",
    "desc_en": "Official beginner program from r/bodyweightfitness. Lower intensity, safer movements for absolute beginners and larger bodies.",
    "difficulty": "初级",
    "days_per_week": 3,
    "source": "r/bodyweightfitness BWSF (formerly Primer/MOVE)",
    "color": "#74b9ff",
    "days": [
      {
        "day": 1,
        "focus": "基础入门 A",
        "focus_en": "Foundation A",
        "exercises": [
          {
            "tag": "chest_06",
            "sets": "3",
            "reps": "5-10",
            "note": "退阶：墙壁→斜角→跪姿→标准"
          },
          {
            "tag": "core_01",
            "sets": "3",
            "reps": "15-30秒",
            "note": "平板支撑（可跪姿）"
          },
          {
            "tag": "legs_12",
            "sets": "3",
            "reps": "10-15",
            "note": "臀桥"
          },
          {
            "tag": "core_02",
            "sets": "2",
            "reps": "8-12",
            "note": "卷腹"
          },
          {
            "tag": "legs_10",
            "sets": "2",
            "reps": "6-10",
            "note": "辅助分腿蹲（扶椅子）"
          }
        ]
      },
      {
        "day": 2,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 3,
        "focus": "基础入门 B",
        "focus_en": "Foundation B",
        "exercises": [
          {
            "tag": "chest_06",
            "sets": "3",
            "reps": "5-10",
            "note": "选当前能做的退阶"
          },
          {
            "tag": "core_01",
            "sets": "3",
            "reps": "20-30秒",
            "note": "平板支撑"
          },
          {
            "tag": "legs_12",
            "sets": "3",
            "reps": "12-15",
            "note": "臀桥"
          },
          {
            "tag": "core_03",
            "sets": "2",
            "reps": "8-10",
            "note": "坐姿举腿"
          },
          {
            "tag": "legs_04",
            "sets": "2",
            "reps": "6-8",
            "note": "弓步蹲（每侧，辅助）"
          }
        ]
      },
      {
        "day": 4,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 5,
        "focus": "基础入门 C",
        "focus_en": "Foundation C",
        "exercises": [
          {
            "tag": "chest_06",
            "sets": "3",
            "reps": "6-12",
            "note": "尝试进阶一阶"
          },
          {
            "tag": "core_01",
            "sets": "3",
            "reps": "25-35秒",
            "note": "平板支撑"
          },
          {
            "tag": "legs_12",
            "sets": "3",
            "reps": "15-20",
            "note": "臀桥行进"
          },
          {
            "tag": "core_04",
            "sets": "2",
            "reps": "12-15",
            "note": "俄罗斯转体（每侧）"
          },
          {
            "tag": "legs_10",
            "sets": "2",
            "reps": "8-10",
            "note": "分腿蹲"
          }
        ]
      },
      {
        "day": 6,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 7,
        "rest": true,
        "focus_en": ""
      }
    ]
  },
  {
    "id": "minimalist",
    "name": "30分钟极简自重",
    "name_en": "Minimalist Routine (20-30min)",
    "desc": "r/bodyweightfitness 官方极简课表。只做最核心的推拉蹲+核心，20-30分钟高效完成。适合极度缺时间的社畜。",
    "desc_en": "Official minimalist routine from r/bodyweightfitness. Just push-pull-squat + core. 20-30 min. For the time-crunched.",
    "difficulty": "初级",
    "days_per_week": 3,
    "source": "r/bodyweightfitness Minimalist Routine",
    "color": "#a29bfe",
    "days": [
      {
        "day": 1,
        "focus": "极简（周一）",
        "focus_en": "Minimalist (Mon)",
        "exercises": [
          {
            "tag": "chest_06",
            "sets": "3",
            "reps": "5-8",
            "note": "推"
          },
          {
            "tag": "back_01",
            "sets": "3",
            "reps": "5-8",
            "note": "拉"
          },
          {
            "tag": "legs_01",
            "sets": "3",
            "reps": "8-12",
            "note": "蹲"
          },
          {
            "tag": "core_01",
            "sets": "2",
            "reps": "30-60秒",
            "note": "核心"
          }
        ]
      },
      {
        "day": 2,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 3,
        "focus": "极简（周三）",
        "focus_en": "Minimalist (Wed)",
        "exercises": [
          {
            "tag": "chest_06",
            "sets": "3",
            "reps": "5-8",
            "note": "推"
          },
          {
            "tag": "back_01",
            "sets": "3",
            "reps": "5-8",
            "note": "拉"
          },
          {
            "tag": "legs_04",
            "sets": "3",
            "reps": "8-12",
            "note": "蹲：弓步"
          },
          {
            "tag": "core_04",
            "sets": "2",
            "reps": "15-20",
            "note": "核心"
          }
        ]
      },
      {
        "day": 4,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 5,
        "focus": "极简（周五）",
        "focus_en": "Minimalist (Fri)",
        "exercises": [
          {
            "tag": "arms_09",
            "sets": "3",
            "reps": "8-15",
            "note": "推：窄距"
          },
          {
            "tag": "back_01",
            "sets": "3",
            "reps": "5-8",
            "note": "拉"
          },
          {
            "tag": "legs_10",
            "sets": "3",
            "reps": "8-12",
            "note": "蹲：分腿蹲"
          },
          {
            "tag": "core_03",
            "sets": "2",
            "reps": "10-15",
            "note": "核心"
          }
        ]
      },
      {
        "day": 6,
        "rest": true,
        "focus_en": ""
      },
      {
        "day": 7,
        "rest": true,
        "focus_en": ""
      }
    ]
  }
];