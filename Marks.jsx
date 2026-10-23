import { BRAND } from '@/data/site';

export function KraefeggMark({ size = 'md', compact = false }) {
  const dims = { sm: 34, md: 46, lg: 60 }[size] || 46;
  const text = { sm: 'text-sm', md: 'text-base', lg: 'text-xl' }[size] || 'text-base';
  return (
    <span className="flex items-center gap-3">
      <span
        className="relative inline-flex shrink-0 items-center justify-center rounded-sm border border-cyan-400/35 bg-[#04070e] shadow-[0_0_22px_-8px_rgba(0,229,255,0.7)]"
        style={{ width: dims, height: dims }}
      >
        <img src={BRAND.logo} alt="KRAEFEGG M.O." className="h-full w-full rounded-sm object-cover" />
        <span className="pointer-events-none absolute inset-0 rounded-sm ring-1 ring-inset ring-white/10" />
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-heading font-semibold tracking-[0.16em] text-white ${text}`}>KRAEFEGG</span>
        <span className="font-mono text-[9px] tracking-[0.42em] text-cyan-400/90">M.O.</span>
      </span>
      {!compact && (
        <span className="ml-1 hidden border-l border-white/10 pl-3 font-mono text-[9px] leading-relaxed tracking-[0.18em] text-slate-500 lg:block">
          ENGINEERING,
          <br />
          CONNECTED.
        </span>
      )}
    </span>
  );
}

export function PentahydraEmblem({ size = 56 }) {
  return (
    <span
      className="relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-sm border border-rose-500/40 bg-[#0b0609] shadow-[0_0_26px_-10px_rgba(244,63,94,0.9)]"
      style={{ width: size, height: size }}
    >
      <img src={BRAND.pentahydra} alt="PentaHydra" className="h-full w-full object-cover" />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-rose-500/10 via-transparent to-cyan-400/10" />
    </span>
  );
}

export function OxygenEmblem({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-label="Oxygen Ecosystem">
      <defs>
        <linearGradient id="oxyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="55%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      <polygon points="50,5 89,27 89,73 50,95 11,73 11,27" fill="#04140F" stroke="url(#oxyGrad)" strokeWidth="2" />
      <circle cx="50" cy="50" r="27" stroke="#34D399" strokeWidth="1.2" strokeDasharray="3 5" opacity="0.7" />
      <circle cx="50" cy="50" r="35" stroke="#22D3EE" strokeWidth="0.8" strokeDasharray="7 9" opacity="0.45" />
      <path d="M50 26c-9 12-13 26 0 42 13-16 9-30 0-42z" fill="url(#oxyGrad)" opacity="0.92" />
      <circle cx="50" cy="50" r="3" fill="#ECFEFF" />
    </svg>
  );
}