import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ActionSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    mobile: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    // Check if all required fields are filled
    if (!formData.name.trim()) {
      toast({
        title: "Name is required",
        description: "Please enter your name",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.email.trim()) {
      toast({
        title: "Email is required",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email format",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.company.trim()) {
      toast({
        title: "Company name is required",
        description: "Please enter your company name",
        variant: "destructive"
      });
      return false;
    }

    if (!formData.mobile.trim()) {
      toast({
        title: "Mobile number is required",
        description: "Please enter your mobile number",
        variant: "destructive"
      });
      return false;
    }

    // Validate mobile number format (10-15 digits)
    const mobileRegex = /^[0-9]{10,15}$/;
    if (!mobileRegex.test(formData.mobile.replace(/\s+|-/g, ''))) {
      toast({
        title: "Invalid mobile number",
        description: "Please enter a valid mobile number (10-15 digits)",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf9afhu1l1Z91Nil-3TEDQFDQhG63Rh_vUIv1H-rsrD1WpEpw/formResponse";

    const formBody = new URLSearchParams({
      "entry.1083461693": formData.name,
      "entry.1920260266": formData.company,
      "entry.1346518617": formData.email,
      "entry.1515156476": formData.mobile,
      "entry.109417011": formData.message || ""
    });

    try {
      // Using fetch with no-cors mode since Google Forms doesn't support CORS
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: formBody
      });

      // Clear form and show success message
      setFormData({
        name: "",
        email: "",
        company: "",
        mobile: "",
        message: ""
      });

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
        className: "bg-green-500 text-white"
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="action-section" className="bg-gradient-to-r from-brand-deep-purple to-brand-purple py-24 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-300 max-w-[900px] mx-auto overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Column - Text Content */}
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-brand-deep-purple mb-8">
                Ready to Scale Your D2C Brand?
              </h3>

              <ul className="space-y-5 mb-8">
                {[
                  "Custom multi-city expansion strategy",
                  "Data-driven revenue impact analysis",
                  "72-hour launch timeline",
                  "Live optimization demonstration"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-4">
                    <Check className="w-6 h-6 text-[#10B981] flex-shrink-0" />
                    <span className="text-[#1F2937] text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-[#F8FAFC] p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Enter your email address"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Enter your company name"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    type="tel"
                    placeholder="Enter your mobile number"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="How can we help you today?"
                    className="w-full min-h-[100px]"
                    aria-label="Optional message"
                  />
                  <p className="text-sm text-muted-foreground mt-1">
                    Optional: Feel free to share your thoughts or skip this field
                  </p>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-brand-purple hover:bg-brand-deep-purple shadow-[0_4px_14px_0_rgba(139,92,246,0.39)] hover:shadow-[0_6px_20px_rgba(139,92,246,0.23)] hover:-translate-y-1 transition duration-200 ease-in-out text-lg py-6"
                >
                  {isSubmitting ? "Sending..." : "Send Message →"}
                </Button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ActionSection;
