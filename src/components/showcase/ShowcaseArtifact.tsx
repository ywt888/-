import { useState } from 'react';
import { Layers, Activity, Cpu, Code, ShieldAlert, ArrowRight, Check, Copy } from 'lucide-react';

interface ShowcaseArtifactProps {
  id: string;
  title: string;
  type: 'mindmap' | 'wireframe' | 'flow' | 'ui' | 'tokens' | 'metrics' | 'architecture';
  data: any;
}

export default function ShowcaseArtifact({ id, title, type, data }: ShowcaseArtifactProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [activeToken, setActiveToken] = useState<string | null>(null);
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const handleCopy = (val: string, label: string) => {
    navigator.clipboard.writeText(val);
    setCopiedToken(label);
    setTimeout(() => setCopiedToken(null), 1500);
  };

  const renderContent = () => {
    switch (type) {
      case 'mindmap':
        return (
          <div className="relative w-full h-80 bg-neutral-50/50 border border-neutral-100 rounded-xl flex flex-col justify-between p-6 overflow-hidden">
            {/* Swiss Grid Dots */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-60" />
            
            <div className="flex justify-between items-center z-10">
              <span className="font-mono text-[10px] text-neutral-400 tracking-wider">STRUCTURE // DECISION_MAP</span>
              <span className="font-mono text-[10px] text-neutral-900 border border-neutral-200 px-2 py-0.5 rounded-full bg-white">定性节点模型</span>
            </div>

            <div className="relative flex justify-center items-center h-48 z-10">
              {/* Center Node */}
              <div className="absolute bg-black text-white px-5 py-3 rounded-lg text-xs font-semibold tracking-tight shadow-md z-20">
                {data.center}
              </div>

              {/* Surrounding Nodes with connection lines */}
              {data.nodes.map((node: any, i: number) => {
                const angle = (i * 2 * Math.PI) / data.nodes.length;
                const distance = 110; // offset radius
                const x = Math.cos(angle) * distance;
                const y = Math.sin(angle) * distance;

                const isHovered = hoveredNode === node.label;

                return (
                  <div key={node.label} className="absolute">
                    {/* SVG Line to center */}
                    <svg className="absolute overflow-visible pointer-events-none" style={{ top: 0, left: 0 }}>
                      <line
                        x1={0}
                        y1={0}
                        x2={x}
                        y2={y}
                        stroke={isHovered ? '#000000' : '#e5e5e5'}
                        strokeWidth={isHovered ? 1.5 : 1}
                        strokeDasharray={i % 2 === 0 ? "none" : "3,3"}
                        className="transition-all duration-300"
                      />
                    </svg>

                    {/* Surrounding Node Card */}
                    <div
                      style={{ transform: `translate(${x}px, ${y}px) translate(-50%, -50%)` }}
                      className={`absolute whitespace-nowrap px-3 py-2 border transition-all duration-300 cursor-pointer text-center rounded-lg ${
                        isHovered 
                          ? 'border-black bg-white text-black scale-105 shadow-sm'
                          : 'border-neutral-200 bg-white text-neutral-800'
                      }`}
                      onMouseEnter={() => setHoveredNode(node.label)}
                      onMouseLeave={() => setHoveredNode(null)}
                    >
                      <p className="text-[11px] font-medium leading-none">{node.label}</p>
                      <span className="font-mono text-[9px] text-neutral-400 mt-1 block">{node.weight}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-neutral-400 font-mono text-[9px] z-10 border-t border-neutral-100 pt-3">
              <span>CONTRAST: MAX_SENSITIVE</span>
              <span>GRID_COORD: 16PX_DOTS</span>
            </div>
          </div>
        );

      case 'metrics':
        return (
          <div className="relative w-full h-80 bg-neutral-50/50 border border-neutral-100 rounded-xl flex flex-col justify-between p-6 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-60" />
            
            <div className="flex justify-between items-center z-10">
              <span className="font-mono text-[10px] text-neutral-400 tracking-wider">PERFORMANCE // QUANTITATIVE_CHART</span>
              <div className="flex gap-4">
                {data.datasets.map((dataset: any, index: number) => (
                  <div key={dataset.label} className="flex items-center gap-1.5">
                    <span className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-neutral-300' : 'bg-black'}`} />
                    <span className="font-mono text-[10px] text-neutral-600">{dataset.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom SVG Line Chart */}
            <div className="relative w-full h-44 z-10 flex items-end">
              <svg className="w-full h-full overflow-visible">
                {/* Horizontal gridlines */}
                {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => (
                  <line
                    key={i}
                    x1="0%"
                    y1={`${ratio * 100}%`}
                    x2="100%"
                    y2={`${ratio * 100}%`}
                    stroke="#eaeaea"
                    strokeWidth="1"
                  />
                ))}

                {/* Render Dataset Paths */}
                {data.datasets.map((dataset: any, dIdx: number) => {
                  const points = dataset.values.map((v: number, vIdx: number) => {
                    const xPercent = (vIdx / (data.labels.length - 1)) * 100;
                    // Normalize values between max 240 and min 5
                    const maxVal = 240;
                    const yPercent = 100 - (v / maxVal) * 100;
                    return { x: xPercent, y: yPercent, origVal: v, label: data.labels[vIdx] };
                  });

                  const dStr = points.reduce((acc: string, p: any, pIdx: number) => {
                    return acc + `${pIdx === 0 ? 'M' : 'L'} ${p.x}% ${p.y}%`;
                  }, '');

                  return (
                    <g key={dataset.label}>
                      {/* Smooth shadow line */}
                      <path
                        d={dStr}
                        fill="none"
                        stroke={dIdx === 0 ? '#b3b3b3' : '#000000'}
                        strokeWidth={dIdx === 0 ? 1.5 : 2.5}
                        className="transition-all duration-500"
                        style={{
                          width: '100%'
                        }}
                      />
                      {/* Dots */}
                      {points.map((p: any, pIdx: number) => (
                        <g key={pIdx} className="group/dot cursor-pointer">
                          <circle
                            cx={`${p.x}%`}
                            cy={`${p.y}%`}
                            r={hoveredNode === `${id}-${dIdx}-${pIdx}` ? 6 : 4}
                            fill={dIdx === 0 ? '#ffffff' : '#000000'}
                            stroke={dIdx === 0 ? '#b3b3b3' : '#000]'}
                            strokeWidth={2}
                            onMouseEnter={() => setHoveredNode(`${id}-${dIdx}-${pIdx}`)}
                            onMouseLeave={() => setHoveredNode(null)}
                            className="transition-all duration-200"
                          />
                          {/* Rich Tooltip directly on point */}
                          <foreignObject
                            x={`${p.x}%`}
                            y={`${p.y - 45}%`}
                            width="90"
                            height="40"
                            className={`overflow-visible pointer-events-none transition-opacity duration-200 ${
                              hoveredNode === `${id}-${dIdx}-${pIdx}` ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{ transform: 'translateX(-45px)' }}
                          >
                            <div className="bg-black text-white px-2 py-1 rounded text-[9px] font-mono text-center shadow-lg">
                              <p className="font-bold">{p.origVal} mins/h</p>
                              <p className="text-neutral-400 no-wrap">{p.label}</p>
                            </div>
                          </foreignObject>
                        </g>
                      ))}
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* X Axis Labels */}
            <div className="flex justify-between items-center z-10 font-mono text-[9px] text-neutral-400 border-t border-neutral-100 pt-3">
              {data.labels.map((lbl: string) => (
                <span key={lbl}>{lbl}</span>
              ))}
            </div>
          </div>
        );

      case 'architecture':
        return (
          <div className="relative w-full h-80 bg-neutral-900 border border-neutral-800 rounded-xl flex flex-col justify-between p-6 overflow-hidden text-neutral-100">
            {/* Dark Matrix Style Dot Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#2d2d2d_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-80" />
            
            <div className="flex justify-between items-center z-10">
              <span className="font-mono text-[10px] text-neutral-500 tracking-wider">SYSTEM_DAG // FLOW_TOWARDS</span>
              <span className="font-mono text-[10px] text-emerald-400 bg-emerald-900/40 border border-emerald-900/60 px-2 py-0.5 rounded-full">编译活动链</span>
            </div>

            <div className="relative flex justify-center items-center h-48 z-10 w-full">
              {/* SVG connection arrows */}
              <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
                <defs>
                  <marker
                    id="arrow-dark"
                    viewBox="0 0 10 10"
                    refX="6"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#404040" />
                  </marker>
                  <marker
                    id="arrow-dark-active"
                    viewBox="0 0 10 10"
                    refX="6"
                    refY="5"
                    markerWidth="6"
                    markerHeight="6"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 1.5 L 8 5 L 0 8.5 z" fill="#ffffff" />
                  </marker>
                </defs>

                {data.edges.map((edge: any, i: number) => {
                  const fromNode = data.nodes.find((n: any) => n.id === edge.from);
                  const toNode = data.nodes.find((n: any) => n.id === edge.to);

                  if (!fromNode || !toNode) return null;

                  const isEdgeActive = hoveredNode === edge.from || hoveredNode === edge.to;

                  return (
                    <g key={i}>
                      <line
                        x1={`${fromNode.x}%`}
                        y1={`${fromNode.y}%`}
                        x2={`${toNode.x}%`}
                        y2={`${toNode.y}%`}
                        stroke={isEdgeActive ? '#ffffff' : '#333333'}
                        strokeWidth={isEdgeActive ? 1.5 : 1}
                        strokeDasharray={edge.label.includes("Conflict") ? "4,4" : "none"}
                        markerEnd={isEdgeActive ? "url(#arrow-dark-active)" : "url(#arrow-dark)"}
                        className="transition-all duration-300"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Render Nodes */}
              {data.nodes.map((node: any) => {
                const isHovered = hoveredNode === node.id;
                const isDeadlock = node.name.includes("死锁") || node.name.includes("Conflict");

                return (
                  <div
                    key={node.id}
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    className={`absolute translate-x-[-50%] translate-y-[-50%] px-4 py-2.5 rounded-lg border transition-all duration-300 cursor-pointer z-10 max-w-[150px] ${
                      isHovered 
                        ? 'border-white bg-white text-black scale-105 shadow-[0_0_15px_rgba(255,255,255,0.15)]'
                        : isDeadlock
                        ? 'border-red-900 bg-red-950/40 text-red-200'
                        : 'border-neutral-800 bg-neutral-900/90 text-neutral-300'
                    }`}
                    onMouseEnter={() => setHoveredNode(node.id)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <div className="flex items-center gap-1">
                      {isDeadlock && <ShieldAlert className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />}
                      <span className="text-[10px] font-mono leading-tight tracking-tight block truncate">
                        {node.name}
                      </span>
                    </div>
                    {isHovered && (
                      <span className="text-[8px] opacity-75 font-mono mt-1 block">Active state</span>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-neutral-600 font-mono text-[9px] z-10 border-t border-neutral-800 pt-3">
              <span>COMPILE_TARGET: AMD64_UNIFIED</span>
              <span>ENGINE: KRYPTON-LLVM</span>
            </div>
          </div>
        );

      case 'wireframe':
        return (
          <div className="relative w-full h-80 bg-neutral-50/50 border border-neutral-100 rounded-xl flex flex-col justify-between p-6 overflow-hidden">
            <div className="absolute inset-0 bg-white" style={{ backgroundImage: 'linear-gradient(rgba(229, 229, 229, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(229, 229, 229, 0.4) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            
            <div className="flex justify-between items-center z-10">
              <span className="font-mono text-[10px] text-neutral-400 tracking-wider">WIREFRAME_SHEET // 12_COLS_GRID</span>
              <span className="font-mono text-[10px] bg-neutral-900 text-white px-2 py-0.5 rounded">SWISS 栅格图</span>
            </div>

            {/* Programmatic Grid Layout Wireframe */}
            <div className="grow relative flex items-center justify-center gap-2 z-10 mx-2">
              <div className="w-full grid grid-cols-12 gap-2">
                {data.elements.map((el: any, index: number) => (
                  <div
                    key={el.name}
                    style={{ gridColumn: `${el.start} / span ${el.span}` }}
                    className={`h-24 rounded-lg border p-3 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                      hoveredNode === el.name
                        ? 'border-black bg-neutral-100/90 shadow-sm'
                        : 'border-neutral-200 bg-white/80'
                    }`}
                    onMouseEnter={() => setHoveredNode(el.name)}
                    onMouseLeave={() => setHoveredNode(null)}
                  >
                    <div>
                      <p className="font-mono text-[8px] text-neutral-400">COLS {el.start}-{el.start + el.span - 1}</p>
                      <h4 className="text-[11px] font-bold text-neutral-900 mt-1 leading-none">{el.name}</h4>
                    </div>
                    <span className="text-[9px] text-neutral-400 truncate leading-none">{el.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between text-neutral-400 font-mono text-[9px] z-10 border-t border-neutral-100 pt-3">
              <span>RATIO_CURVE: LAME_CURVATURE</span>
              <span>SYSTEM: NEU_SWISS</span>
            </div>
          </div>
        );

      case 'flow':
        return (
          <div className="relative w-full h-80 bg-neutral-50/50 border border-neutral-100 rounded-xl flex flex-col justify-between p-6 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-60" />
            
            <div className="flex justify-between items-center z-10">
              <span className="font-mono text-[10px] text-neutral-400 tracking-wider">INTERACTION // STATE_SEQUENCE</span>
              <span className="font-mono text-[10px] text-neutral-800">动态微调过程</span>
            </div>

            {/* Render Horizontal Sequence */}
            <div className="grow flex items-center justify-between gap-2 z-10 relative">
              {data.states.map((state: any, index: number) => {
                const isHovered = hoveredNode === state.name;
                const isLast = index === data.states.length - 1;

                return (
                  <div key={state.name} className="flex items-center grow relative">
                    <div
                      className={`relative grow p-3.5 border rounded-xl cursor-pointer transition-all duration-300 ${
                        isHovered 
                          ? 'border-black bg-white scale-[1.03] shadow-md z-10'
                          : 'border-neutral-200 bg-white/90'
                      }`}
                      onMouseEnter={() => setHoveredNode(state.name)}
                      onMouseLeave={() => setHoveredNode(null)}
                    >
                      <div className="absolute top-[-7px] left-3.5 bg-neutral-900 text-white font-mono text-[8px] px-1.5 py-0.5 rounded-sm">
                        ST_0{index + 1}
                      </div>
                      <h4 className="text-xs font-bold text-neutral-900 mt-1.5 leading-tight">{state.name}</h4>
                      <p className="text-[9px] text-neutral-400 mt-1 leading-snug">{state.desc}</p>
                    </div>
                    {!isLast && (
                      <div className="flex items-center justify-center p-1 text-neutral-300 flex-shrink-0">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-neutral-400 font-mono text-[9px] z-10 border-t border-neutral-100 pt-3">
              <span>TRAMMELED: SECURE_MICRO</span>
              <span>FEEDBACK: REAL-TIME_FORCE</span>
            </div>
          </div>
        );

      case 'ui':
        return (
          <div className="relative w-full h-80 bg-neutral-950 border border-neutral-800 rounded-xl flex flex-col justify-between p-6 overflow-hidden text-neutral-100">
            <div className="absolute inset-0 bg-white" style={{ backgroundImage: 'linear-gradient(rgba(10, 10, 10, 0.95) 1px, transparent 1px), linear-gradient(90deg, rgba(10, 10, 10, 0.95) 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
            
            <div className="flex justify-between items-center z-10">
              <span className="font-mono text-[10px] text-neutral-500 tracking-wider">PREVIEW // SHADED_RENDER</span>
              <span className="font-mono text-[10px] text-neutral-400 bg-neutral-900 border border-neutral-800 px-2 py-0.5 rounded">微型交互原型</span>
            </div>

            <div className="grow relative flex items-center justify-center z-10">
              <div className="w-full max-w-sm border border-neutral-800 rounded-xl bg-neutral-900/90 shadow-2xl overflow-hidden">
                <div className="bg-neutral-950 px-4 py-2 border-b border-neutral-800 flex justify-between items-center">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                    <span className="w-2.5 h-2.5 rounded-full bg-neutral-800" />
                  </div>
                  <span className="font-mono text-[8px] text-neutral-500">SYSTEM_WINDOW.SH // MONO</span>
                </div>
                <div className="p-4 space-y-2">
                  {data.features.map((feat: any) => (
                    <div
                      key={feat.key}
                      className="flex justify-between items-center p-2.5 rounded border border-neutral-800 bg-neutral-950 hover:bg-neutral-900 transition-colors"
                    >
                      <span className="font-mono text-[10px] text-neutral-400">{feat.key}</span>
                      <span className="font-mono text-[10px] text-neutral-100 font-bold">{feat.val}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-neutral-600 font-mono text-[9px] z-10 border-t border-neutral-800 pt-3">
              <span>ANTIALIASED: GLYPH_EDGE</span>
              <span>RENDERED: FAST_STATIC</span>
            </div>
          </div>
        );

      case 'tokens':
        return (
          <div className="relative w-full h-80 bg-neutral-50/50 border border-neutral-100 rounded-xl flex flex-col justify-between p-6 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#e5e5e5_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-60" />
            
            <div className="flex justify-between items-center z-10">
              <span className="font-mono text-[10px] text-neutral-400 tracking-wider">DOCUMENTATION // INTERACTIVE_TOKENS</span>
              <span className="font-mono text-[9px] text-neutral-400">点击变量值快速复制</span>
            </div>

            <div className="grow flex flex-col justify-center gap-2.5 z-10 relative">
              {data.tokens.map((token: any) => {
                const isActive = activeToken === token.name;
                const isCopied = copiedToken === token.name;

                return (
                  <div
                    key={token.name}
                    className={`flex justify-between items-center p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? 'border-black bg-white scale-[1.01]' 
                        : 'border-neutral-200 bg-white/90 hover:bg-white'
                    }`}
                    onClick={() => {
                      const cleanVal = token.value.split(' ')[0];
                      handleCopy(cleanVal, token.name);
                    }}
                    onMouseEnter={() => setActiveToken(token.name)}
                    onMouseLeave={() => setActiveToken(null)}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-900" />
                      <span className="font-mono text-[11px] text-black font-semibold">{token.name}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-mono text-[11px] text-neutral-400">{token.value}</span>
                      {isCopied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      ) : (
                        <Copy className={`w-3 h-3 text-neutral-300 transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-neutral-400 font-mono text-[9px] z-10 border-t border-neutral-100 pt-3">
              <span>COPIED_TIPS: FLASH_POP</span>
              <span>SYNCS: SWIFT_CSS_JSON</span>
            </div>
          </div>
        );

      default:
        return (
          <div className="relative w-full h-80 bg-neutral-100 rounded-xl flex items-center justify-center p-6 border border-neutral-200">
            <span className="font-mono text-xs text-neutral-400">Placeholder Vector</span>
          </div>
        );
    }
  };

  return (
    <div className="space-y-3">
      {renderContent()}
      <div className="flex justify-between items-center px-1">
        <span className="text-xs font-medium text-neutral-900">{title}</span>
        <span className="font-mono text-[9px] text-neutral-400 uppercase tracking-wider">{type}</span>
      </div>
    </div>
  );
}
