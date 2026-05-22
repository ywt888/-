import { useState, useEffect } from 'react';
import { PROJECTS } from './data';
import Navigation from './components/Navigation';
import ProjectCard from './components/ProjectCard';
import ProjectDetail from './components/ProjectDetail';
import PersonalInfo from './components/PersonalInfo';
import ContactSection from './components/ContactSection';
import { ArrowDown, MessageSquare, Terminal, Eye, Layers } from 'lucide-react';

export default function App() {
  const [currentProjectId, setCurrentProjectId] = useState<string | null>(null);

  // Automatically scroll to the top when navigating to an article/project detail view
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [currentProjectId]);

  const activeProject = PROJECTS.find(p => p.id === currentProjectId);

  const handleNavigateSection = (sectionId: string) => {
    if (currentProjectId) {
      setCurrentProjectId(null);
      // Wait for state transition to complete, then scroll to section target identifier
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white min-h-screen text-black antialiased flex flex-col justify-between selection:bg-neutral-900 selection:text-white">
      
      {/* 1. Header Navigation Bar */}
      <Navigation
        currentProjectId={currentProjectId}
        onNavigateHome={() => setCurrentProjectId(null)}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Container */}
      <main className="grow">
        {activeProject ? (
          // Project Case Study detail Page View
          <ProjectDetail
            project={activeProject}
            onBack={() => setCurrentProjectId(null)}
          />
        ) : (
          // Home Dashboard Main View
          <div className="animate-[fade-in_0.6s_ease-out]">
            
            {/* 2. Brand Hero Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Side: Editorial positioning statement */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 font-mono text-[10px] bg-neutral-100 text-neutral-800 px-3 py-1 rounded-full font-bold">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>UI/UX DESIGN</span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 leading-none">
                    叶文涛 Wentao
                  </h1>
                  <p className="text-xl md:text-2xl font-bold font-serif italic text-neutral-700 leading-tight">
                    站在用户的角度看待问题，用设计的思维解决问题
                  </p>
                </div>

                <p className="text-sm md:text-base text-neutral-500 leading-relaxed font-normal max-w-xl">
                  Hello! 我是一名 UX 设计师，擅长站在用户的角度去看待问题，用设计的思维去解决问题，创造出新的价值。我专注于视觉叙事、氛围感打造、用户心智建立、专属 IP 形象创设、沉浸式交互场景搭建以及高敏感度的视觉运营设计。
                </p>

                {/* Call-to-Actions */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => handleNavigateSection('projects-section')}
                    className="flex items-center gap-2 bg-black hover:bg-neutral-800 text-white font-mono text-[11px] font-bold px-6 py-3.5 rounded-full transition-colors cursor-pointer"
                  >
                    <span>成果展示 // CORE SHOWCASES</span>
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleNavigateSection('contact-section')}
                    className="flex items-center gap-2 border border-neutral-200 hover:border-black text-neutral-800 font-mono text-[11px] font-bold px-6 py-3.5 rounded-full transition-colors cursor-pointer bg-white"
                  >
                    <span>联系方式 // CONTACT</span>
                  </button>
                </div>
              </div>

              {/* Right Side: Hero Visual Frame containing professional portrait image */}
              <div className="lg:col-span-5 flex justify-center">
                <div
                  onClick={() => handleNavigateSection('projects-section')}
                  className="group relative border border-neutral-100 p-3 bg-neutral-50/20 rounded-3xl max-w-sm w-full cursor-pointer hover:border-black transition-all hover:scale-[1.01] shadow-sm"
                >
                  <div className="absolute top-[-8px] left-6 font-mono text-[8px] bg-neutral-900 text-white px-2 py-0.5 rounded-sm">
                    METRIC_CROP_MARK: 50MM
                  </div>

                  <div className="overflow-hidden rounded-2xl aspect-[3/4] bg-neutral-100">
                    <img
                      src="/src/assets/images/founder_portrait_1779277018368.png"
                      alt="叶文涛 Wentao Portrait Black & White"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale brightness-105 active:scale-100 group-hover:scale-[1.03] transition-transform duration-[800ms] ease-out"
                    />
                  </div>

                  <div className="flex justify-between items-center font-mono text-[9px] text-neutral-400 mt-3.5 px-1">
                    <span>CRAFTED IN CH_NATIVE (2026)</span>
                    <span className="flex items-center gap-1.5 font-bold hover:text-black transition-colors">
                      <Eye className="w-3 h-3" />
                      <span>查看作品</span>
                    </span>
                  </div>
                </div>
              </div>

            </section>

            {/* 2.5 Personal Information Board */}
            <PersonalInfo />

            {/* 3. Featured Projects Board */}
            <section id="projects-section" className="border-t border-neutral-100 py-20 md:py-32 bg-neutral-50/30">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                
                {/* Section header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-16">
                  <div>
                    <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-2">
                      03 // CORE SHOWCASES
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight uppercase">
                      作品集群
                    </h2>
                  </div>
                  <p className="font-mono text-xs text-neutral-400 uppercase tracking-wider max-w-xs md:text-right">
                    受 VERCEL / LINEAR 启发，每一个卡片都蕴藏了一套完整的交互向量演示
                  </p>
                </div>

                {/* Projects Grid Map */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
                  {PROJECTS.slice(0, 2).map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onClick={() => setCurrentProjectId(project.id)}
                    />
                  ))}
                </div>

              </div>
            </section>

            {/* 6. Contact Information Section */}
            <ContactSection />

          </div>
        )}
      </main>

      {/* 7. Premium Monochrome Footer */}
      <footer className="border-t border-neutral-100 py-12 bg-neutral-50/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-neutral-400 font-mono">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-black" />
            <span className="text-black font-semibold uppercase tracking-wider">叶文涛 WENTAO YE.</span>
            <span>(2026)</span>
          </div>
          <p className="text-center md:text-right font-serif italic text-neutral-500 text-sm">
            “ Let's build something meaningful together // 让我们携手缔造卓越品物。”
          </p>
          <span className="text-[10px] tracking-widest text-neutral-400">[ CONTRACT APPROVED // DCI_MONO ]</span>
        </div>
      </footer>

    </div>
  );
}
