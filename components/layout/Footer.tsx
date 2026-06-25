import Link from "next/link";
import { Mail } from "lucide-react";
import Logo from "@/components/common/Logo";
import { footer } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-ax-surface">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Logo size="sm" />
            </Link>
            <p className="text-sm text-ax-subtle leading-relaxed max-w-xs">
              {footer.tagline}
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-ax-subtle mb-4">
              서비스
            </h4>
            <ul className="space-y-2">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ax-muted hover:text-ax-text transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-ax-subtle mb-4">
              연락처
            </h4>
            <a
              href={`mailto:${footer.contact}`}
              className="flex items-center gap-2 text-sm text-ax-muted hover:text-ax-text transition-colors mb-5"
            >
              <Mail className="w-4 h-4" />
              {footer.contact}
            </a>
            <dl className="flex flex-col gap-1.5 text-xs text-ax-subtle/70">
              <div className="flex gap-2">
                <dt className="shrink-0 text-ax-subtle/50">상호명</dt>
                <dd>주식회사 액스플레인</dd>
              </div>
              <div className="flex gap-2">
                <dt className="shrink-0 text-ax-subtle/50">대표자</dt>
                <dd>소승섭</dd>
              </div>
              <div className="flex gap-2">
                <dt className="shrink-0 text-ax-subtle/50">사업자등록번호</dt>
                <dd>772-86-03805</dd>
              </div>
              <div className="flex gap-2">
                <dt className="shrink-0 text-ax-subtle/50">주소</dt>
                <dd className="leading-relaxed">서울특별시 서초구 바우뫼로37길 30, 2층<br />(양재동, 위메스 빌딩)</dd>
              </div>
            </dl>
            <div className="mt-5 flex flex-wrap gap-3">
              {footer.legal.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs text-ax-subtle hover:text-ax-muted transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ax-subtle/60">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
