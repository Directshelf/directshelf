import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="border-l-4 border-teal-500 pl-6 md:pl-8">
            <p className="text-teal-600 text-sm font-semibold uppercase tracking-wider mb-4">
              About DirectShelf
            </p>

            <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-6">
              At DirectShelf, we specialize in end-to-end office setup and workspace infrastructure
              solutions for fast-growing startups, enterprise businesses, and multinational organizations.
              From identifying the right workspace to managing operational readiness and employee
              relocation support, we simplify the complete office expansion journey.
            </p>

            <p className="text-base md:text-lg text-slate-600 leading-relaxed">
              Our team has extensive experience supporting businesses through rapid expansion phases,
              ensuring seamless coordination between landlords, developers, facility teams, vendors,
              and internal stakeholders.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
