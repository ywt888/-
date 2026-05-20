import { useState } from 'react';
import { Project, ShowcaseSection } from '../types';
import ShowcaseArtifact from './ShowcaseArtifact';
import ImageViewer from './ImageViewer';
import { ArrowLeft, ZoomIn, Info, Check, ShieldCheck, Heart, Terminal } from 'lucide-react';

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

  return (
    <div className="bg-white min-h-screen pb-24 transition-all duration-500 animate-[fade-in_0.6s_ease-out]">
      {/* 1. Project Hero Section */}
      <header className="border-b border-neutral-100 bg-neutral-50/20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-2 text-xs font-mono text-neutral-400 hover:text-black hover:translate-x-[-2px] transition-all cursor-pointer mb-8 uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>返回主页 // RETURN_HOME</span>
          </button>

          <span className="font-mono text-xs text-neutral-400 font-medium uppercase tracking-widest block mb-4">
            {project.category}
          </span>
          
          {/* Huge bold editorial title */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-black tracking-tight leading-none mb-6">
            {project.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-500 font-medium leading-relaxed max-w-4xl tracking-tight mb-12">
            {project.subtitle}
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-neutral-100 font-mono">
            <div>
              <span className="text-[10px] text-neutral-400 block uppercase tracking-wider mb-1">ROLE / 我的角色</span>
              <span className="text-sm text-neutral-900 font-semibold">{project.role}</span>
            </div>
            <div>
              <span className="text-[10px] text-neutral-400 block uppercase tracking-wider mb-1">TIMELINE / 历史周期</span>
              <span className="text-sm text-neutral-900 font-semibold">{project.timeline}</span>
            </div>
            <div>
              <span className="text-[10px] text-neutral-400 block uppercase tracking-wider mb-1">CORES / 协作模式</span>
              <span className="text-sm text-neutral-900 font-semibold">{project.projectType}</span>
            </div>
            <div>
              <span className="text-[10px] text-neutral-400 block uppercase tracking-wider mb-1">YEAR / 创作年份</span>
              <span className="text-sm text-neutral-900 font-semibold">{project.year}</span>
            </div>
          </div>

        </div>
      </header>

      {/* Hero core statement box */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="p-8 md:p-12 border border-black rounded-2xl bg-black text-white relative overflow-hidden flex flex-col justify-between">
          <div className="absolute right-[-20px] bottom-[-20px] opacity-10 font-mono text-9xl font-bold select-none pointer-events-none">
            AI
          </div>
          <span className="font-mono text-[9px] text-neutral-400 tracking-widest block mb-4">CORE_CONCEPT // 核心心智</span>
          <p className="text-lg md:text-2xl font-serif font-light leading-relaxed">
            “ {project.coreStatement} ”
          </p>
        </div>
      </section>

      {/* 2. Project Background Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-neutral-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 font-sans">
          
          {/* Header */}
          <div className="lg:col-span-4">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-1">
              01 // CONTEXT
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-black tracking-tight uppercase">
              项目背景
            </h2>
          </div>

          {/* Column 1: Industry problem */}
          <div className="lg:col-span-4 space-y-3">
            <span className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">
              INDUSTRY CHALLENGE / 行业困境
            </span>
            <div className="w-6 h-0.5 bg-black mb-2" />
            <p className="text-sm text-neutral-600 leading-relaxed font-normal">
              {project.background.industryProblem}
            </p>
          </div>

          {/* Column 2: User problem */}
          <div className="lg:col-span-4 space-y-3">
            <span className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-wider block">
              USER PAINPOINTS / 痛点定位
            </span>
            <div className="w-6 h-0.5 bg-black mb-2" />
            <p className="text-sm text-neutral-600 leading-relaxed font-normal">
              {project.background.userProblem}
            </p>
          </div>

          {/* Row extension: Business goal */}
          <div className="lg:col-span-8 lg:col-start-5 mt-4 p-5 rounded-xl bg-neutral-50 border border-neutral-100 flex gap-4">
            <div className="w-1.5 h-12 bg-black flex-shrink-0" />
            <div>
              <span className="font-mono text-[10px] text-neutral-400 block uppercase tracking-wider mb-1">BUSINESS TARGET // 商业目标</span>
              <p className="text-xs text-neutral-700 leading-relaxed font-medium font-mono">
                {project.background.businessGoal}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Design Strategy Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 border-b border-neutral-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-4">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-1">
              02 // METHODOLOGY
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-black tracking-tight uppercase">
              设计策略
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-12">
            
            {/* Core Strategy Points */}
            <div className="space-y-6">
              <span className="font-mono text-[10px] text-neutral-400 tracking-wider uppercase block border-b border-neutral-100 pb-2">
                CORE INSIGHTS // 洞察拼图
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {project.strategy.insights.map((ins, idx) => (
                  <div key={idx} className="p-5 border border-neutral-100 bg-neutral-50/30 rounded-xl space-y-3 hover:border-black transition-all">
                    <span className="font-mono text-xs text-neutral-400">FINDING_0{idx+1}</span>
                    <p className="text-xs font-semibold text-neutral-900 leading-relaxed">
                      {ins}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Design strategy columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              <div className="space-y-3">
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider block">UX SYSTEMIC STRATEGY / 交互策略</span>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {project.strategy.uxStrategy}
                </p>
              </div>
              <div className="space-y-3">
                <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider block">VISUAL DESIGN DIRECTION / 视觉定义</span>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {project.strategy.designDirection}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Project Showcase Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-1">
            03 // CASE_STU_SHOWCASE
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-black tracking-tight uppercase">
            项目全景成果演示
          </h2>
          <p className="text-sm text-neutral-500 font-mono mt-2 uppercase tracking-wide">
            EXPLORING ALL 7 REVELATION SEGMENTS DESTRUCTURING 
          </p>
        </div>

        {/* Editorial scroll of Showcase Sections */}
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
