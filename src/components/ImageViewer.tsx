import { ReactNode } from 'react';
import { X, ZoomIn, Info, Code } from 'lucide-react';

interface ImageViewerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: string;
  children: ReactNode;
}

export default function ImageViewer({ isOpen, onClose, title, type, children }: ImageViewerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-6">
      <div className="absolute inset-0 bg-[radial-gradient(#1c1c1c_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      {/* Main Content Card Container */}
      <div className="relative w-full max-w-5xl bg-neutral-900 border border-neutral-800 rounded-2xl flex flex-col overflow-hidden text-neutral-100 shadow-2xl">
        
        {/* Header toolbar */}
        <div className="px-6 py-4 border-b border-neutral-800 flex justify-between items-center bg-neutral-950">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <div className="flex flex-col">
              <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">DIAGRAM EXPLORER // STAGE_VIEWER</span>
              <h3 className="text-sm font-bold text-white tracking-tight leading-none mt-0.5">{title}</h3>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-1.5 font-mono text-[9px] text-neutral-500 bg-neutral-900 px-2 py-1 rounded border border-neutral-800">
              <Code className="w-3.5 h-3.5" />
              <span>SVG VECTOR RENDER</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-neutral-800 rounded-full text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 flex justify-center items-center bg-neutral-950/40">
          <div className="w-full max-w-3xl transform scale-100 transition-transform duration-300">
            {children}
          </div>
        </div>

        {/* Footer Technical Metadata bar */}
        <div className="px-6 py-4 border-t border-neutral-800 bg-neutral-950 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-[10px] font-mono text-neutral-500">
          <div className="flex items-center gap-3">
            <Info className="w-3.5 h-3.5 text-neutral-400" />
            <span>METRIC SCALE: AUTO_ZOOM</span>
            <span className="text-neutral-700">|</span>
            <span>COLOR SPACE: DCI-P3 MONO</span>
          </div>
          <div>
            <span>SYSTEM TYPE: {type.toUpperCase()} MODEL</span>
          </div>
        </div>
      </div>
    </div>
  );
}
