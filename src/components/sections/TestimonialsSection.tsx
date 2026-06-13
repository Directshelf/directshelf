import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GradientCard } from "@/components/ui/gradient-card";

interface Testimonial {
  id: string;
  company: string;
  industry: string;
  quote: string;
  highlight: string;
  person: {
    name: string;
    role: string;
  };
  accentColor: string;
  logoPath: string;
}

const testimonials: Testimonial[] = [
  {
    id: "reene-cosmetics",
    company: "Reene Cosmetics",
    industry: "Beauty & Cosmetics",
    quote: "With DirectShelf managing our B2B/B2C warehousing and fulfillment, we've seen a significant improvement in turnaround times and customer satisfaction. Their attention to detail in handling delicate cosmetic products and maintaining inventory hygiene is commendable. They've helped us scale with confidence.",
    highlight: "25% faster turnaround",
    person: {
      name: "Aritra Barmanray",
      role: "Head of Supply Chain"
    },
    accentColor: "from-pink-500 to-rose-500",
    logoPath: "/logos/testimonials/Renee Cosmetic.png"
  },
  {
    id: "kimirica",
    company: "Kimirica",
    industry: "Luxury Lifestyle",
    quote: "DirectShelf has brought a level of precision and consistency to our operations that truly reflects the premium experience we promise our customers. From inventory accuracy to fast, error-free order processing, their team ensures every shipment meets our quality standards. They've become an integral part of our supply chain.",
    highlight: "Premium Partner",
    person: {
      name: "Hardik Gupta",
      role: "Supply Chain Operations Manager"
    },
    accentColor: "from-amber-500 to-orange-500",
    logoPath: "/logos/testimonials/Kimirica.jpeg"
  },
  {
    id: "ecoright",
    company: "Ecoright",
    industry: "Sustainable Fashion",
    quote: "Sustainability is at the core of what we do, and DirectShelf aligns well with our philosophy. Their organized warehousing, minimal wastage approach, and reliable fulfillment have made a noticeable difference. We now spend less time worrying about operations and more time building our brand.",
    highlight: "20% faster fulfillment",
    person: {
      name: "Karan Modi",
      role: "Operations Manager"
    },
    accentColor: "from-emerald-500 to-green-500",
    logoPath: "/logos/testimonials/ecoright_logo.jpeg"
  },
  {
    id: "asa-beauty",
    company: "Asa Beauty",
    industry: "Beauty & Cosmetics",
    quote: "Partnering with DirectShelf has completely transformed our fulfillment operations. As a beauty and cosmetics brand, customer experience is everything for us, and their efficient warehouse management and faster last-mile deliveries have helped us exceed customer expectations consistently. We've seen quicker turnaround times, fewer delivery issues, and significant operational cost savings since moving to DirectShelf. Their professionalism, reliability, and tech-driven approach make them a valuable logistics partner for our growing business.",
    highlight: "Exceeded customer expectations",
    person: {
      name: "Anudeep Chappa",
      role: "Chief Operating Officer"
    },
    accentColor: "from-purple-500 to-pink-500",
    logoPath: "/logos/testimonials/Asa Beauty.jpeg"
  },
  {
    id: "brew-bliss",
    company: "Brew & Bliss",
    industry: "Beverages & Coffee",
    quote: "DirectShelf has played a major role in improving our supply chain efficiency and customer satisfaction. Their warehouse solutions have streamlined our inventory handling, while their fast and dependable last-mile delivery network ensures our coffee products reach customers fresh and on time. Since partnering with them, we've experienced enhanced customer experience, faster order fulfillment, and noticeable savings in logistics and operational costs. DirectShelf truly understands the needs of modern consumer brands.",
    highlight: "Fresh & on-time delivery",
    person: {
      name: "Pruthvi Neelakantarao",
      role: "Business Head"
    },
    accentColor: "from-yellow-500 to-amber-500",
    logoPath: "/logos/testimonials/Bru&Bliss.svg"
  },
  {
    id: "happywrap",
    company: "HappyWrap",
    industry: "Corporate Gifting",
    quote: "DirectShelf has been a game-changer for our corporate gifting operations. Timely deliveries and seamless order management are critical in our business, especially during festive and bulk corporate campaigns. Their efficient warehouse solutions and dependable last-mile delivery network have helped us enhance customer experience, reduce delivery timelines, and optimize operational costs significantly. With DirectShelf managing our logistics, we are able to focus more on creating memorable gifting experiences for our clients with complete peace of mind.",
    highlight: "Reduced delivery timelines",
    person: {
      name: "Srikanth Kokalla",
      role: "CEO"
    },
    accentColor: "from-teal-500 to-emerald-500",
    logoPath: "/logos/testimonials/Happywrap.jpeg"
  }
];

const TestimonialsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollWidth = scrollContainer.scrollWidth;
    const clientWidth = scrollContainer.clientWidth;
    let currentScroll = 0;
    let direction = 1;

    const interval = setInterval(() => {
      currentScroll += direction * 2;

      if (currentScroll >= scrollWidth - clientWidth) {
        direction = -1;
      } else if (currentScroll <= 0) {
        direction = 1;
      }

      scrollContainer.scrollLeft = currentScroll;
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <SectionHeading
          subtitle="Trusted by leading D2C brands across India"
        >
          Client Testimonials
        </SectionHeading>

        <div className="overflow-hidden" ref={scrollContainerRef}>
          <motion.div
            className="flex gap-6 pb-4"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="flex-shrink-0 w-full sm:w-96 md:w-96"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              >
                <GradientCard
                  index={index}
                  variant="testimonial"
                  className="h-full"
                >
                  <div className="h-full flex flex-col">
                    {/* Header with brand logo and company name */}
                    <div className="flex items-center gap-4 mb-5">
                      <div
                        className={`w-12 h-12 rounded-xl shadow-lg flex items-center justify-center flex-shrink-0 ${testimonial.id === "brew-bliss" ? "bg-black" : ""
                          }`}
                      >
                        <img
                          src={testimonial.logoPath}
                          alt={testimonial.company}
                          className="w-12 h-12 rounded-xl object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{testimonial.company}</h3>
                        <span className="text-xs text-gray-500">{testimonial.industry}</span>
                      </div>
                    </div>

                    {/* Highlight badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className="mb-4"
                    >
                      <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {testimonial.highlight}
                      </span>
                    </motion.div>

                    {/* Quote */}
                    <div className="flex-grow mb-6">
                      <blockquote className="text-gray-600 leading-relaxed text-sm">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-100 my-4" />

                    {/* Person info */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-600 font-medium text-sm">
                          {testimonial.person.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{testimonial.person.name}</p>
                        <p className="text-xs text-gray-500">{testimonial.person.role}</p>
                      </div>
                    </div>
                  </div>
                </GradientCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
