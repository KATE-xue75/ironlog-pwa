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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
      },
      {
        "day": 7,
        "focus": "休息",
        "rest": true
      }
    ]
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
        ]
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
        ]
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
        ]
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
        ]
      },
      {
        "day": 5,
        "rest": true
      },
      {
        "day": 6,
        "rest": true
      },
      {
        "day": 7,
        "rest": true
      }
    ]
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
        ]
      },
      {
        "day": 2,
        "rest": true
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
        ]
      },
      {
        "day": 4,
        "rest": true
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
        ]
      },
      {
        "day": 6,
        "rest": true
      },
      {
        "day": 7,
        "rest": true
      }
    ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
      },
      {
        "day": 6,
        "rest": true
      },
      {
        "day": 7,
        "rest": true
      }
    ]
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
        ]
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
        ]
      },
      {
        "day": 3,
        "rest": true
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
        ]
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
        ]
      },
      {
        "day": 6,
        "rest": true
      },
      {
        "day": 7,
        "rest": true
      }
    ]
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
        ]
      },
      {
        "day": 2,
        "rest": true
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
        ]
      },
      {
        "day": 4,
        "rest": true
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
        ]
      },
      {
        "day": 6,
        "rest": true
      },
      {
        "day": 7,
        "rest": true
      }
    ]
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
        ]
      },
      {
        "day": 2,
        "rest": true
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
        ]
      },
      {
        "day": 4,
        "rest": true
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
        ]
      },
      {
        "day": 6,
        "rest": true
      },
      {
        "day": 7,
        "rest": true
      }
    ]
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
        ]
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
        ]
      },
      {
        "day": 3,
        "rest": true
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
        ]
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
        ]
      },
      {
        "day": 6,
        "rest": true
      },
      {
        "day": 7,
        "rest": true
      }
    ]
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
        ]
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
        ]
      },
      {
        "day": 3,
        "rest": true
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
        ]
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
        ]
      },
      {
        "day": 6,
        "rest": true
      },
      {
        "day": 7,
        "rest": true
      }
    ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
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
        ]
      },
      {
        "day": 7,
        "rest": true
      }
    ]
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
        ]
      },
      {
        "day": 2,
        "rest": true
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
        ]
      },
      {
        "day": 4,
        "rest": true
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
        ]
      },
      {
        "day": 6,
        "rest": true
      },
      {
        "day": 7,
        "rest": true
      }
    ]
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
        ]
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
        ]
      },
      {
        "day": 3,
        "rest": true
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
        ]
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
        ]
      },
      {
        "day": 6,
        "rest": true
      },
      {
        "day": 7,
        "rest": true
      }
    ]
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
        ]
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
        ]
      },
      {
        "day": 3,
        "rest": true
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
        ]
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
        ]
      },
      {
        "day": 6,
        "rest": true
      },
      {
        "day": 7,
        "rest": true
      }
    ]
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
        ]
      },
      {
        "day": 2,
        "rest": true
      },
      {
        "day": 3,
        "rest": true
      },
      {
        "day": 4,
        "rest": true
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
        ]
      },
      {
        "day": 6,
        "rest": true
      },
      {
        "day": 7,
        "rest": true
      }
    ]
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
        ]
      },
      {
        "day": 2,
        "rest": true
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
        ]
      },
      {
        "day": 4,
        "rest": true
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
        ]
      },
      {
        "day": 6,
        "rest": true
      },
      {
        "day": 7,
        "rest": true
      }
    ]
  }
];
