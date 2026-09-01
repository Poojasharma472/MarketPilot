import { GraduationCap, Store, Laptop, BookOpen } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';

const audiences = [
  {
    icon: GraduationCap,
    title: 'Aspiring Digital Marketers',
    description:
      'You are new to digital marketing and want to build a strong, practical foundation. This course takes you from zero to job-ready with real-world projects.',
    tag: 'Beginner Friendly',
  },
  {
    icon: Store,
    title: 'Entrepreneurs & Small Business Owners',
    description:
      'You run a business and want to stop relying on agencies. Learn to run your own profitable ad campaigns and keep more of your margins.',
    tag: 'Business Growth',
  },
  {
    icon: Laptop,
    title: 'Freelancers Looking to Expand',
    description:
      'You already freelance and want to add high-value performance marketing services to your offerings — increasing your rates and client base.',
    tag: 'Skill Expansion',
  },
  {
    icon: BookOpen,
    title: 'Students Seeking Practical Skills',
    description:
      'You are a student who wants to graduate with in-demand, marketable skills. Stand out from the crowd with real campaign experience.',
    tag: 'Career Launch',
  },
];

export function TargetAudience() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 to-ink-950" />
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-brand-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Who Is This For"
            title="Is This Course"
            highlight="Right For You?"
            subtitle="Whether you are starting fresh or leveling up, this course is built for anyone who wants to master performance marketing and turn it into real income."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, i) => (
            <Reveal key={audience.title} delay={i * 100}>
              <div className="glass-card glass-hover p-6 h-full text-center group">
                <div className="relative inline-flex mb-5">
                  <div className="absolute inset-0 bg-brand-500/20 rounded-2xl blur-xl group-hover:scale-150 transition-transform duration-500" />
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500/20 to-brand-700/30 border border-brand-400/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <audience.icon className="w-8 h-8 text-brand-300" />
                  </div>
                </div>
                <h3 className="font-display text-base font-bold text-white mb-3 leading-snug">
                  {audience.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {audience.description}
                </p>
                <span className="inline-block px-3 py-1 rounded-full bg-brand-500/10 border border-brand-400/20 text-xs font-medium text-brand-300">
                  {audience.tag}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
