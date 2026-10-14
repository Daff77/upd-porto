import React from 'react';

interface ProjectCoverVisualProps {
  projectId: string;
  className?: string;
  aspect?: 'video' | 'wide' | 'square';
}

export const ProjectCoverVisual: React.FC<ProjectCoverVisualProps> = ({
  projectId,
  className = '',
  aspect = 'video',
}) => {
  const aspectClass =
    aspect === 'wide' ? 'aspect-[21/9]' : aspect === 'square' ? 'aspect-square' : 'aspect-[16/9]';

  // Distinct procedural aesthetic per sample project
  if (projectId === 'aura-studio') {
    return (
      <div
        className={`relative w-full ${aspectClass} overflow-hidden rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black border border-white/10 flex items-center justify-center select-none group ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.18),transparent_60%)]" />
        <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Design System UI Mock Frame */}
        <div className="relative z-10 w-4/5 max-w-sm rounded-xl bg-zinc-900/90 border border-white/15 p-4 shadow-2xl backdrop-blur-md transform transition-transform duration-500 group-hover:scale-[1.02]">
          <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
            <div className="flex items-center space-x-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
              tokens.system.css
            </span>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-400">--color-accent</span>
              <span className="text-emerald-400 font-semibold">#10B981</span>
            </div>
            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-4/5 bg-gradient-to-r from-emerald-500 to-teal-400" />
            </div>
            <div className="grid grid-cols-3 gap-2 pt-1 text-[11px] font-mono">
              <div className="bg-white/5 p-1.5 rounded border border-white/5 text-center text-zinc-300">
                8px • sm
              </div>
              <div className="bg-emerald-500/10 p-1.5 rounded border border-emerald-500/30 text-center text-emerald-400">
                16px • md
              </div>
              <div className="bg-white/5 p-1.5 rounded border border-white/5 text-center text-zinc-300">
                24px • lg
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-3 right-4 font-mono text-[10px] text-zinc-500 tracking-wider">
          AURA • CORE SPEC 2.4
        </div>
      </div>
    );
  }

  if (projectId === 'pulse-protocol') {
    return (
      <div
        className={`relative w-full ${aspectClass} overflow-hidden rounded-xl bg-gradient-to-br from-zinc-950 via-slate-950 to-zinc-900 border border-white/10 flex items-center justify-center select-none group ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(14,165,233,0.15),transparent_60%)]" />
        <div className="absolute inset-0 opacity-15 [background-image:radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:16px_16px]" />

        {/* Real-time Telemetry Waveform Visual */}
        <div className="relative z-10 w-4/5 max-w-sm rounded-xl bg-black/80 border border-cyan-500/20 p-4 shadow-2xl backdrop-blur-md transform transition-transform duration-500 group-hover:scale-[1.02]">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-[10px] font-mono">
            <span className="flex items-center text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse mr-1.5" />
              LIVE TELEMETRY
            </span>
            <span className="text-zinc-500">p99: 14.2ms</span>
          </div>
          
          {/* Vector Waveform */}
          <svg className="w-full h-14 text-cyan-400" viewBox="0 0 200 60" fill="none">
            <path
              d="M0 35 L30 35 L45 10 L55 50 L65 25 L75 35 L120 35 L135 15 L145 45 L155 35 L200 35"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M0 35 L30 35 L45 10 L55 50 L65 25 L75 35 L120 35 L135 15 L145 45 L155 35 L200 35 L200 60 L0 60 Z"
              fill="url(#pulse-gradient)"
              opacity="0.2"
            />
            <defs>
              <linearGradient id="pulse-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400 pt-2 border-t border-white/5">
            <span>Ingest: 184k eps</span>
            <span className="text-emerald-400">Node Sync: 100%</span>
          </div>
        </div>

        <div className="absolute bottom-3 right-4 font-mono text-[10px] text-zinc-500 tracking-wider">
          PULSE • STREAM CORE
        </div>
      </div>
    );
  }

  if (projectId === 'kroma-engine') {
    return (
      <div
        className={`relative w-full ${aspectClass} overflow-hidden rounded-xl bg-gradient-to-br from-zinc-950 via-purple-950/20 to-black border border-white/10 flex items-center justify-center select-none group ${className}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.18),transparent_65%)]" />
        
        {/* Neural Geometry Matrix */}
        <div className="relative z-10 w-4/5 max-w-sm rounded-xl bg-zinc-900/80 border border-purple-500/20 p-4 shadow-2xl backdrop-blur-md transform transition-transform duration-500 group-hover:scale-[1.02]">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10">
            <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400">
              WebGPU Canvas
            </span>
            <span className="text-[10px] font-mono text-zinc-500">60 FPS Locked</span>
          </div>

          <div className="grid grid-cols-4 gap-1.5 h-16 place-items-center">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className="w-full h-full rounded bg-white/5 border border-purple-500/20 flex items-center justify-center transition-colors hover:bg-purple-500/20"
              >
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: i % 3 === 0 ? '#c084fc' : i % 2 === 0 ? '#34d399' : '#64748b',
                  }}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400 pt-3">
            <span>Pipeline: Shader v3</span>
            <span className="text-purple-400">Inference: 4.8ms</span>
          </div>
        </div>

        <div className="absolute bottom-3 right-4 font-mono text-[10px] text-zinc-500 tracking-wider">
          KROMA • NEURAL ENGINE
        </div>
      </div>
    );
  }

  // Fallback & Vanguard CLI
  return (
    <div
      className={`relative w-full ${aspectClass} overflow-hidden rounded-xl bg-gradient-to-br from-zinc-900 via-neutral-900 to-black border border-white/10 flex items-center justify-center select-none group ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(245,158,11,0.12),transparent_60%)]" />
      <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:20px_20px]" />

      <div className="relative z-10 w-4/5 max-w-sm rounded-xl bg-zinc-950/90 border border-amber-500/20 p-4 shadow-2xl backdrop-blur-md transform transition-transform duration-500 group-hover:scale-[1.02]">
        <div className="flex items-center space-x-1.5 pb-2.5 mb-2 border-b border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
          <span className="text-[10px] font-mono text-zinc-500 pl-2">vanguard build --release</span>
        </div>
        <div className="space-y-1 font-mono text-[11px]">
          <div className="text-emerald-400">✔ Schema parsed (34 modules)</div>
          <div className="text-zinc-400">⚡ Code generator completed in 18ms</div>
          <div className="text-amber-400">✔ Static types certified</div>
        </div>
      </div>

      <div className="absolute bottom-3 right-4 font-mono text-[10px] text-zinc-500 tracking-wider">
        VANGUARD • ARCHITECTURE
      </div>
    </div>
  );
};
