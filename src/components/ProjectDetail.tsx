import { useState } from 'react';
import { Project, ShowcaseSection } from '../types';
import ShowcaseArtifact from './showcase/ShowcaseArtifact';
import ImageViewer from './showcase/ImageViewer';
import { ArrowLeft, ZoomIn, Info, Check, ShieldCheck, Heart, Terminal } from 'lucide-react';
import SodaShowcase from './showcase/SodaShowcase';
import DouyinShowcase from './showcase/DouyinShowcase';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export default function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  const [selectedArtifact, setSelectedArtifact] = useState<{
    id: string;
    title: string;
    type: 'mindmap' | 'wireframe' | 'flow' | 'ui' | 'tokens' | 'metrics' | 'architecture';
    data: any;
  } | null>(null);

  const isDouyin = project.id === 'synapse-canvas';
  const isSoda = project.id === 'krypton-debugger';
  const isDark = isDouyin;

  // Theme-aware Tailwind mappings
  let bgClass = "bg-white text-black";
  let selectionClass = "";
  let headerClass = "border-neutral-100 bg-neutral-50/20";
  let backButtonClass = "text-neutral-400 hover:text-black";
  let categoryClass = "text-neutral-400";
  let titleClass = "text-black";
  let subtitleClass = "text-neutral-500";
  let borderClass = "border-neutral-100";
  let cardBgClass = "border-black bg-black text-white";
  let cardTagClass = "text-neutral-400";
  let textMutedClass = "text-neutral-600";
  let strategyBorderClass = "border-neutral-100 pb-2";
  let goalBoxClass = "bg-neutral-50 border-neutral-100";
  let hGradient = "bg-black";
  let vGradient = "bg-black";
  let insetBorderClass = "border-neutral-100";
  let insightCardClass = "border-neutral-200/60 bg-neutral-50/10 hover:bg-neutral-50/50 hover:border-neutral-900 hover:shadow-xs";

  if (isDouyin) {
    bgClass = "bg-[#030303] text-neutral-100";
    selectionClass = "selection:bg-[#fe2c55] selection:text-white";
    headerClass = "border-[#15151a] bg-[#070709]";
    backButtonClass = "text-[#25f4ee] hover:text-white";
    categoryClass = "text-[#fe2c55] font-bold";
    titleClass = "text-white";
    subtitleClass = "text-neutral-300";
    borderClass = "border-neutral-950";
    cardBgClass = "border-neutral-900 bg-[#09090b] text-white shadow-[0_0_50px_rgba(254,44,85,0.06),0_0_50px_rgba(37,244,238,0.06)]";
    cardTagClass = "text-[#25f4ee]";
    textMutedClass = "text-neutral-300";
    strategyBorderClass = "border-neutral-900 pb-2";
    goalBoxClass = "bg-neutral-950 border-neutral-900";
    hGradient = "bg-gradient-to-r from-[#fe2c55] to-[#25f4ee]";
    vGradient = "bg-gradient-to-b from-[#fe2c55] via-white to-[#25f4ee]";
    insetBorderClass = "border-neutral-900";
  } else if (isSoda) {
    bgClass = "bg-[#f2fcf7] text-[#133022]";
    selectionClass = "selection:bg-[#aefacf] selection:text-[#0a311d]";
    headerClass = "border-[#cee8d5] bg-[#edfcf2]/90";
    backButtonClass = "text-[#1fa469] hover:text-[#0b4a2d]";
    categoryClass = "text-[#1fa469] font-bold";
    titleClass = "text-[#082216]";
    subtitleClass = "text-[#3b5748]";
    borderClass = "border-[#cee8d5]";
    cardBgClass = "border-[#b8dfc4] bg-white text-[#133022] shadow-[0_15px_40px_rgba(31,164,105,0.08)]";
    cardTagClass = "text-[#1fa469]";
    textMutedClass = "text-[#3f5e4d]";
    strategyBorderClass = "border-[#cfe9d6] pb-2";
    goalBoxClass = "bg-[#ebfcf3] border-[#beecd0]";
    hGradient = "bg-gradient-to-r from-[#2af0a3] via-[#4ce49b] to-[#128a52]";
    vGradient = "bg-gradient-to-b from-[#2af0a3] via-[#3ade90] to-[#128a52]";
    insetBorderClass = "border-[#cfe8d6]";
    insightCardClass = "border-[#cfe8d6] bg-white/70 hover:bg-white hover:border-[#1fa469] hover:shadow-md";
  }

  return (
    <div className={`${bgClass} ${selectionClass} min-h-screen pb-24 transition-all duration-500 animate-[fade-in_0.6s_ease-out]`}>
      {/* 1. Project Hero Section */}
      <header className={`border-b ${headerClass} py-16 md:py-24`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <button
            onClick={onBack}
            className={`group inline-flex items-center gap-2 text-xs font-mono ${backButtonClass} hover:translate-x-[-2px] transition-all cursor-pointer mb-8 uppercase tracking-wider`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>返回主页 // RETURN_HOME</span>
          </button>

          <span className={`font-mono text-xs ${categoryClass} uppercase tracking-widest block mb-4`}>
            {project.category}
          </span>
          
          {/* Huge bold editorial title */}
          <h1 className={`text-4xl md:text-6xl font-extrabold ${titleClass} tracking-tight leading-none mb-6`}>
            {project.name}
          </h1>
          

          <p className={`text-xl md:text-2xl ${subtitleClass} font-medium leading-relaxed max-w-4xl tracking-tight`}>
            {project.subtitle}
          </p>

        </div>
      </header>

      {/* Hero core statement box */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div 
          className={`p-8 md:p-12 border rounded-2xl relative overflow-hidden flex flex-col justify-between ${cardBgClass}`}
        >
          <div className="absolute right-[-20px] bottom-[-20px] opacity-10 font-mono text-9xl font-bold select-none pointer-events-none">
            {isSoda ? 'SODA' : isDouyin ? 'DY' : 'AI'}
          </div>
          <span className={`font-mono text-[9px] ${cardTagClass} tracking-widest block mb-4`}>CORE_CONCEPT // 核心心智</span>
          <p className="text-lg md:text-2xl font-serif font-light leading-relaxed">
            “ {project.coreStatement} ”
          </p>
        </div>
      </section>

      {/* 2. Project Background Section */}
      <section className={`max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 border-b ${borderClass}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 font-sans">
          
          {/* Header */}
          <div className="lg:col-span-4">
            <span className={`font-mono text-xs ${categoryClass} uppercase tracking-widest block mb-1`}>
              01 // CONTEXT
            </span>
            <h2 className={`text-2xl md:text-3xl font-extrabold ${titleClass} tracking-tight uppercase`}>
              项目背景
            </h2>
          </div>

          {/* Column 1: Industry problem in a text box */}
          <div className={`lg:col-span-4 p-6 rounded-2xl border ${goalBoxClass} space-y-3 relative overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300`}>
            <span className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">
              INDUSTRY LANDSCAPE / 行业现状
            </span>
            <div className={`w-6 h-0.5 ${hGradient} mb-1`} />
            <p className={`text-sm ${textMutedClass} leading-relaxed font-normal`}>
              {project.background.industryProblem}
            </p>
          </div>

          {/* Column 2: User problem in a text box */}
          <div className={`lg:col-span-4 p-6 rounded-2xl border ${goalBoxClass} space-y-3 relative overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-300`}>
            <span className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">
              USER PAINPOINTS / 痛点定位
            </span>
            <div className={`w-6 h-0.5 ${hGradient} mb-1`} />
            <p className={`text-sm ${textMutedClass} leading-relaxed font-normal`}>
              {project.background.userProblem}
            </p>
          </div>

          {/* Row extension: Business goal */}
          <div className={`lg:col-span-8 lg:col-start-5 mt-4 p-5 rounded-xl border flex gap-4 ${goalBoxClass}`}>
            <div className={`w-1.5 h-12 ${vGradient} flex-shrink-0`} />
            <div>
              <span className="font-mono text-[10px] text-neutral-400 block uppercase tracking-wider mb-1">BUSINESS TARGET // 商业目标</span>
              <p className={`text-xs ${textMutedClass} leading-relaxed font-medium font-mono`}>
                {project.background.businessGoal}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Design Strategy Section */}
      <section className={`max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 border-b ${borderClass}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4">
            <span className={`font-mono text-xs ${categoryClass} uppercase tracking-widest block mb-1`}>
              02 // METHODOLOGY
            </span>
            <h2 className={`text-2xl md:text-3xl font-extrabold ${titleClass} tracking-tight uppercase`}>
              设计策略
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-12">
            
            {/* Core Strategy Points */}
            <div className="space-y-6">
              <span className={`font-mono text-[10px] text-neutral-400 tracking-wider uppercase block border-b ${strategyBorderClass}`}>
                CORE INSIGHTS // 洞察拼图
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {project.strategy.insights.map((ins, idx) => {
                  const parts = ins.split('\n');
                  const title = parts[0];
                  const items = parts.slice(1);
                  
                  const hoverBorderColor = isSoda
                    ? idx % 3 === 0
                      ? 'group-hover:border-[#2af0a3]'
                      : idx % 3 === 1
                        ? 'group-hover:border-[#24ba7b]'
                        : 'group-hover:border-[#128a52]'
                    : isDouyin
                      ? idx % 2 === 0
                        ? 'group-hover:border-[#fe2c55]'
                        : 'group-hover:border-[#25f4ee]'
                      : 'group-hover:border-neutral-900';
                  
                  const activeBulletBg = isSoda
                    ? idx % 3 === 0
                      ? 'bg-[#2af0a3]'
                      : idx % 3 === 1
                        ? 'bg-[#24ba7b]'
                        : 'bg-[#128a52]'
                    : isDouyin
                      ? idx % 2 === 0
                        ? 'bg-[#fe2c55]'
                        : 'bg-[#25f4ee]'
                      : 'bg-neutral-300 group-hover:bg-neutral-600';

                  const activeStatusColor = isSoda
                    ? idx % 3 === 0
                      ? 'text-[#2af0a3]'
                      : idx % 3 === 1
                        ? 'text-[#24ba7b]'
                        : 'text-[#128a52]'
                    : isDouyin
                      ? idx % 2 === 0
                        ? 'text-[#fe2c55]'
                        : 'text-[#25f4ee]'
                      : 'text-neutral-300 group-hover:text-neutral-600';

                  return (
                    <div 
                      key={idx} 
                      className={`p-7 border rounded-2xl space-y-5 transition-all duration-300 hover:shadow-sm group ${insightCardClass} ${isDouyin ? hoverBorderColor : ''}`}
                    >
                      <div className={`flex items-center justify-between border-b ${insetBorderClass} pb-3`}>
                        <span className="font-mono text-[10px] text-neutral-400 tracking-wider">STRATEGY_0{idx+1}</span>
                        <span className={`font-mono text-[10px] transition-colors ${activeStatusColor}`}>● ACTIVE</span>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className={`text-base font-bold ${titleClass} tracking-tight leading-snug`}>
                          {title}
                        </h3>
                        {items.length > 0 && (
                          <ul className={`space-y-2.5 text-xs ${textMutedClass} font-medium leading-relaxed`}>
                            {items.map((item, itemIdx) => (
                              <li key={itemIdx} className="flex items-start gap-2">
                                <span className={`mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full transition-colors ${activeBulletBg}`} />
                                <span className={textMutedClass}>{item.replace(/^[•\-\s]+/, '')}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Removed UX strategy and Visual design columns as requested */}

          </div>

        </div>
      </section>

      {/* 4. Project Showcase Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className={`font-mono text-xs ${categoryClass} uppercase tracking-widest block mb-1`}>
            03 // CASE_STU_SHOWCASE
          </span>
          <h2 className={`text-2xl md:text-3xl font-extrabold ${titleClass} tracking-tight uppercase`}>
            项目全景成果演示
          </h2>
          <p className="text-sm text-neutral-500 font-mono mt-2 uppercase tracking-wide">
            {project.id === "krypton-debugger" 
              ? "15 CURATED DESIGN SLIDES WITH PRECISE RESOLUTIONS" 
              : project.id === "synapse-canvas" 
                ? "32 CURATED SLIDES & 1 INTERACTIVE DEMO VIDEO" 
                : "EXPLORING ALL 7 REVELATION SEGMENTS DESTRUCTURING"}
          </p>
        </div>

        {project.id === "krypton-debugger" ? (
          <SodaShowcase />
        ) : project.id === "synapse-canvas" ? (
          <DouyinShowcase />
        ) : (
          /* Editorial scroll of Showcase Sections */
          <div className="space-y-20 md:space-y-32">
            {project.showcaseSections.map((sec: ShowcaseSection, secIdx: number) => {
              return (
                <div
                  key={sec.title}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-neutral-100 pt-12 md:pt-16"
                >
                  
                  {/* Left Description Side */}
                  <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-neutral-300">STAGE / 0{secIdx+1}</span>
                      <span className="font-mono text-[9px] bg-black text-white px-2 py-0.5 rounded-full uppercase tracking-wider">
                        {sec.category}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-neutral-900 leading-tight">
                      {sec.title}
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed font-normal">
                      {sec.description}
                    </p>
                    
                    <div className="pt-4 border-t border-dashed border-neutral-100 font-mono text-[9px] text-neutral-400 space-y-1">
                      <p>RENDER_SYSTEM: VECTOR_NODE</p>
                      <p>RESOLUTION: FIT_TO_CONTAINER (MUTABLE)</p>
                    </div>
                  </div>

                  {/* Right Interactive Diagrams Grid (Prepare ~40 detail elements dynamically) */}
                  <div className="lg:col-span-8 grid grid-cols-1 gap-8 md:grid-cols-1">
                    {sec.artifacts.map((art) => (
                      <div
                        key={art.id}
                        className="group relative border border-neutral-100 rounded-2xl p-4 md:p-6 bg-neutral-50/20 hover:border-neutral-900 transition-all duration-300"
                      >
                        
                        {/* Interactive magnifying loop overlay on hover */}
                        <button
                          onClick={() => setSelectedArtifact(art)}
                          className="absolute right-4 top-4 z-20 p-2.5 bg-white border border-neutral-200 hover:border-black rounded-xl text-neutral-400 hover:text-black opacity-0 group-hover:opacity-100 pointer-events-auto transition-all shadow-sm flex items-center gap-1.5 font-mono text-[9px] cursor-pointer"
                          title="打开全景矢量观察器"
                        >
                          <ZoomIn className="w-3.5 h-3.5" />
                          <span>放大面板</span>
                        </button>

                        <div className="overflow-hidden rounded-xl">
                          <ShowcaseArtifact
                            id={art.id}
                            title={art.title}
                            type={art.type}
                            data={art.data}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>
        )}
      </section>

      {/* Lightbox explorer */}
      <ImageViewer
        isOpen={selectedArtifact !== null}
        onClose={() => setSelectedArtifact(null)}
        title={selectedArtifact?.title || ''}
        type={selectedArtifact?.type || ''}
      >
        {selectedArtifact && (
          <ShowcaseArtifact
            id={`${selectedArtifact.id}-lightbox`}
            title={selectedArtifact.title}
            type={selectedArtifact.type}
            data={selectedArtifact.data}
          />
        )}
      </ImageViewer>
    </div>
  );
}
