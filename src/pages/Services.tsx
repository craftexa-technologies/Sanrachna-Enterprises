import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Building2, Home, Wrench, Factory, Cog, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ParallaxImage from "@/components/ui/ParallaxImage";
import useParallax from "@/hooks/useParallax";
import ScrollReveal from "@/components/ui/ScrollReveal";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Service images
import allTypesImg from "@/assets/services/all-types.jpg";
import residentialImg from "@/assets/services/residential.jpg";
import commercialImg from "@/assets/services/commercial.jpg";
import industrialImg from "@/assets/services/industrial.jpg";
import machineFoundationImg from "@/assets/services/machine-foundation.jpg";

// Gallery images
import g1 from "@/assets/gallery/g1.jpg";
import g2 from "@/assets/gallery/g2.jpg";
import g3 from "@/assets/gallery/g3.jpg";
import g4 from "@/assets/gallery/g4.jpg";
import g5 from "@/assets/gallery/g5.jpg";
import g6 from "@/assets/gallery/g6.jpg";
import g7 from "@/assets/gallery/g7.jpg";
import g8 from "@/assets/gallery/g8.jpg";
import g9 from "@/assets/gallery/g9.jpg";
import g10 from "@/assets/gallery/g10.jpg";
import g11 from "@/assets/gallery/g11.jpg";
import g12 from "@/assets/gallery/g12.jpg";

// New gallery images
import img1 from "@/assets/gallery/1-7/one.jpeg";
import img2 from "@/assets/gallery/1-7/two.jpeg";
import img3 from "@/assets/gallery/1-7/three.jpeg";
import img4 from "@/assets/gallery/1-7/four.jpeg";
import img5 from "@/assets/gallery/1-7/five.jpeg";
import img6 from "@/assets/gallery/1-7/six.jpeg";
import img7 from "@/assets/gallery/1-7/seven.jpeg";

const services = [
  {
    icon: Wrench,
    title: "All Types of Construction",
    description: "Comprehensive construction services for projects of any scale. From planning to completion, we deliver quality work that stands the test of time.",
    features: ["New construction", "Renovations & remodeling", "Extensions & additions", "Turnkey projects"],
    image: allTypesImg,
  },
  {
    icon: Home,
    title: "Residential Construction",
    description: "Build your dream home with our expert residential construction services. Custom designs tailored to your lifestyle and preferences.",
    features: ["Individual houses", "Bungalows & villas", "Row houses", "Residential complexes"],
    image: residentialImg,
  },
  {
    icon: Building2,
    title: "Commercial Construction",
    description: "Professional commercial construction for businesses. We create functional spaces that enhance productivity and leave lasting impressions.",
    features: ["Office buildings", "Retail spaces", "Showrooms", "Warehouses"],
    image: commercialImg,
  },
  {
    icon: Factory,
    title: "Industrial Construction",
    description: "Robust industrial construction solutions built to handle demanding operations. Safety and durability are our top priorities.",
    features: ["Manufacturing plants", "Industrial sheds", "Storage facilities", "Processing units"],
    image: industrialImg,
  },
  {
    icon: Cog,
    title: "Machine Foundation",
    description: "Specialized expertise in machine foundation construction. We ensure precise alignment, vibration control, and long-term stability for heavy machinery.",
    features: ["Heavy machinery foundations", "Vibration isolation", "Precision alignment", "Load-bearing structures"],
    image: machineFoundationImg,
  },
];

const galleryImages = [
  { src: img1 },
  { src: img2 },
  { src: img3 },
  { src: img4 },
  { src: img5 },
  { src: img6 },
  { src: img7 },
  { src: g1 },
  { src: g2 },
  { src: g3 },
  { src: g4 },
  { src: g5 },
  { src: g6 },
  { src: g7 },
  { src: g8 },
  { src: g9 },
  { src: g10 },
  { src: g11 },
  { src: g12 },
];

const Services = () => {
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
                Services & Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
                What We Build
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From custom homes to commercial developments, we offer comprehensive construction 
                services backed by decades of experience and a commitment to excellence.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                Construction Services
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} animation="fade-up" delay={index * 0.1}>
                <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors h-full group">
                  {/* Service Image */}
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent hidden dark:block" />
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
                    <p className="text-muted-foreground text-sm mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section with Carousel */}
      <section className="py-20 bg-card overflow-hidden">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Work
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Project Portfolio
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our diverse range of completed projects through our visual portfolio.
              </p>
            </div>
          </ScrollReveal>

          {/* Projects Carousel */}
          <ScrollReveal animation="fade-up" delay={0.2}>
            <div className="relative px-12">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {galleryImages.map((image, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="relative overflow-hidden rounded-xl border border-border bg-card aspect-[4/3] w-full">
                        <img
                          src={image.src}
                          alt={`Project ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-12 h-12 w-12 text-primary border-primary/20 hover:bg-primary/10" />
                <CarouselNext className="-right-12 h-12 w-12 text-primary border-primary/20 hover:bg-primary/10" />
              </Carousel>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal animation="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Start Your Project?
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.1}>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your construction needs and bring your vision to life.
            </p>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.2}>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-background text-foreground hover:bg-background/90 group"
            >
              <Link to="/contact">
                Contact Us Today
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
