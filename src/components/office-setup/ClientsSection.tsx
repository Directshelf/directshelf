import { motion } from "framer-motion";

const clients = [
  "Harbor IT Pvt Ltd",
  "Concentrix",
  "ITILITE Pvt Ltd",
  "Nayara Energy",
  "Enterprise & Startup Clients Across India"
];

const ClientsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trusted By Leading Organizations
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="px-5 py-3 md:px-6 md:py-3.5 rounded-full bg-slate-50 border border-slate-200
                       text-slate-700 font-medium text-sm md:text-base
                       hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-md
                       transition-all duration-300 cursor-default"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
