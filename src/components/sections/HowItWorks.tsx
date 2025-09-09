import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const HowItWorks = () => {
  const isMobile = useIsMobile();

  const scrollToContact = () => {
    const element = document.querySelector('#action-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          subtitle="Simple onboarding process to scale your D2C brand across cities"
        >
          4 Steps to Multi-City Success
        </SectionHeading>

        {/* AI Optimization Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Intelligent Operations Behind Every Step</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Our smart systems continuously optimize dark store locations, predict demand patterns,
            and route orders efficiently to ensure your customers receive their orders in 24 hours with 99.5% reliability.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <motion.img
            src={isMobile
              ? "/lovable-uploads/9b7404c0-d49a-4f08-8a67-5182b391183a.png"
              : "/lovable-uploads/0caa15cd-8cb6-458d-825d-610d5d5406e5.png"
            }
            alt="DirectShelf Quick Commerce Process: On-board, Connect, Store, and Pick & Pack"
            className="w-full h-auto rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            loading="lazy"
          />
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            className="animate-fade-in delay-1000 bg-primary hover:bg-primary/90 text-white"
            onClick={scrollToContact}
          >
            Start Scaling Your D2C Brand →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
