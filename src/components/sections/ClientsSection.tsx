import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const clients = [
    { id: 1, name: "Asa Beauty", logo: "/logos/clients/Asa Beauty.jpeg" },
    { id: 2, name: "Bare Anatomy", logo: "/logos/clients/Bare Anatomy.jpg" },
    { id: 3, name: "Betrukind", logo: "/logos/clients/Betrukind.webp" },
    { id: 4, name: "Brew & Bliss", logo: "/logos/clients/Bru&Bliss.jpg" },
    { id: 5, name: "Chemist at play", logo: "/logos/clients/Chemist at play.jpg" },
    { id: 6, name: "Ecoright", logo: "/logos/clients/ecoright_logo.jpeg" },
    { id: 7, name: "HappyWrap", logo: "/logos/clients/Happywrap.jpeg" },
    { id: 8, name: "Innovist", logo: "/logos/clients/Innovist.png" },
    { id: 9, name: "Kimirica", logo: "/logos/clients/Kimirica.jpeg" },
    { id: 10, name: "NORI", logo: "/logos/clients/NORI.png" },
    { id: 11, name: "Reene Cosmetics", logo: "/logos/clients/Renee Cosmetic.png" },
    { id: 12, name: "SunScoop", logo: "/logos/clients/SunScoop.png" },
    { id: 13, name: "Virgio Fashion", logo: "/logos/clients/Virgio Fashion.jpeg" }
];

// Duplicate clients for seamless carousel
const carouselClients = [...clients, ...clients];

const ClientsSection = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4">
                <SectionHeading
                    subtitle="Trusted by India's fastest growing D2C brands"
                    withGradient={false}
                    className="text-gray-900"
                >
                    Our Clients
                </SectionHeading>

                {/* Carousel Container */}
                <div className="w-full overflow-hidden py-12">
                    <motion.div
                        animate={{
                            x: [0, -100 * clients.length],
                        }}
                        transition={{
                            duration: 40,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="flex gap-8 md:gap-12"
                    >
                        {carouselClients.map((client, index) => (
                            <div
                                key={`${client.id}-${Math.floor(index / clients.length)}`}
                                className="flex-shrink-0 w-40 h-40 md:w-52 md:h-52 flex items-center justify-center bg-gray-50 rounded-xl p-2 hover:bg-gray-100 transition-colors duration-300 shadow-md hover:shadow-xl cursor-pointer"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    title={client.name}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ClientsSection;
