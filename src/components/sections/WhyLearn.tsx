import { TrendingUp, Briefcase, DollarSign, Rocket, BarChart3, Globe } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';

const reasons = [
  {
    icon: TrendingUp,
    title: 'High Demand',
    description: 'Performance marketing skills are sought after by every industry. Companies are actively hiring experts who can drive measurable results.',
    stat: '38% growth',
    statLabel: 'in job postings YoY',
  },
  {
    icon: DollarSign,
    title: 'Lucrative Careers',
    description: 'Performance marketers earn significantly above average. Freelancers and consultants command premium rates for campaign management.',
    stat: '₹6-15 LPA',
    statLabel: 'entry-level salary range',
  },
  {
    icon: BarChart3,
    title: 'Measurable Results',
    description: 'Unlike traditional marketing, every rupee you spend is tracked. You can prove your ROI with hard data — making you invaluable.',
    stat: '3-5x ROI',
    statLabel: 'typical campaign returns',
  },
  {
    icon: Globe,
    title: 'Work From Anywhere',
    description: 'All you need is a laptop and internet. Serve clients globally, work remotely, or build your own profitable online business.',
    stat: '100% Remote',
    statLabel: 'flexible career path',
  },
];

export function WhyLearn() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 to-ink-900" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-brand-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="The Opportunity"
            title="Why Performance Marketing is"
            highlight="Your Next Big Skill"
            subtitle="The digital advertising industry is projected to reach ₹540 billion by 2026. Performance marketing sits at the intersection of data, creativity, and revenue — making it one of the most valuable and future-proof skills you can learn today."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 100}>
              <div className="glass-card glass-hover p-6 h-full group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500/20 to-brand-700/20 border border-brand-400/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-6 h-6 text-brand-300" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{reason.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{reason.description}</p>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-2xl font-bold text-gradient">{reason.stat}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{reason.statLabel}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Inline stat bar */}
        <Reveal delay={200}>
          <div className="mt-16 glass-card p-8 lg:p-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Briefcase, value: '50K+', label: 'Active job openings' },
                { icon: Rocket, value: '25+', label: 'Hours of expert training' },
                { icon: TrendingUp, value: '320%', label: 'Average ROI increase' },
                { icon: DollarSign, value: '₹999', label: 'One-time investment' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <stat.icon className="w-6 h-6 text-brand-400 mx-auto mb-3" />
                  <p className="font-display text-3xl lg:text-4xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
