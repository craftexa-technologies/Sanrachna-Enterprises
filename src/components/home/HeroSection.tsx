import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import useParallax from "@/hooks/useParallax";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const HeroSection = () => {
  const { ref: stripesRef, style: stripesStyle } = useParallax({ speed: 0.2 });
  const { ref: trustRef, style: trustStyle } = useParallax({ speed: -0.1 });

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient fallback */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background" />
      
      {/* Background Video - Visible mostly in dark mode */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-60 transition-opacity duration-700"
        poster="/placeholder.svg"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      >
        <source
          src="https://videos.pexels.com/video-files/5531099/5531099-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
        <source
          src="https://cdn.pixabay.com/video/2020/07/30/45913-446417868_large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay for text readability - adapts to theme */}
      <div className="absolute inset-0 bg-background/40 dark:bg-black/60 backdrop-blur-[2px] transition-colors duration-700" />
      
      {/* Diagonal Stripes Decoration with Parallax */}
      <div 
        ref={stripesRef}
        className="absolute right-0 top-0 bottom-0 w-1/3 diagonal-stripes opacity-20 will-change-transform"
        style={stripesStyle}
      />

      {/* Floating geometric shapes with parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 right-1/4 w-64 h-64 border border-primary/20 rotate-45 animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div 
          className="absolute bottom-32 right-1/3 w-32 h-32 border border-primary/10 rotate-12"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <ScrollReveal animation="fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Licensed & Insured - Sanrachana</span>
            </div>
          </ScrollReveal>

          {/* Main Heading */}
          <ScrollReveal animation="fade-up" delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Building Your Vision
              <br />
              <span className="text-primary text-glow">With Excellence</span>
            </h1>
          </ScrollReveal>

          {/* Subheading */}
          <ScrollReveal animation="fade-up" delay={0.2}>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              From concept to completion, we deliver exceptional construction services 
              with unmatched craftsmanship and attention to detail. Your project deserves the best.
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal animation="fade-up" delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" asChild className="group">
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">View Our Work</Link>
              </Button>
            </div>
          </ScrollReveal>

          {/* Trust Indicators with subtle parallax */}
          <ScrollReveal animation="fade-up" delay={0.4}>
            <div 
              ref={trustRef}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 will-change-transform" 
              style={trustStyle}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center glow-red-subtle">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <AnimatedCounter 
                    end={100} 
                    suffix="+"
                    duration={2000}
                    className="text-2xl font-bold text-foreground"
                  />
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center glow-red-subtle">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <AnimatedCounter 
                    end={30} 
                    suffix="+" 
                    duration={2000}
                    className="text-2xl font-bold text-foreground"
                  />
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center glow-red-subtle">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <AnimatedCounter 
                    end={100} 
                    suffix="%" 
                    duration={2000}
                    className="text-2xl font-bold text-foreground"
                  />
                  <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
