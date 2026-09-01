interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={`${center ? 'text-center mx-auto' : 'text-left'} max-w-3xl ${center ? 'mx-auto' : ''}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-brand-300 text-xs font-semibold uppercase tracking-wider mb-5 ${
            center ? '' : ''
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
        {title} {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className="mt-5 text-slate-400 text-base md:text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
