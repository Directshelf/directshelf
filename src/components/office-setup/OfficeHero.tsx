import { motion } from "framer-motion";
import { Building2, Users, MapPin } from "lucide-react";

const OfficeHero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-teal-800
                        before:absolute before:inset-0 before:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]
                        before:opacity-10">
      <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center relative z-10 py-8 md:py-12 lg:py-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-3/5 text-white space-y-6 md:space-y-8 pt-16 md:pt-0"
        >
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-teal-300 text-sm md:text-base font-medium tracking-wider uppercase"
          >
            Enterprise Workspace Solutions
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
          >
            Office Setup &<br />
            <span className="text-teal-400">Workspace Infrastructure</span><br />
            Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-white/80 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed"
          >
            DirectShelf supports startups, enterprises, and Global Capability Centers (GCCs)
            with seamless office setup, workspace infrastructure planning, employee relocation
            coordination, and operational execution across multiple cities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button
              onClick={() => scrollToSection("#office-cta")}
              className="px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-semibold rounded-lg
                         transition-all duration-300 shadow-lg hover:shadow-teal-500/25 hover:-translate-y-0.5"
            >
              Get in Touch
            </button>
            <button
              onClick={() => scrollToSection("#expertise")}
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg
                         border border-white/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Solutions
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full md:w-2/5 flex justify-center items-center mt-12 md:mt-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-teal-400/20 to-blue-500/20
                            backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <Building2 className="w-16 h-16 md:w-20 md:h-20 text-teal-400" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-4 right-4 md:top-8 md:right-8"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-blue-400/20 to-slate-500/20
                            backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <Users className="w-10 h-10 md:w-12 md:h-12 text-blue-400" />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-4 left-4 md:bottom-8 md:left-8"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-slate-400/20 to-teal-500/20
                            backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <MapPin className="w-10 h-10 md:w-12 md:h-12 text-slate-300" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfficeHero;
