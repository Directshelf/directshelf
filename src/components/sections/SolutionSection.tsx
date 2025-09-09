import { motion } from "framer-motion";
import { Zap, Database, Network } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const features = [
  {
    title: "Multi-City Warehousing",
    description: "Intelligent warehouse network across major cities with AI-driven inventory placement. Cut delivery times by 40% with zero upfront investment.",
    Icon: Zap,
    aiFeature: "Strategic placement reduces delivery time by 40%"
  },
  {
    title: "Complete Fulfillment",
    description: "End-to-end order processing with intelligent assignment for guaranteed 2-4 hour delivery",
    Icon: Network,
    aiFeature: "Smart routing ensures 99.5% on-time delivery rate"
  },
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          subtitle="Complete D2C enablement infrastructure that scales with your brand"
          withGradient={false}
          className="text-gray-900"
        >
          Your Multi-City Growth Partner
        </SectionHeading>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-center mb-12 text-gray-700">
            Everything You Need to Scale Your D2C Brand
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="h-full p-8 rounded-2xl bg-white border border-gray-100
                             transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2
                             hover:bg-gradient-to-b hover:from-blue-500/5 hover:to-purple-500/5">
                  <div className="mb-6 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10
                               flex items-center justify-center">
                    <feature.Icon className="w-8 h-8 text-primary transform transition-transform
                                         group-hover:scale-110 duration-300" />
                  </div>

                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h4>

                  <p className="text-gray-600 leading-relaxed min-h-[3rem]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
