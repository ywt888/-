import { useState } from 'react';
import { Mail, Phone, MessageSquare, Copy, Check, Github, Globe, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  const contactOptions = [
    {
      label: "微信 // WECHAT ID",
      value: "18057728807",
      icon: MessageSquare,
      displayVal: "18057728807 (直接复制添加)"
    },
    {
      label: "个人邮箱 // EMAIL ADDRESS",
      value: "1069656782@qq.com",
      icon: Mail,
      displayVal: "1069656782@qq.com"
    },
    {
      label: "联系电话 // TELEPHONE NUMBER",
      value: "+86 180-5772-8807",
      icon: Phone,
      displayVal: "+86 180 5772 8807"
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
                04 // CONTACT
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-black tracking-tight uppercase">
                构建未来
              </h2>
            </div>
            <p className="text-sm text-neutral-500 leading-relaxed font-normal max-w-sm">
              无论您是希望共建更有温度的人机交互生态，打磨极致直觉化的微交互与体验流线，还是寻找兼具设计美学与硬核逻辑的交互体验设计师，我都非常期待与您交流。
            </p>


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
