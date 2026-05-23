import React, { useState, useEffect } from 'react';
import { 
  Minimize2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { IMAGES } from '../../data';

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
    { id: 1, title: '主干链路 / Main recommendation', stat: '98%', unit: '一键推荐触达率', details: '全新优化「一键推荐」底栏，减少了 3 次以上的跳转，让用户随手即推。', accent: '#fe2c55', category: 'main_link', size: '1920 × 1085' },
    { id: 2, title: '长按快捷面板 / Long press', stat: '0.3s', unit: '触点响应时间', details: '当用户长按屏幕时，右侧立即浮现半圆交互槽，物理触感引擎微缩反馈。', accent: '#25f4ee', category: 'main_link', size: '1920 × 1085' },
    { id: 3, title: '双向链路循环 / Dual Loop', stat: 'Double', unit: '推荐入口点击比', details: '一键推荐与传统分享入口并行，打通用户高习惯主链路 and 极轻量推荐链路。', accent: '#ffd300', category: 'main_link', size: '1920 × 1085' },
    { id: 4, title: '推荐气泡卡片 / Bubble', stat: '3.4M', unit: '气泡日常曝光量', details: '视频下方常态化浮现精致小巧的气泡，并提供熟人推荐徽章，促进社交。', accent: '#a855f7', category: 'main_link', size: '1920 × 1085' },
    { id: 5, title: '红心微交互 / Heart Accent', stat: '+42%', unit: '点赞向推荐转化率', details: '双击点赞时触发绚丽的心状散射粒子，右下方无声带出「同步推荐」气泡。', accent: '#fe2c55', category: 'main_link', size: '1920 × 1085' },
    { id: 6, title: '无摩擦滑动 / Smooth Slide', stat: 'BPM 120', unit: '交互物理阻尼感', details: '拖动按钮往下滑快速撤回推荐或修改可见范围，单阻尼回弹操作极度流畅。', accent: '#25f4ee', category: 'main_link', size: '1920 × 1085' },
    { id: 7, title: '操作热力感知 / Warm Heat', stat: 'TOP 1', unit: '最快转化手势区', details: '右拇指热力区全新布局，在极限微距操作下降低由于手张开导致的疲劳度。', accent: '#ffd300', category: 'main_link', size: '1920 × 1085' },
    { id: 8, title: '底栏导航微调 / Bar Adjust', stat: '0.5px', unit: '极致像素倒角', details: '全新深色磨砂底栏融入品红至湖蓝的双色溢光特效，保持纯粹潮流个性。', accent: '#a855f7', category: 'main_link', size: '1920 × 1085' },
    { id: 9, title: '社交分流 / Circle Spread', stat: '1.8 Days', unit: '好友同频分享频率', details: '将原本需要多次确认 of 群分享压缩为极度优雅的熟人同频社交卡片。', accent: '#25f4ee', category: 'social', size: '1920 × 1085' },
    { id: 10, title: '留言系统 / Bubble Chat', stat: '840K', unit: '日发表精选推荐语', details: '新增精短推荐语输入流，不阻挡视频观感，在评论区上方实现半露天阅览。', accent: '#fe2c55', category: 'social', size: '1920 × 1085' },
    { id: 11, title: '限时同频徽章 / Badge Sync', stat: 'LV. 3', unit: '好友共同爱好级别', details: '当您与熟人重复推荐同一类硬核视频，解锁平台潮流限定的闪耀共鸣徽记。', accent: '#ffd300', category: 'social', size: '1920 × 1085' },
    { id: 12, title: '群动线联动 / Shared Space', stat: '92.4%', unit: '群聊跳转成功率', details: '把群对话里的零碎视频推荐汇聚为一页交互看板，免去群成员繁杂的跳转。', accent: '#a855f7', category: 'social', size: '1920 × 1085' },
    { id: 13, title: '熟人高光流 / Spotlight', stat: '3 人', unit: '平均同好聚落', details: '优先分发你最亲密社交链路在点赞、评论里推荐的好物或幽默音轨内容。', accent: '#25f4ee', category: 'social', size: '1920 × 1085' },
    { id: 14, title: '跨平推荐 / Cross Share', stat: '68%', unit: '外部回流点击比', details: '允许极简打包推荐合集到系统剪贴板，生成像素级精美图文卡片分享。', accent: '#fe2c55', category: 'social', size: '1920 × 1085' },
    { id: 15, title: '推荐合集大图 / Collection Card', stat: '1920×1080', unit: '合集精选画板比例', details: '一键拼贴这一周你的推荐心愿单，附送炫目的抖音经典品红复古胶卷特效，保持横屏规范。', accent: '#ffd300', category: 'social', size: '1920 × 1085' },
    { id: 16, title: '拍档徽章 / Duo Emblem', stat: 'Duo 01', unit: '推荐引能拍档勋章', details: '专门设计给相互安利频率极高的好友关系，让每一次推荐均有温度。', accent: '#a855f7', category: 'social', size: '1920 × 1085' },
    { id: 17, title: '情感化引导 / Persuasion', stat: '32 组', unit: '说服式文案表情组合', details: '「独乐乐不如众乐乐」──极简情感化的灵动浮窗提示，降低心理防备。', accent: '#fe2c55', category: 'persuasion', size: '1920 × 1085' },
    { id: 18, title: '智能推荐词 / Smart Words', stat: '0.1s', unit: '生成速度反馈', details: '内置极速智能微型上下文理解，智能推荐一键直达贴心有趣的情感语录。', accent: '#25f4ee', category: 'persuasion', size: '1920 × 1085' },
    { id: 19, title: '彩蛋绽放 / Surprise Spin', stat: '5%', unit: '惊喜彩蛋触发率', details: '在特殊假日或岁末节点，一键推荐会有品红至赛博霓虹旋风般华丽出场。', accent: '#ffd300', category: 'persuasion', size: '1920 × 1085' },
    { id: 20, title: '平台信任链 / Trust Core', stat: '100%', unit: '高透明审计保证', details: '明确告知用户社交链路推送的具体行为方式，建立极高水平的相互信任。', accent: '#a855f7', category: 'persuasion', size: '1920 × 1085' },
    { id: 21, title: '卡片分享转化 / Ex-Share', stat: '4X Up', unit: '好友点击转化杠杆', details: '带有情绪底色的精制视觉封面，比纯文字消息更容易获得高频的响应互动。', accent: '#fe2c55', category: 'persuasion', size: '1920 × 1085' },
    { id: 22, title: '触感系统 / Haptic UI', stat: '94Hz', unit: '最高拟真回弹振幅', details: '对每次「同步推荐」施加极其细腻的高端线性马达微弱振颤，如拨动机械弦。', accent: '#25f4ee', category: 'persuasion', size: '1920 × 1085' },
    { id: 23, title: '数据透明 / Telemetry', stat: 'No Logs', unit: '零侵扰式数据机制', details: '绝不记录用户的键盘操作，坚决维护个人体验的主观性和独立观感。', accent: '#ffd300', category: 'persuasion', size: '1920 × 1085' },
    { id: 24, title: '岁终足迹 / Yearly Foot', stat: '365 Days', unit: '全旅程记忆积淀', details: '累积每一次安利、每一个深夜推荐暖片，共同谱写一出温和的人生画页。', accent: '#a855f7', category: 'persuasion', size: '1920 × 1085' },
    { id: 25, title: '隐私防护 / Privacy Guard', stat: '0.01s', unit: '设置状态同步延迟', details: '一键将部分极度私人听觉/观影偏好设置为隐私推荐，对任何熟人不可见。', accent: '#ffd300', category: 'privacy', size: '1920 × 1085' },
    { id: 26, title: '熟人屏蔽 / Mask Circle', stat: '100% Free', unit: '特定范围精细剔除', details: '用户在安利搞怪、沙雕视频时可以一键剔除工作圈，保持优雅完美的职业风度。', accent: '#fe2c55', category: 'privacy', size: '1920 × 1585' },
    { id: 27, title: '一键防扰 / Do Not Disturb', stat: 'OFF', unit: '休眠与免打扰限流', details: '午夜自动调低熟人安利的即时强提醒，变更为舒缓的静默推荐小气泡。', accent: '#25f4ee', category: 'privacy', size: '1920 × 1085' },
    { id: 28, title: '限时分享 / Express-Expire', stat: '24 hrs', unit: '限时销毁推荐机制', details: '开启「明日风尽」设置，所分享推荐的卡片在24小时后自动从好友面板撤隐。', accent: '#a855f7', category: 'privacy', size: '1920 × 1085' },
    { id: 29, title: '可见群组自主 / Group Auth', stat: 'Self-Set', unit: '指定分流分权控制', details: '设置允许在此特定兴趣交流群里分享该垂类领域的视频，实现精准切片。', accent: '#ffd300', category: 'privacy', size: '1920 × 1085' },
    { id: 30, title: '免痕模式 / Ghost Mode', stat: 'Active', unit: '无足迹安利探索', details: '推荐不留存历史、不作为推荐算法的权值累积，完全还原探索的赤子纯真。', accent: '#fe2c55', category: 'privacy', size: '1920 × 1080' },
    { id: 31, title: '信息防漏 / Leak Guard', stat: 'Encrypted', unit: '推荐加密中介传输', details: '跨外部平台传输该推荐条目时采用专属安全密匙，防止广告算法中途拦截。', accent: '#25f4ee', category: 'privacy', size: '1920 × 1080' },
    { id: 32, title: '社交分寸感 / Border Space', stat: 'Balanced', unit: '最舒适交互边界', details: '始终把选择权完全交还到用户手中，既有群落共鸣，又保留高度私人安宁。', accent: '#a855f7', category: 'privacy', size: '1920 × 1080' },
  ];

  // Lightbox visualizer state
  const [activeLightboxPage, setActiveLightboxPage] = useState<DouyinPage | null>(null);

  const filteredPages = defaultPages;

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
    <div className="space-y-16 animate-[fade-in_0.5s_ease-out]">
      
      {/* SECTION 2: THE 32-IMAGE PANORAMA GRID INTERACTION */}
      <div className="space-y-8">
        
        {/* Gallery filtering and stats section */}
        <div className="border-b border-neutral-900 pb-6">
          <div className="space-y-1.5 scroll-mt-24" id="gallery-container">
            <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-none">
              推荐体验细分优化展示
            </h2>
          </div>
        </div>

        {/* 32 cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPages.map((page) => {
            const cardBorderColor = page.id % 2 === 0 
              ? 'hover:border-[#fe2c55]' 
              : 'hover:border-[#25f4ee]';

            return (
              <div
                key={page.id}
                onClick={() => setActiveLightboxPage(page)}
                className={`group relative aspect-video border border-neutral-900 rounded-2xl bg-[#09090b] overflow-hidden cursor-pointer active:scale-[0.98] transition-all duration-300 hover:shadow-2xl ${cardBorderColor}`}
              >
                {/* Underlaid Mockup Design Image */}
                <img 
                  src={IMAGES.douyinPresets[page.id - 1]} 
                  alt={page.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* FULL-SCREEN DETAILED LIGHTBOX */}
      {activeLightboxPage && (
        <div 
          onClick={() => setActiveLightboxPage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-6 transition-all duration-305 cursor-zoom-out"
        >
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

          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl lg:max-w-6xl xl:max-w-7xl bg-neutral-950 border border-neutral-800 rounded-3xl flex flex-col shadow-2xl overflow-hidden max-h-[92vh] cursor-default"
          >
            
            {/* Close trigger button */}
            <button
              onClick={() => setActiveLightboxPage(null)}
              className="absolute right-5 top-5 z-30 p-2 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-white rounded-full transition-all cursor-pointer border border-neutral-800"
            >
              <Minimize2 className="w-4 h-4" />
            </button>

            {/* Pure Visual Screen Container */}
            <div className="w-full md:h-[82vh] bg-[#050508] flex items-center justify-center p-6 relative">
              <div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:16px_16px] opacity-35 pointer-events-none" />
              <div 
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 opacity-25 blur-[100px] pointer-events-none"
                style={{ background: `radial-gradient(circle, ${activeLightboxPage.accent}30 0%, transparent 70%)` }}
              />
              
              <img
                src={IMAGES.douyinPresets[activeLightboxPage.id - 1]}
                alt={activeLightboxPage.title}
                className="max-h-[75vh] w-auto max-w-[90%] object-contain rounded-2xl border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] z-10 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
