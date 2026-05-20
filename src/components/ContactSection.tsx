import { useState } from 'react';
import { Mail, Phone, MessageSquare, Copy, Check, Github, Globe, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  const contactOptions = [
    {
      label: "微信 // WECHAT ID",
      value: "yifan_creativ_ai",
      icon: MessageSquare,
      displayVal: "yifan_creativ_ai (直接复制添加)"
    },
    {
      label: "个人邮箱 // EMAIL ADDRESS",
      value: "ewa5n3kvurm3ne@treppenwitz.asia",
      icon: Mail,
      displayVal: "ewa5n3kvurm3ne@treppenwitz.asia"
    },
    {
      label: "联系电话 // TELEPHONE NUMBER",
      value: "+86 188-2621-3810",
      icon: Phone,
      displayVal: "+86 188 2621 3810"
    }
  ];

  const handleCopy = (val: string, label: string) => {
    navigator.clipboard.writeText(val);
    setCopiedLabel(label);
    setTimeout(() => setCopiedLabel(null), 1500);
  };

  return (
    <section id="contact-section" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="border border-neutral-900 rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row justify-between items-start gap-12 relative overflow-hidden">
          
          {/* Subtle Grid Backdrop elements */}
          <div className="absolute inset-0 bg-[radial-gradient(#f0f0f0_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-80" />

          {/* Left Description column */}
          <div className="lg:col-span-5 relative z-10 space-y-6">
            <div>
              <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest block mb-2">
                05 // CHANNELS
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight uppercase">
                构建未来
              </h2>
            </div>
            <p className="text-sm text-neutral-500 leading-relaxed font-normal max-w-sm">
              无论您是希望共建一个真正 AI-Native 的创造力生产力工具，寻找具备极佳工程感并直接生产高保真代码的创始设计师合伙人，还是想交流空间人机交互理念，我都极其乐意倾听。
            </p>

            {/* Micro Links */}
            <div className="flex flex-wrap gap-4 pt-6 font-mono text-[10px]">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-neutral-400 hover:text-black transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GITHUB</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
              <span className="text-neutral-200">|</span>
              <a
                href="https://news.ycombinator.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-neutral-400 hover:text-black transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>SHOWCASE_LOG</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

          {/* Right Copy Clipboard cards column */}
          <div className="lg:col-span-7 relative z-10 w-full max-w-lg space-y-4">
            {contactOptions.map((opt) => {
              const Icon = opt.icon;
              const isCopied = copiedLabel === opt.label;

              return (
                <div
                  key={opt.label}
                  className={`border rounded-2xl p-4 md:p-5 flex justify-between items-center transition-all duration-300 ${
                    isCopied
                      ? 'border-emerald-500 bg-emerald-50/20'
                      : 'border-neutral-100 bg-white hover:border-neutral-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-800">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[9px] text-neutral-400 block tracking-wider uppercase">
                        {opt.label}
                      </span>
                      <span className="text-sm font-semibold text-neutral-900 mt-0.5 block select-all">
                        {opt.displayVal}
                      </span>
                    </div>
                  </div>

                  {/* Clipboard action */}
                  <button
                    onClick={() => handleCopy(opt.value, opt.label)}
                    className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                      isCopied
                        ? 'border-emerald-200 bg-emerald-500 text-white'
                        : 'border-neutral-100 hover:border-black text-neutral-400 hover:text-neutral-900 bg-neutral-50/50'
                    }`}
                    title="点击复制信息"
                  >
                    {isCopied ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
