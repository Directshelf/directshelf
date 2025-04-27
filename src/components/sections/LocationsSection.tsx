import { motion } from "framer-motion";
import { MapPin, Clock, Truck, Building } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const locations = {
  active: [
    "Bangalore",
    "Hyderabad",
    "Ahmedabad",
    "Mumbai",
    "Guwahati"
  ],
  upcoming: [
    "Chennai",
    "Noida",
    "Delhi",
    "Gurgaon",
    "Jaipur"
  ]
};

const benefits = [
  {
    icon: Clock,
    title: "2-4 Hour Delivery",
    description: "Ultra-fast delivery from the nearest micro-warehouse"
  },
  {
    icon: Truck,
    title: "Multi-City Fulfillment",
    description: "Store inventory across multiple strategic locations"
  },
  {
    icon: Building,
    title: "Micro-Warehousing Network",
    description: "8-10 micro-fulfillment centers per city in high-demand zones"
  }
];

const LocationsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          subtitle="Hyperlocal fulfillment network with strategically placed micro-warehouses across major Indian cities for instant delivery"
          withGradient={false}
          className="text-gray-900"
        >
          Our Coverage
        </SectionHeading>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Active Locations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Active Locations</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Cities with our full-scale micro-warehousing network. Each city features strategically placed fulfillment centers in high-demand zones for instant delivery
            </p>
            <div className="grid grid-cols-2 gap-3">
              {locations.active.map((city, index) => (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  {city}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Upcoming Locations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Coming Soon</h3>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Cities where we're establishing our micro-warehousing network. Pre-register to secure priority access and exclusive launch offers for your area
            </p>
            <div className="grid grid-cols-2 gap-3">
              {locations.upcoming.map((city, index) => (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-gray-600"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  {city}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
