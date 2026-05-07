import { motion } from "framer-motion";
import { Target, Building2, Landmark, FileText, Settings, Users } from "lucide-react";

const expertiseItems = [
  {
    icon: Target,
    title: "Workspace Strategy",
    description: "Office sourcing and infrastructure planning aligned with operational requirements, scalability, and workforce growth."
  },
  {
    icon: Building2,
    title: "Managed Offices & Coworking",
    description: "Flexible workspace solutions for startups and agile businesses looking for faster expansion with optimized costs."
  },
  {
    icon: Landmark,
    title: "Enterprise Office Setup",
    description: "Large-format office setup and multi-city expansion support for enterprises and GCC operations."
  },
  {
    icon: FileText,
    title: "Lease Negotiations",
    description: "Commercial discussions, lease structuring, renewals, lock-in negotiations, and documentation coordination."
  },
  {
    icon: Settings,
    title: "Operational Execution",
    description: "Resolving operational challenges during office setup including infrastructure readiness, vendor coordination, facility management, and occupancy planning."
  },
  {
    icon: Users,
    title: "Employee Relocation Support",
    description: "Coordination support for employee movement, workspace readiness, onboarding logistics, and operational transitions."
  }
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Expertise
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            End-to-end solutions for your workspace needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 md:p-8 rounded-2xl bg-white border border-slate-100
                           transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2
                           hover:border-blue-100 hover:bg-gradient-to-b hover:from-blue-50/50 hover:to-teal-50/50">
                <div className="mb-5 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/10 to-teal-500/10
                             flex items-center justify-center group-hover:from-blue-500/20 group-hover:to-teal-500/20
                             transition-all duration-300">
                  <item.icon className="w-7 h-7 text-teal-600 transform transition-transform
                                       group-hover:scale-110 duration-300" />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
