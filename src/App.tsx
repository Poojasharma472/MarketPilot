import { NavBar } from '@/components/NavBar';
import { Hero } from '@/components/sections/Hero';
import { WhyLearn } from '@/components/sections/WhyLearn';
import { KeyBenefits } from '@/components/sections/KeyBenefits';
import { TargetAudience } from '@/components/sections/TargetAudience';
import { Curriculum } from '@/components/sections/Curriculum';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA, StickyFooter } from '@/components/sections/StickyFooter';

function App() {
  return (
    <div className="min-h-screen bg-ink-950 text-slate-200 overflow-x-hidden">
      <NavBar />
      <main className="pb-24 md:pb-20">
        <Hero />
        <WhyLearn />
        <div id="benefits">
          <KeyBenefits />
        </div>
        <TargetAudience />
        <Curriculum />
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <FinalCTA />
      </main>
      <StickyFooter />
    </div>
  );
}

export default App;
