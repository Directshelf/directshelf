import { motion } from "framer-motion";
import { ArrowUpRight, DollarSign, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GradientCard } from "@/components/ui/gradient-card";

const stats = [
  {
    number: "3x",
    label: "Faster City Expansion",
    aiDetail: "Data-driven location strategy",
    Icon: ArrowUpRight,
    gradient: "from-blue-500/20 to-indigo-500/20"
  },
  {
    number: "60%",
    label: "Lower Setup Costs",
    aiDetail: "Intelligent resource planning",
    Icon: DollarSign,
    gradient: "from-blue-500/20 to-indigo-500/20"
  },
  {
    number: "90%",
    label: "Faster Go-to-Market",
    aiDetail: "Smart demand forecasting",
    Icon: Users,
    gradient: "from-blue-500/20 to-indigo-500/20"
  }
];

const StatsBar = () => {
  return (
    <section id="stats" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#2B3990]/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative">
        <SectionHeading 
          subtitle="Proven results from D2C brands scaling with DirectShelf"
          withGradient={false}
          className="text-gray-900"
        >
          Scale Faster, Grow Stronger
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {stats.map((stat, index) => (
            <GradientCard
              key={index}
              index={index}
              variant="feature"
              className={`bg-gradient-to-br ${stat.gradient}`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-8">
                  <div className="w-20 h-20 rounded-xl bg-white/10 backdrop-blur-sm 
                              flex items-center justify-center transform hover:scale-105 transition-transform">
                    <stat.Icon className="w-12 h-12 text-primary" />
                  </div>
                </div>
                
                <motion.div
                  className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-[#3B82F6] bg-clip-text text-transparent"
                >
                  {stat.number}
                </motion.div>
                <div className="text-xl font-semibold text-gray-900 mb-3">
                  {stat.label}
                </div>
                
                {/* AI Enhancement Badge */}
                <div className="flex items-center gap-2 text-xs text-blue-600 font-medium">
                  <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" />
                  {stat.aiDetail}
                </div>
                
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full 
                              bg-gradient-to-br from-white/5 to-white/10 blur-2xl" />
              </div>
            </GradientCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;