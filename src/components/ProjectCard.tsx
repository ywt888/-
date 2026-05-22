import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  key?: string;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  
  // Custom programmatic mini-blueprints for the card cover instead of boring bitmap stock photos
  const renderMiniBlueprint = () => {
    switch (project.id) {
      case "synapse-canvas":
        return (
          <div className="relative w-full h-full bg-neutral-950 flex flex-col justify-between p-4 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#1e1e1e_1px,transparent_1px)] [background-size:12px_12px] opacity-80" />
            
            <div className="flex justify-between items-center font-mono text-[8px] text-neutral-500 z-10">
              <span>CANVAS_PROTOTYPE // W_26</span>
              <span>GRID: ACTIVE</span>
            </div>

            {/* Simulated Nodes & vectors */}
            <div className="relative h-24 flex items-center justify-center z-10 scale-95">
              <div className="absolute w-12 h-8 rounded border border-neutral-700 bg-neutral-900/90 text-[7px] font-mono text-neutral-400 p-1 flex flex-col justify-between" style={{ left: '15%' }}>
                <span>PROMPT // A</span>
                <span className="text-white font-bold font-sans">SYNAPSE</span>
              </div>
              
              <div className="absolute w-12 h-8 rounded border border-neutral-700 bg-neutral-900/90 text-[7px] font-mono text-neutral-400 p-1 flex flex-col justify-between" style={{ right: '15%', top: '15%' }}>
                <span>NODE_01</span>
                <span className="text-white font-bold font-sans">FORKING</span>
              </div>

              <div className="absolute w-12 h-8 rounded border border-white bg-white text-black p-1 flex flex-col justify-between" style={{ right: '10%', bottom: '15%' }}>
                <span className="font-mono text-[6px]">COMPILE</span>
                <span className="font-bold font-sans text-[8px]">OUTPUT</span>
              </div>

              {/* Linking SVG line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <line x1="25%" y1="50%" x2="60%" y2="35%" stroke="#a3a3a3" strokeWidth="1" strokeDasharray="2,2" />
                <line x1="25%" y1="50%" x2="65%" y2="70%" stroke="#ffffff" strokeWidth="1" />
              </svg>
            </div>

            <div className="flex justify-between items-center font-mono text-[8px] text-neutral-600 z-10 border-t border-neutral-900 pt-1.5">
              <span>SCALE: 1:0.75</span>
              <span>ANTIALIASED: TRUE</span>
            </div>
          </div>
        );

      case "krypton-debugger":
        return (
          <div className="relative w-full h-full bg-white flex flex-col justify-between p-4 overflow-hidden border border-neutral-100">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(229,229,229,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(229,229,229,0.3)_1px,transparent_1px)] [background-size:16px_16px]" />
            
            <div className="flex justify-between items-center font-mono text-[8px] text-neutral-400 z-10">
              <span>CORE_DUMP // DEBUG_AST</span>
              <span className="text-red-500 font-bold">STATE: COMPIL_CONFLICT</span>
            </div>

            {/* Split view model */}
            <div className="relative h-24 grid grid-cols-2 gap-3 z-10 items-center scale-95">
              {/* Left code text */}
              <div className="border border-neutral-200 bg-white shadow-sm rounded p-1.5 font-mono text-[6px] text-neutral-400 space-y-1 h-20 overflow-hidden">
                <p className="text-neutral-800 font-bold">{"import { core } from \"ast\";"}</p>
                <p className="border-l-2 border-red-500 pl-1 py-0.5 bg-red-50 text-red-600">{"match core.error { => deadlock() }"}</p>
                <p>{"return null;"}</p>
              </div>

              {/* Right topology blueprint */}
              <div className="border border-black bg-neutral-950 text-white rounded p-1.5 font-mono text-[6px] h-20 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span>STACK STATE</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                </div>
                <div className="space-y-0.5">
                  <div className="h-1 bg-red-500 w-11/12" />
                  <div className="h-1 bg-neutral-700 w-8/12" />
                  <div className="h-1 bg-neutral-800 w-9/12" />
                </div>
                <span>T_GAP: 240MS</span>
              </div>
            </div>

            <div className="flex justify-between items-center font-mono text-[8px] text-neutral-400 z-10 border-t border-neutral-100 pt-1.5">
              <span>DEVICE: MACOS_RETINA_X64</span>
              <span>RENDER: TEXT_CRISP</span>
            </div>
          </div>
        );

      case "atla-tokens":
        return (
          <div className="relative w-full h-80 bg-neutral-50 flex flex-col justify-between p-4 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#d4d4d4_1px,transparent_1px)] [background-size:10px_10px] opacity-70" />
            
            <div className="flex justify-between items-center font-mono text-[8px] text-neutral-400 z-10">
              <span>SYSTEMS_CORE // SPEC_12</span>
              <span>SQUIRCLE: CURV_4.2</span>
            </div>

            {/* Core super elliptical scales layout */}
            <div className="relative h-24 flex items-center justify-center gap-1 z-10">
              {/* Math curve shape representators */}
              <div className="w-14 h-14 rounded-3xl border-2 border-dashed border-neutral-300 flex items-center justify-center p-1 font-mono text-[6px] text-neutral-400">
                <div className="w-10 h-10 border border-black rounded-2xl bg-white flex items-center justify-center font-bold text-black" style={{ borderRadius: '42%' }}>
                  R_12
                </div>
              </div>
              {/* Color bars */}
              <div className="flex flex-col gap-1 text-[7px] font-mono">
                <span className="bg-black text-white px-1.5 rounded-sm">#000000 CONTRAST</span>
                <span className="bg-white border text-neutral-700 px-1.5 rounded-sm">#E5E5E5 MUTED</span>
                <span className="bg-neutral-100 border text-neutral-500 px-1.5 rounded-sm">#F9F9F9 BASE</span>
              </div>
            </div>

            <div className="flex justify-between items-center font-mono text-[8px] text-neutral-400 z-10 border-t border-neutral-200 pt-1.5">
              <span>SCALE: SYMMETRIC</span>
              <span>COMPILER: SWIFTUI_WEB</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full h-full bg-neutral-100 flex items-center justify-center font-mono text-[10px] text-neutral-400">
            BLUEPRINT_UNSPECIFIED
          </div>
        );
    }
  };

  return (
    <div
      onClick={onClick}
      className="group border border-neutral-100/80 hover:border-black rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 bg-white hover:shadow-lg flex flex-col justify-between animate-[fade-in_0.5s_ease-out]"
    >
      {/* Cover Image section containing custom mini-blueprints */}
      <div className="h-64 overflow-hidden relative border-b border-neutral-100">
        <div className="w-full h-full group-hover:scale-[1.03] transition-transform duration-500 ease-out">
          {renderMiniBlueprint()}
        </div>
        {/* Hover overlay link action indicator */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black border border-neutral-200 shadow shadow-sm transform translate-y-2 group-hover:translate-y-0 transition-all">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Info Container */}
      <div className="p-6 md:p-8 space-y-6">
        
        {/* Tag */}
        <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 uppercase tracking-widest border-b border-neutral-50 pb-4">
          <span className="font-semibold text-black bg-neutral-100 px-2.5 py-1 rounded-full">{project.category}</span>
        </div>

        {/* Text descriptions */}
        <div className="space-y-2">
          <span className="font-mono text-xs text-neutral-400 tracking-wider block font-medium uppercase">{project.name}</span>
          <h3 className="text-xl md:text-2xl font-extrabold text-neutral-900 leading-tight tracking-tight uppercase group-hover:text-black transition-colors">
            {project.title}
          </h3>
          <p className="text-xs text-neutral-500 leading-relaxed font-normal">
            {project.subtitle}
          </p>
        </div>

        {/* Keywords */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.keywords.map((kw) => (
            <span
              key={kw}
              className="font-mono text-[8px] bg-neutral-50 text-neutral-400 border border-neutral-100 px-2 py-0.5 rounded-md uppercase tracking-wider"
            >
              {kw}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}
