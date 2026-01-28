import { Link } from "react-router-dom";
import { Building2, Home, Wrench, Factory, Cog, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ui/ScrollReveal";

// Service images
import allTypesImg from "@/assets/services/all-types.jpg";
import residentialImg from "@/assets/services/residential.jpg";
import commercialImg from "@/assets/services/commercial.jpg";
import industrialImg from "@/assets/services/industrial.jpg";
import machineFoundationImg from "@/assets/services/machine-foundation.jpg";

const services = [
  {
    icon: Wrench,
    title: "All Types of Construction",
    description: "Comprehensive construction services for projects of any scale.",
    image: allTypesImg,
  },
  {
    icon: Home,
    title: "Residential Construction",
    description: "Build your dream home with our expert residential construction services.",
    image: residentialImg,
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    description: "Professional commercial construction for businesses.",
    image: commercialImg,
  },
  {
    icon: Factory,
    title: "Industrial Construction",
    description: "Robust industrial construction solutions built to handle demanding operations.",
    image: industrialImg,
  },
  {
    icon: Cog,
    title: "Machine Foundation",
    description: "Specialized expertise in machine foundation construction for heavy machinery.",
    image: machineFoundationImg,
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
              Our Construction Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive construction solutions for residential and commercial projects. 
              We bring expertise, quality materials, and skilled craftsmanship to every job.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} animation="fade-up" delay={index * 0.1}>
              <div className="group bg-background border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 h-full">
                {/* Service Image */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent hidden dark:block" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-primary/90 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal animation="fade-up" delay={0.4}>
          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="group">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesOverview;
