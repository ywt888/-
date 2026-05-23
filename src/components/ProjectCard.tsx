import { Project } from '../types';
import { IMAGES } from '../data';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
  key?: string;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  // Custom preview images for the card cover instead of boring bitmap stock photos
  const renderMiniBlueprint = () => {
    switch (project.id) {
      case "synapse-canvas":
        return (
          <img 
            src={IMAGES.douyinPresets[0]} 
            alt="抖音APP视频推荐" 
            className="w-full h-auto block" 
            referrerPolicy="no-referrer" 
          />
        );

      case "krypton-debugger":
        return (
          <img 
            src={IMAGES.sodaPresets[0]} 
            alt="汽水音乐APP年度报告" 
            className="w-full h-auto block" 
            referrerPolicy="no-referrer" 
          />
        );

      case "atla-tokens":
        return (
          <img 
            src={IMAGES.sodaPresets[4]} 
            alt="Atla Systems" 
            className="w-full h-auto block" 
            referrerPolicy="no-referrer" 
          />
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
      <div className="relative border-b border-neutral-100 overflow-hidden">
        <div className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-500 ease-out">
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
