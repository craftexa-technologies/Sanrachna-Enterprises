import Layout from "@/components/layout/Layout";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useParallax from "@/hooks/useParallax";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ContactFormSection from "@/components/contact/ContactFormSection";

const Contact = () => {
  const { ref: heroRef, style: heroStyle } = useParallax({ speed: 0.15 });
  

  return (
    <Layout>
      {/* Hero Section with Parallax */}
      <section className="py-20 bg-card relative overflow-hidden">
        <div 
          ref={heroRef}
          className="absolute inset-0 opacity-5 will-change-transform"
          style={heroStyle}
        >
          <div className="absolute inset-0 diagonal-stripes" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal animation="fade-up">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-4">
                <span className="text-sm text-primary font-bold">30+ Years of Excellence</span>
              </div>
              <span className="block text-primary font-semibold text-sm uppercase tracking-wider">
                Contact Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                Let's Build Together
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ready to start your construction project? Get in touch with our team 
                for a free consultation and quote. We're here to help bring your vision to life.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Have Any Questions - Contact Form Section */}
      <ContactFormSection />

      {/* Contact Info Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <ScrollReveal animation="fade-up">
                <h2 className="text-2xl font-bold text-foreground mb-8">
                  Get In Touch
                </h2>
              </ScrollReveal>

              <div className="space-y-6">
                {/* Phone */}
                <ScrollReveal animation="fade-left" delay={0.1}>
                  <div className="flex items-start gap-4 p-6 bg-background border border-border rounded-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground mb-2">
                        Call us for immediate assistance
                      </p>
                      <a 
                        href="tel:+919822196355" 
                        className="text-primary font-medium hover:underline text-lg"
                      >
                        +91 98221 96355
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Email */}
                <ScrollReveal animation="fade-left" delay={0.2}>
                  <div className="flex items-start gap-4 p-6 bg-background border border-border rounded-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground mb-2">
                        Send us an email anytime
                      </p>
                      <a 
                        href="mailto:nssanrachana@gmail.com" 
                        className="text-primary font-medium hover:underline text-lg"
                      >
                        nssanrachana@gmail.com
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Address */}
                <ScrollReveal animation="fade-left" delay={0.3}>
                  <div className="flex items-start gap-4 p-6 bg-background border border-border rounded-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Office Address</h3>
                      <p className="text-muted-foreground mb-2">
                        Visit our main office
                      </p>
                      <address className="text-foreground not-italic">
                        160/18, Shivaji Park, Chinchwad,<br />
                        Pune - 411019
                      </address>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Hours */}
                <ScrollReveal animation="fade-left" delay={0.4}>
                  <div className="flex items-start gap-4 p-6 bg-background border border-border rounded-lg">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                      <p className="text-muted-foreground mb-2">
                        When we're available
                      </p>
                      <div className="text-foreground">
                        <p>Monday - Saturday: 09:00 am - 06:00 pm</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Quick Contact CTA */}
              <ScrollReveal animation="fade-right" delay={0.5}>
                <div className="mt-8 p-6 bg-primary rounded-lg">
                  <h3 className="text-xl font-bold text-primary-foreground mb-2">
                    Need Immediate Assistance?
                  </h3>
                  <p className="text-primary-foreground/80 mb-4">
                    Call us now for urgent inquiries or emergency services.
                  </p>
                  <Button
                    variant="secondary"
                    size="lg"
                    asChild
                    className="bg-background text-foreground hover:bg-background/90 group"
                  >
                    <a href="tel:+919822196355">
                      <Phone className="mr-2 w-4 h-4" />
                      Call Now
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </ScrollReveal>
            </div>

            {/* Map Section with Parallax */}
            <div>
              <ScrollReveal animation="fade-up">
                <h2 className="text-2xl font-bold text-foreground mb-8">
                  Our Location
                </h2>
              </ScrollReveal>
              
              {/* View on Google Maps Link */}
              <ScrollReveal animation="scale">
                <a 
                  href="https://maps.app.goo.gl/JqXfdWDT1CaLnY1H8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-8 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-colors group mb-6"
                >
                  <MapPin className="w-8 h-8 text-primary" />
                  <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    View on Google Maps
                  </span>
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </a>
              </ScrollReveal>

              {/* Service Area */}
              <ScrollReveal animation="fade-up" delay={0.2}>
                <div className="bg-background border border-border rounded-lg p-6">
                  <h3 className="font-semibold text-foreground mb-4">Service Area</h3>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-lg font-medium text-foreground">
                      We provide services all over Maharashtra
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.1}>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Contact us today for a free consultation. We'll discuss your project 
              requirements and provide a detailed estimate.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="tel:+919822196355">
                  <Phone className="mr-2 w-4 h-4" />
                  +91 98221 96355
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:nssanrachana@gmail.com">
                  <Mail className="mr-2 w-4 h-4" />
                  nssanrachana@gmail.com
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
