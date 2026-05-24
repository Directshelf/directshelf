import { motion } from "framer-motion";
import { Globe, Mail, Phone } from "lucide-react";

const OfficeCTA = () => {
  return (
    <section id="office-cta" className="py-16 md:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-teal-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Build & Scale Your Office Operations with DirectShelf
          </h2>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10">
            Whether you are setting up your first office, expanding across cities, or building
            enterprise workspace infrastructure, DirectShelf delivers seamless execution with
            speed, operational expertise, and business-focused solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            {/* <motion.a
              href="https://www.directshelf.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-6 py-4 bg-white/10 hover:bg-white/20
                       border border-white/30 rounded-xl text-white font-medium
                       transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 w-full sm:w-auto justify-center"
            >
              <Globe className="w-5 h-5" />
              www.directshelf.com
            </motion.a> */}

            <motion.a
              href="mailto:sales@directshelf.in"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-6 py-4 bg-teal-500 hover:bg-teal-400
                       rounded-xl text-white font-medium
                       transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              sales@directshelf.in
            </motion.a>
          </div>

          <motion.a
            href="tel:08047939544"
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2 mt-6 text-white/80 hover:text-white
                     transition-colors duration-300"
          >
            <Phone className="w-5 h-5" />
            <span className="text-lg font-medium">08047939544</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default OfficeCTA;
