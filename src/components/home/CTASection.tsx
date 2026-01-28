import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ui/ScrollReveal";

const CTASection = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden glow-red">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-texture" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Project?
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-up" delay={0.1}>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Contact us today for a free consultation and quote. Let's bring your construction vision to life.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="group bg-background text-foreground hover:bg-background/90 pulse-glow"
              >
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary font-medium"
                asChild
              >
                <a href="tel:+919822196355">
                  <Phone className="mr-2 w-4 h-4" />
                  +91 98221 96355
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
