import { motion } from "framer-motion";
import { Check } from "lucide-react";

const benefits = [
  "Strong network across commercial office parks and managed workspaces",
  "Experience supporting startups, enterprises, and GCC operations",
  "End-to-end execution support from requirement gathering to office handover",
  "Expertise in solving operational bottlenecks during setup and expansion",
  "Flexible solutions tailored for scaling businesses",
  "Multi-city operational support and coordination capabilities"
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Businesses Choose DirectShelf
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 md:p-5 rounded-xl bg-white border border-slate-100
                         hover:border-teal-200 hover:shadow-md transition-all duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                  <Check className="w-5 h-5 text-teal-600" />
                </div>
                <p className="text-slate-700 leading-relaxed">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
