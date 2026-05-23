import { motion } from "framer-motion";
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
    accentColor: "from-pink-500 to-rose-500"
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
    accentColor: "from-amber-500 to-orange-500"
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
    accentColor: "from-emerald-500 to-green-500"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <SectionHeading
          subtitle="Trusted by leading D2C brands across India"
        >
          What Our Partners Say
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <GradientCard
              key={testimonial.id}
              index={index}
              variant="testimonial"
              className="h-full"
            >
              <div className="h-full flex flex-col">
                {/* Header with brand initial and company name */}
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${testimonial.accentColor} flex items-center justify-center shadow-lg`}>
                    <span className="text-white font-bold text-xl">
                      {testimonial.company[0]}
                    </span>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
