import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  Briefcase, 
  Trophy, 
  Cpu, 
  Camera, 
  ChevronRight, 
  Terminal, 
  Award,
  BookOpen,
  Mail,
  Phone,
  MessageSquare,
  Music,
  Film,
  Dribbble,
  Calendar,
  User,
  Heart,
  Snowflake,
  Target
} from 'lucide-react';

interface TimelineItem {
  period: string;
  title: string;
  subtitle: string;
  gpa?: string;
  details: string[];
}

interface SkillGroup {
  category: string;
  skills: string[];
  level: string; // e.g. "Core // 核心", "Secondary // 辅修"
}

interface AwardItem {
  year: string;
  title: string;
  subtitle: string;
  org: string;
}

interface HobbyItem {
  icon: any;
  title: string;
  desc: string;
  keywords: string[];
}

export default function PersonalInfo() {
  const [activeTab, setActiveTab] = useState<'personal' | 'experience' | 'education' | 'skills' | 'awards' | 'hobbies'>('personal');

  const tabs = [
    { id: 'personal', num: '01', label: '个人详情', subLabel: 'PERSONAL_DETAILS', icon: User },
    { id: 'experience', num: '02', label: '工作经历', subLabel: 'PROFESSIONAL_EXP', icon: Briefcase },
    { id: 'education', num: '03', label: '校园经历', subLabel: 'ACADEMIC_EXP', icon: GraduationCap },
    { id: 'skills', num: '04', label: '专业技能', subLabel: 'CORE_CAPABILITIES', icon: Cpu },
    { id: 'awards', num: '05', label: '奖项经历', subLabel: 'HONORS_AWARDS', icon: Trophy },
    { id: 'hobbies', num: '06', label: '兴趣爱好', subLabel: 'INTERESTS_HOBBIES', icon: Heart },
  ] as const;

  const educationData: TimelineItem[] = [
    {
      period: "2021.09 - 2025.06",
      title: "陕西理工大学 // Shaanxi University of Technology",
      subtitle: "环境设计 // 学士学位 (Environmental Design // Bachelor)",
      details: [
        "主修环境设计、空间立体构成与几何学，深入探寻物理空间的美学体系和人机环境学规划。",
        "将物理空间的视觉叙事流、留白艺术与负空间资源分配无缝转化到 UI/UX 数字产品界面交互设计中。"
      ]
    },
    {
      period: "2022.10 - 2024.10",
      title: "陕西理工大学大艺团 // University Art Troupe",
      subtitle: "社团负责人 // Club President & Director",
      details: [
        "策划并圆满执行多场大型开学迎新晚会，主导品牌视觉传达：制作高水准宣传海报，撰写核心宣传文案，设计实体邀请函及活动日程表。",
        "全权统筹活动周边海报、宣传视频的多媒体物料渲染设计，并深度配合分发在抖音校园官方媒体账号之上。",
        "制定社团月度及周度宏观推进计划，成功管理并协调 11 人核心委员会干事团队，大幅提升了跨部门协作和中大型项目统筹管理能力。"
      ]
    },
    {
      period: "2021.10 - 2024.10",
      title: "陕西理工大学艺术学院新媒体社团 // Academy of Fine Arts - New Media",
      subtitle: "新媒体视觉总监 // Media design & production",
      details: [
        "为艺术学院等重点学术活动进行独立海报装帧设计，抓拍高质量艺术摄影、纪实影片摄制，完成全流程剪辑与美学把控。",
        "设计并独立完成了多项大艺和学院周边的高级宣发物料，包括专属宣传周边物料、应援棒、官方马甲服饰等，树立起极强的社团品牌统一感。"
      ]
    }
  ];

  const experienceData: TimelineItem[] = [
    {
      period: "2024.07 - 2024.09",
      title: "字节跳动（抖音） // ByteDance (Douyin)",
      subtitle: "UI/UX 交互设计实习生 // Design Intern",
      details: [
        "深度负责优化抖音APP「视频推荐」功能的体验性调优工作。完成从问题自查自检、用户场景调研、设计策略分析到完整最终高保真方案输出链路。",
        "针对性设计并重构推荐系统的一系列高阶推荐跳转链路，大幅提高推荐模块的相关用户持留率，并科学延长了用户的高粘性日均使用时长。"
      ]
    },
    {
      period: "2025.07 - 2026.01",
      title: "浙江省浙南综合工程勘察测绘院 // Zhejiang Zhenan S.S.&M. Institute",
      subtitle: "地质测绘技术员 // Geotechnical & Surveying Technician",
      details: [
        "负责在现场勘测野外或极端工程区域的地质灾害情况，全权厘清地盘水土稳定性、地质断层，提供科学完备的勘测报告，为工程设计及主体施工方案筑建最安全可靠的重要支撑。",
        "在极高精确要求的测绘实践中，建立起敏锐的空间几何感、像素级精密走查直觉以及极强的位置尺度习惯，促使在 UI/UX 数字网格交互中追求最完美的细节对齐。"
      ]
    }
  ];

  const skillsData: SkillGroup[] = [
    {
      category: "UX/UI 交互设计与视觉设计",
      skills: [
        "Figma 组件系统",
        "Photoshop (PS) 视觉处理",
        "Illustrator (AI) 创意插画",
        "高保真交互原型开发",
        "全链路视觉叙事"
      ],
      level: "核心优势"
    },
    {
      category: "空间规划与三维建模",
      skills: [
        "AutoCAD 二维工程制图",
        "3D Studio Max 三维空间造型",
        "SketchUp 建筑几何快速构造",
        "材质渲染与光影表现",
        "实体与数字空间交叉体验"
      ],
      level: "专业硬实力"
    },
    {
      category: "AI 创意工具与工作流",
      skills: [
        "AIGC 流程化设计导入",
        "Midjourney 精准提示词微调",
        "Stable Diffusion 姿态控制与重绘",
        "AI 辅助高效运营产出",
        "多维设计方案衍生筛选"
      ],
      level: "进阶工具应用"
    }
  ];

  const awardsData: AwardItem[] = [
    {
      year: "2024",
      title: "第四届 ICAD 国际青年美术设计大赛 // 国家级 铜奖",
      subtitle: "在国际青年跨界创意美术与交互构思类别中荣获国家级铜奖殊荣",
      org: "ICAD Association Committee"
    },
    {
      year: "2024",
      title: "山东省民宿主题设计大赛 // 省级三等奖",
      subtitle: "针对空间意境营造以及人文环境自适应的设计思路荣获省级三等奖",
      org: "山东省乡村建设及民宿创意大赛评委会"
    },
    {
      year: "2023",
      title: "陕西理工大学艺术学院「艺苑杯」设计竞赛 // 三等奖",
      subtitle: "在学院年度核心设计竞赛中凭借优异的创新设计方案获得三等奖",
      org: "陕西理工大学"
    },
    {
      year: "2024",
      title: "校级三等奖学金 // Third-tier Scholarship",
      subtitle: "因卓越的综合学术成绩与突出的社团领导才能被授予该荣誉",
      org: "陕西理工大学"
    },
    {
      year: "2023",
      title: "校级三好学生 // Outstanding Student",
      subtitle: "表彰在思想品德、专业学习及体育社团综合表现极具典范代表度的最高综合荣誉",
      org: "陕西理工大学"
    },
    {
      year: "2024",
      title: "大学英语四级 (CET-4) // English Level 4",
      subtitle: "CET505分，具备基本的沟通和阅读能力",
      org: "国家教育部考试中心"
    }
  ];

  const hobbiesData: HobbyItem[] = [
    {
      icon: Snowflake,
      title: "滑雪",
      desc: "",
      keywords: []
    },
    {
      icon: Dribbble,
      title: "篮球",
      desc: "",
      keywords: []
    },
    {
      icon: Target,
      title: "台球",
      desc: "",
      keywords: []
    },
    {
      icon: Film,
      title: "看电影",
      desc: "",
      keywords: []
    },
    {
      icon: Music,
      title: "听音乐",
      desc: "",
      keywords: []
    }
  ];

  return (
    <section id="profile-section" className="border-t border-neutral-100 py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
          <div>
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-2">
              02 // PERSONAL ARCHIVE
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight uppercase">
              个人信息
            </h2>
          </div>
        </div>

        {/* Desktop Split Grid / Mobile Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Left Column: Responsive Tabs */}
          <div className="lg:col-span-4 shrink-0 w-full">
            
            {/* Segment Tab Panel */}
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 gap-2 scrollbar-none border-b lg:border-b-0 lg:border-r border-neutral-100 lg:pr-4">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    id={`profile-tab-${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl w-full text-left transition-all relative cursor-pointer group min-w-[140px] lg:min-w-0 ${
                      isActive 
                        ? 'text-black font-semibold' 
                        : 'text-neutral-400 hover:text-neutral-800'
                    }`}
                  >
                    {/* Sliding Background Active Highlight */}
                    {isActive && (
                      <motion.div
                        layoutId="activeProfileTab"
                        className="absolute inset-0 bg-neutral-50 rounded-2xl border border-neutral-200/40 -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}

                    <span className="font-mono text-[10px] tracking-widest text-neutral-350 group-hover:text-neutral-550 transition-colors">
                      {tab.num}
                    </span>

                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-black' : 'text-neutral-400 group-hover:text-neutral-600'}`} />
                      <div>
                        <span className="text-xs tracking-tight block leading-none">{tab.label}</span>
                        <span className="font-mono text-[8px] text-neutral-400 tracking-wider block mt-0.5 uppercase">
                          {tab.subLabel}
                        </span>
                      </div>
                    </div>

                    <ChevronRight className={`hidden lg:block w-3.5 h-3.5 ml-auto transition-transform duration-300 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Selected Tab Content Display (With Animation Dynamics) */}
          <div className="lg:col-span-8 min-h-[380px] lg:pl-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="space-y-8"
              >
                
                {/* 1. PERSONAL DETAILS TAB */}
                {activeTab === 'personal' && (
                  <div id="personal-details-panel" className="space-y-6">
                    {/* Bio intro block */}
                    <div className="border border-neutral-100 p-6 md:p-8 rounded-3xl bg-neutral-50/20 hover:bg-neutral-50/50 hover:border-neutral-300/60 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center">
                          <User className="w-4 h-4" />
                        </div>
                        <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 font-mono">
                          // 姓名 NAME
                        </h3>
                      </div>
                      <p className="text-sm md:text-base font-bold text-neutral-800 font-sans tracking-tight">
                        叶文涛
                      </p>
                    </div>

                    {/* Metadata specs grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        { label: "年龄 AGE", value: "23 岁", detailLabel: "// YEAR OF BIRTH" },
                        { label: "专业 MAJOR", value: "环境设计", detailLabel: "// ENVIRO_DESIGN" },
                        { label: "学校 UNIVERSITY", value: "陕西理工大学", detailLabel: "// ACADEMIC" },
                        { label: "电话 TELEPHONE", value: "18057728807", detailLabel: "// PHONENUMBER" },
                        { label: "邮箱 EMAIL", value: "1069656782@qq.com", detailLabel: "// ENQUIRY" },
                        { label: "微信 WECHAT", value: "18057728807", detailLabel: "// WECHAT_ID" },
                      ].map((spec, sIdx) => (
                        <div 
                          key={sIdx} 
                          className="border border-neutral-100 p-5 rounded-2xl bg-neutral-50/20 hover:bg-neutral-50/50 hover:border-neutral-200 transition-all duration-300 space-y-2"
                        >
                          <div className="flex justify-between items-center text-[9px] font-mono text-neutral-400 uppercase tracking-widest">
                            <span>{spec.label}</span>
                            <span>{spec.detailLabel}</span>
                          </div>
                          <div className="text-sm md:text-base font-bold text-neutral-800 font-sans tracking-tight">
                            {spec.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. EXPERIENCE TAB */}
                {activeTab === 'experience' && (
                  <div className="space-y-8">
                    {experienceData.map((item, index) => (
                      <div 
                        key={index} 
                        id={`exp-card-${index}`}
                        className="group relative border border-neutral-100 p-6 md:p-8 rounded-3xl bg-neutral-50/20 hover:bg-neutral-50/50 hover:border-neutral-300/60 transition-all duration-300"
                      >
                        {/* Period Mono-Badge */}
                        <div className="inline-block font-mono text-[9px] bg-neutral-900 text-white px-2.5 py-1 rounded-sm uppercase tracking-widest mb-4">
                          {item.period}
                        </div>

                        {/* Title & Role */}
                        <div className="space-y-1 mb-6">
                          <h3 className="text-lg md:text-xl font-bold tracking-tight text-neutral-900 group-hover:text-black">
                            {item.title}
                          </h3>
                          <p className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider">
                            {item.subtitle}
                          </p>
                        </div>

                        {/* Bullet Milestones */}
                        <ul className="space-y-3.5">
                          {item.details.map((detail, dIndex) => (
                            <li key={dIndex} className="flex gap-3 text-xs md:text-sm text-neutral-600 leading-relaxed">
                              <span className="font-mono text-[9px] text-neutral-300 mt-1.5 select-none shrink-0">//</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* 3. EDUCATION TAB */}
                {activeTab === 'education' && (
                  <div className="space-y-8">
                    {educationData.map((item, index) => (
                      <div 
                        key={index}
                        id={`edu-card-${index}`}
                        className="group border border-neutral-100 p-6 md:p-8 rounded-3xl bg-neutral-50/20 hover:bg-neutral-50/50 hover:border-neutral-300/60 transition-all duration-300"
                      >
                        {/* Header metadata row */}
                        <div className="flex flex-wrap justify-between items-center gap-4 mb-5">
                          <div className="font-mono text-[9px] bg-neutral-100 text-neutral-800 px-2.5 py-1 rounded-sm uppercase tracking-widest">
                            {item.period}
                          </div>
                          {item.gpa && (
                            <span className="font-mono text-[10px] text-neutral-900 font-bold tracking-tight bg-neutral-100 border border-neutral-200/30 px-2.5 py-0.5 rounded-full">
                              ⭐ {item.gpa}
                            </span>
                          )}
                        </div>

                        {/* Uni Name & Major */}
                        <div className="space-y-1 mb-6">
                          <h3 className="text-lg md:text-xl font-bold tracking-tight text-neutral-900 group-hover:text-black">
                            {item.title}
                          </h3>
                          <p className="text-xs font-mono font-bold text-neutral-500 uppercase tracking-wider">
                            {item.subtitle}
                          </p>
                        </div>

                        {/* Experience Bullets */}
                        <ul className="space-y-3.5">
                          {item.details.map((detail, dIndex) => (
                            <li key={dIndex} className="flex gap-3 text-xs md:text-sm text-neutral-600 leading-relaxed">
                              <span className="font-mono text-[9px] text-neutral-300 mt-1.5 select-none shrink-0">//</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* 4. PROFESSIONAL SKILLS TAB */}
                {activeTab === 'skills' && (
                  <div className="space-y-6">
                    {skillsData.map((group, index) => (
                      <div 
                        key={index}
                        id={`skill-group-${index}`}
                        className="border border-neutral-100/80 p-6 md:p-8 rounded-3xl bg-neutral-50/10 hover:border-neutral-200 transition-all duration-350 space-y-5"
                      >
                        {/* Group Header */}
                        <div className="flex justify-between items-center border-b border-neutral-100 pb-3.5">
                          <h4 className="text-sm font-bold text-neutral-850 font-sans tracking-tight">
                            {group.category}
                          </h4>
                          <span className="text-[10px] bg-neutral-50 text-neutral-600 border border-neutral-200/60 px-3 py-1 rounded-full font-medium tracking-wide">
                            {group.level}
                          </span>
                        </div>

                        {/* Elegantly styled chip grid */}
                        <div className="flex flex-wrap gap-2 pt-1.5">
                          {group.skills.map((skill, sIndex) => (
                            <span
                              key={sIndex}
                              className="text-xs text-neutral-700 bg-neutral-50 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 border border-neutral-200/50 transition-all duration-200 px-3.5 py-2 rounded-xl select-all select-none font-sans font-medium hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* 5. AWARDS TAB */}
                {activeTab === 'awards' && (
                  <div className="space-y-2">
                    {awardsData.map((award, index) => (
                      <div 
                        key={index}
                        id={`award-row-${index}`}
                        className="group flex flex-col md:flex-row md:items-center justify-between border-b border-neutral-100/70 p-5 hover:bg-neutral-50 rounded-2xl transition-all duration-300 gap-4"
                      >
                        <div className="flex items-start gap-4">
                          {/* Award icon pillar */}
                          <div className="w-9 h-9 rounded-xl bg-black/5 flex items-center justify-center text-black shrink-0 relative mt-0.5 group-hover:bg-black group-hover:text-white transition-all duration-300">
                            <Award className="w-4.5 h-4.5" />
                          </div>

                          <div className="space-y-1">
                            <h4 className="text-sm md:text-base font-bold text-neutral-900 group-hover:text-black">
                              {award.title}
                            </h4>
                            <p className="text-xs text-neutral-500 leading-relaxed">
                              {award.subtitle}
                            </p>
                          </div>
                        </div>

                        <div className="md:text-right shrink-0">
                          <span className="font-mono text-[10px] text-neutral-400 font-bold block uppercase tracking-widest">
                            {award.org}
                          </span>
                          <span className="font-mono text-[10px] text-black font-extrabold block mt-0.5">
                            // {award.year}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* 6. INTERESTS_HOBBIES TAB */}
                {activeTab === 'hobbies' && (
                  <div className="space-y-2">
                    {hobbiesData.map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div 
                          key={index}
                          id={`hobby-row-${index}`}
                          className="group flex items-center border-b border-neutral-100/70 p-5 hover:bg-neutral-50 rounded-2xl transition-all duration-300 gap-4"
                        >
                          {/* Hobby icon pillar */}
                          <div className="w-9 h-9 rounded-xl bg-black/5 flex items-center justify-center text-black shrink-0 relative group-hover:bg-black group-hover:text-white transition-all duration-300">
                            <Icon className="w-4.5 h-4.5" />
                          </div>

                          <h4 className="text-sm md:text-base font-bold text-neutral-900 group-hover:text-black">
                            {item.title}
                          </h4>
                        </div>
                      );
                    })}
                  </div>
                )}

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
