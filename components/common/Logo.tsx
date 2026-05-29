/**
 * AXPlain 로고 SVG 컴포넌트
 * 원본 로고 기준: "AX" 로열블루 이탤릭 세리프 + "Plain" 볼드 산세리프 + 하단 밑줄+브라켓
 */

interface LogoProps {
  /** 푸터 등 작은 사이즈에 사용 */
  size?: "sm" | "md" | "lg";
  /** 밝은 배경에서 Plain을 검정으로 */
  dark?: boolean;
}

export default function Logo({ size = "md", dark = false }: LogoProps) {
  const scales = { sm: 0.48, md: 0.62, lg: 0.82 };
  const s = scales[size];
  const w = Math.round(220 * s);
  const h = Math.round(56 * s);

  const plainColor = dark ? "#0A0E1A" : "#F5F7FA";
  const blue = "#004AAD";

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 220 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="AXPlain"
    >
      {/* ── "AX" italic serif ── */}
      {/* A */}
      <text
        x="2"
        y="44"
        fontFamily="'Georgia', 'Times New Roman', serif"
        fontStyle="italic"
        fontWeight="400"
        fontSize="50"
        fill={blue}
        letterSpacing="-2"
      >
        A
      </text>
      {/* Diagonal slash lines overlapping AX */}
      <line x1="22" y1="4"  x2="58" y2="50" stroke={blue} strokeWidth="2.5" strokeLinecap="round" opacity="0.55"/>
      <line x1="30" y1="4"  x2="66" y2="50" stroke={blue} strokeWidth="1.5" strokeLinecap="round" opacity="0.30"/>
      {/* X */}
      <text
        x="34"
        y="44"
        fontFamily="'Georgia', 'Times New Roman', serif"
        fontStyle="italic"
        fontWeight="400"
        fontSize="50"
        fill={blue}
        letterSpacing="-2"
      >
        X
      </text>

      {/* ── "Plain" bold sans-serif ── */}
      <text
        x="86"
        y="44"
        fontFamily="'Pretendard Variable', Pretendard, Arial, sans-serif"
        fontWeight="800"
        fontSize="46"
        fill={plainColor}
        letterSpacing="-1"
      >
        Plain
      </text>

      {/* ── Underline + right-angle bracket ── */}
      {/* horizontal line */}
      <line x1="86" y1="52" x2="214" y2="52" stroke={plainColor} strokeWidth="2" strokeLinecap="square" opacity="0.85"/>
      {/* vertical bracket stub */}
      <line x1="214" y1="38" x2="214" y2="52" stroke={plainColor} strokeWidth="2" strokeLinecap="square" opacity="0.85"/>
    </svg>
  );
}
