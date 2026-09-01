import { Target, Maximize2, Wrench, Building2 } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';

const benefits = [
  {
    icon: Target,
    title: 'Drive Targeted Traffic & Leads',
    description:
      'Master the art of attracting the right audience at the right time. Learn to build campaigns that reach your ideal customers across Google, Facebook, Instagram, and more — turning clicks into qualified leads.',
    points: ['Audience targeting mastery', 'Lead generation funnels', 'Pixel & tracking setup'],
  },
  {
    icon: Maximize2,
    title: 'Optimize Campaigns for Maximum ROI',
    description:
      'Stop guessing and start optimizing. Learn data-driven techniques to analyze campaign performance, identify what works, and scale your winners while cutting wasted spend.',
    points: ['A/B testing frameworks', 'Budget allocation strategies', 'Conversion optimization'],
  },
  {
    icon: Wrench,
    title: 'Master Industry-Standard Tools & Platforms',
    description:
      'Get hands-on with the exact tools the pros use. From Google Ads and Meta Ads Manager to Google Analytics and Tag Manager — you will build real confidence with platforms that matter.',
    points: ['Google Ads & Analytics', 'Meta Ads Manager', 'Tag Manager & tracking pixels'],
  },
  {
    icon: Building2,
    title: 'Build a Profitable Online Business',
    description:
      'Turn your skills into income. Whether you want to freelance, consult, or scale your own business, this course gives you the playbook to monetize your performance marketing expertise.',
    points: ['Client acquisition tactics', 'Pricing & packaging services', 'Scaling your agency'],
  },
];

export function KeyBenefits() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-ink-950 to-ink-900" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="What You'll Gain"
            title="Transform Your Career with"
            highlight="Skills That Pay"
            subtitle="This isn't just theory. Every module is designed to give you practical, job-ready skills that translate directly into career growth and revenue."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 120}>
              <div className="glass-card glass-hover p-8 h-full group relative overflow-hidden">
                {/* Decorative gradient corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-500/10 to-transparent rounded-bl-full" />

                <div className="relative flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500/20 to-brand-700/30 border border-brand-400/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <benefit.icon className="w-7 h-7 text-brand-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-white mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed mb-4">
                      {benefit.description}
                    </p>
                    <ul className="space-y-2">
                      {benefit.points.map((point) => (
                        <li key={point} className="flex items-center gap-2 text-sm text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-400 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
