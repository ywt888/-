import { ArrowLeft } from 'lucide-react';

interface NavigationProps {
  currentProjectId: string | null;
  onNavigateHome: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export default function Navigation({ currentProjectId, onNavigateHome, onNavigateSection }: NavigationProps) {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-neutral-100 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Logo / Personal Branding Name */}
        <button
          onClick={onNavigateHome}
          className="group flex items-center gap-2.5 hover:opacity-80 transition-all cursor-pointer text-left"
        >
          <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center text-white scale-100 group-hover:scale-105 transition-transform duration-300">
            <span className="font-mono text-xs font-bold font-sans">A</span>
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight text-neutral-900 leading-none">叶文涛 Wentao</h1>
            <span className="font-mono text-[9px] text-neutral-400 tracking-wider">CREATOR // DESIGNER</span>
          </div>
        </button>

        {/* Dynamic Navigation Elements */}
        {currentProjectId ? (
          // In Project detail page - Show back buttons
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-2 text-sm text-neutral-500 hover:text-black hover:translate-x-[-2px] transition-all cursor-pointer font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>返回主页</span>
          </button>
        ) : (
          // Home Page nav links
          <div className="flex items-center gap-6 md:gap-10">
            <button
              onClick={() => onNavigateSection('profile-section')}
              className="text-xs font-medium text-neutral-500 hover:text-black transition-colors cursor-pointer relative py-1"
            >
              个人信息
            </button>
            <button
              onClick={() => onNavigateSection('projects-section')}
              className="text-xs font-medium text-neutral-500 hover:text-black transition-colors cursor-pointer relative py-1"
            >
              项目展示
            </button>

            {/* WeChat/Contact quick CTA in corner */}
            <button
              onClick={() => onNavigateSection('contact-section')}
              className="hidden sm:inline-block text-[11px] bg-black text-white hover:bg-neutral-800 transition-colors px-3.5 py-1.5 rounded-full font-medium cursor-pointer"
            >
              联系我
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
