import { ArrowRight, Play, TrendingUp, Users, Award, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-32">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-900 to-ink-800" />
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-radial-glow" />

      {/* Floating glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl animate-float" />

      {/* Floating stat cards */}
      <div className="hidden lg:block absolute top-32 right-10 glass-card px-5 py-4 shadow-glow animate-float" style={{ animationDelay: '0.5s' }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-500/20 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-brand-300" />
          </div>
          <div>
            <p className="text-2xl font-bold text-white">320%</p>
            <p className="text-xs text-slate-400">Avg. ROI Increase</p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-40 left-10 glass-card px-5 py-4 shadow-glow animate-float" style={{ animationDelay: '1s' }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent-500/20 flex items-center justify-center">
            <Users className="w-5 h-5 text-accent-400" />
          </div>
          <div>
            <p className="text-2xl font-bold text-white">12,000+</p>
            <p className="text-xs text-slate-400">Students Enrolled</p>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute top-48 left-1/4 glass-card px-5 py-4 shadow-glow animate-float" style={{ animationDelay: '2s' }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gold-500/20 flex items-center justify-center">
            <Award className="w-5 h-5 text-gold-400" />
          </div>
          <div>
            <p className="text-2xl font-bold text-white">4.9/5</p>
            <p className="text-xs text-slate-400">Student Rating</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 animate-fade-in">
            <Zap className="w-4 h-4 text-gold-400" />
            <span className="text-sm text-slate-300">Limited-Time Launch Offer — 80% Off Today</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight animate-fade-up">
            Unlock Your Earning Potential
            <span className="block mt-2 text-gradient">Master Performance Marketing</span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-300 mt-3">
              with Our Proven Strategies
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="mt-6 text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl animate-fade-up" style={{ animationDelay: '150ms' }}>
            Learn the exact frameworks that top marketers use to drive targeted traffic, scale campaigns,
            and generate measurable ROI. Over 25+ hours of practical, real-world training — from beginner
            to pro.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '300ms' }}>
            <a
              href="#enroll"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold text-lg shadow-lg shadow-brand-600/30 hover:shadow-brand-500/50 hover:scale-[1.03] transition-all duration-300"
            >
              Enroll Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#curriculum"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl glass glass-hover text-white font-semibold text-lg"
            >
              <Play className="w-5 h-5 text-brand-300" />
              View Curriculum
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 animate-fade-up" style={{ animationDelay: '450ms' }}>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['bg-brand-500', 'bg-accent-500', 'bg-gold-500', 'bg-brand-700'].map((c, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-ink-900`} />
                ))}
              </div>
              <span className="text-sm text-slate-400">Joined by 12,000+ learners</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-gold-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-slate-400">4.9/5 average rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-brand-300" />
              <span className="text-sm text-slate-400">Certificate of completion</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink-950 to-transparent pointer-events-none" />
    </section>
  );
}
