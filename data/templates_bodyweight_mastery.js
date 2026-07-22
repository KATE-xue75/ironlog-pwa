// ============================================================
// Bodyweight Mastery: Zero to Advanced — Premium Program ($3.99)
// 3-level progressive bodyweight workout plan for IronLog PWA
// ============================================================

var BODYWEIGHT_MASTERY_TEMPLATES = [
  // ==========================================================
  // LEVEL 1 — Foundation (Weeks 1-4)
  // ==========================================================
  {
    "id": "bw_mastery_l1",
    "name": "自重精通 L1：基础（1-4周）",
    "name_en": "Bodyweight Mastery L1: Foundation (Weeks 1-4)",
    "desc": "从零开始建立基础力量和动作模式。每次训练覆盖全身，3天/周。适合完全新手或恢复期训练者。",
    "difficulty": "初级",
    "days_per_week": 3,
    "source": "IronLog Premium — Bodyweight Mastery Program",
    "color": "#4CAF50",
    "premium": true,
    "price": "$3.99",
    "program": "bodyweight_mastery",
    "level": 1,
    "level_name": "Foundation（基础）",
    "duration": "4周",
    "progression_criteria": "完整完成所有组数且动作标准 → 解锁Level 2",
    "level_desc": "Level 1 专注于建立基础力量与正确的动作模式。通过倾斜俯卧撑、跪姿俯卧撑、自重深蹲、臀桥、死挂、平板支撑、弓步蹲和鸟狗式等入门动作，帮助你安全地搭建力量地基。3天/周全身训练，每组8-12次（静态动作20-45秒），每个动作3组。当你能够以标准姿势完成所有组数时，即可晋级Level 2。",
    "level_desc_en": "Level 1 builds fundamental strength and proper movement patterns. Starting with incline pushups, knee pushups, bodyweight squats, glute bridges, dead hangs, plank holds, lunges, and bird dogs — you'll safely build your strength foundation. Full-body sessions 3x/week, 3 sets of 8-12 reps (20-45s for holds). Progress to Level 2 when you can complete all sets with perfect form.",
    "days": [
      {
        "day": 1,
        "focus": "全身训练 A",
        "warmup": "5分钟关节活动：肩绕环、髋绕环、开合跳30秒 + 猫牛式10次",
        "exercises": [
          {
            "tag": "chest_06",
            "sets": "3",
            "reps": "8-12",
            "note": "倾斜俯卧撑 — 手放在椅子/台阶上，降低倾斜角度逐步增加难度"
          },
          {
            "tag": "bw_squat",
            "sets": "3",
            "reps": "10-12",
            "note": "自重深蹲 — 双脚与肩同宽，核心收紧，下蹲时大腿与地面平行"
          },
          {
            "tag": "core_01",
            "sets": "3",
            "reps": "20-30秒",
            "note": "平板支撑 — 从头到脚保持一条直线，核心收紧，臀部不塌"
          },
          {
            "tag": "bw_glute_bridge",
            "sets": "3",
            "reps": "12-15",
            "note": "臀桥 — 仰卧屈膝，臀部发力上抬至身体呈直线，顶峰收缩"
          },
          {
            "tag": "bw_lunge",
            "sets": "3",
            "reps": "8-10/侧",
            "note": "弓步蹲 — 前膝不超过脚尖，后膝轻触地面，保持躯干直立"
          },
          {
            "tag": "bw_bird_dog",
            "sets": "3",
            "reps": "8/侧",
            "note": "鸟狗式 — 四足跪姿，对侧手脚同时伸展，保持核心稳定不晃动"
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
        "focus": "全身训练 B",
        "warmup": "5分钟动态拉伸：高抬腿30秒、臀桥脉冲10次、肩袖绕环 + 臂绕环",
        "exercises": [
          {
            "tag": "chest_06",
            "sets": "3",
            "reps": "8-12",
            "note": "跪姿俯卧撑 — 膝盖着地，保持核心收紧，身体呈直线下降"
          },
          {
            "tag": "bw_dead_hang",
            "sets": "3",
            "reps": "15-30秒",
            "note": "死挂 — 悬挂在单杠上，完全放松肩胛，被动拉伸背部和握力"
          },
          {
            "tag": "bw_squat",
            "sets": "3",
            "reps": "12-15",
            "note": "自重深蹲 — 注意控制离心阶段（3秒下放），提高肌肉控制力"
          },
          {
            "tag": "bw_glute_bridge",
            "sets": "3",
            "reps": "15-20",
            "note": "臀桥 — 可尝试单腿抬起保持2秒增加核心挑战"
          },
          {
            "tag": "core_01",
            "sets": "3",
            "reps": "25-35秒",
            "note": "平板支撑 — 聚焦呼吸控制，保持匀速深长呼吸"
          },
          {
            "tag": "bw_bird_dog",
            "sets": "3",
            "reps": "10/侧",
            "note": "鸟狗式 — 动作缓慢，在伸展末端停留2秒"
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
        "focus": "全身训练 C",
        "warmup": "5分钟预热：开合跳30秒、登山者30秒、猫牛式 + 脊柱扭转",
        "exercises": [
          {
            "tag": "chest_06",
            "sets": "3",
            "reps": "8-12",
            "note": "倾斜俯卧撑 — 比Day 1更低的角度（如矮凳），逐步进阶"
          },
          {
            "tag": "bw_lunge",
            "sets": "3",
            "reps": "10/侧",
            "note": "反向弓步蹲 — 向后迈步下蹲，减少膝盖压力，强化臀肌"
          },
          {
            "tag": "bw_dead_hang",
            "sets": "3",
            "reps": "20-35秒",
            "note": "死挂 — 尝试轻微激活肩胛（主动悬挂），为引体打基础"
          },
          {
            "tag": "bw_glute_bridge",
            "sets": "3",
            "reps": "15-20",
            "note": "单腿臀桥 — 如果双腿已轻松完成，尝试单腿12次/侧"
          },
          {
            "tag": "core_04",
            "sets": "3",
            "reps": "12/侧",
            "note": "俄罗斯转体 — 坐姿后倾，双脚离地，左右转体"
          },
          {
            "tag": "bw_bird_dog",
            "sets": "3",
            "reps": "10/侧",
            "note": "鸟狗式 — 尝试闭眼增加本体感觉挑战"
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
    "desc_en": "Build fundamental bodyweight strength from zero. Full-body workouts 3x/week with regressions like incline pushups and knee pushups. Progress to Level 2 when you complete all sets with perfect form.",
    "progression_criteria_en": "Complete all sets with good form → unlock Level 2"
  },

  // ==========================================================
  // LEVEL 2 — Intermediate (Weeks 5-8)
  // ==========================================================
  {
    "id": "bw_mastery_l2",
    "name": "自重精通 L2：进阶（5-8周）",
    "name_en": "Bodyweight Mastery L2: Intermediate (Weeks 5-8)",
    "desc": "增加训练容量和动作难度。推/拉/腿/核心四天分化，引入钻石俯卧撑、分腿蹲、引体离心等高阶变式。",
    "difficulty": "中级",
    "days_per_week": 4,
    "source": "IronLog Premium — Bodyweight Mastery Program",
    "color": "#FF9800",
    "premium": true,
    "price": "$3.99",
    "program": "bodyweight_mastery",
    "level": 2,
    "level_name": "Intermediate（进阶）",
    "duration": "4周",
    "progression_criteria": "能完成3×10标准俯卧撑 + 3×8引体离心 → 解锁Level 3",
    "level_desc": "Level 2 在基础之上增加训练容量与动作复杂度。采用推/拉/腿/核心四天分化训练，引入标准俯卧撑、钻石俯卧撑、保加利亚分腿蹲、单腿臀桥、引体向上离心、侧平板支撑、跳跃深蹲和派克俯卧撑等高阶变式。每个动作3-4组，8-15次。当你能够完成3组10次标准俯卧撑和3组8次引体离心时，就准备好迎接终极挑战了。",
    "level_desc_en": "Level 2 builds volume and introduces harder variations. A 4-day Push/Pull/Legs/Core split with full pushups, diamond pushups, split squats, single-leg glute bridges, negative pullups, side planks, jumping squats, and pike pushups. 3-4 sets of 8-15 reps per exercise. When you can do 3×10 full pushups and 3×8 pullup negatives, you're ready for the final tier.",
    "days": [
      {
        "day": 1,
        "focus": "推（胸+肩+三头）",
        "warmup": "5分钟上肢激活：臂绕环、肩袖旋转、墙天使10次 + 跪姿俯卧撑热身",
        "exercises": [
          {
            "tag": "chest_06",
            "sets": "3",
            "reps": "10-12",
            "note": "标准俯卧撑 — 全幅度，胸部触地或接近地面，保持核心收紧"
          },
          {
            "tag": "bw_diamond_pushup",
            "sets": "3",
            "reps": "6-10",
            "note": "钻石俯卧撑 — 双手拇指食指相触成钻石形，强化三头肌和内侧胸"
          },
          {
            "tag": "bw_pike_pushup",
            "sets": "3",
            "reps": "8-12",
            "note": "派克俯卧撑 — 髋部抬高呈倒V，头顶朝向地面，强化肩部推举力量"
          },
          {
            "tag": "bw_bench_dip",
            "sets": "3",
            "reps": "10-15",
            "note": "长凳臂屈伸 — 背靠椅子/长凳，屈肘下放身体，三头肌发力推起"
          },
          {
            "tag": "core_01",
            "sets": "3",
            "reps": "30-45秒",
            "note": "平板支撑 — 保持身体完全直线，可尝试单腿抬起增加难度"
          }
        ],
        "focus_en": "Push (Chest + Shoulders + Triceps)"
      },
      {
        "day": 2,
        "focus": "拉（背+二头+后束）",
        "warmup": "5分钟背部激活：肩胛推拉练习、弹力带拉开、死挂30秒热身",
        "exercises": [
          {
            "tag": "bw_negative_pullup",
            "sets": "3",
            "reps": "5-8",
            "note": "引体离心 — 跳起至下巴过杠，用5秒缓慢下放，控制全程"
          },
          {
            "tag": "bw_australian_row",
            "sets": "3",
            "reps": "8-12",
            "note": "澳式引体（反向划船） — 利用低杠或桌子，身体倾斜，拉向胸部"
          },
          {
            "tag": "bw_dead_hang",
            "sets": "3",
            "reps": "30-45秒",
            "note": "主动悬挂 — 肩胛下沉激活，保持微微收肩，为引体向上做准备"
          },
          {
            "tag": "back_10",
            "sets": "3",
            "reps": "12-15",
            "note": "山羊挺身 — 如果无器械可做俯卧超人式替代（超人式：俯卧同时抬起四肢）"
          },
          {
            "tag": "bw_superman_hold",
            "sets": "3",
            "reps": "20-30秒",
            "note": "超人保持 — 俯卧位，同时抬起双臂双腿，挤压背部肌群"
          }
        ],
        "focus_en": "Pull (Back + Biceps + Rear Delts)"
      },
      {
        "day": 3,
        "focus": "腿（股四+腘绳+臀）",
        "warmup": "5分钟下肢激活：开合跳30秒、自重深蹲10次、弓步拉伸 + 踝关节活动",
        "exercises": [
          {
            "tag": "bw_split_squat",
            "sets": "3",
            "reps": "8-12/侧",
            "note": "保加利亚分腿蹲 — 后脚抬高放在椅子/台阶上，前腿下蹲至大腿平行地面"
          },
          {
            "tag": "bw_jump_squat",
            "sets": "3",
            "reps": "8-10",
            "note": "跳跃深蹲 — 下蹲后爆发跳起，落地轻柔缓冲，专注离心控制"
          },
          {
            "tag": "bw_single_leg_glute_bridge",
            "sets": "3",
            "reps": "10-12/侧",
            "note": "单腿臀桥 — 一腿抬起伸直，另一侧臀部发力将髋部推至最高"
          },
          {
            "tag": "bw_lunge",
            "sets": "3",
            "reps": "10-12/侧",
            "note": "行走弓步 — 交替向前迈步下蹲，保持躯干直立，每侧10-12次"
          },
          {
            "tag": "legs_08",
            "sets": "3",
            "reps": "15-20",
            "note": "站姿提踵 — 站在台阶边缘，脚跟下沉后尽力抬高，全程控制"
          }
        ],
        "focus_en": "Legs (Quads + Hamstrings + Glutes)"
      },
      {
        "day": 4,
        "focus": "核心+全身整合",
        "warmup": "5分钟核心激活：猫牛式、死虫式、臀桥脉冲 + 动态平板支撑",
        "exercises": [
          {
            "tag": "core_01",
            "sets": "3",
            "reps": "30-45秒",
            "note": "侧平板支撑（左+右） — 单侧各30-45秒，髋部不下沉"
          },
          {
            "tag": "core_02",
            "sets": "3",
            "reps": "15-20",
            "note": "卷腹 — 专注腹肌收缩，颈部放松，下巴微收"
          },
          {
            "tag": "core_03",
            "sets": "3",
            "reps": "10-15",
            "note": "坐姿举腿 — 坐于长凳边缘，双腿伸直抬起至平行地面"
          },
          {
            "tag": "core_04",
            "sets": "3",
            "reps": "15/侧",
            "note": "俄罗斯转体 — 可手持水瓶增加负重，控制节奏"
          },
          {
            "tag": "cond_02",
            "sets": "3",
            "reps": "30秒",
            "note": "登山者 — 高平板支撑姿势，交替提膝至胸，保持核心稳定"
          }
        ],
        "focus_en": "Core + Full Body Integration"
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
    "desc_en": "Build volume with harder bodyweight variations. 4-day Push/Pull/Legs/Core split introducing diamond pushups, split squats, pullup negatives, and pike pushups. Progress to Level 3 when you hit 3×10 full pushups + 3×8 pullup negatives.",
    "progression_criteria_en": "Can do 3×10 full pushups + 3×8 pullup negatives → unlock Level 3"
  },

  // ==========================================================
  // LEVEL 3 — Advanced (Weeks 9-12)
  // ==========================================================
  {
    "id": "bw_mastery_l3",
    "name": "自重精通 L3：高阶（9-12周）",
    "name_en": "Bodyweight Mastery L3: Advanced (Weeks 9-12)",
    "desc": "高强度自重掌控。上下肢四天分化，引入射手俯卧撑、手枪深蹲、L支撑、引体向上、倒立等顶级动作。",
    "difficulty": "高级",
    "days_per_week": 4,
    "source": "IronLog Premium — Bodyweight Mastery Program",
    "color": "#F44336",
    "premium": true,
    "price": "$3.99",
    "program": "bodyweight_mastery",
    "level": 3,
    "level_name": "Advanced（高阶）",
    "duration": "4周",
    "progression_criteria": "完成此级别意味着你已掌握自重训练的精髓。继续保持，追求更高质量的动作控制与爆发力。",
    "level_desc": "Level 3 是自重训练的终极挑战。采用上下肢四天分化训练，涵盖射手俯卧撑、伪俄挺俯卧撑、手枪深蹲（或辅助版）、L支撑、标准引体向上、倒立支撑、龙旗和爆发性动作等高阶自重技能。每个动作4组，6-12次（静态动作15-45秒）。这不仅考验力量，更考验控制力、平衡感和身体意识。完成整个12周计划，你将拥有真正的自重掌控力。",
    "level_desc_en": "Level 3 is the ultimate bodyweight challenge. An Upper/Lower 4-day split featuring archer pushups, pseudo planche pushups, pistol squats, L-sit holds, full pullups, handstand holds, dragon flags, and explosive movements. 4 sets of 6-12 reps (15-45s for holds). This tier tests not just strength but control, balance, and body awareness. Complete the full 12-week program and you'll have true bodyweight mastery.",
    "days": [
      {
        "day": 1,
        "focus": "上肢 A（推+拉力量）",
        "warmup": "5分钟上肢激活：臂绕环、肩旋转、动态平板支撑 + 死挂30秒 + 俯卧撑热身10次",
        "exercises": [
          {
            "tag": "bw_archer_pushup",
            "sets": "4",
            "reps": "5-8/侧",
            "note": "射手俯卧撑 — 一手向外伸展，另一手做偏重俯卧撑，每侧交替"
          },
          {
            "tag": "bw_pseudo_planche_pushup",
            "sets": "4",
            "reps": "6-10",
            "note": "伪俄挺俯卧撑 — 手指朝后或朝外，身体前倾，增加肩部和核心负荷"
          },
          {
            "tag": "back_01",
            "sets": "4",
            "reps": "5-10",
            "note": "引体向上 — 标准正手引体，如不能完成可用弹力带辅助或做离心"
          },
          {
            "tag": "chest_07",
            "sets": "4",
            "reps": "8-12",
            "note": "双杠臂屈伸 — 如有双杠；无器械可做窄距俯卧撑替代"
          },
          {
            "tag": "bw_handstand_hold",
            "sets": "4",
            "reps": "15-30秒",
            "note": "倒立支撑 — 靠墙倒立，核心收紧，保持稳定；逐渐尝试离墙"
          }
        ],
        "focus_en": "Upper A (Push + Pull Strength)"
      },
      {
        "day": 2,
        "focus": "下肢 A（单腿力量+核心）",
        "warmup": "5分钟下肢激活：开合跳、自重深蹲、弓步伸展 + 踝关节活动 + 猫牛式",
        "exercises": [
          {
            "tag": "bw_pistol_squat",
            "sets": "4",
            "reps": "3-8/侧",
            "note": "手枪深蹲 — 单腿下蹲，另一腿前伸；可扶墙或用弹力带辅助"
          },
          {
            "tag": "bw_dragon_flag",
            "sets": "4",
            "reps": "3-8",
            "note": "龙旗 — 仰卧抓住头部后方固定物，全身笔直抬起，缓慢下放（可做单腿或屈膝版）"
          },
          {
            "tag": "bw_l_sit",
            "sets": "4",
            "reps": "10-25秒",
            "note": "L支撑 — 双手撑地/双杠，双腿伸直抬起与地面平行，核心收紧"
          },
          {
            "tag": "bw_split_squat",
            "sets": "4",
            "reps": "10-12/侧",
            "note": "保加利亚分腿蹲 — 可增加爆发跳跃版本的变式"
          },
          {
            "tag": "legs_08",
            "sets": "4",
            "reps": "15-20",
            "note": "单腿提踵 — 每侧15-20次，重点强化小腿力量和平衡"
          }
        ],
        "focus_en": "Lower A (Single-Leg Strength + Core)"
      },
      {
        "day": 3,
        "focus": "上肢 B（容量+技巧）",
        "warmup": "5分钟上肢预热：肩袖旋转、墙天使、俯卧撑热身 + 死挂 + 腕关节活动",
        "exercises": [
          {
            "tag": "chest_06",
            "sets": "4",
            "reps": "12-15",
            "note": "爆发俯卧撑 — 推离地面拍手或离地即可，专注爆发力输出"
          },
          {
            "tag": "back_01",
            "sets": "4",
            "reps": "6-12",
            "note": "引体向上 — 可尝试窄距或宽距变式增加多样性"
          },
          {
            "tag": "bw_archer_pushup",
            "sets": "4",
            "reps": "6-10/侧",
            "note": "射手俯卧撑 — 减少辅助臂的支撑比例，逐步偏重"
          },
          {
            "tag": "bw_pike_pushup",
            "sets": "4",
            "reps": "8-12",
            "note": "派克俯卧撑 — 双脚垫高增加难度，头部尽量接近地面"
          },
          {
            "tag": "cond_01",
            "sets": "3",
            "reps": "10-12",
            "note": "波比跳 — 全身爆发力收尾，保持动作质量和节奏"
          }
        ],
        "focus_en": "Upper B (Volume + Skill)"
      },
      {
        "day": 4,
        "focus": "下肢 B（爆发力+代谢）",
        "warmup": "5分钟全身热身：高抬腿30秒、开合跳30秒、自重深蹲、弓步转体、动态拉伸",
        "exercises": [
          {
            "tag": "bw_jump_squat",
            "sets": "4",
            "reps": "8-12",
            "note": "跳跃深蹲 — 追求最大高度，落地轻而稳定"
          },
          {
            "tag": "bw_pistol_squat",
            "sets": "4",
            "reps": "5-8/侧",
            "note": "手枪深蹲 — 逐步减少辅助，目标无辅助完成"
          },
          {
            "tag": "bw_dragon_flag",
            "sets": "4",
            "reps": "5-10",
            "note": "龙旗 — 目标全程直腿完成，退阶可用屈膝版"
          },
          {
            "tag": "bw_l_sit",
            "sets": "4",
            "reps": "15-30秒",
            "note": "L支撑 — 保持双腿完全伸直并拢，挑战最大时间"
          },
          {
            "tag": "cond_02",
            "sets": "4",
            "reps": "45秒",
            "note": "登山者 — 快速节奏，作为代谢收尾"
          }
        ],
        "focus_en": "Lower B (Explosive + Metabolic)"
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
    "desc_en": "High-intensity bodyweight mastery. Upper/Lower 4-day split with archer pushups, pistol squats, L-sits, pullups, handstands, and dragon flags. The pinnacle of calisthenics control.",
    "progression_criteria_en": "Master all movements with full range of motion and control. You've achieved bodyweight mastery."
  }
];
