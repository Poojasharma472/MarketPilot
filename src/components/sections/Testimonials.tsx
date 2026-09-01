import { useState, useEffect, useCallback } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { Stars } from '@/components/Stars';

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  highlight: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Priya Sharma',
    role: 'Digital Marketing Specialist',
    avatar: 'https://images.pexels.com/photos/37601638/pexels-photo-37601638.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    text: "This course completely transformed my career. Within 3 months of completing it, I landed a performance marketing role at a top agency. The Google Ads and Meta Ads modules are incredibly practical — I was running real campaigns by week two.",
    highlight: 'landed a performance marketing role at a top agency',
  },
  {
    name: 'Rahul Mehta',
    role: 'E-commerce Entrepreneur',
    avatar: 'https://images.pexels.com/photos/39172781/pexels-photo-39172781.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    text: "I was spending ₹50K/month on ads with mediocre results. After applying what I learned in this course, I cut my cost-per-acquisition by 60% and tripled my return on ad spend. The ROI optimization module alone is worth 10x the price.",
    highlight: 'cut my cost-per-acquisition by 60% and tripled my return',
  },
  {
    name: 'Ananya Gupta',
    role: 'Freelance Marketing Consultant',
    avatar: 'https://images.pexels.com/photos/25651531/pexels-photo-25651531.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
    rating: 5,
    text: "As a freelancer, adding performance marketing to my services doubled my monthly income. The course breaks down complex concepts into simple, actionable steps. The templates and frameworks are pure gold for client work.",
    highlight: 'doubled my monthly income',
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="glass-card p-8 lg:p-10 h-full">
      <Quote className="w-10 h-10 text-brand-500/30 mb-5" />

      <Stars count={testimonial.rating} className="mb-5" />

      <p className="text-slate-300 text-base lg:text-lg leading-relaxed mb-6">
        "{testimonial.text.split(testimonial.highlight)[0]}
        <span className="text-white font-semibold bg-brand-500/10 px-1 rounded">
          {testimonial.highlight}
        </span>
        {testimonial.text.split(testimonial.highlight)[1]}"
      </p>

      <div className="flex items-center gap-4 pt-6 border-t border-white/10">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-brand-400/30"
          loading="lazy"
        />
        <div>
          <p className="font-display font-bold text-white">{testimonial.name}</p>
          <p className="text-sm text-slate-400">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next, isPaused]);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 to-ink-900" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonials"
            title="What Our"
            highlight="Learners Say"
            subtitle="Real stories from students who transformed their careers and businesses with the skills they learned in this course."
          />
        </Reveal>

        <Reveal delay={100}>
          <div
            className="mt-14 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Carousel */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${active * 100}%)` }}
              >
                {testimonials.map((testimonial, i) => (
                  <div key={i} className="w-full flex-shrink-0 px-1">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-xl glass glass-hover flex items-center justify-center text-slate-300 hover:text-white"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      active === i ? 'w-8 bg-brand-400' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-11 h-11 rounded-xl glass glass-hover flex items-center justify-center text-slate-300 hover:text-white"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
