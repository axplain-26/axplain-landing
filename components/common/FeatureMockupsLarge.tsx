// Large abstract UI mockups for the Features zig-zag section

export function LargeMockupDrawing() {
  return (
    <div className="relative w-full max-w-[520px] aspect-[4/3] rounded-2xl overflow-hidden bg-ax-surface border border-white/[0.08] p-4 flex flex-col gap-3">
      {/* toolbar */}
      <div className="flex items-center gap-2 pb-2 border-b border-white/[0.06]">
        <div className="flex gap-1.5">
          {["bg-red-500/50","bg-yellow-500/50","bg-green-500/50"].map(c=>(
            <div key={c} className={`w-2.5 h-2.5 rounded-full ${c}`}/>
          ))}
        </div>
        <div className="flex-1 mx-3 h-5 rounded-md bg-white/[0.04] flex items-center px-2 gap-2">
          <div className="w-2 h-2 rounded bg-ax-blue/40"/>
          <div className="h-1.5 w-24 rounded bg-white/10"/>
        </div>
        <div className="h-5 w-14 rounded-md bg-ax-primary/20 flex items-center justify-center">
          <span className="text-[8px] text-ax-blue font-bold">DETECT</span>
        </div>
      </div>

      {/* main canvas */}
      <div className="flex-1 flex gap-3 min-h-0">
        {/* drawing canvas */}
        <div className="flex-1 relative rounded-xl overflow-hidden bg-ax-bg/80 border border-white/[0.05]">
          {/* blueprint grid */}
          <svg className="absolute inset-0 w-full h-full opacity-15">
            <defs>
              <pattern id="lg-grid" width="16" height="16" patternUnits="userSpaceOnUse">
                <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#3B82F6" strokeWidth="0.4"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#lg-grid)"/>
          </svg>
          {/* patent parts */}
          <svg viewBox="0 0 200 140" className="absolute inset-0 w-full h-full" fill="none">
            {/* Main body */}
            <rect x="20" y="20" width="80" height="100" rx="6" fill="#3B82F6" fillOpacity="0.12" stroke="#3B82F6" strokeWidth="1.2"/>
            {/* Sub part A */}
            <rect x="112" y="28" width="50" height="38" rx="4" fill="#1E6FE0" fillOpacity="0.15" stroke="#1E6FE0" strokeWidth="1"/>
            {/* Sub part B */}
            <rect x="112" y="76" width="50" height="38" rx="4" fill="#004AAD" fillOpacity="0.15" stroke="#004AAD" strokeWidth="1"/>
            {/* Detail lines */}
            <line x1="40" y1="50" x2="80" y2="50" stroke="#3B82F6" strokeWidth="0.6" strokeDasharray="3 2" opacity="0.5"/>
            <line x1="40" y1="70" x2="80" y2="70" stroke="#3B82F6" strokeWidth="0.6" strokeDasharray="3 2" opacity="0.5"/>
            <line x1="40" y1="90" x2="80" y2="90" stroke="#3B82F6" strokeWidth="0.6" strokeDasharray="3 2" opacity="0.5"/>
            {/* Connector */}
            <line x1="100" y1="45" x2="112" y2="45" stroke="#1E6FE0" strokeWidth="0.8"/>
            <line x1="100" y1="92" x2="112" y2="92" stroke="#004AAD" strokeWidth="0.8"/>
            {/* Number badges */}
            <circle cx="26" cy="26" r="7" fill="#3B82F6"/><text x="26" y="29.5" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">1</text>
            <circle cx="116" cy="34" r="7" fill="#1E6FE0"/><text x="116" y="37.5" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">2</text>
            <circle cx="116" cy="82" r="7" fill="#004AAD"/><text x="116" y="85.5" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">3</text>
            <circle cx="150" cy="34" r="7" fill="#3B82F6" fillOpacity="0.5" stroke="#3B82F6" strokeWidth="0.8"/><text x="150" y="37.5" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">4</text>
          </svg>
          {/* status chips */}
          <div className="absolute bottom-2 left-2 flex gap-1">
            <span className="text-[8px] bg-ax-blue/20 text-ax-blue border border-ax-blue/30 rounded px-1.5 py-0.5 font-bold">ZONE ✓</span>
            <span className="text-[8px] bg-green-500/10 text-green-400 border border-green-500/20 rounded px-1.5 py-0.5 font-bold">NUM ✓</span>
          </div>
        </div>

        {/* right panel: matched list */}
        <div className="w-28 flex flex-col gap-2">
          <div className="text-[9px] text-ax-subtle/60 font-semibold uppercase tracking-wider">매칭 목록</div>
          {[
            { no: "1", label: "본체 프레임", color: "bg-blue-500/20 text-blue-300" },
            { no: "2", label: "상부 커버", color: "bg-blue-600/20 text-blue-300" },
            { no: "3", label: "하부 모듈", color: "bg-blue-700/20 text-blue-300" },
            { no: "4", label: "측면 패널", color: "bg-blue-500/10 text-blue-400/70" },
          ].map(r => (
            <div key={r.no} className="flex items-center gap-1.5 bg-white/[0.03] rounded-lg px-2 py-1.5 border border-white/[0.04]">
              <span className={`text-[9px] font-bold w-4 h-4 rounded flex items-center justify-center shrink-0 ${r.color}`}>{r.no}</span>
              <span className="text-[9px] text-ax-subtle truncate">{r.label}</span>
            </div>
          ))}
          <div className="mt-auto pt-2 border-t border-white/[0.06]">
            <div className="text-[9px] text-ax-subtle/50 mb-1">완성도</div>
            <div className="h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-ax-primary to-ax-hover" style={{width:"87%"}}/>
            </div>
            <div className="text-[9px] text-ax-blue mt-0.5 text-right font-bold">87%</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LargeMockupReport() {
  return (
    <div className="relative w-full max-w-[520px] aspect-[4/3] rounded-2xl overflow-hidden bg-ax-surface border border-white/[0.08] p-4 flex flex-col gap-3">
      {/* toolbar */}
      <div className="flex items-center gap-2 pb-2 border-b border-white/[0.06]">
        <div className="flex gap-1.5">
          {["bg-red-500/50","bg-yellow-500/50","bg-green-500/50"].map(c=>(
            <div key={c} className={`w-2.5 h-2.5 rounded-full ${c}`}/>
          ))}
        </div>
        <div className="flex gap-1 ml-3">
          {["직무발명서","명세서"].map((t,i)=>(
            <div key={t} className={`h-5 px-3 rounded-t text-[9px] font-semibold flex items-center ${i===0?"bg-ax-primary/20 text-ax-blue":"bg-white/[0.04] text-ax-subtle/50"}`}>{t}</div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex gap-3 min-h-0">
        {/* Input panel */}
        <div className="w-2/5 flex flex-col gap-2">
          <div className="text-[9px] text-ax-subtle/60 font-bold uppercase tracking-wider">입력</div>
          {[
            { label: "발명자", val: "홍길동 외 2인" },
            { label: "기술분야", val: "반도체 공정" },
            { label: "발명명칭", val: "열처리 장치 및..." },
          ].map(f => (
            <div key={f.label} className="bg-white/[0.04] rounded-lg px-2 py-1.5 border border-white/[0.06]">
              <div className="text-[8px] text-ax-subtle/50 mb-0.5">{f.label}</div>
              <div className="text-[9px] text-ax-muted font-medium truncate">{f.val}</div>
            </div>
          ))}
          <div className="bg-white/[0.04] rounded-lg px-2 py-2 border border-white/[0.06] flex-1">
            <div className="text-[8px] text-ax-subtle/50 mb-1">발명 설명</div>
            {[70,55,80,45,65].map((w,i)=>(
              <div key={i} className="h-1 rounded bg-white/10 mb-1" style={{width:`${w}%`}}/>
            ))}
          </div>
          <button className="w-full py-1.5 rounded-lg bg-gradient-to-r from-ax-primary to-ax-hover text-white text-[9px] font-bold">
            AI 자동 생성
          </button>
        </div>

        {/* Output panel */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-ax-blue animate-pulse"/>
            <div className="text-[9px] text-ax-blue font-bold">AI 생성 중...</div>
          </div>
          <div className="flex-1 bg-ax-bg/60 rounded-xl border border-white/[0.05] p-2.5 overflow-hidden flex flex-col gap-1.5">
            {[
              { w:"100%", h:"h-2", c:"bg-ax-text/40", bold:true },
              { w:"85%",  h:"h-1.5", c:"bg-white/20" },
              { w:"90%",  h:"h-1.5", c:"bg-white/20" },
              { w:"70%",  h:"h-1.5", c:"bg-white/15" },
              { w:"0%",   h:"h-2",   c:"", divider:true },
              { w:"60%",  h:"h-2",   c:"bg-ax-blue/30", bold:true },
              { w:"88%",  h:"h-1.5", c:"bg-white/20" },
              { w:"75%",  h:"h-1.5", c:"bg-white/15" },
              { w:"92%",  h:"h-1.5", c:"bg-white/20" },
              { w:"50%",  h:"h-1.5", c:"bg-ax-blue/20" },
            ].map((l,i)=> l.divider
              ? <div key={i} className="my-0.5 border-t border-white/[0.05]"/>
              : <div key={i} className={`${l.h} rounded ${l.c}`} style={{width:l.w}}/>
            )}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400"/>
              <span className="text-[8px] text-green-400 font-bold">생성 완료</span>
            </div>
            <span className="text-[8px] text-ax-subtle/40">4,280자</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LargeMockupSearch() {
  const results = [
    { type:"논문", title:"열처리 공정의 온도 균일성...", match:"98%", color:"text-blue-400 bg-blue-500/15 border-blue-500/20" },
    { type:"특허", title:"KR 10-2022-0041233 열처리 장치", match:"94%", color:"text-blue-400 bg-blue-500/15 border-blue-500/20" },
    { type:"특허", title:"US 11,234,567 Semiconductor...", match:"91%", color:"text-blue-400 bg-blue-500/15 border-blue-500/20" },
    { type:"논문", title:"반도체 산화막 균일성 향상 연구", match:"87%", color:"text-blue-400 bg-blue-500/15 border-blue-500/20" },
  ];
  return (
    <div className="relative w-full max-w-[520px] aspect-[4/3] rounded-2xl overflow-hidden bg-ax-surface border border-white/[0.08] p-4 flex flex-col gap-3">
      {/* DB tabs */}
      <div className="flex items-center gap-1.5">
        {["전체","논문 DB","특허 DB"].map((t,i)=>(
          <button key={t} className={`px-3 h-6 rounded-full text-[9px] font-bold transition-colors ${i===0?"bg-ax-primary text-white":"bg-white/[0.05] text-ax-subtle hover:text-ax-muted"}`}>{t}</button>
        ))}
        <div className="ml-auto flex items-center gap-1 text-[9px] text-ax-subtle/50">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"/>
          100억+ 건
        </div>
      </div>

      {/* Search bar */}
      <div className="flex items-center gap-2 bg-ax-bg/60 rounded-xl border border-white/[0.08] px-3 py-2">
        <svg className="w-3.5 h-3.5 text-ax-subtle/50 shrink-0" viewBox="0 0 14 14" fill="none">
          <circle cx="6" cy="6" r="4" stroke="currentColor" strokeWidth="1.2"/>
          <line x1="9.5" y1="9.5" x2="13" y2="13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
        <div className="flex-1 h-2 rounded bg-white/15"/>
        <div className="h-5 px-2 rounded-lg bg-ax-primary/80 flex items-center">
          <span className="text-[8px] text-white font-bold">검색</span>
        </div>
      </div>

      {/* DB stats bar */}
      <div className="flex gap-2">
        {[
          { label:"KIPRIS", val:"3.2M", c:"bg-blue-500/20 text-blue-400" },
          { label:"WIPO", val:"12.5M", c:"bg-blue-700/20 text-blue-400" },
          { label:"USPTO", val:"18.3M", c:"bg-blue-500/20 text-blue-400" },
          { label:"논문", val:"100억+", c:"bg-ax-accent/15 text-ax-accent" },
        ].map(d=>(
          <div key={d.label} className={`flex-1 rounded-lg px-2 py-1 text-center ${d.c}`}>
            <div className="text-[8px] font-bold">{d.label}</div>
            <div className="text-[7px] opacity-70">{d.val}</div>
          </div>
        ))}
      </div>

      {/* Results */}
      <div className="flex flex-col gap-2 flex-1 overflow-hidden">
        {results.map((r,i)=>(
          <div key={i} className="flex items-center gap-2.5 bg-white/[0.03] rounded-xl px-3 py-2 border border-white/[0.05] hover:border-white/[0.1] transition-colors">
            <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded-full border ${r.color} shrink-0`}>{r.type}</span>
            <span className="text-[9px] text-ax-muted flex-1 truncate">{r.title}</span>
            <span className="text-[9px] font-bold text-green-400 shrink-0">{r.match}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LargeMockupUnifiedSearch() {
  const techTerms = [
    { text: "열처리 온도 균일성 향상", match: "94%" },
    { text: "산화막 두께 제어 기법", match: "91%" },
    { text: "반도체 소자 열저항 분석", match: "88%" },
  ];
  const claimTerms = [
    { text: "제1항) 열처리 장치에 있어서, 상기 온도 제어부는...", color: "text-ax-accent" },
    { text: "제2항) 상기 열분산 패널 구조를 포함하는...", color: "text-ax-accent/70" },
    { text: "제3항) 청구항 1에 있어서, 상기 챔버는...", color: "text-ax-accent/50" },
  ];

  return (
    <div className="relative w-full max-w-[520px] aspect-[4/3] rounded-2xl overflow-hidden bg-ax-surface border border-white/[0.08] p-4 flex flex-col gap-3">
      {/* toolbar */}
      <div className="flex items-center gap-2 pb-2 border-b border-white/[0.06]">
        <div className="flex gap-1.5">
          {["bg-red-500/50","bg-yellow-500/50","bg-green-500/50"].map(c=>(
            <div key={c} className={`w-2.5 h-2.5 rounded-full ${c}`}/>
          ))}
        </div>
        <div className="flex gap-1 ml-3">
          {["기술 언어","권리 언어"].map((t,i)=>(
            <div key={t} className={`h-5 px-3 rounded-t text-[9px] font-semibold flex items-center ${i===0?"bg-blue-500/20 text-blue-400":"bg-ax-accent/15 text-ax-accent"}`}>{t}</div>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"/>
          <span className="text-[8px] text-green-400 font-semibold">AI 매핑 중</span>
        </div>
      </div>

      <div className="flex-1 flex gap-2 min-h-0">
        {/* Left: Tech language (논문) */}
        <div className="flex-1 flex flex-col gap-1.5 min-w-0">
          <div className="text-[8px] font-bold text-blue-400 uppercase tracking-wider mb-0.5">논문 기술 언어</div>
          {techTerms.map((t, i) => (
            <div key={i} className="flex items-center gap-1.5 bg-blue-500/[0.06] rounded-lg px-2 py-2 border border-blue-500/15">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400/60 shrink-0"/>
              <span className="text-[8px] text-ax-muted flex-1 leading-tight">{t.text}</span>
              <span className="text-[8px] font-bold text-blue-400 shrink-0">{t.match}</span>
            </div>
          ))}
          <div className="mt-auto pt-1 border-t border-white/[0.05]">
            <div className="text-[7px] text-ax-subtle/40 text-center">논문 DB 검색 결과</div>
          </div>
        </div>

        {/* Center: AI bridge */}
        <div className="flex flex-col items-center justify-center gap-1.5 shrink-0 w-9">
          <div className="w-px flex-1 bg-gradient-to-b from-blue-500/20 to-ax-primary/30"/>
          <div className="w-8 h-8 rounded-full bg-ax-primary/15 border border-ax-primary/40 flex items-center justify-center shrink-0">
            <span className="text-[7px] text-ax-blue font-extrabold">AI</span>
          </div>
          <svg className="w-3.5 h-3 shrink-0" viewBox="0 0 14 10" fill="none">
            <path d="M0 5h10M7 1.5l4 3.5-4 3.5" stroke="#6366F1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div className="w-px flex-1 bg-gradient-to-b from-ax-primary/30 to-ax-accent/20"/>
        </div>

        {/* Right: Patent claim language */}
        <div className="flex-1 flex flex-col gap-1.5 min-w-0">
          <div className="text-[8px] font-bold text-ax-accent uppercase tracking-wider mb-0.5">특허 권리 언어</div>
          {claimTerms.map((t, i) => (
            <div key={i} className="bg-ax-accent/[0.06] rounded-lg px-2 py-2 border border-ax-accent/15">
              <span className={`text-[8px] leading-tight ${t.color} line-clamp-2`}>{t.text}</span>
            </div>
          ))}
          <div className="mt-auto pt-1 border-t border-white/[0.05]">
            <div className="text-[7px] text-ax-subtle/40 text-center">청구항 자동 생성</div>
          </div>
        </div>
      </div>

      {/* Bottom: Result */}
      <div className="flex items-center justify-between pt-1 border-t border-white/[0.06]">
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400"/>
          <span className="text-[8px] text-green-400 font-semibold">단일 검색 흐름 연결 완료</span>
        </div>
        <span className="text-[8px] text-ax-subtle/40">3건 → 청구항 자동 변환</span>
      </div>
    </div>
  );
}

export function LargeMockupFiling() {
  const steps = [
    { label: "HLT 변환", done: true },
    { label: "문서 검토", done: true },
    { label: "API 연동", done: true },
    { label: "출원 완료", done: false, active: true },
  ];
  return (
    <div className="relative w-full max-w-[520px] aspect-[4/3] rounded-2xl overflow-hidden bg-ax-surface border border-white/[0.08] p-4 flex flex-col gap-3">
      {/* header */}
      <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-ax-primary/20 flex items-center justify-center">
            <svg className="w-3 h-3 text-ax-blue" viewBox="0 0 12 12" fill="none">
              <path d="M2 1h6l2 2v8H2V1z" stroke="currentColor" strokeWidth="1" fill="none"/>
              <path d="M7 1v3h3" stroke="currentColor" strokeWidth="0.8"/>
            </svg>
          </div>
          <span className="text-xs font-bold text-ax-text">특허청 전자 출원</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"/>
          <span className="text-[9px] text-green-400">API 연결됨</span>
        </div>
      </div>

      {/* Progress steps */}
      <div className="flex items-center gap-1.5">
        {steps.map((s, i) => (
          <div key={s.label} className="flex items-center gap-1.5 flex-1">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold shrink-0 ${
              s.done ? "bg-green-500 text-white"
              : s.active ? "bg-ax-primary text-white ring-2 ring-ax-primary/30"
              : "bg-white/[0.08] text-ax-subtle/50"
            }`}>
              {s.done ? "✓" : i + 1}
            </div>
            <span className={`text-[8px] font-medium hidden sm:block ${s.done?"text-green-400":s.active?"text-ax-blue":"text-ax-subtle/40"}`}>{s.label}</span>
            {i < steps.length - 1 && <div className={`flex-1 h-px ${s.done?"bg-green-500/40":"bg-white/[0.06]"}`}/>}
          </div>
        ))}
      </div>

      {/* File info */}
      <div className="flex gap-3 flex-1 min-h-0">
        <div className="flex-1 flex flex-col gap-2">
          {[
            { label:"출원 구분", val:"국내 특허" },
            { label:"출원인",    val:"(주)테크코어" },
            { label:"발명명칭",  val:"열처리 장치 및 그 방법" },
            { label:"청구항 수", val:"12 항" },
            { label:"파일 형식", val:"HLT (자동 변환)" },
          ].map(r=>(
            <div key={r.label} className="flex items-center justify-between border-b border-white/[0.04] pb-1.5">
              <span className="text-[9px] text-ax-subtle/50">{r.label}</span>
              <span className="text-[9px] text-ax-muted font-semibold">{r.val}</span>
            </div>
          ))}
        </div>

        <div className="w-28 flex flex-col gap-2">
          <div className="flex-1 rounded-xl bg-ax-bg/60 border border-white/[0.05] flex flex-col items-center justify-center gap-2 p-3">
            <div className="w-10 h-10 rounded-xl bg-ax-primary/10 border border-ax-primary/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-ax-blue" viewBox="0 0 20 20" fill="none">
                <path d="M4 3h9l3 3v11H4V3z" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M12 3v4h4" stroke="currentColor" strokeWidth="1"/>
                <path d="M7 10h6M7 13h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="text-[9px] text-ax-muted text-center font-semibold">명세서.hlt</div>
            <div className="text-[8px] text-ax-subtle/50">284 KB</div>
          </div>
          <button className="w-full py-2 rounded-xl bg-gradient-to-r from-ax-primary to-ax-hover text-white text-[9px] font-bold flex items-center justify-center gap-1">
            <span>1-Click 출원</span>
          </button>
        </div>
      </div>
    </div>
  );
}
