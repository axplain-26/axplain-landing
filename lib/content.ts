// All page content in one place — edit here to update copy throughout the site

export const siteConfig = {
  name: "AXPlain",
  tagline: "AI 기반 특허 자동화 솔루션",
  description:
    "직무발명서 작성부터 도면 변환, 명세서 작성, 특허청 출원까지 — 시간과 수수료 낭비 없이 정확하고 편리하게 지원하는 원스톱 AI 서비스",
  url: "https://axplain.ai", // 배포 후 실제 도메인 확인
  ogImage: "/og-image.png",
};

export const nav = {
  links: [
    { label: "서비스", href: "#service" },
    { label: "핵심 기능", href: "#features" },
    { label: "차별성", href: "#lifecycle" },
    { label: "회사 소개", href: "#trust" },
  ],
  cta: { label: "데모 신청", href: "/book-demo" },
};

export const hero = {
  badge: "AI 특허 자동화 솔루션",
  headline: "발명부터 출원까지,",
  headlineGradient: "AI가 끝까지.",
  subheadline: "대리인 중심에서 발명자 중심으로.",
  description:
    "직무발명서 작성부터 도면 변환, 명세서 작성, 특허청 출원까지 — 시간과 수수료 낭비 없이 정확하고 편리하게 지원하는 원스톱 AI 서비스",
  cta: {
    primary: { label: "데모 신청", href: "/book-demo" },
    secondary: { label: "서비스 둘러보기", href: "#service" },
  },
  stats: [
    { value: "100억+", label: "논문 DB 건수" },
    { value: "3,000+", label: "도입 기관·기업" },
    { value: "6단계", label: "완전 자동화 파이프라인" },
  ],
};

export const trustBanner = {
  headline: "국내 유일 표절검사, 디텍트 GPT 기술을 보유한 (주)무하유와 함께합니다",
  description: "카피킬러 논문 DB 연동 · KIPRIS · WIPO · USPTO · EPO · JPO 특허 DB 통합",
  stats: [
    { value: "100억+", label: "논문 건수" },
    { value: "1억+", label: "글로벌 특허 DB" },
    { value: "3,000+", label: "파트너 기관" },
  ],
  logos: [
    { name: "서울대학교", abbr: "SNU" },
    { name: "연세대학교", abbr: "Yonsei" },
    { name: "SK텔레콤", abbr: "SKT" },
    { name: "LG전자", abbr: "LG" },
    { name: "GS칼텍스", abbr: "GS" },
    { name: "롯데", abbr: "Lotte" },
    { name: "신세계", abbr: "SSG" },
    { name: "한양대학교", abbr: "HYU" },
  ],
};

export const needs = {
  sectionLabel: "Problem",
  title: "이런 어려움,",
  titleGradient: "AI로 해결합니다",
  description:
    "복잡하고 시간이 많이 소요되는 특허 업무를 AI 자동화로 혁신합니다.",
  items: [
    {
      id: "invention",
      icon: "FileText",
      label: "막막한 직발서 작성",
      title: "발명서 및 선행보고서 작성 AI 자동화",
      pain: "발명 아이디어 설명을 위한 직무발명서 직접 작성, 선행조사·기존 기술 검색 필요, 보고서 작업에 과도한 시간 소요",
      solution: "AI 프롬프트 분석으로 핵심 기술요소 추출 후 직무발명서 및 선행조사 보고서 자동 생성",
    },
    {
      id: "drawing",
      icon: "Layers",
      label: "복잡한 도면 처리",
      title: "도면 자동 생성·번호 매칭",
      pain: "이미지·CAD 파일을 특허용 도면으로 변환하는 수작업, CAD 비전문가의 도면 작성 어려움, 명세서 내용에 맞는 기호 매칭 복잡함",
      solution: "엣지 검출·영역 자동 분할로 특허용 도면 변환, 명세서와 번호 자동 매칭",
    },
    {
      id: "database",
      icon: "Database",
      label: "특허 중심 데이터",
      title: "논문 + 특허 통합 DB",
      pain: "논문 DB와 특허 DB가 분리되어 별도 검색 필요, 특허 DB 검색식 설계 장벽 존재, 논문 검색 플랫폼과의 단절",
      solution: "100억 건 논문 DB + 1억 건 글로벌 특허 DB 통합 제공",
    },
    {
      id: "specification",
      icon: "ClipboardList",
      label: "까다로운 명세서 작성",
      title: "고품질 명세서 작성 & 출원",
      pain: "변리사가 발명 내용을 전달받아 명세서 형식에 맞춰 작성, 필드별 작성 노하우 필요, 특허청 출원용 파일 형식 전환 필요",
      solution: "청구범위·명세서 초안 자동 생성부터 특허청 전자 출원까지 원스톱 처리",
    },
  ],
};

export const features = {
  sectionLabel: "Core Features",
  title: "하나의 플랫폼으로",
  titleGradient: "특허 업무 전부를",
  description: "AX for Patent — AI 특허 출원 서비스",
  items: [
    {
      id: "drawing",
      label: "Drawing Process",
      title: "AI 도면 자동 변환 & 번호 매칭",
      description:
        "이미지나 CAD 파일을 입력하면 특허 출원에 최적화된 도면으로 자동 변환합니다. 핵심 구성요소를 영역별로 자동 분할하고 명세서와 번호를 일치시켜 완성도를 높입니다.",
      bullets: [
        "Edge Detection으로 이미지 윤곽 자동 검출",
        "Zone Division — 특허 구성요소에 맞게 영역 자동 분할",
        "Matching & Numbering — 명세서 내용과 자동 매칭·번호 삽입",
      ],
      mockupTitle: "AI Drawing Studio",
      mockupLines: ["Edge Detection", "Zone Division", "Auto Numbering"],
    },
    {
      id: "report",
      label: "Report Generation",
      title: "직무발명서 & 명세서 자동 생성",
      description:
        "AI 프롬프트 분석으로 발명의 핵심 기술요소를 자동 추출합니다. 선행기술조사 결과와 발명 설명을 자동 생성하고, 각 고객사 양식에 맞춘 직무발명서와 명세서 초안을 완성합니다.",
      bullets: [
        "Prompt Analyze — AI가 핵심 기술요소 자동 추출",
        "선행기술조사 결과·발명 설명 자동 생성",
        "고객사 양식 맞춤 직무발명서 + 명세서 초안 동시 생성",
      ],
      mockupTitle: "Report Generator",
      mockupLines: ["Prompt Analysis", "Prior Art Search", "Draft Generation"],
    },
    {
      id: "database",
      label: "Paper Search",
      title: "논문 + 특허 통합 DB",
      description:
        "카피킬러의 논문 100억 건 데이터와 국내외 주요 특허 DB를 단일 플랫폼에서 동시에 검색합니다. 검색 결과를 특허 문헌으로 자동 변환하여 명세서 작성에 바로 활용합니다.",
      bullets: [
        "카피킬러 100억 건 논문 DB 연동",
        "글로벌 특허 DB(KIPRIS · WIPO · USPTO · EPO · JPO 등) 통합 검색",
        "검색 결과 → 특허 문헌 자동 변환",
      ],
      mockupTitle: "Integrated Search",
      mockupLines: ["Academic DB", "Patent DB", "Auto Convert"],
    },
    {
      id: "filing",
      label: "Online Filing",
      title: "특허청 전자 출원 연동",
      description:
        "완성된 명세서를 특허청 제출 표준 형식(HLT 등)으로 자동 변환합니다. 특허청 API와 연동하여 1-Click으로 직접 출원하고, 출원번호와 통지서를 자동으로 관리합니다.",
      bullets: [
        "HLT 등 특허청 제출 표준 확장자 자동 변환",
        "특허청 API 연동 1-Click 직접 출원",
        "출원번호·통지서 자동 관리 대시보드",
      ],
      mockupTitle: "E-Filing Portal",
      mockupLines: ["Format Convert", "1-Click Filing", "Status Tracking"],
    },
  ],
};

export const lifecycle = {
  sectionLabel: "Full Lifecycle",
  title: "아이디어부터 출원까지,",
  titleGradient: "6단계 완전 자동화",
  description: "특허 출원 전 과정(Life Cycle)을 단계별로 자동화하여 완전한 AI Transformation을 구현합니다.",
  steps: [
    {
      step: "01",
      title: "아이디어 개발",
      description: "AI 프롬프트 대화형 아이디어 구체화, 자유로운 아이디어 탐색 및 키워드 추출",
      icon: "Lightbulb",
    },
    {
      step: "02",
      title: "선행기술조사",
      description: "특허·논문 통합 DB 기반 정밀 조사, 조사보고서 자동 작성 및 등급 평가",
      icon: "Search",
    },
    {
      step: "03",
      title: "직무발명서 작성",
      description: "서술형 입력 → 직무발명서 자동 변환, 이미지/CAD 업로드 시 도면 자동 생성",
      icon: "PenLine",
    },
    {
      step: "04",
      title: "명세서 초안 작성",
      description: "다양한 유형의 청구범위(Claim) 자동 생성, 수정된 청구항 반영하여 전체 명세서 완성",
      icon: "FileEdit",
    },
    {
      step: "05",
      title: "명세서 수정/검수",
      description: "플랫폼 내 특허사무소 전문가 검수 참여, AI 기반 오류 검출 및 법률적 검토",
      icon: "UserCheck",
    },
    {
      step: "06",
      title: "출원/심사 진행",
      description: "특허청 제출 표준 형식 파일 변환, 특허청 API 연동 1-Click 직접 출원",
      icon: "SendHorizonal",
    },
  ],
};

export const legal = {
  sectionLabel: "Legal Safety",
  title: "AI 시대, 발명자 중심 출원으로",
  titleGradient: "법적 리스크까지 해결",
  description:
    "발명자 인터뷰를 기반으로 안정적인 발명자 적격성을 확보하여 AI 활용에 의한 법적 리스크를 해결합니다.",
  risks: [
    {
      title: "특허법 제33조 위반 소지",
      description: "발명자(자연인)만이 특허를 받을 권리를 보유함",
    },
    {
      title: "발명자 적격성 문제",
      description: "AI 주도 명세서 작성 시 인간의 창작적 기여 입증 곤란",
    },
    {
      title: "특허 무효 위험",
      description: "발명 완성 과정에서 발명자 기여가 불분명할 경우 무효 사유",
    },
    {
      title: "법적 취약점 노출",
      description: "경쟁사와의 특허 침해/무효 분쟁 시 결정적 약점으로 작용",
    },
  ],
  solutions: [
    {
      title: "직무발명서 기반 AI 질의 생성",
      description: "작성된 직무발명서를 분석하여 발명의 핵심 기술요소 심화 질문 자동 생성",
    },
    {
      title: "발명자 인터뷰 녹화",
      description: "AI가 질의하고 발명자가 답변하는 전 과정을 영상 데이터로 안전하게 기록",
    },
    {
      title: "발명 완성 증거 확보",
      description: "발명자가 주체적으로 기술을 구체화하고 완성했다는 명확한 입증 자료 생성",
    },
    {
      title: "법적 안정성 강화",
      description: "향후 분쟁 시 발명자의 창작 기여도를 객관적으로 증명할 수 있는 확실한 근거 제공",
    },
  ],
  processSteps: [
    { step: "1", label: "직무발명서 작성", sub: "AI 자동 생성" },
    { step: "2", label: "AI 질의 생성", sub: "핵심 기술 분석" },
    { step: "3", label: "발명자 인터뷰", sub: "질의 + 답변 녹화", highlight: true },
    { step: "4", label: "증거 자료 확보", sub: "창작 기여 입증" },
    { step: "✓", label: "명세서 완성", sub: "법적 안정성 확보", final: true },
  ],
};

export const security = {
  sectionLabel: "Security",
  title: "기업급 보안으로",
  titleGradient: "데이터를 지킵니다",
  description: "특허는 기업의 핵심 자산입니다. AXPlain은 엄격한 데이터 보안 체계로 모든 정보를 안전하게 보호합니다.",
  items: [
    {
      icon: "ShieldCheck",
      title: "데이터 암호화",
      description: "정보보호 리스크 관리 시스템 보유",
    },
    {
      icon: "Lock",
      title: "접근 권한 관리",
      description: "역할 기반 접근 제어(RBAC)로 담당자별 문서 접근 권한 세분화 관리",
    },
    {
      icon: "Server",
      title: "전용 인프라",
      description: "대기업 고객사 전용 독립 인스턴스 구성, 멀티테넌트 데이터 완전 격리",
    },
    {
      icon: "Eye",
      title: "감사 로그",
      description: "모든 접근·수정 이력 기록, 언제 누가 어떤 문서를 열람했는지 추적 가능",
    },
  ],
};

export const cta = {
  title: "특허 업무의 AI 전환,",
  titleGradient: "지금 시작하세요.",
  description: "발명자 중심의 원스톱 특허 자동화 플랫폼 — 데모를 신청하고 직접 경험해보세요.",
  button: { label: "데모 신청하기", href: "/book-demo" },
  secondaryButton: { label: "자세히 알아보기", href: "#features" },
};

export const footer = {
  name: "AXPlain",
  tagline: "AI 기반 특허 자동화 솔루션",
  copyright: "© 2026 AXPlain. All rights reserved.",
  links: [
    { label: "서비스", href: "#service" },
    { label: "핵심 기능", href: "#features" },
    { label: "차별성", href: "#differentiators" },
    { label: "회사 소개", href: "#about" },
  ],
  legal: [
    { label: "개인정보처리방침", href: "/privacy" },
    { label: "이용약관", href: "/terms" },
  ],
  contact: "sss74@axplain.ai",
  partnership: "",
};
