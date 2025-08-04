import { motion } from "framer-motion";
import HeroHeadline from "../hero/HeroHeadline";
import HeroButtons from "../hero/HeroButtons";
import HeroImage from "../hero/HeroImage";
import BenefitCard from "../hero/BenefitCard";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-brand-deep-purple to-brand-purple 
                        before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] 
                        before:opacity-5">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-brand-deep-purple animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-brand-deep-purple animate-pulse delay-100"></div>
      </div>

      <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center relative z-10 py-8 md:py-12 lg:py-18">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 text-white space-y-6 md:space-y-8 pt-12 md:pt-0"
        >
          {/* Quick Impact Text */}
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-sm md:text-base lg:text-lg font-medium tracking-wide"
          >
            Complete D2C enablement platform
          </motion.p>

          <HeroHeadline />

          <div className="space-y-4 text-white/90 max-w-2xl">
            <p className="text-base md:text-lg lg:text-xl font-light">
              From warehousing to fulfillment - we handle the infrastructure so you can focus on growing your brand
            </p>
          </div>

          {/* AI-Powered Optimization Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 backdrop-blur-sm 
                       rounded-full border border-green-400/30 text-white text-sm font-medium"
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Zero Investment • Maximum Impact
          </motion.div>

          <HeroButtons />

          {/* Benefits Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-3xl">
            <BenefitCard
              title="For Your Customers"
              benefits={[
                "Fast 2-4 hour deliveries that delight and convert",
                "Consistent brand experience across all cities"
              ]}
              delay={0}
              type="customer"
            />
            <BenefitCard
              title="For Your Brand"
              benefits={[
                "Scale to new cities without infrastructure investment",
                "Complete control over customer experience and data"
              ]}
              delay={1}
              type="brand"
            />
          </div>
        </motion.div>

        <HeroImage />
      </div>
    </section>
  );
};

export default HeroSection;
