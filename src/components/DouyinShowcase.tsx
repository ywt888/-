import React, { useState, useRef, useEffect, ChangeEvent, MouseEvent } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Image as ImageIcon, 
  Video, 
  Upload, 
  Trash2, 
  Minimize2,
  Clock,
  Laptop,
  Flame,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface DouyinPage {
  id: number;
  title: string;
  stat: string;
  unit: string;
  details: string;
  accent: string; // colors like crimson, teal, amber, purple
  category: 'main_link' | 'social' | 'persuasion' | 'privacy';
  size: string;
}

export default function DouyinShowcase() {
  // 32 Curated entries representing Douyin's recommendation optimization slides
  const defaultPages: DouyinPage[] = [
    { id: 1, title: '主干链路 / Main recommendation', stat: '98%', unit: '一键推荐触达率', details: '全新优化「一键推荐」底栏，减少了 3 次以上的跳转，让用户随手即推。', accent: '#fe2c55', category: 'main_link', size: '1920 × 1080' },
    { id: 2, title: '长按快捷面板 / Long press', stat: '0.3s', unit: '触点响应时间', details: '当用户长按屏幕时，右侧立即浮现半圆交互槽，物理触感引擎微缩反馈。', accent: '#25f4ee', category: 'main_link', size: '1920 × 1080' },
    { id: 3, title: '双向链路循环 / Dual Loop', stat: 'Double', unit: '推荐入口点击比', details: '一键推荐与传统分享入口并行，打通用户高习惯主链路和极轻量推荐链路。', accent: '#ffd300', category: 'main_link', size: '1920 × 1080' },
    { id: 4, title: '推荐气泡卡片 / Bubble', stat: '3.4M', unit: '气泡日常曝光量', details: '视频下方常态化浮现精致小巧的气泡，并提供熟人推荐徽章，促进社交。', accent: '#a855f7', category: 'main_link', size: '1920 × 1080' },
    { id: 5, title: '红心微交互 / Heart Accent', stat: '+42%', unit: '点赞向推荐转化率', details: '双击点赞时触发绚丽的心状散射粒子，右下方无声带出「同步推荐」气泡。', accent: '#fe2c55', category: 'main_link', size: '1920 × 1080' },
    { id: 6, title: '无摩擦滑动 / Smooth Slide', stat: 'BPM 120', unit: '交互物理阻尼感', details: '拖动按钮往下滑快速撤回推荐或修改可见范围，单阻尼回弹操作极度流畅。', accent: '#25f4ee', category: 'main_link', size: '1920 × 1080' },
    { id: 7, title: '操作热力感知 / Warm Heat', stat: 'TOP 1', unit: '最快转化手势区', details: '右拇指热力区全新布局，在极限微距操作下降低由于手张开导致的疲劳度。', accent: '#ffd300', category: 'main_link', size: '1920 × 1080' },
    { id: 8, title: '底栏导航微调 / Bar Adjust', stat: '0.5px', unit: '极致像素倒角', details: '全新深色磨砂底栏融入品红至湖蓝的双色溢光特效，保持纯粹潮流个性。', accent: '#a855f7', category: 'main_link', size: '1920 × 1080' },
    { id: 9, title: '社交分流 / Circle Spread', stat: '1.8 Days', unit: '好友同频分享频率', details: '将原本需要多次确认 of 群分享压缩为极度优雅的熟人同频社交卡片。', accent: '#25f4ee', category: 'social', size: '1920 × 1080' },
    { id: 10, title: '留言系统 / Bubble Chat', stat: '840K', unit: '日发表精选推荐语', details: '新增精短推荐语输入流，不阻挡视频观感，在评论区上方实现半露天阅览。', accent: '#fe2c55', category: 'social', size: '1920 × 1080' },
    { id: 11, title: '限时同频徽章 / Badge Sync', stat: 'LV. 3', unit: '好友共同爱好级别', details: '当您与熟人重复推荐同一类硬核视频，解锁平台潮流限定的闪耀共鸣徽记。', accent: '#ffd300', category: 'social', size: '1920 × 1080' },
    { id: 12, title: '群动线联动 / Shared Space', stat: '92.4%', unit: '群聊跳转成功率', details: '把群对话里的零碎视频推荐汇聚为一页交互看板，免去群成员繁杂的跳转。', accent: '#a855f7', category: 'social', size: '1920 × 1080' },
    { id: 13, title: '熟人高光流 / Spotlight', stat: '3 人', unit: '平均同好聚落', details: '优先分发你最亲密社交链路在点赞、评论里推荐的好物或幽默音轨内容。', accent: '#25f4ee', category: 'social', size: '1920 × 1080' },
    { id: 14, title: '跨平推荐 / Cross Share', stat: '68%', unit: '外部回流点击比', details: '允许极简打包推荐合集到系统剪贴板，生成像素级精美图文卡片分享。', accent: '#fe2c55', category: 'social', size: '1920 × 1080' },
    { id: 15, title: '推荐合集大图 / Collection Card', stat: '1920×1080', unit: '合集精选画板比例', details: '一键拼贴这一周你的推荐心愿单，附送炫目的抖音经典品红复古胶卷特效，保持横屏规范。', accent: '#ffd300', category: 'social', size: '1920 × 1080' },
    { id: 16, title: '拍档徽章 / Duo Emblem', stat: 'Duo 01', unit: '推荐引能拍档勋章', details: '专门设计给相互安利频率极高的好友关系，让每一次推荐均有温度。', accent: '#a855f7', category: 'social', size: '1920 × 1080' },
    { id: 17, title: '情感化引导 / Persuasion', stat: '32 组', unit: '说服式文案表情组合', details: '「独乐乐不如众乐乐」——极简情感化的灵动浮窗提示，降低心理防备。', accent: '#fe2c55', category: 'persuasion', size: '1920 × 1080' },
    { id: 18, title: '智能推荐词 / Smart Words', stat: '0.1s', unit: '生成速度反馈', details: '内置极速智能微型上下文理解，智能推荐一键直达贴心有趣的情感语录。', accent: '#25f4ee', category: 'persuasion', size: '1920 × 1080' },
    { id: 19, title: '彩蛋绽放 / Surprise Spin', stat: '5%', unit: '惊喜彩蛋触发率', details: '在特殊假日或岁末节点，一键推荐会有品红至赛博霓虹旋风般华丽出场。', accent: '#ffd300', category: 'persuasion', size: '1920 × 1080' },
    { id: 20, title: '平台信任链 / Trust Core', stat: '100%', unit: '高透明审计保证', details: '明确告知用户社交链路推送的具体行为方式，建立极高水平的相互信任。', accent: '#a855f7', category: 'persuasion', size: '1920 × 1080' },
    { id: 21, title: '卡片分享转化 / Ex-Share', stat: '4X Up', unit: '好友点击转化杠杆', details: '带有情绪底色的精制视觉封面，比纯文字消息更容易获得高频的响应互动。', accent: '#fe2c55', category: 'persuasion', size: '1920 × 1080' },
    { id: 22, title: '触感系统 / Haptic UI', stat: '94Hz', unit: '最高拟真回弹振幅', details: '对每次「同步推荐」施加极其细腻的高端线性马达微弱振颤，如拨动机械弦。', accent: '#25f4ee', category: 'persuasion', size: '1920 × 1080' },
    { id: 23, title: '数据透明 / Telemetry', stat: 'No Logs', unit: '零侵扰式数据机制', details: '绝不记录用户的键盘操作，坚决维护个人体验的主观性和独立观感。', accent: '#ffd300', category: 'persuasion', size: '1920 × 1080' },
    { id: 24, title: '岁终足迹 / Yearly Foot', stat: '365 Days', unit: '全旅程记忆积淀', details: '累积每一次安利、每一个深夜推荐暖片，共同谱写一出温和的人生画页。', accent: '#a855f7', category: 'persuasion', size: '1920 × 1080' },
    { id: 25, title: '隐私防护 / Privacy Guard', stat: '0.01s', unit: '设置状态同步延迟', details: '一键将部分极度私人听觉/观影偏好设置为隐私推荐，对任何熟人不可见。', accent: '#ffd300', category: 'privacy', size: '1920 × 1080' },
    { id: 26, title: '熟人屏蔽 / Mask Circle', stat: '100% Free', unit: '特定范围精细剔除', details: '用户在安利搞怪、沙雕视频时可以一键剔除工作圈，保持优雅完美的职业风度。', accent: '#fe2c55', category: 'privacy', size: '1920 × 1080' },
    { id: 27, title: '一键防扰 / Do Not Disturb', stat: 'OFF', unit: '休眠与免打扰限流', details: '午夜自动调低熟人安利的即时强提醒，变更为舒缓的静默推荐小气泡。', accent: '#25f4ee', category: 'privacy', size: '1920 × 1080' },
    { id: 28, title: '限时分享 / Express-Expire', stat: '24 hrs', unit: '限时销毁推荐机制', details: '开启「明日风尽」设置，所分享推荐的卡片在24小时后自动从好友面板撤隐。', accent: '#a855f7', category: 'privacy', size: '1920 × 1080' },
    { id: 29, title: '可见群组自主 / Group Auth', stat: 'Self-Set', unit: '指定分流分权控制', details: '设置允许在此特定兴趣交流群里分享该垂类领域的视频，实现精准切片。', accent: '#ffd300', category: 'privacy', size: '1920 × 1080' },
    { id: 30, title: '免痕模式 / Ghost Mode', stat: 'Active', unit: '无足迹安利探索', details: '推荐不留存历史、不作为推荐算法的权值累积，完全还原探索的赤子纯真。', accent: '#fe2c55', category: 'privacy', size: '1920 × 1080' },
    { id: 31, title: '信息防漏 / Leak Guard', stat: 'Encrypted', unit: '推荐加密中介传输', details: '跨外部平台传输该推荐条目时采用专属安全密匙，防止广告算法中途拦截。', accent: '#25f4ee', category: 'privacy', size: '1920 × 1080' },
    { id: 32, title: '社交分寸感 / Border Space', stat: 'Balanced', unit: '最舒适交互边界', details: '始终把选择权完全交还到用户手中，既有群落共鸣，又保留高度私人安宁。', accent: '#a855f7', category: 'privacy', size: '1920 × 1080' },
  ];

  // Selected filters: 'all' | 'main_link' | 'social' | 'persuasion' | 'privacy'
  const [filter, setFilter] = useState<'all' | 'main_link' | 'social' | 'persuasion' | 'privacy'>('all');

  // Custom uploaded images mapped by page ID (base64 or Object URLs)
  const [userImages, setUserImages] = useState<Record<number, string>>(() => {
    try {
      const saved = localStorage.getItem('douyin_user_images');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Lightbox visualizer state
  const [activeLightboxPage, setActiveLightboxPage] = useState<DouyinPage | null>(null);

  // Custom Video state
  const [videoSrc, setVideoSrc] = useState<string>(''); // empty means fallback mock simulation
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
  const [isVideoMuted, setIsVideoMuted] = useState<boolean>(false);
  const [videoProgress, setVideoProgress] = useState<number>(42); // 0-100 percentage
  const [activeVideoSlide, setActiveVideoSlide] = useState<number>(0);
  const videoIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Audio spectrum rendering simulation
  const [spectrumData, setSpectrumData] = useState<number[]>(Array.from({ length: 24 }, () => Math.random() * 60 + 10));

  // Handle local image file upload for slots
  const handleImageUpload = (id: number, e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        const newImages = { ...userImages, [id]: result };
        setUserImages(newImages);
        try {
          localStorage.setItem('douyin_user_images', JSON.stringify(newImages));
        } catch (err) {
          console.warn('Storage quota exceeded, using state-only memory.');
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Clear slot image and restore defaults
  const handleClearImage = (id: number, e: MouseEvent) => {
    e.stopPropagation();
    const newImages = { ...userImages };
    delete newImages[id];
    setUserImages(newImages);
    try {
      localStorage.setItem('douyin_user_images', JSON.stringify(newImages));
    } catch {}
  };

  // Video interval slide switching and timeline update simulation
  useEffect(() => {
    if (isVideoPlaying) {
      videoIntervalRef.current = setInterval(() => {
        setVideoProgress((prev) => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 1;
        });

        // Simulate jumping video waves
        setSpectrumData(Array.from({ length: 24 }, () => Math.random() * 80 + 10));
      }, 300);
    } else {
      if (videoIntervalRef.current) {
        clearInterval(videoIntervalRef.current);
      }
    }

    return () => {
      if (videoIntervalRef.current) {
        clearInterval(videoIntervalRef.current);
      }
    };
  }, [isVideoPlaying]);

  // Synchronize dynamic slide based on video progression
  useEffect(() => {
    const slideIndex = Math.floor((videoProgress / 100) * 4) % 4;
    setActiveVideoSlide(slideIndex);
  }, [videoProgress]);

  // Demo custom video list
  const mockSlides = [
    { title: '一键推荐底载优化', stat: '98% 触达率优化', text: '对底部常用交互栏进行扁平极简化，将原本复杂的多次弹出和跳转极致压缩至单级「一键推荐」，大幅消减操作损耗。', bg: 'from-[#fe2c55]/30 to-[#0d0d0d]' },
    { title: '长按呼起圆弧交互', stat: '0.3s 极简阻尼反馈', text: '长按任意视频处立即在右侧微距拇指手势 range 呼起美观的半圆形快捷推荐槽，配合精确细腻的马达反馈，提供极佳物理感官。', bg: 'from-[#25f4ee]/30 to-[#0d0d0d]' },
    { title: '好友气泡同频提醒', stat: '常态化气泡提醒', text: '视频左下方新增熟人安利微型提醒气泡。不折腾用户对正片的视线，通过轻盈说服性刺激深度好友共鸣。', bg: 'from-[#ffd300]/30 to-[#0d0d0d]' },
    { title: '多维群客运载空间', stat: '自动 24 小时销毁', text: '建立独立轻盈的「推荐记忆落地页」。支持一键撤回安利和屏蔽设置，在社交热度不减的同时，给隐私留足安全边界。', bg: 'from-[#a855f7]/30 to-[#0d0d0d]' },
  ];

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
    <div className="space-y-16">
      
      {/* SECTION 1: DETAILED SPECTRUM VIDEO DEMO CORNER */}
      <div className="border border-neutral-900 rounded-3xl bg-[#030303] p-1 md:p-1.5 overflow-hidden shadow-2xl relative">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-neutral-900/40 to-transparent pointer-events-none" />
        
        {/* Top Header Information Panel */}
        <div className="px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between border-b border-neutral-900 gap-4 bg-[#0d0d11]/80 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#fe2c55] to-[#25f4ee] flex items-center justify-center text-white shrink-0 animate-pulse shadow-[0_0_15px_rgba(254,44,85,0.3)]">
              <Video className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[9px] text-[#fe2c55] tracking-widest font-bold uppercase">DEMO SCREEN // 视频推荐演示</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#25f4ee] shrink-0 animate-ping" />
              </div>
              <h3 className="text-sm font-bold text-white tracking-tight leading-normal">
                抖音 APP 视频推荐体验调优综合演示
              </h3>
            </div>
          </div>

          {/* Connect custom MP4 address */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5 bg-neutral-900 px-3 py-1.5 rounded-lg border border-neutral-800">
              <Laptop className="w-3.5 h-3.5 text-neutral-400" />
              <input
                type="text"
                value={videoSrc}
                onChange={(e) => setVideoSrc(e.target.value)}
                placeholder="键入外部 *.mp4 演示视频链接..."
                className="bg-transparent text-[11px] font-mono font-medium text-neutral-300 w-44 md:w-60 focus:outline-none placeholder-neutral-600"
              />
            </div>
            
            {videoSrc && (
              <button
                onClick={() => setVideoSrc('')}
                className="text-[10px] text-neutral-400 hover:text-[#fe2c55] transition-colors"
                title="清除自定义视频，恢复内置交互"
              >
                内置演示
              </button>
            )}
          </div>
        </div>

        {/* Video Screen Body */}
        <div className="relative aspect-video w-full overflow-hidden bg-black flex items-center justify-center group/video">
          
          {/* Fallback procedural beautiful slide stream when no external mp4 is provided */}
          {!videoSrc ? (
            <div className={`absolute inset-0 bg-gradient-to-tr ${mockSlides[activeVideoSlide].bg} transition-all duration-1000 flex flex-col justify-between p-8 md:p-12 text-white`}>
              
              {/* Aesthetic Grid markings */}
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none opacity-40 animate-[pulse_8s_infinite]" />
              
              {/* Top Banner with ticking clock */}
              <div className="flex justify-between items-center z-10 font-mono text-xs tracking-widest text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <Flame className={`w-4 h-4 text-[#fe2c55] ${isVideoPlaying ? 'animate-bounce' : ''}`} />
                  DOUYIN_REVAL_2026 // ON_STAGE
                </span>
                <span className="bg-white/10 px-2 py-0.5 rounded text-[10px] text-[#25f4ee]">
                  MODULE 0{activeVideoSlide + 1}
                </span>
              </div>

              {/* Central high-graphic animated visual layout */}
              <div className="my-auto max-w-xl space-y-4 z-10">
                {mockSlides[activeVideoSlide].stat && (
                  <div className="inline-block font-mono text-xs font-bold text-[#fe2c55] tracking-widest bg-white/5 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                    {mockSlides[activeVideoSlide].stat}
                  </div>
                )}
                
                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight text-white font-sans animate-[fade-in_0.5s_ease-out]">
                  {mockSlides[activeVideoSlide].title}
                </h1>
                
                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  {mockSlides[activeVideoSlide].text}
                </p>
              </div>

              {/* Bottom live spectrum waves mimicking active music track in real-time */}
              <div className="flex justify-between items-end gap-1.5 z-10 w-full">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-wider">HAPTIC_SPECTRUM</span>
                  <div className="flex items-end gap-[2px] h-6">
                    {spectrumData.map((val, i) => (
                      <div 
                        key={i} 
                        className="w-[2px] bg-[#25f4ee] rounded-t-sm transition-all duration-300" 
                        style={{ height: isVideoPlaying ? `${val * 0.2}px` : '4px', opacity: isVideoPlaying ? 1 : 0.3 }}
                      />
                    ))}
                  </div>
                </div>

                <div className="font-mono text-[10px] text-neutral-400 flex items-center gap-3">
                  <span>LATENCY // 0.03 SEC</span>
                  <span>|</span>
                  <span>TIK_TOK ACCELERATE</span>
                </div>
              </div>
            </div>
          ) : (
            // Standard HTML5 local player when videoSource exists
            <div className="absolute inset-0">
              <video
                src={videoSrc}
                loop
                muted={isVideoMuted}
                autoPlay={isVideoPlaying}
                className="w-full h-full object-cover"
                id="douyin-custom-embedded-video"
              />
            </div>
          )}

          {/* Absolute big central control overlay for visual prompt */}
          {!isVideoPlaying && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm z-20 transition-all">
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] cursor-pointer"
              >
                <Play className="w-8 h-8 fill-black stroke-none ml-1" />
              </button>
            </div>
          )}
        </div>

        {/* Video Footer Controller Layout */}
        <div className="px-6 py-4 bg-[#0d0d11] border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Left Buttons Group */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsVideoPlaying(!isVideoPlaying)}
              className="p-2 border border-neutral-800 hover:border-white rounded-lg text-white hover:text-white transition-all cursor-pointer bg-neutral-900"
              title={isVideoPlaying ? '点击暂停' : '点击播放'}
            >
              {isVideoPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
            </button>

            {/* Simulated Elapsed and Total time based on timeline */}
            <div className="font-mono text-xs text-neutral-400 select-none flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-neutral-500" />
              <span>
                {`0${Math.floor((videoProgress * 1.8) / 60)}:${Math.floor((videoProgress * 1.8) % 60).toString().padStart(2, '0')}`}
              </span>
              <span className="text-neutral-700">/</span>
              <span>03:00</span>
            </div>
          </div>

          {/* Core scrubbing slider */}
          <div className="grow mx-4 w-full sm:w-auto relative group">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-neutral-800 -translate-y-1/2 rounded-full cursor-pointer overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-[#fe2c55] to-[#25f4ee] transition-all"
                style={{ width: `${videoProgress}%` }}
              />
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={videoProgress}
              onChange={(e) => setVideoProgress(Number(e.target.value))}
              className="absolute top-1/2 inset-x-0 -translate-y-1/2 h-4 opacity-0 cursor-pointer w-full"
            />
          </div>

          {/* Right Volume Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsVideoMuted(!isVideoMuted)}
              className="p-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              {isVideoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            <span className="font-mono text-[9px] text-[#25f4ee] uppercase tracking-widest hidden md:inline">
              RESONANCE FEEDBACK AUDIO // ACTIVE
            </span>
          </div>
        </div>

      </div>

      {/* SECTION 2: THE 32-IMAGE PANORAMA GRID INTERACTION */}
      <div className="space-y-8">
        
        {/* Gallery filtering and stats section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-neutral-900 pb-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-[#fe2c55] tracking-widest font-bold uppercase">PANORAMA SHOTS // 成果全图集</span>
              <span className="font-mono text-[10px] text-neutral-400 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded-full">
                {filteredPages.length} 卡片
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-none">
              推荐体验细分优化展示
            </h2>
          </div>
        </div>

        {/* 32 cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPages.map((page) => {
            const hasUserImage = userImages[page.id] ? true : false;
            const cardBorderColor = page.id % 2 === 0 
              ? 'hover:border-[#fe2c55]' 
              : 'hover:border-[#25f4ee]';

            return (
              <div
                key={page.id}
                onClick={() => setActiveLightboxPage(page)}
                className={`group relative aspect-video border border-neutral-900 rounded-2xl bg-[#09090b] text-white flex flex-col justify-between p-5 transition-all duration-300 hover:shadow-2xl overflow-hidden cursor-pointer active:scale-[0.98] ${cardBorderColor}`}
              >
                
                {/* Background Grid Accent for TikTok vibe */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
                
                {/* Visual shadow effect */}
                <div 
                  className="absolute -right-16 -top-16 w-36 h-36 rounded-full opacity-[0.14] group-hover:opacity-[0.25] blur-3xl transition-opacity pointer-events-none"
                  style={{ backgroundColor: page.accent }}
                />

                {/* If the user uploaded a custom JPG/PNG image slot, overlay it */}
                {hasUserImage ? (
                  <div className="absolute inset-0 z-10 bg-neutral-900 group">
                    <img 
                      src={userImages[page.id]} 
                      alt="" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Modern subtle hover panel with action triggers */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-4">
                      <div className="flex justify-between items-center w-full">
                        <span className="font-mono text-[9px] bg-white/20 px-2 py-0.5 rounded backdrop-blur">
                          CUSTOM_CARD_0{page.id}
                        </span>
                        
                        {/* Remove custom upload */}
                        <button
                          onClick={(e) => handleClearImage(page.id, e)}
                          className="p-1 px-1.5 bg-red-600 hover:bg-red-700 text-white rounded text-[9px] font-mono flex items-center gap-1 transition-all pointer-events-auto"
                          title="恢复默认设计版式"
                        >
                          <Trash2 className="w-3 h-3" />
                          <span>还原</span>
                        </button>
                      </div>
                      <span className="font-mono text-[9px] text-neutral-400 bg-black/60 px-2.5 py-1 rounded-md self-start">
                        规格: {page.size} PX (自定义)
                      </span>
                    </div>
                  </div>
                ) : (
                  // Procedual beautiful Swiss typographic layout for our preset designs
                  <>
                    {/* Top banner */}
                    <div className="flex justify-between items-start z-10 w-full border-b border-white/5 pb-1.5">
                      <div className="flex flex-col">
                        <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-widest">DOUYIN_UI // SLIDE_0{page.id}</span>
                      </div>
                      <span className="font-mono text-[8px] px-1.5 py-0.5 rounded bg-white/5 uppercase border border-white/10 text-neutral-400">
                        {page.category === 'main_link' ? '主干链路' : page.category === 'social' ? '社交分流' : page.category === 'persuasion' ? '说服交互' : '隐私控制'}
                      </span>
                    </div>

                    {/* Rich Vector visualizer body */}
                    <div className="my-auto z-10 flex flex-col items-center justify-center space-y-1 w-full text-center py-1">
                      <div className="flex items-baseline gap-1.5 justify-center">
                        <span 
                          className="font-sans text-3xl md:text-4xl font-black tracking-tighter"
                          style={{ 
                            color: page.accent,
                            textShadow: `0 0 20px ${page.accent}20`
                          }}
                        >
                          {page.stat}
                        </span>
                        <span className="font-mono text-[9px] text-neutral-400 tracking-wider">
                          {page.unit}
                        </span>
                      </div>

                      {/* Explicit Dimensions Badge */}
                      <span className="font-mono text-[8.5px] font-semibold px-2 py-0.5 rounded-full border bg-white/5 border-white/10 text-neutral-400">
                        规格: {page.size} PX
                      </span>
                    </div>

                    {/* Bottom editorial content details panel */}
                    <div className="z-10 w-full pt-1.5 border-t border-white/5 space-y-1">
                      {/* Drop-in manual uploader button */}
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-[8.5px] text-neutral-600 uppercase">TIKTOK_RECOMM_UX</span>
                        
                        <label className="p-0.5 px-1.5 bg-white text-black hover:bg-[#25f4ee] rounded-md text-[8.5px] font-mono flex items-center gap-1 transition-all cursor-pointer">
                          <Upload className="w-2.5 h-2.5" />
                          <span>替换图片</span>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleImageUpload(page.id, e)}
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  </>
                )}

              </div>
            );
          })}
        </div>
      </div>

      {/* FULL-SCREEN DETAILED LIGHTBOX */}
      {activeLightboxPage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-6 transition-all duration-300">
          <div className="absolute inset-0 bg-[radial-gradient(#1c1c1c_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

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
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 p-3 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-[#25f4ee] hover:border-[#25f4ee]/50 rounded-full transition-all cursor-pointer border border-neutral-800 backdrop-blur hover:scale-110 active:scale-95 group shadow-[0_0_20px_rgba(37,244,238,0.02)] hover:shadow-[0_0_25px_rgba(37,244,238,0.2)] flex items-center justify-center"
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
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 p-3 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-[#fe2c55] hover:border-[#fe2c55]/50 rounded-full transition-all cursor-pointer border border-neutral-800 backdrop-blur hover:scale-110 active:scale-95 group shadow-[0_0_20px_rgba(254,44,85,0.02)] hover:shadow-[0_0_25px_rgba(254,44,85,0.2)] flex items-center justify-center"
              title="下一张 (→)"
            >
              <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
            </button>
          )}

          <div className="relative w-full max-w-3xl bg-neutral-950 border border-neutral-800 rounded-3xl flex flex-col shadow-2xl overflow-hidden text-white max-h-[90vh]">
            
            {/* Close trigger button */}
            <button
              onClick={() => setActiveLightboxPage(null)}
              className="absolute right-5 top-5 z-30 p-2 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-white rounded-full transition-all cursor-pointer border border-neutral-800"
            >
              <Minimize2 className="w-4 h-4" />
            </button>

            {/* Pure Visual Screen Container */}
            <div className="w-full aspect-video md:aspect-auto md:h-[75vh] bg-[#09090b] flex flex-col justify-between relative p-8">
              
              {userImages[activeLightboxPage.id] ? (
                // Show custom representation centered with object-contain
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-black">
                  <img
                    src={userImages[activeLightboxPage.id]}
                    alt=""
                    className="w-full h-full object-contain pointer-events-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ) : (
                // Show default gorgeous dynamic visual card backdrop
                <>
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none" />
                  <div 
                    className="absolute inset-0 opacity-[0.25] blur-3xl pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${activeLightboxPage.accent}40 0%, transparent 70%)` }}
                  />
                  
                  {/* Card content inside lightbox */}
                  <div className="z-10 flex justify-between items-center w-full border-b border-white/5 pb-4">
                    <span className="font-mono text-xs bg-white/10 px-2.5 py-1 rounded text-neutral-300">
                      DOUYIN_UI_0{activeLightboxPage.id}
                    </span>
                    <span className="font-mono text-xs text-neutral-400">SPECIFICATION: {activeLightboxPage.size} PX</span>
                  </div>

                  <div className="z-10 my-auto flex flex-col items-center text-center py-12">
                    <h2 
                      className="text-5xl md:text-7xl font-black tracking-tighter"
                      style={{ color: activeLightboxPage.accent }}
                    >
                      {activeLightboxPage.stat}
                    </h2>
                    <p className="font-mono text-sm text-neutral-350 uppercase tracking-widest mt-3">
                      {activeLightboxPage.unit}
                    </p>
                  </div>

                  <div className="z-10 w-full pt-4 border-t border-[#ffffff]/10 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-neutral-500 uppercase">{activeLightboxPage.category.toUpperCase()} SECTION</span>
                    
                    <label className="p-1 px-3 bg-white text-black hover:bg-[#25f4ee] rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer">
                      <Upload className="w-3.5 h-3.5" />
                      <span>选择上传真实图片</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          handleImageUpload(activeLightboxPage.id, e);
                        }}
                        className="hidden"
                      />
                    </label>
                  </div>
                </>
              )}

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
