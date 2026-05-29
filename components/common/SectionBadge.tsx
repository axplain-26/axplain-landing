interface SectionBadgeProps {
  label: string;
  className?: string;
}

export default function SectionBadge({ label, className = "" }: SectionBadgeProps) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-ax-primary/10 text-ax-blue border border-ax-primary/20">
        {label}
      </span>
    </div>
  );
}
