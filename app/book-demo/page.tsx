import type { Metadata } from "next";
import BookDemoPage from "@/components/sections/BookDemoPage";

export const metadata: Metadata = {
  title: "데모 신청 | AXPlain",
  description:
    "AXPlain의 AI 특허 자동화 솔루션을 직접 경험하세요. 팀의 실제 워크플로우에 맞춘 맞춤 데모를 신청합니다.",
  openGraph: {
    title: "데모 신청 | AXPlain",
    description:
      "직무발명서 작성부터 도면 변환, 명세서 작성, 특허청 출원까지 — 데모로 한 번에 살펴보세요.",
  },
};

export default function BookDemo() {
  return <BookDemoPage />;
}
