import Layout from "@/components/layout/Layout";
import { Shield, Award, Users, Target, CheckCircle } from "lucide-react";
import ParallaxImage from "@/components/ui/ParallaxImage";
import useParallax from "@/hooks/useParallax";
import ScrollReveal from "@/components/ui/ScrollReveal";

const values = [
  {
    icon: Shield,
    title: "Quality First",
    description: "We never compromise on materials or workmanship. Every project meets our rigorous quality standards.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Striving for excellence in every detail, from planning to the final walkthrough.",
  },
  {
    icon: Users,
    title: "Client Focus",
    description: "Your vision is our priority. We listen, communicate, and deliver beyond expectations.",
  },
  {
    icon: Target,
    title: "On Time & Budget",
    description: "We respect your time and investment with transparent pricing and reliable scheduling.",
  },
];


const About = () => {
  const { ref: heroRef, style: heroStyle } = useParallax({ speed: 0.15 });

  return (
    <Layout>
      {/* Hero Section with Parallax Background */}
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
                About Us
              </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Building Stronger Communities & High-Quality Urban Lives
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sanrachna Enterprises has been transforming visions into reality for nearly three decades. 
              We specialize in Machine Foundation work while providing comprehensive construction services 
              for Industrial, Commercial, and Residential projects.
            </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section with Parallax Image */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-right">
              <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Who We Are</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    We are specialized in Machine Foundation work, providing comprehensive services 
                    from the start to the end of every project. Our expertise spans Industrial, 
                    Commercial, Residential, and Machine Foundation construction.
                  </p>
                  <p>
                    Sanrachna Enterprises conducts a thorough site visit before starting any project. 
                    This helps in analyzing the site conditions, studying risk factors, and 
                    providing accurate cost estimations.
                  </p>
                  <p>
                    A good design is produced from careful study and research, combined with 
                    technical knowledge and artistic judgment. It's our aim to create spaces 
                    where people and activities thrive.
                  </p>
                  <p>
                    Our team is capable of handling all projects from the initial concept 
                    through to the actual completion of the entire project.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="fade-left">
              <div className="relative">
                <ParallaxImage
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop"
                  alt="Construction site"
                  containerClassName="rounded-lg aspect-[4/3]"
                  speed={0.12}
                  scale={1.15}
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-xl">
                  <div className="text-4xl font-bold">30+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                What Drives Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Our Mission & Values
              </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              To build stronger communities and create high-quality urban lives through 
              exceptional construction services, combining technical expertise with 
              creative design solutions that help people and activities thrive.
            </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} animation="scale" delay={index * 0.1}>
                <div className="bg-background border border-border rounded-lg p-6 text-center h-full">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us with Parallax Image */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal animation="fade-up">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Why Sanrachna Enterprises
              </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  Why Choose Us?
                </h2>
              </ScrollReveal>
              <div className="space-y-4">
              {[
                  "Specialized in Machine Foundation work",
                  "End-to-end project management",
                  "Comprehensive site visit and risk analysis",
                  "Accurate cost estimation before project start",
                  "Technical knowledge combined with artistic judgment",
                  "Industrial, Commercial, Residential expertise",
                  "Concept to completion capability",
                  "Design through careful study and research",
                ].map((item, index) => (
                  <ScrollReveal key={item} animation="fade-left" delay={index * 0.05}>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
            <ScrollReveal animation="fade-left">
              <ParallaxImage
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop"
                alt="Construction team at work"
                containerClassName="rounded-lg aspect-[4/3]"
                speed={-0.1}
                scale={1.15}
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default About;
