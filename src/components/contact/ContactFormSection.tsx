import { useState } from "react";
import { Phone, Mail, Clock, MapPin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ui/ScrollReveal";
import LoadingButton from "@/components/ui/LoadingButton";

const ContactFormSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98221 96355",
      href: "tel:+919822196355",
    },
    {
      icon: Mail,
      label: "Email",
      value: "nssanrachana@gmail.com",
      href: "mailto:nssanrachana@gmail.com",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "09:00 am - 06:00 pm",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "160/18, Shivaji Park, Chinchwad, Pune - 411019",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Have Any Questions?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Thank you very much for your interest in our company and our services 
              and if you have any questions, please write us a message now!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <ScrollReveal animation="fade-right">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Contact Us
              </span>
              <h3 className="text-2xl font-bold text-foreground mt-2 mb-8">
                Get in Touch
              </h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {item.label}
                      </h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Contact Form */}
          <ScrollReveal animation="fade-left">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-border bg-card"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-border bg-card"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Your Contact Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="border-border bg-card"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="address"
                    placeholder="Your Address"
                    value={formData.address}
                    onChange={handleChange}
                    className="border-border bg-card"
                  />
                </div>
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="border-border bg-card resize-none"
                />
              </div>

              <LoadingButton
                type="submit"
                size="lg"
                isLoading={isSubmitting}
                loadingText="Building..."
                className="w-full md:w-auto"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </LoadingButton>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
