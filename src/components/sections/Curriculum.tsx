import { useState } from 'react';
import { ChevronDown, Clock, PlayCircle, FileText, HelpCircle, Video, BookMarked } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';

interface Module {
  number: number;
  title: string;
  hours: string;
  topics: string[];
}

const modules: Module[] = [
  {
    number: 1,
    title: 'Foundations of Performance Marketing',
    hours: '3 Hours',
    topics: [
      'Introduction to Digital Advertising',
      'Understanding Key Metrics & KPIs',
      'Setting Up Your Ad Accounts',
    ],
  },
  {
    number: 2,
    title: 'Google Ads Mastery',
    hours: '7 Hours',
    topics: [
      'Search Campaigns: Setup & Optimization',
      'Display & YouTube Ads Strategies',
      'Remarketing & Audiences',
    ],
  },
  {
    number: 3,
    title: 'Facebook & Instagram Ads',
    hours: '8 Hours',
    topics: [
      'Campaign Structure & Objectives',
      'Audience Targeting & Creative Best Practices',
      'Scaling & Troubleshooting',
    ],
  },
  {
    number: 4,
    title: 'Analytics & Optimization',
    hours: '5 Hours',
    topics: [
      'Google Analytics Integration',
      'A/B Testing & Conversion Rate Optimization',
      'Reporting & Performance Analysis',
    ],
  },
  {
    number: 5,
    title: 'Advanced Strategies & Future Trends',
    hours: '2 Hours',
    topics: [
      'Affiliate Marketing Basics',
      'Influencer Collaborations',
      'AI in Performance Marketing',
    ],
  },
];

function AccordionItem({ module, isOpen, onToggle }: { module: Module; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`glass-card transition-all duration-300 ${isOpen ? 'border-brand-400/30 shadow-glow' : ''}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-5 lg:p-6 text-left group"
        aria-expanded={isOpen}
      >
        {/* Module number badge */}
        <div
          className={`flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center font-display font-bold text-lg transition-all duration-300 ${
            isOpen
              ? 'bg-gradient-to-br from-brand-500 to-brand-600 text-white'
              : 'bg-white/5 border border-white/10 text-slate-400 group-hover:text-brand-300'
          }`}
        >
          {String(module.number).padStart(2, '0')}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-display text-base lg:text-lg font-bold text-white truncate">
            {module.title}
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-xs text-slate-400">Est. {module.hours}</span>
            <span className="text-slate-600">•</span>
            <span className="text-xs text-slate-400">{module.topics.length} lessons</span>
          </div>
        </div>

        <ChevronDown
          className={`flex-shrink-0 w-5 h-5 text-slate-400 transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-brand-300' : ''
          }`}
        />
      </button>

      {/* Expandable content */}
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 lg:px-6 pb-6 pl-20 lg:pl-24">
            <div className="space-y-3 border-l border-white/10 pl-5">
              {module.topics.map((topic, i) => (
                <div key={i} className="flex items-center gap-3 group/topic">
                  <PlayCircle className="w-4 h-4 text-brand-400 flex-shrink-0 group-hover/topic:text-brand-300 transition-colors" />
                  <span className="text-sm text-slate-300 group-hover/topic:text-white transition-colors">
                    {topic}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const deliveryFormats = [
  { icon: Video, label: 'HD Video Lectures' },
  { icon: FileText, label: 'Downloadable Templates' },
  { icon: HelpCircle, label: 'Quizzes & Exercises' },
  { icon: BookMarked, label: 'Resource Library' },
];

export function Curriculum() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="curriculum" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Curriculum"
            title="Your Path to"
            highlight="Mastery"
            subtitle="A structured, step-by-step journey through 5 comprehensive modules — designed to take you from fundamentals to advanced strategies."
          />
        </Reveal>

        {/* Total hours highlight */}
        <Reveal delay={100}>
          <div className="mt-10 flex justify-center">
            <div className="glass-card px-6 py-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-400/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-gold-400" />
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-white">25+ Hours</p>
                <p className="text-sm text-slate-400">of on-demand video content</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Accordion modules */}
        <div className="mt-12 space-y-4">
          {modules.map((module, i) => (
            <Reveal key={module.number} delay={i * 80}>
              <AccordionItem
                module={module}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>

        {/* Delivery formats */}
        <Reveal delay={200}>
          <div className="mt-12 glass-card p-6 lg:p-8">
            <p className="text-center text-sm font-semibold text-slate-300 uppercase tracking-wider mb-6">
              Everything Included with Your Enrollment
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {deliveryFormats.map((format) => (
                <div key={format.label} className="flex flex-col items-center text-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-400/20 flex items-center justify-center">
                    <format.icon className="w-6 h-6 text-brand-300" />
                  </div>
                  <span className="text-sm text-slate-300 font-medium">{format.label}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
