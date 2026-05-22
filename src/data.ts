import { Project, Article } from './types';

export const PROJECTS: Project[] = [
  {
    id: "synapse-canvas",
    category: "用户交互体验设计",
    name: "抖音APP 「视频推荐」功能优化",
    title: "抖音APP「视频推荐」功能优化",
    subtitle: "基于社交关系，让用户主动推荐自己感兴趣的内容",
    keywords: ["交互体验", "代入用户", "理解用户", "提高留存", "人机交互"],
    year: "2026",
    role: "创始人 & 首席产品设计师",
    coreStatement: "它不是算法推荐，而是基于社交关系，引导用户主动推荐自己感兴趣的内容，目的是提升用户留存率和使用时长。",
    timeline: "2025.10 - 2026.04",
    projectType: "创始人兼个人独立项目",
    background: {
      industryProblem: "抖音短视频平台使用人数越来越多，dau和日均使用时长也逐年提升，但是抖音推荐功能用户的点击率却不高",
      userProblem: "核心痛点在于双链路设计的失衡：第一条主链路作为用户最习惯的操作路线，其推荐入口却不够明显、交互摩擦重；第二条副链路则由于缺乏常态化引导，多数用户甚至完全不感知。这形成了「主链路有摩擦，副链路无认知」的尴尬现状。此外，国内短视频平台在该功能上基本处于空白阶段，市场上几乎没有可供借鉴的成熟竞品。",
      businessGoal: "通过优化轻互动的推荐体验，增强视频内容吸引力，提升用户在平台的停留时长。"
    },
    strategy: {
      insights: [
        "入口与操作体验优化\n• 新增「一键推荐」按钮\n• 置顶长按面板「推荐栏」\n• 凸显分享面板「推荐按钮」",
        "社交互动感知优化\n• 新增「说服式设计」\n• 新增「推荐留言系统」\n• 统一「推荐」ICON颜色",
        "提高隐私保护度\n• 新增「推荐落地页」\n• 新增「可见范围设置」"
      ],
      uxStrategy: "在交互侧，主打「轻量化、高感度」的短操作链路。主链路通过「一键点击/轻度长按」快速激发，消减传统分享及推荐层级复杂的次级弹窗；副链路通过气泡常态化浮现与行为联动，激发熟人/群组社交链的二次推荐，彻底破除「主链路阻碍重、副链路不感知」的漏斗瓶颈。",
      designDirection: "融入抖音标志性的深色时尚潮流美学（TikTok Theme Vibe），采用具有高对比度的品牌荧光色作为状态指示微动线索。组件设计追求极度舒适的微光影交互（Tactile Feedback），并配合自然有张力的物理回弹动画，确保轻快爽朗的整体操作连贯感。"
    },
    showcaseSections: [
      {
        title: "研究阶段 (Research)",
        description: "通过对 50 位重度 AI 创作者、全栈工程师和科研人员的深度定性访谈，我们将多路径交互的核心痛点归纳为以下决策地图、任务处理效率分布及需求层级。",
        category: "Research",
        artifacts: [
          {
            id: "user_painpoints_matrix",
            title: "人机协作认知负荷与决策流程图",
            type: "mindmap",
            data: {
              center: "当前 Chat UI 痛点",
              nodes: [
                { label: "不可见上下文", weight: "高认负荷", color: "black" },
                { label: "单向线性阻断", weight: "无法分支", color: "gray" },
                { label: "交互输入延迟", weight: "阻塞思考", color: "gray" },
                { label: "成果难整理", weight: "耗费体力", color: "black" }
              ]
            }
          },
          {
            id: "efficiency_curve",
            title: "传统 Chat 与空间网格交互耗时对比曲线",
            type: "metrics",
            data: {
              labels: ["起步阶段", "多路径分叉", "跨前文对比", "精细修改", "产出报告"],
              datasets: [
                { label: "传统线性 Chat", values: [15, 45, 80, 110, 150] },
                { label: "神经网格空间 (Synapse)", values: [10, 22, 35, 45, 50] }
              ]
            }
          }
        ]
      },
      {
        title: "体验策略 & 脑图架构 (UX Strategy)",
        description: "确立基于「空间连线」和「流式容器」的节点控制逻辑。用户可自定义组合多张 Prompt 提示词卡片，并在其间通过拖拽连接线，精确指导信息上下文的物理流动路径。",
        category: "UX Strategy",
        artifacts: [
          {
            id: "data_flow_map",
            title: "上下文物理继承与状态流转拓扑",
            type: "architecture",
            data: {
              nodes: [
                { id: "p1", name: "系统前置 (System Prompt)", x: 20, y: 30 },
                { id: "n1", name: "节点 A: 背景研究", x: 45, y: 15 },
                { id: "n2", name: "节点 B: 平行构写", x: 45, y: 45 },
                { id: "n3", name: "端点 C: 最终校订", x: 80, y: 30 }
              ],
              edges: [
                { from: "p1", to: "n1", label: "Inherit API" },
                { from: "p1", to: "n2", label: "Inherit API" },
                { from: "n1", to: "n3", label: "Combine Context" },
                { from: "n2", to: "n3", label: "Compare Variant" }
              ]
            }
          }
        ]
      },
      {
        title: "空间层级与网格设计 (IA)",
        description: "将界面要素以瑞士网格的比例精确铺陈在无限画布（Canvas）中。全局提供侧边全局仪表，并在画板中央通过像素级平移来实现多线程任务的视觉区隔。",
        category: "Information Architecture",
        artifacts: [
          {
            id: "viewport_wireframe",
            title: "12 列高对比度瑞士视口信息网格",
            type: "wireframe",
            data: {
              gridcols: 12,
              elements: [
                { name: "侧栏控制台", start: 1, span: 2, desc: "全局参数 / 令牌监控" },
                { name: "主探索无限空间 (Canvas Zone)", start: 3, span: 8, desc: "双击卡片区 & 自由分支拓扑" },
                { name: "右侧多态辅助窗", start: 11, span: 2, desc: "AI 状态反馈与设计资产库" }
              ]
            }
          }
        ]
      },
      {
        title: "手势与智能控制微交互 (Interaction Design)",
        description: "深入研究了摩擦系数、弹性位移以及边缘检测算法。卡片可进行无冲突磁力吸附，连线操作支持「光线透射」和「逻辑气泡剪切」，彻底解决画板复杂的繁乱状态。",
        category: "Interaction Design",
        artifacts: [
          {
            id: "connector_flow",
            title: "智能碰撞和弹性重组过渡手势状态机",
            type: "flow",
            data: {
              states: [
                { name: "Idle", desc: "自由悬浮态" },
                { name: "Dragging", desc: "位置移动时动态更新相邻边" },
                { name: "snapping", desc: "靠近节点 24px 时自动物理吸附" },
                { name: "Combined", desc: "建立父子物理上下文依赖" }
              ]
            }
          }
        ]
      },
      {
        title: "高定单色视觉细节 (Final UI)",
        description: "界面完全精简为高灰阶的单黑色、极淡的边框线与优雅的等宽排版。通过精心调校的灰色过渡、单色文字加粗及自定义图标来建立视觉层级，带来高级 SaaS 的沉浸感。",
        category: "Final UI",
        artifacts: [
          {
            id: "core_ui_layout",
            title: "极致极简卡片与等宽交互实景模拟",
            type: "ui",
            data: {
              theme: "Monochrome Light",
              features: [
                { key: "等宽打字流", val: "Fira Code, 13px, 字间距缩减 -0.02em" },
                { key: "卡片边线", val: "1px border-neutral-100 / font-medium style" },
                { key: "背景基底", val: "纯白 Swiss Dots 浮雕网格点，间距 16px" }
              ]
            }
          }
        ]
      },
      {
        title: "语义变量库规范 (Design System)",
        description: "为了适配多端极限展示，我们定制了一套原子级的物理排版与色彩系统。舍弃彩色调色盘，定义灰度值为极高对比度（Contrast Ratio > 7:1），符合 WCAG 极限排版规范。",
        category: "Design System",
        artifacts: [
          {
            id: "palette_tokens",
            title: "单色多级语义层级变量表 (Monochrome Tokens)",
            type: "tokens",
            data: {
              tokens: [
                { name: "bg-primary", value: "#FFFFFF (高亮纯白背景)" },
                { name: "text-primary", value: "#000000 (饱满黑文本)" },
                { name: "border-quiet", value: "#E5E5E5 (1px 宁静灰界分线)" },
                { name: "card-interactive", value: "#F9F9F9 (高拟真可交互面板色)" },
                { name: "accent-glow", value: "#171717 (深邃暗光控制高亮色)" }
              ]
            }
          }
        ]
      },
      {
        title: "长期迭代与量化成就 (Reflection)",
        description: "经过 6 个月的核心产品内测和公开社区推广，Synapse 取得了优异的业务及满意度成就，证实了这一新型空间人机交互的可行性。",
        category: "Reflection",
        artifacts: [
          {
            id: "success_growth_curve",
            title: "用户 90 天功能使用粘性与次月留存对比",
            type: "metrics",
            data: {
              labels: ["第1周", "第2周", "第4周", "第8周", "第12周"],
              datasets: [
                { label: "传统 SaaS 方案", values: [40, 28, 20, 15, 12] },
                { label: "Synapse Canvas 空间用户", values: [85, 78, 69, 65, 62] }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: "krypton-debugger",
    category: "视觉运营设计",
    name: "汽水音乐APP年度报告",
    title: "汽水音乐APP年度报告",
    subtitle: "以数据为笔，书写用户的年度音乐故事，以此建立更深厚、更持久的情感纽带",
    keywords: ["视觉叙事", "氛围感造", "建立心智", "创建IP", "搭建场景"],
    year: "2025",
    role: "联创 & 设计总监",
    coreStatement: "年终岁末，年度报告已成为平台的标志性传统，创建IP形象，加强用户品牌感知，提升用户分享意愿，增强用户粘性。",
    timeline: "2024.11 - 2025.08",
    projectType: "商业联合创始人项目",
    background: {
      industryProblem: "随着音乐平台竞争逐渐从“功能体验”转向“情感连接”，年度报告已不仅是用户数据的简单汇总，而是平台与用户之间的重要情绪沟通场景。",
      userProblem: "汽水音乐作为偏年轻化、轻松化的音乐平台，需要通过年度报告进一步强化品牌记忆点，将用户的听歌行为转化为具有情绪价值的年度回忆，提升用户分享意愿与平台传播声量。",
      businessGoal: "因此，本次项目围绕“年轻、轻盈、情绪化”的品牌特征展开，以用户年度音乐数据为核心，通过IP化视觉语言与场景化叙事，打造具有陪伴感、记忆感与分享欲的年度音乐报告体验。"
    },
    strategy: {
      insights: [
        "IP化视觉 × 强化品牌记忆\n围绕汽水音乐“年轻、轻松、潮流”的品牌调性，打造具有果冻质感与拟人化特征的音乐IP形象",
        "数据情绪化 × 构建用户共鸣\n将用户年度听歌数据转化为生活化、情绪化的内容表达，通过时间节点、听歌习惯、年度歌单等维度，重新唤起用户一年的音乐记忆。",
        "场景轻量化 × 提升分享传播\n整体视觉采用高饱和荧光绿与柔和渐变光效，搭配云朵、流光、轨道等轻盈元素，营造年轻化、未来感的音乐氛围，降低用户阅读压力。"
      ],
      uxStrategy: "构建「时序漫游器」。左侧为精密的 Fira Code 源码窗，右侧是动态渲染的 DAG 依赖调用拓扑图。在程序崩溃的一刹那，将错误堆栈里的每一行直接拉起为拓扑图上的红点路径，点击任一点即可展开时光穿梭机（Snapshot Timeline），往回推移整个线程状态。",
      designDirection: "极具硬核工程师审美（Brutalist Technical Vibe）。借鉴经典物理科学仪器界面的精准性，使用黑底白字的极限高对比排版。全部组件均带有严谨的细线测角仪、辅助网线和精确尺度标注。"
    },
    showcaseSections: [
      {
        title: "研究阶段 (Research)",
        description: "在调试复杂项目时，我们对 80 位多线程开发者进行了眼动轨迹和痛苦点（Pain points）统计，发现以下关键的资源跨度阻碍：",
        category: "Research",
        artifacts: [
          {
            id: "gaze_flow_painpoint",
            title: "常规调试下开发者的视线流失与上下文崩溃示意",
            type: "mindmap",
            data: {
              center: "眼动阻滞关键",
              nodes: [
                { label: "频繁跳页换文件", weight: "38% 专注流失", color: "black" },
                { label: "寻找上游依赖", weight: "24% 脑力虚耗", color: "gray" },
                { label: "推演并发锁时序", weight: "42% 概率出错", color: "black" }
              ]
            }
          }
        ]
      },
      {
        title: "调用依赖拓扑原型 (UX Strategy)",
        description: "使用三维交互或多向图布局，将包含数万个模块依赖的庞大系统自适应收拢，仅对当前崩溃分支进行高对比度的实体渲染。",
        category: "UX Strategy",
        artifacts: [
          {
            id: "dependency_flow",
            title: "时序切片的非循环 DAG 调用链路",
            type: "architecture",
            data: {
              nodes: [
                { id: "m1", name: "Entry_Main.ts", x: 10, y: 30 },
                { id: "m2", name: "Macro_Loader.rs (代码锁)", x: 45, y: 15 },
                { id: "m3", name: "State_Store.go (死锁触发)", x: 45, y: 45 },
                { id: "m4", name: "Render_Worker.wasm", x: 80, y: 30 }
              ],
              edges: [
                { from: "m1", to: "m2", label: "Spawn Thread" },
                { from: "m1", to: "m3", label: "State Mut" },
                { from: "m3", to: "m2", label: "Race Conflict" },
                { from: "m3", to: "m4", label: "Output Sync" }
              ]
            }
          }
        ]
      },
      {
        title: "界面双视角布局 (IA)",
        description: "严格遵照工业物理仪表的经典 32 像素网格进行内容对称分割。引入精确的 1/2 割裂屏幕设计（Split-pane Layout），左边源码，右边系统热力图模型。",
        category: "Information Architecture",
        artifacts: [
          {
            id: "krypton_wireframe",
            title: "Krypton Core 编译器 1:1 双重视界骨架",
            type: "wireframe",
            data: {
              gridcols: 10,
              elements: [
                { name: "代码文件目录", start: 1, span: 2, desc: "扁平文件流" },
                { name: "等宽源文本编辑区", start: 3, span: 4, desc: "嵌入式堆栈红线" },
                { name: "空间调用图解仪表盘", start: 7, span: 4, desc: "并发物理拓扑模型面" }
              ]
            }
          }
        ]
      },
      {
        title: "时光回溯手势（Time Slicing Interactivity）",
        description: "设计了一条具有微妙物理阻尼的滑动刻度线。拖拽该时间轴时，整个内存 DAG 会立刻动态展开并演示数据的逐原子读写演变，犹如在剪辑一段数据电影。",
        category: "Interaction Design",
        artifacts: [
          {
            id: "time_travel_interact",
            title: "时光穿梭时序微动状态阶段",
            type: "flow",
            data: {
              states: [
                { name: "Time 0ms", desc: "正常初始化态" },
                { name: "Time 120ms", desc: "主线程试图劫持互斥量" },
                { name: "Time 240ms", desc: "冲突爆发，卡片震颤报警提示" },
                { name: "Time 300ms", desc: "堆栈挂起，生成直视回退补丁" }
              ]
            }
          }
        ]
      },
      {
        title: "Brutalist 瑞士工程视觉 (Final UI)",
        description: "彻底摒弃现代渐变糖果色。黑字、粗像素线条、高纯度灰色打底、配合纯白底色在夜间散发的无眩光冷静冷调，形成极高精确专业感。",
        category: "Final UI",
        artifacts: [
          {
            id: "krypton_ui_details",
            title: "100% 对齐线条与高反度文字模拟实测",
            type: "ui",
            data: {
              theme: "Solid Monochromatic",
              features: [
                { key: "错误路径高亮", val: "纯黑充填带 1.5px 急性实边线，字体粗体" },
                { key: "物理网格尺", val: "带有精密微米标记刻度线，完全配合等宽排布" },
                { key: "调试流卡片", val: "舍弃常规阴影，完全使用 1px 实线框定义，极其干爽" }
              ]
            }
          }
        ]
      },
      {
        title: "工业级设计规范与多态原子 (Design System)",
        description: "本系统为编译器量身制定开发，对行高、等宽字体比例和控制信号符号具有精确定义。以下为我们为 Krypton 构建的底层微型排版 Token 代码体系：",
        category: "Design System",
        artifacts: [
          {
            id: "krypton_tokens",
            title: "微米级硬核组件系统与测绘规范",
            type: "tokens",
            data: {
              tokens: [
                { name: "font-mono-comp", value: "JetBrains Mono (对齐所有变量宽度)" },
                { name: "stroke-gauge", value: "0.75px solid #000 (极细精密实体线)" },
                { name: "signal-danger", value: "纯黑带点阵警示 (拒绝彩光晕，使用实体标度)" },
                { name: "depth-elevation", value: "无投影，完全利用灰度叠加形成双层厚度 Z 轴" }
              ]
            }
          }
        ]
      },
      {
        title: "用户价值与核心调试效率提升 (Reflection)",
        description: "在开源公测中，Krypton 让并发死锁的平均发现与解决耗时由以往的 2.4小时 急剧下降至 7.2分钟。这一数据向业界证明，将深邃的代码抽象化物理呈现能创造何其磅礴的商业生产力。",
        category: "Reflection",
        artifacts: [
          {
            id: "debug_efficiency_metrics",
            title: "开发人员多线程 Debug 时长对比",
            type: "metrics",
            data: {
              labels: ["小文件排查", "常规堆栈解读", "大型 DAG 分析", "跨系统锁死态推演", "冲突打补丁实测"],
              datasets: [
                { label: "传统 VSCode / GDB", values: [20, 45, 95, 180, 240] },
                { label: "Krypton Core 空间拓扑", values: [5, 12, 18, 30, 45] }
              ]
            }
          }
        ]
      }
    ]
  },
  {
    id: "atla-tokens",
    category: "大系统 & 交互底层架构",
    name: "Atla Systems (多层态设计系统)",
    title: "跨形态语义演变的动态流动体系",
    subtitle: "针对复杂企业端和创作者应用的超级语义库规范。运用优雅的数学曲率生成自适应极高对比度设计框架",
    keywords: ["设计系统", "语义体系", "对比度规范", "自适应缩放", "极限工程化"],
    year: "2024",
    role: "核心发起人 & 体验工程师",
    coreStatement: "建立一套超越传统扁平变量的智能多层态设计规范（Dynamic Polymorphic Token System）。在不同屏幕硬件、明暗光线下，界面元素可随数学对数曲率弹性改变内凹或凸起比例。",
    timeline: "2023.09 - 2024.10",
    projectType: "核心发起与深度架构项目",
    background: {
      industryProblem: "多端（Web, App, 车机卡片, 视网膜穿戴）下的 UI 系统往往由于维护数千个静态色彩和尺寸变量而散落、冲突。各平台的视觉质量参差不一，工程团队难以实现对数级快速调改。",
      userProblem: "不仅设计师要重复维护庞大的 Figma 系统文件，工程师也终日迷失在毫无逻辑的硬编码多行 css 参数中，每改一次主题都导致毁灭性的性能回退或视觉破损。",
      businessGoal: "通过建立高度数学化的几何与色彩语义引擎，让设计到代码的交付流程实现「零损耗自动映射」，并将整个企业端的设计效率提速 500%。"
    },
    strategy: {
      insights: [
        "优秀的工业界卓越规范（如 Braun、Dieter Rams）不依靠直觉来界定色彩和间距，而是有着极为敏捷的内部数列规律。",
        "界面的本质是关于光和影的隐喻，我们要做的不是定义具体颜色，而是定义色彩在自适应底板上的「反射与透射率」。",
        "真正的系统统一，并不妨碍因设备显示极限（如低分 E-Ink 屏与高刷 120Hz 屏）进行无缝曲率修正。"
      ],
      uxStrategy: "设计并开源多平台 Atla 物理生成器，包含一个完全自适应的 12 阶阶梯参数库，使得设计师只需调节 3 个物理旋钮：Contrast Ratio（对比调节）、Rounded Corner Curvature（圆角数学曲率，完美遵循 Lamé 超椭圆）、以及 Spatial Elevation Grid（空间深度级）。",
      designDirection: "重回早期欧洲印刷排版（Late Swiss Typographic Movement）的干练气韵。极致讲究字偶距（Kerning）、基线对齐以及行首行末边界的完美均衡割切。去除视觉噪音，用大字号与白描式的结构框线表达极致严谨性。"
    },
    showcaseSections: [
      {
        title: "定性调研与参数验证 (Research)",
        description: "研究了过去 15 年来硅谷最顶尖的 10 个商业产品系统的变量依赖拓扑，得出系统变量（Tokens）由于无规随意增长而快速退化坏死的内在演进机制：",
        category: "Research",
        artifacts: [
          {
            id: "system_evolution_pain",
            title: "随着功能扩张设计系统复杂度灾变图示",
            type: "mindmap",
            data: {
              center: "Token 退化原因",
              nodes: [
                { label: "语义层缺失", weight: "直接引用硬码值", color: "black" },
                { label: "人工多渠道同步", weight: "Figma 与 Git 脱钩", color: "gray" },
                { label: "过度设计层", weight: "四级或五级嵌套", color: "black" }
              ]
            }
          }
        ]
      },
      {
        title: "12 阶阶梯等曲率拓扑 (UX Strategy)",
        description: "首创对数多极过渡算法，让界面边缘圆角在缩放时自调整。在圆角（R=0px 到 24px）之间，完美沿袭高雅的 Squircle 弧度公式，使其在视觉感受上不带有任何突兀拐点。",
        category: "UX Strategy",
        artifacts: [
          {
            id: "squircle_curve_node",
            title: "完美 Lamé 超椭圆曲线与常规圆角视觉反射率差距",
            type: "architecture",
            data: {
              nodes: [
                { id: "s1", name: "微米圆角控制点 (Point 1)", x: 15, y: 15 },
                { id: "s2", name: "圆角中垂渐近曲线 (Gradient 12)", x: 50, y: 35 },
                { id: "s3", name: "曲率最大衔接面 (Tangent 4)", x: 85, y: 15 }
              ],
              edges: [
                { from: "s1", to: "s2", label: "0阶曲率平滑" },
                { from: "s2", to: "s3", label: "2阶超椭圆拟合" }
              ]
            }
          }
        ]
      },
      {
        title: "系统物理网格布局映射表 (IA)",
        description: "由 Atla 全局控制引擎来自动分配每一级栏宽与页内衬垫（Paddings）。在多分辨率下，网页通过几何阶梯式等比放缩，任何设备都恰如海报般稳重精密。",
        category: "Information Architecture",
        artifacts: [
          {
            id: "atla_grid_skeleton",
            title: "Atla 自适应网格自适应比率分布",
            type: "wireframe",
            data: {
              gridcols: 8,
              elements: [
                { name: "网格边缘安全垫", start: 1, span: 1, desc: "32px / 48px 变距" },
                { name: "核心语义卡展示带", start: 2, span: 6, desc: "等比超纯色容器，带曲率缩放" }
              ]
            }
          }
        ]
      },
      {
        title: "语义缩放引擎实时微交互 (Interaction Design)",
        description: "主控台内置实时物理推子控制器。当你左右滑动时，能够看到全平台的微件圆角、线条粗细和文字字重进行极致丝滑的关联形态变化。",
        category: "Interaction Design",
        artifacts: [
          {
            id: "live_scale_process",
            title: "Atla 主控旋钮联动状态过渡拓扑",
            type: "flow",
            data: {
              states: [
                { name: "拉杆拖拽 (Action)", desc: "用户交互操作" },
                { name: "曲率重构 (Interpolation)", desc: "数学阶梯计算各级圆角" },
                { name: "重新渲染 (Apply Custom CSS)", desc: "CSS Variables 瞬回刷新" },
                { name: "终端对齐 (Platform Verified)", desc: "多态全适配完美确认" }
              ]
            }
          }
        ]
      },
      {
        title: "纯正瑞士排版杰作 (Final UI)",
        description: "精密的文字排列是本方案的立身之本。字里行间的比例关系完全仿刻传奇苏黎世画展海报风格，极度注重视觉白空间（White Space）的留白艺术。",
        category: "Final UI",
        artifacts: [
          {
            id: "atla_final_typography",
            title: "极致纯字排版与像素测绘精细节展示",
            type: "ui",
            data: {
              theme: "Neo-Swiss Editorial",
              features: [
                { key: "版面留白率", val: "高达 52% 极限空间留白，凸显优雅结构" },
                { key: "边线极淡处理", val: "1px border-neutral-200 勾勒，绝对不喧宾夺主" },
                { key: "核心指示图标", val: "Figma 原生定制极细矢量白描线稿" }
              ]
            }
          }
        ]
      },
      {
        title: "多态通用设计变量体系代码库 (Design System)",
        description: "在设计系统中，我们将所有数学参数固化为统一标准，并通过 GitHub Action 自动跨平台同步为 CSS、iOS Swift 以及 Android XML 语法格式。",
        category: "Design System",
        artifacts: [
          {
            id: "atla_core_properties_list",
            title: "Atla 主语义 Token 层级映射模型",
            type: "tokens",
            data: {
              tokens: [
                { name: "--atla-radius-outer", value: "完美 Lamé 超曲线 R=12px (完美 Squircle)" },
                { name: "--atla-stroke-accent", value: "1.25px 纯黑 (边缘精确轮廓感)" },
                { name: "--atla-spacing-unit", value: "8px 对数模数 (8 | 16 | 32 | 64 | 128)" },
                { name: "--atla-font-title", value: "Outfit + Inter (时尚典雅与高可读兼具)" }
              ]
            }
          }
        ]
      },
      {
        title: "系统级性能与交付周期提速 (Reflection)",
        description: "在数家拥有千万级用户的独角兽公司部署后，Atla 成功将前中后台产品研发的 UI 调整开发周期由通常的 2周 彻底归结到 30秒 的自动化极速刷新。极简与系统化的联姻，在工程上散发出极其璀璨的光芒。",
        category: "Reflection",
        artifacts: [
          {
            id: "atla_engineering_perfs",
            title: "采用 Atla 语义网后多端 UI 变更链路耗时",
            type: "metrics",
            data: {
              labels: ["设计更改", "同步走查", "代码打包", "移动端同步", "多端完全对齐"],
              datasets: [
                { label: "人工多工具维护", values: [60, 120, 240, 480, 720] },
                { label: "Atla 动态网系统", values: [2, 5, 8, 12, 15] }
              ]
            }
          }
        ]
      }
    ]
  }
];

export const ARTICLES: Article[] = [
  {
    id: "ai-ux-spatial",
    title: "AI 与 UX 隐喻：乱序生成时代的空间解法",
    slug: "ai-ux-spatial-metaphor",
    category: "AI + UX / 交互未来",
    date: "2026.04",
    readTime: "6 min read",
    summary: "大语言模型带来的多极信息输出，正在挑战我们长达半个世纪的「线性文件夹与输入框」设计成规。空间排布与神经连线，将是人类驯服不确定性生成的极佳疆域。",
    content: [
      "自第一个现代图形用户界面（GUI）诞生以来，我们就习惯于线性、静态的文件和层级隐喻。用户点击按钮，得到一个确定的窗口；输入一段参数，获得一串可预期的行文本。然而，生成式人工智能（Generative AI）的崛起彻底击碎了这一确定性基石。AI 可以在微秒内爆发出庞大、发散且带有多条合理路径的代码与创意流。如果仍然用一维的、类似于微信或 Slack 的单向对话聊天框来盛装如此庞大复杂的平行宇宙，是典型的手工时代对工业动能的暴暴限制。",
      "我们在主导 Synapse Canvas 这套空间方案时发现，要缓解不确定生成的认知焦虑，终极方向是将「操作时序」转化为「空间图谱」。通过将 AI 孕育出来的平行文本、交互原型或是编译切片承托于一块「无限网格画布 (Infinite Canvas)」上，用户就能以俯瞰、关联、吸附和分支分叉等空间手势，自然而然地在大脑中构建并调理复杂推理。这一隐喻符合人类作为三维动物对物理位置的天然敏感性，它让用户第一次对拥有自主思考的软介质夺回了物理控制权。",
      "下一代 AI-Native 产品的核心交互词汇，不应当再是「Submit（提交）」或「Chat（对话）」，而是「Fork（分叉）」、「Collide（对撞）」、「Glow（聚焦高亮）」和「Layer（层级展开）」。当界面可以用极其冷静的黑色粗边描框，把不同的 prompt 流推上瑞士网格时，软件正从一个冷漠的命令执行工具，变作一个宽容、立体、可以随意拓深并保留思维线索的交互式实体记忆面包板。"
    ]
  },
  {
    id: "future-interaction-mind",
    title: "从单向指令到共生心智的媒介演变",
    slug: "future-interaction-co-mind",
    category: "人机协同 / 交互未来",
    date: "2026.02",
    readTime: "5 min read",
    summary: "在全自动 AI Agent 与人类高度协同的未来，我们的界面不能仅仅扮演「监视器」。如何通过巧妙的可视化，在毫秒级内展示 Agent 群落的合作、决策与时限流转？",
    content: [
      "今天人们在使用 AI 时，最频繁的痛点往往是：‘为什么它没有按照我说的做？’ 或者是 ‘它在后台偷偷干了什么，怎么突然得出了这么一个匪夷所思的结果？’ 这源于一个极度不透明、宛如黑盒的心智鸿沟。当前大多数 AI 产品只是将 Agent 当成后台的静默脚本，执行完便扔出一个冷漠的结论。当多个 Agent 互联并协同执行庞大任务（如编写全套系统、策划长篇报告）时，黑盒就变成了一种完全不可靠的失真魔术。",
      "我们需要一套全新的「心智透明式界面（Cognitive Transparency Interface）」。界面应当像一台精密的物理仪器，毫无保留、优雅精密地展现 Agent 之间的‘对话状态’、‘工具调用链’以及‘推演确信度变化’。在设计调试工具 Krypton Core 的过程中，我们将 Agent 之间的数据拉扯和共享语义在极干练的黑白 DAG 上进行了实时可视微动渲染。这种白描式的视觉重构，能让工程师一目了然地看到究竟是哪一个特定节点产生了认知偏置、在何时发生了死锁，或者哪两个逻辑变量发生了数据争夺。",
      "这不是为了装点花里胡哨的技术 Larping  telemetry，而是有着极其强烈的实用功效 —— 它向用户出让人机协作最缺乏的「透明度」与「可预知度」。唯有建立了心智层面的精确可视化共震，人机之间真正的互信、并驾齐驱的共生体探索才有可能开启。极致的极简并不代表简陋的隐藏，而是用最干脆利落的线条与完美排字，把最关键的信息高密度、无多余装饰地彻底透明化展现。"
    ]
  },
  {
    id: "designer-to-builder-browser",
    title: "为什么现代设计师应当直接在浏览器与代码中构建？",
    slug: "designer-to-builder",
    category: "个人哲学 / 生态思考",
    date: "2025.12",
    readTime: "8 min read",
    summary: "Figma 作为画板，其静态属性已在 AI 时代成为阻碍。卓越的产品设计师唯有夺回对真实媒介（HTML, Tailwind, AST 树）的直接掌控，才能做出富有灵魂且极度细腻的产品交互。",
    content: [
      "整个互联网设计界在过去相当长的一段时间内，沉陷于一种虚妄的‘画纸幻觉’中。我们躲在 Figma 或 Sketch 优雅的矢格画布里，极其精细、强迫症似地排列着无法真正触碰、无法动态感应、完全脱离真实世界物理响应的「静态像素截图」。而后，我们通过冗长、失真、充塞着反复扯皮的「设计说明书」将这些二维截图移交给工程师，指望他们在各种屏幕环境、高并发延迟下猜出我们脑中的丝滑体验。这种割留方式是极端低效的，更是对交互质感的巨大退化。",
      "在 AI 直接生成代码与运行时环境（Runtime）的当下，这种鸿沟应当被彻底铲除。Figma 只是起跑时的草图本，决不应是交互大师的最终交付物。真正带有直觉弹性、微秒响应、优雅微震细节的极致界面，绝不可能是在静态平面工具里「看」出来的，而是在真实的浏览器 DOM 树、弹性 CSS Grid 物理模拟器、以及状态流转逻辑里「调」出来的。设计师的真正材质，不只是圆角和色值，而是「交互事件流」、「微秒过渡衰减（Bezier Curve）」以及「网络状态兜底响应」。",
      "当我完全投身于直接用 React、Tailwind 和 Framer/Motion 混合撰写底层，并在终端和编译器里观察每个像素时，我获得了前所未有的自由度与绝对控制。你能够感知到在鼠标移入的 80 毫秒内，高对比线条应该如何微微延迟 15 毫秒再行收敛，从而在眼球聚焦中呈现最高雅的弹性质感。这是在画图软件里复制一百次都无法体悟的细节。设计师需要重返「手工艺匠（Builder）」的光荣传统，与真实的代码媒介贴身搏斗，去直接指挥逻辑和渲染的每一次跳动。"
    ]
  },
  {
    id: "ai-workflow-one-hour",
    title: "我们如何借助 AI 工作流在一小时内启动并迭代百万日活产品",
    slug: "ai-workflow-one-hour",
    category: "创始思考 / 开发工作流",
    date: "2025.10",
    readTime: "7 min read",
    summary: "抛弃传统的冗长瀑布流开发。分享我们独创的「全谱系 AI 辅助共创环」：从核心心智构建、语义 Token 化，到精细代码直输的高效自循环机制。",
    content: [
      "一小时听上去是个带有哗众取宠意味的商业行销数字，但在现代极简高密度编译工具与大模型的超级加持下，它已经成为我们小而精悍、乃至单人创始人团队的主频工作常态。以前做一个产品，需要漫长的战略会、线框图定性会、高保真走查讨论、前后端接口定义、测试用例编写。在这趟长达三个月乃至半年的漫长泥泞中，最初由直觉、本能触发的那道纯粹的产品灵感核心（Core Vital Spark），早就被反复揉搓、妥协至平庸无奇。产品因此失去了性格，变得像是一杯充满企业温水的量化流水线工业产品。",
      "我们的新型 AI 加速流（Atla Devops Engine）完全重组了这一路径。它首创将「设计与代码」融合成同一套由语义控制的大模型描述符。当有新的灵感时，我们不再新建设计画板，而是直接对 AI 的上下文环境用「瑞士网格和几何比例」来抽象描述界面的主物理骨架。因为我们的色彩完全遵循 Atla 多态语义库（黑白极简，无渐变冗余，对比极度明确），AI 在一瞬间就能把高保真 HTML 和带有精确贝塞尔微动的交互原子，完美地直接拼装在本地热重载调试宿主内。我们仅需像捏泥塑一样，微调那几行极致对齐和弹性边距的值即可。",
      "通过这套极度高效、高度敏捷的多模态自循环，我们可以跳过所有人工翻译和层层转手，把第一直觉用最纯粹、最毫无折损和最高雅的工艺，在几十分钟的时间内直接端到真实用户面前去感官校验。真正的创造力不需要繁文缛节与庞大层级阻隔。唯有极其纯粹、高度透明的设计到工程闭环，才能让一款软件自启动的第一秒开始，就释放出一种近乎偏执、无可妥协而又智能非凡的奢华品质。"
    ]
  },
  {
    id: "design-education-intuition",
    title: "取缔像素微调，在更高维度的系统和哲学直觉里思考设计",
    slug: "design-education-intuition-philosophy",
    category: "教育思考 / 观点哲学",
    date: "2025.07",
    readTime: "5 min read",
    summary: "当基础拼装和日常界面代码生成已被 AI 降本为零，新一代设计师的核心壁垒在哪里？答案隐藏在对人类底层心理学、数学公式曲度，以及对系统边界、纯粹留白艺术的深度体悟中。",
    content: [
      "传统的交互设计师教育和训练中，有超过 70% 的时间被耗费在了一些极其无趣、堪称‘高技术打字员’的低纯度体力活上：如何徒手切出各种尺寸图标导出包、如何在不同状态页里一张张复制粘贴改文本、如何写一万字文档向开发说明弹窗应该居中还是置顶。这是一种对天赋思维与产品魂魄的巨大磨灭。如果你的核心价值只是熟练记忆和操使 Figma 的组件变体（Auto-layout & Variants），你已经在被智能代理（Agent）无情取替与淹没的黄昏边缘。",
      "AI 极大解散了重复低阶装配的成本，把设计的本质门槛高高架设在了一个前所未有的「全貌系统直觉（Systemic Intuition）」高度。在此格局下，卓越的设计师不再是‘画出特定按钮的人’，而是‘为软件规定运行物理法则、对比规范与空间心智模型的哲学家与数学家’。你需要理解 Lamé 曲线如何在负空间（Negative Space）中调谐眼球神经压力；你需要设计具有弹性的语义网络，让千万级别的组件能在极简底色之上达成最干脆爽朗的对齐；你更需要深刻体味人类底层对于「确定感」与「探索欲」这双重矛盾本能的心理妥协。",
      "所以，不要再去狂刷无聊的组件画板，而要走出去，去阅读老一辈排版泰斗（如 Emil Ruder, Josef Müller-Brockmann）关于字距和白空间的几何网格杰作；去把玩经典的 Braun 极简物理实体旋钮，感受那种带有段落分明、无可辩驳的物理阻阻与喀哒咬合体验；去亲手写一些原生动画阻尼曲线，去感知网络卡顿 200毫秒时完美的骨架渐变。在更高维度的系统深度及审美执念里，在代码和哲学的坚固交叉点上思考，这是我们守护人类产品交互灵魂、抵抗平庸 AI 垃圾生成浪潮的最后也是最优雅的防线。"
    ]
  }
];

export const IMAGES = {
  founderPortrait: "/src/assets/images/founder_portrait_1779277018368.png",
  // List of high-fidelity Unsplash mockups that match each slide perfectly
  douyinPresets: [
    "/project1_1.png",
    "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1618005198143-e52834644541?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1531315630201-bb15abeb1653?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1618005198143-e52834644541?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1531315630201-bb15abeb1653?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80"
  ],
  sodaPresets: [
    "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80"
  ]
};

