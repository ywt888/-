import React, { useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import { 
  Music, 
  Image as ImageIcon, 
  Upload, 
  Trash2, 
  Sparkles, 
  Sliders, 
  Minimize2,
  Check,
  Disc,
  Layers,
  Download,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { IMAGES } from '../../data';

interface SodaPage {
  id: number;
  title: string;
  stat: string;
  unit: string;
  details: string;
  accent: string; // colors like pink, green, cyan, yellow
  category: 'core' | 'ip' | 'social' | 'season';
  size: string; // "1920 × 1080 像素" or "1928 × 2493 像素"
}

export default function SodaShowcase() {
  // Exactly 15 Curated default cards representing the pages of the Soda Music Annual Report
  const defaultPages: SodaPage[] = [
    { id: 1, title: '封面时刻 / Cosmic Cover', stat: '2025', unit: '年度报告封面', details: '汽水音乐年度听觉纪实封面，开启个性化声音旅途的第一视角。', accent: '#ee1d52', category: 'core', size: '1920 × 1080' },
    { id: 2, title: '音轨源起 / Vibe Origin', stat: 'Jan 08', unit: '初听纪念日', details: '我们在 2025 年初寒夜第一次相遇，第一首歌开启了心动旋律。', accent: '#69c9d0', category: 'core', size: '1920 × 1080' },
    { id: 3, title: '分秒共鸣 / Duration', stat: '38,420', unit: '聆听分钟数', details: '聆听分钟折算为 640 个小时，你的时间被美妙律动温柔填满。', accent: '#2af0a3', category: 'core', size: '1920 × 1080' },
    { id: 4, title: '晨光伴奏 / Morning Vibe', stat: '08:15', unit: '清晨黄金时段', details: '清晨的轻快节奏，是你开启全天元气满满的秘密触发音符。', accent: '#ffd300', category: 'core', size: '1920 × 1080' },
    { id: 5, title: '深夜低回 / Midnight Echo', stat: '114 Days', unit: '深夜两点后聆听', details: '深夜的星芒与舒缓旋律，是只属于你和灵魂对话的寂静避难所。', accent: '#9d4edd', category: 'core', size: '1920 × 1080' },
    { id: 6, title: '单曲执念 / Single Loop', stat: '247 Times', unit: '最爱曲循环次数', details: '一首歌高频循环超两百次，每一个拍子都承载着无法替代的心绪。', accent: '#ee1d52', category: 'core', size: '1920 × 1080' },
    { id: 7, title: '旋律分流 / Genre DNA', stat: 'R&B / Rock', unit: '双核核心流派', details: '你的声音性格在松弛与激情间跳跃，构成最独特的音乐斑斓。', accent: '#2af0a3', category: 'core', size: '1920 × 1080' },
    { id: 8, title: '探索无界 / Indie Pioneer', stat: '142 Artists', unit: '发掘小众新声代', details: '极度敏锐敏捷的听觉嗅觉，自由穿越在非主流声波的惊喜边缘。', accent: '#69c9d0', category: 'core', size: '1920 × 1080' },
    { id: 9, title: '心动频率 / Love Beats', stat: '819 Hits', unit: '红心点赞收藏', details: '每一次按下红心，都是对那一刻生命瞬间最真诚、温暖的加冕。', accent: '#ee1d52', category: 'core', size: '1920 × 1080' },
    { id: 10, title: '汽水拍档 / Mascot Flag', stat: 'IP // 01', unit: '汽水章鱼·拉格', details: '专属于你的个人形象萌宠，它用触角为你精心收集每一个音乐气泡。', accent: '#ee1d52', category: 'ip', size: '1920 × 1080' },
    { id: 11, title: '萌宠情绪板 / Emotion Space', stat: '32 Styles', unit: '拉格多表情生成', details: '快乐、治愈、发呆、emo，它用每一种表情记录你的四季悲欢。', accent: '#69c9d0', category: 'ip', size: '1920 × 1080' },
    { id: 12, title: '流管四季 // 青春之春', stat: 'Mellow', unit: '春季最爱曲调', details: '柳芽初定之时，你沉溺于温暖温柔的舒缓原声和经典民谣。', accent: '#2af0a3', category: 'season', size: '1920 × 1080' },
    { id: 13, title: '流管四季 // 烈日之夏', stat: 'BPM 138', unit: '夏季平均速度', details: '烈日融化之时，你与激爽的电子乐、朋克与合成器波形尽情共舞。', accent: '#ee1d52', category: 'season', size: '1920 × 1080' },
    { id: 14, title: '流管四季 // 霜华之冬', stat: 'Warm Jazz', unit: '冬季高频声韵', details: '在凛冬的壁炉旁，你被慵懒高品位的爵士和暖融的弦乐紧紧包围。', accent: '#69c9d0', category: 'season', size: '1920 × 1080' },
    { id: 15, title: '岁末音乐盛典专属海报 / Yearend Poster', stat: '1928×2493', unit: '高分辨率最终分享海报', details: '报告完美收官！整合一年深度听歌喜好的高维极简装饰海报，用于社交媒体大图展示，视觉比例经过极致调优。', accent: '#ffd300', category: 'social', size: '1928 × 2493' },
  ];

  // Selected filters: 'all' | 'core' | 'ip' | 'social' | 'season'
  const [filter, setFilter] = useState<'all' | 'core' | 'ip' | 'social' | 'season'>('all');

  // Lightbox visualizer state
  const [activeLightboxPage, setActiveLightboxPage] = useState<SodaPage | null>(null);



  // Filtering the pages
  const filteredPages = filter === 'all' 
    ? defaultPages 
    : defaultPages.filter(p => p.category === filter);

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeLightboxPage) return;
      if (e.key === 'ArrowLeft') {
        const currentIndex = filteredPages.findIndex((p) => p.id === activeLightboxPage.id);
        if (currentIndex !== -1) {
          const prevIndex = (currentIndex - 1 + filteredPages.length) % filteredPages.length;
          setActiveLightboxPage(filteredPages[prevIndex]);
        }
      } else if (e.key === 'ArrowRight') {
        const currentIndex = filteredPages.findIndex((p) => p.id === activeLightboxPage.id);
        if (currentIndex !== -1) {
          const nextIndex = (currentIndex + 1) % filteredPages.length;
          setActiveLightboxPage(filteredPages[nextIndex]);
        }
      } else if (e.key === 'Escape') {
        setActiveLightboxPage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLightboxPage, filteredPages]);

  return (
    <div className="space-y-8">
      
      {/* SECTION 2: THE 15-IMAGE PANORAMA GRID INTERACTION */}
      <div className="space-y-8">
        
        {/* Gallery filtering and stats section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#cee8d5] pb-6">
          <div className="space-y-1.5">
            <h2 className="text-xl md:text-2xl font-bold text-[#082216] tracking-tight leading-none">
              年度总结视觉成果展示
            </h2>
          </div>
        </div>

        {/* 15 cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPages.map((page) => {
            const is15thPost = page.id === 15;
            
            const cardBorderColor = page.id % 3 === 0 
              ? 'hover:border-[#2af0a3]' 
              : page.id % 3 === 1 
                ? 'hover:border-[#ee1d52]' 
                : 'hover:border-[#69c9d0]';

            return (
              <div
                key={page.id}
                onClick={() => setActiveLightboxPage(page)}
                className={`group relative aspect-video border transition-all duration-300 hover:shadow-2xl overflow-hidden cursor-pointer active:scale-[0.98] rounded-2xl bg-white text-[#133022] flex flex-col justify-between ${
                  is15thPost 
                    ? 'border-[#ffc300] shadow-[0_4px_20px_rgba(255,195,0,0.15)] hover:border-[#ffd300]' 
                    : `border-[#d0eed8] ${cardBorderColor}`
                }`}
              >
                
                {/* Underlaid Mockup Design Image (Preset) */}
                <img 
                  src={IMAGES.sodaPresets[page.id - 1]} 
                  alt={page.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                  referrerPolicy="no-referrer"
                />

                {/* Background Grid Accent overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(31,164,105,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(31,164,105,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none z-10 opacity-40" />
                
                {/* Beautiful HUD glass overlay designed for Soda (Green tint & Light mode gradient) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#133022]/95 via-black/10 to-[#133022]/70 opacity-80 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-between p-4 md:p-5">
                  
                  {/* Top Metadata Line */}
                  <div className="flex justify-between items-start w-full border-b border-white/10 pb-1.5">
                    <div className="flex flex-col">
                      <span className="font-mono text-[9px] text-[#2af0a3] font-bold uppercase tracking-widest">
                        SODA_REVAL // PAGE_{page.id < 10 ? `0${page.id}` : page.id}
                      </span>
                      <span className="text-[11px] font-bold text-neutral-100 truncate mt-0.5 max-w-[155px]">
                        {page.title.split('/')[0]}
                      </span>
                    </div>
                    <span className="font-mono text-[8.5px] px-2 py-0.5 rounded-md bg-white/10 uppercase border border-white/15 text-neutral-300 font-semibold font-mono">
                      {page.category === 'core' ? '核心' : page.category === 'ip' ? '定制IP' : page.category === 'season' ? '四季' : '插图分享'}
                    </span>
                  </div>

                  {/* Centered statistical core */}
                  <div className="flex flex-col items-center justify-center text-center my-auto py-1">
                    <span 
                      className="font-sans text-3xl md:text-4xl font-black tracking-tighter"
                      style={{ 
                        color: page.accent,
                        textShadow: `0 0 15px ${page.accent}20`
                      }}
                    >
                      {page.stat}
                    </span>
                    <span className="font-mono text-[9px] text-neutral-400 tracking-wider font-semibold mt-0.5 font-mono">
                      {page.unit}
                    </span>
                  </div>

                  {/* Bottom HUD controls */}
                  <div className="pt-1.5 border-t border-white/10 flex justify-between items-center">
                    <span className="font-mono text-[8.5px] text-neutral-400 font-medium font-mono">
                      规格: {page.size} PX
                    </span>
                    <span className="font-mono text-[8.5px] text-[#2af0a3]/70 font-bold uppercase tracking-widest">
                      STANDARDS_MOCKUP
                    </span>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FULL-SCREEN DETAILED EDITING LIGHTBOX */}
      {activeLightboxPage && (
        <div 
          onClick={() => setActiveLightboxPage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#ebf8f2]/90 backdrop-blur-xl p-6 transition-all duration-300 cursor-zoom-out"
        >
          <div className="absolute inset-0 bg-[radial-gradient(#1fa469_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-10" />

          {/* Left page switcher trigger */}
          {filteredPages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = filteredPages.findIndex((p) => p.id === activeLightboxPage.id);
                if (currentIndex !== -1) {
                  const prevIndex = (currentIndex - 1 + filteredPages.length) % filteredPages.length;
                  setActiveLightboxPage(filteredPages[prevIndex]);
                }
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/90 hover:bg-[#ebfcf3] text-[#1fa469] hover:text-[#0b4a2d] hover:border-[#1fa469]/50 rounded-full transition-all cursor-pointer border border-[#beecd0] backdrop-blur hover:scale-110 active:scale-95 group shadow-[0_4px_15px_rgba(31,164,105,0.05)] hover:shadow-[0_4px_20px_rgba(31,164,105,0.18)] flex items-center justify-center"
              title="上一张 (←)"
            >
              <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
            </button>
          )}

          {/* Right page switcher trigger */}
          {filteredPages.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                const currentIndex = filteredPages.findIndex((p) => p.id === activeLightboxPage.id);
                if (currentIndex !== -1) {
                  const nextIndex = (currentIndex + 1) % filteredPages.length;
                  setActiveLightboxPage(filteredPages[nextIndex]);
                }
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 bg-white/90 hover:bg-[#ebfcf3] text-[#1fa469] hover:text-[#0b4a2d] hover:border-[#1fa469]/50 rounded-full transition-all cursor-pointer border border-[#beecd0] backdrop-blur hover:scale-110 active:scale-95 group shadow-[0_4px_15px_rgba(31,164,105,0.05)] hover:shadow-[0_4px_20px_rgba(31,164,105,0.18)] flex items-center justify-center"
              title="下一张 (→)"
            >
              <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
            </button>
          )}

          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl bg-white border border-[#beecd0] rounded-3xl flex flex-col shadow-2xl overflow-hidden text-[#133022] max-h-[92vh] cursor-default"
          >
            
            {/* Close trigger button */}
            <button
              onClick={() => setActiveLightboxPage(null)}
              className="absolute right-5 top-5 z-30 p-2 bg-white hover:bg-[#ebfcf3] text-[#1fa469] hover:text-[#0b4a2d] rounded-full transition-all cursor-pointer border border-[#beecd0]"
            >
              <Minimize2 className="w-4 h-4" />
            </button>

            {/* Pure Visual Screen Container */}
            <div className="w-full md:h-[82vh] bg-[#edf8f2] flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-[#cbe8d4] relative">
              
              {/* Left Side: The Image Canvas with interactive background */}
              <div className="grow flex items-center justify-center p-6 relative bg-[#f1faf5]">
                <div className="absolute inset-0 bg-[radial-gradient(#abdbbe_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
                <div 
                  className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 opacity-25 blur-[100px] pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${activeLightboxPage.accent}30 0%, transparent 70%)` }}
                />
                
                <img
                  src={IMAGES.sodaPresets[activeLightboxPage.id - 1]}
                  alt={activeLightboxPage.title}
                  className="max-h-[45vh] md:max-h-[65vh] w-auto object-contain rounded-2xl border border-white/40 shadow-[0_25px_60px_-15px_rgba(20,60,40,0.25)] z-10"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Right Side: The Swiss editorial panel describing design guidelines */}
              <div className="w-full md:w-[360px] shrink-0 bg-white p-6 flex flex-col justify-between text-[#133022] z-10 relative">
                <div className="space-y-6">
                  {/* Top slide identifier */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] bg-[#ebfcf3] border border-[#beecd0] px-2.5 py-1 rounded-md text-[#1fa469] font-bold">
                      PAGE_0{activeLightboxPage.id}
                    </span>
                    <span className="font-mono text-[9px] text-[#2af0a3] bg-[#133022] px-2 py-0.5 rounded uppercase tracking-widest font-bold font-mono">
                      {activeLightboxPage.category.toUpperCase()}
                    </span>
                  </div>

                  {/* Stat Display Box */}
                  <div className="space-y-1 bg-[#f6fdf9] p-4 rounded-2xl border border-[#d0eed8]">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-black tracking-tight" style={{ color: activeLightboxPage.accent }}>
                        {activeLightboxPage.stat}
                      </span>
                      <span className="font-mono text-xs text-[#3f5e4d] font-bold font-mono">{activeLightboxPage.unit}</span>
                    </div>
                    <p className="text-[10px] text-[#9dbfae] font-mono tracking-wider uppercase mt-1">CORE LISTEN KEYPOINT</p>
                  </div>

                  {/* Details text describing this specific mockup */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-[#133022] tracking-tight">{activeLightboxPage.title}</h3>
                    <p className="text-xs text-[#527060] leading-relaxed font-normal">
                      {activeLightboxPage.details}
                    </p>
                  </div>

                  {/* Specification details */}
                  <div className="space-y-2 pt-4 border-t border-[#e6f4eb] font-mono text-[10px] text-[#9dbfae]">
                    <div className="flex justify-between">
                      <span>画布比例</span>
                      <span className="text-[#3f5e4d] font-semibold">16 : 9 (横屏)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>建议规格</span>
                      <span className="text-[#3f5e4d] font-semibold">{activeLightboxPage.size} PX</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#e6f4eb] flex items-center justify-between font-mono text-[9px] text-[#9dbfae] uppercase font-bold">
                  <span>SYSTEM // STANDARD APPROVED</span>
                  <span>SODA UX RESEARCH GROUP</span>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
