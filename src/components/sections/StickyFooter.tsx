import { useEffect, useState } from 'react';
import { Zap, ArrowRight, Check } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

function useCountdown(seconds: number) {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (timeLeft <= 0) {
      setTimeLeft(seconds);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          return seconds;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  const minutes = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;

  return {
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(secs).padStart(2, '0'),
  };
}

export function StickyFooter() {
  const { minutes, seconds } = useCountdown(600);

  return (
    <div
      id="enroll"
      className="fixed bottom-0 left-0 right-0 z-50"
    >
      <div className="glass border-t border-white/10 shadow-2xl shadow-black/50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3 lg:py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Left: Price */}
            <div className="flex items-center gap-3 lg:gap-5">
              <div className="hidden sm:flex flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-400/20 items-center justify-center">
                <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-gold-400" />
              </div>
              <div>
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-slate-500 line-through text-sm lg:text-base">Rs. 4,999</span>
                  <span className="font-display text-xl lg:text-3xl font-bold text-white">Rs. 999</span>
                  <span className="hidden lg:inline px-2 py-0.5 rounded-md bg-gold-500/15 text-gold-400 text-xs font-bold">
                    80% OFF
                  </span>
                </div>
                <p className="text-xs text-slate-400 hidden sm:block">
                  One-time payment · Lifetime access
                </p>
              </div>
            </div>

            {/* Center: Countdown (desktop) */}
            <div className="hidden md:flex items-center gap-3">
              <div className="text-right">
                <p className="text-xs text-slate-400 uppercase tracking-wider">Offer ends in</p>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex flex-col items-center">
                  <div className="bg-ink-800 border border-white/10 rounded-lg w-12 h-12 flex items-center justify-center font-display text-xl font-bold text-white tabular-nums">
                    {minutes[0]}
                  </div>
                </div>
                <span className="text-2xl font-bold text-brand-400">:</span>
                <div className="flex flex-col items-center">
                  <div className="bg-ink-800 border border-white/10 rounded-lg w-12 h-12 flex items-center justify-center font-display text-xl font-bold text-white tabular-nums">
                    {seconds[0]}
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="bg-ink-800 border border-white/10 rounded-lg w-12 h-12 flex items-center justify-center font-display text-xl font-bold text-white tabular-nums">
                    {seconds[1]}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: CTA */}
            <a
              href="#enroll"
              className="group flex-shrink-0 inline-flex items-center gap-2 px-5 lg:px-8 py-3 lg:py-3.5 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold text-sm lg:text-base shadow-lg shadow-brand-600/30 hover:shadow-brand-500/50 hover:scale-[1.03] transition-all duration-300"
            >
              <span className="hidden sm:inline">Enroll Now</span>
              <span className="sm:hidden">Enroll</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile countdown row */}
          <div className="md:hidden mt-2 flex items-center justify-center gap-2">
            <span className="text-xs text-slate-400">Offer ends in</span>
            <div className="flex items-center gap-1">
              <span className="bg-ink-800 border border-white/10 rounded px-2 py-0.5 font-display text-sm font-bold text-white tabular-nums">
                {minutes}
              </span>
              <span className="text-brand-400 font-bold">:</span>
              <span className="bg-ink-800 border border-white/10 rounded px-2 py-0.5 font-display text-sm font-bold text-white tabular-nums">
                {seconds}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FinalCTA() {
  const { minutes, seconds } = useCountdown(600);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-950 to-ink-900" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/15 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-sm text-slate-300">Launch Special — Limited Time Only</span>
          </div>

          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Start Your Journey to
            <span className="block mt-2 text-gradient">Performance Marketing Mastery</span>
          </h2>

          <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Join 12,000+ students who have transformed their careers. Get lifetime access to 25+ hours
            of expert training, downloadable templates, and a verifiable certificate — all for just Rs. 999.
          </p>

          {/* Price box */}
          <div className="mt-10 glass-card p-8 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-slate-500 line-through text-xl">Rs. 4,999</span>
              <span className="px-3 py-1 rounded-md bg-gold-500/15 text-gold-400 text-sm font-bold">
                Save 80%
              </span>
            </div>
            <p className="font-display text-5xl lg:text-6xl font-bold text-white mb-2">Rs. 999</p>
            <p className="text-sm text-slate-400 mb-6">One-time payment · Lifetime access</p>

            {/* Countdown */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-sm text-slate-400">Offer ends in</span>
              <div className="flex items-center gap-1.5">
                <span className="bg-ink-800 border border-white/10 rounded-lg w-10 h-10 flex items-center justify-center font-display text-lg font-bold text-white tabular-nums">
                  {minutes}
                </span>
                <span className="text-xl font-bold text-brand-400">:</span>
                <span className="bg-ink-800 border border-white/10 rounded-lg w-10 h-10 flex items-center justify-center font-display text-lg font-bold text-white tabular-nums">
                  {seconds}
                </span>
              </div>
            </div>

            <a
              href="#enroll"
              className="group inline-flex items-center justify-center gap-2 w-full px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold text-lg shadow-lg shadow-brand-600/30 hover:shadow-brand-500/50 hover:scale-[1.02] transition-all duration-300"
            >
              Enroll Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {['Lifetime Access', 'Certificate Included', '30-Day Money-Back Guarantee'].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Check className="w-3.5 h-3.5 text-accent-400" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
