import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What are the prerequisites for this course?',
    answer:
      'No prior experience is needed! The course starts from absolute fundamentals and gradually builds up to advanced strategies. All you need is a willingness to learn and basic computer literacy. We will guide you through every step, from setting up your ad accounts to running your first campaigns.',
  },
  {
    question: 'What kind of support is available?',
    answer:
      'You get access to a private community forum where you can ask questions, share wins, and connect with fellow learners. Plus, you will have direct instructor support for any course-related queries. We are committed to making sure you never feel stuck.',
  },
  {
    question: 'Is there a certificate of completion?',
    answer:
      'Yes! Upon completing the course, you will receive a verifiable certificate of completion that you can showcase on your LinkedIn profile, resume, or portfolio. It is a great way to demonstrate your expertise to potential employers or clients.',
  },
  {
    question: 'How long do I have access to the course content?',
    answer:
      'You get lifetime access to all course materials, including any future updates. Once you enroll, the content is yours forever — learn at your own pace, revisit modules whenever you need a refresher, and benefit from new content as the digital marketing landscape evolves.',
  },
  {
    question: 'Will the course content stay updated?',
    answer:
      'Absolutely. Performance marketing platforms change frequently, and we update the course content regularly to reflect the latest features, strategies, and best practices. As a lifetime access member, you receive all updates at no additional cost.',
  },
];

function FAQAccordion({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className={`glass-card transition-all duration-300 ${isOpen ? 'border-brand-400/30' : ''}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 lg:p-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className={`font-display text-base lg:text-lg font-semibold transition-colors ${isOpen ? 'text-white' : 'text-slate-200 group-hover:text-white'}`}>
          {item.question}
        </span>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'bg-brand-500/20 text-brand-300' : 'bg-white/5 text-slate-400'
          }`}
        >
          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 lg:px-6 pb-6">
            <p className="text-slate-400 leading-relaxed">{item.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 to-ink-950" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-brand-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Got Questions?"
            highlight="We Have Answers"
            subtitle="Everything you need to know before enrolling. Still have questions? Reach out to our team anytime."
          />
        </Reveal>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 70}>
              <FAQAccordion
                item={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>

        {/* Still have questions? */}
        <Reveal delay={200}>
          <div className="mt-10 text-center">
            <p className="text-slate-400">
              Still have questions?{' '}
              <a href="#enroll" className="text-brand-300 hover:text-brand-200 font-semibold underline underline-offset-2">
                Talk to our team
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
