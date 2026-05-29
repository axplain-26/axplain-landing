// Abstract UI mockup visuals for the 3 feature preview cards

export function MockupDrawing() {
  return (
    <div className="relative w-full h-32 rounded-xl overflow-hidden bg-ax-bg/60 border border-white/[0.07] flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="bp-grid" width="12" height="12" patternUnits="userSpaceOnUse">
            <path d="M 12 0 L 0 0 0 12" fill="none" stroke="#3B82F6" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#bp-grid)" />
      </svg>
      <svg viewBox="0 0 160 90" className="relative z-10 w-40 h-24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="15" width="55" height="60" rx="4" fill="#3B82F6" fillOpacity="0.15" stroke="#3B82F6" strokeWidth="1" />
        <rect x="75" y="25" width="35" height="20" rx="3" fill="#1E6FE0" fillOpacity="0.2" stroke="#1E6FE0" strokeWidth="1" />
        <rect x="75" y="52" width="35" height="20" rx="3" fill="#004AAD" fillOpacity="0.2" stroke="#004AAD" strokeWidth="1" />
        <rect x="118" y="15" width="32" height="60" rx="4" fill="#3B82F6" fillOpacity="0.1" stroke="#3B82F6" strokeWidth="0.8" strokeDasharray="3 2" />
        <circle cx="15" cy="20" r="5" fill="#3B82F6" /><text x="15" y="23.5" textAnchor="middle" fontSize="5" fill="white" fontWeight="bold">1</text>
        <circle cx="80" cy="30" r="5" fill="#1E6FE0" /><text x="80" y="33.5" textAnchor="middle" fontSize="5" fill="white" fontWeight="bold">2</text>
        <circle cx="80" cy="57" r="5" fill="#004AAD" /><text x="80" y="60.5" textAnchor="middle" fontSize="5" fill="white" fontWeight="bold">3</text>
        <circle cx="123" cy="20" r="5" fill="#3B82F6" fillOpacity="0.6" /><text x="123" y="23.5" textAnchor="middle" fontSize="5" fill="white" fontWeight="bold">4</text>
        <line x1="65" y1="35" x2="75" y2="35" stroke="#3B82F6" strokeWidth="0.8" strokeDasharray="2 1.5" />
        <line x1="65" y1="55" x2="75" y2="57" stroke="#004AAD" strokeWidth="0.8" strokeDasharray="2 1.5" />
      </svg>
      <div className="absolute bottom-2 right-3 text-[9px] font-mono text-ax-blue/60 tracking-widest">EDGE DETECT</div>
    </div>
  );
}

export function MockupReport() {
  const lines: [string, string][] = [
    ["90%", "bg-white/20"],
    ["80%", "bg-white/15"],
    ["65%", "bg-white/20"],
    ["85%", "bg-white/10"],
    ["50%", "bg-ax-blue/20"],
  ];
  return (
    <div className="relative w-full h-32 rounded-xl overflow-hidden bg-ax-bg/60 border border-white/[0.07] p-3 flex flex-col gap-1.5">
      <div className="flex items-center gap-1.5 mb-0.5">
        <div className="w-2 h-2 rounded-full bg-ax-primary/60" />
        <div className="h-1.5 w-16 rounded bg-ax-primary/20" />
        <div className="h-1.5 w-8 rounded bg-white/10 ml-auto" />
      </div>
      <div className="flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-ax-blue animate-pulse shrink-0" />
        <div className="h-1.5 rounded bg-ax-blue/40" style={{ width: "72%" }} />
      </div>
      {lines.map(([w, c], i) => (
        <div key={i} className={`h-1.5 rounded ${c}`} style={{ width: w }} />
      ))}
      <div className="absolute bottom-2 right-3 flex items-center gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
        <span className="text-[9px] font-mono text-green-400/70 tracking-wide">GENERATED</span>
      </div>
    </div>
  );
}

export function MockupSearch() {
  const rows = [
    { bar: "88%", color: "bg-ax-blue/50", tag: "논문" },
    { bar: "74%", color: "bg-ax-blue/50", tag: "특허" },
    { bar: "91%", color: "bg-ax-blue/40", tag: "논문" },
    { bar: "66%", color: "bg-blue-500/40", tag: "특허" },
  ];
  return (
    <div className="relative w-full h-32 rounded-xl overflow-hidden bg-ax-bg/60 border border-white/[0.07] p-3 flex flex-col gap-2">
      <div className="flex items-center gap-1.5 bg-white/[0.06] rounded-lg px-2 py-1">
        <svg className="w-2.5 h-2.5 text-ax-subtle opacity-60" viewBox="0 0 10 10" fill="none">
          <circle cx="4" cy="4" r="2.5" stroke="currentColor" strokeWidth="1" />
          <line x1="6" y1="6" x2="9" y2="9" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
        </svg>
        <div className="h-1.5 w-20 rounded bg-white/20" />
        <div className="ml-auto h-1.5 w-8 rounded bg-ax-primary/30" />
      </div>
      {rows.map((r, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className={`text-[8px] font-bold px-1 py-0.5 rounded ${r.tag === "논문" ? "bg-ax-blue/20 text-ax-blue" : "bg-ax-blue/20 text-ax-violet"}`}>
            {r.tag}
          </span>
          <div className={`h-1.5 rounded ${r.color}`} style={{ width: r.bar }} />
        </div>
      ))}
      <div className="absolute bottom-2 right-3 text-[9px] font-mono text-ax-subtle/50">100억+ DB</div>
    </div>
  );
}

export const featureMockups = [MockupDrawing, MockupReport, MockupSearch];
