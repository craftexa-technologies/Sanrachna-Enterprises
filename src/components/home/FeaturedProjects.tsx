import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ui/ScrollReveal";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

const galleryImages = [
  { src: img1, alt: "Sanrachana Project 1" },
  { src: img2, alt: "Sanrachana Project 2" },
  { src: img3, alt: "Sanrachana Project 3" },
  { src: img4, alt: "Sanrachana Project 4" },
  { src: img5, alt: "Sanrachana Project 5" },
  { src: img6, alt: "Sanrachana Project 6" },
  { src: img7, alt: "Sanrachana Project 7" },
  { src: g1, alt: "Sanrachana Project 8" },
  { src: g2, alt: "Sanrachana Project 9" },
  { src: g3, alt: "Sanrachana Project 10" },
  { src: g4, alt: "Sanrachana Project 11" },
  { src: g5, alt: "Sanrachana Project 12" },
  { src: g6, alt: "Sanrachana Project 13" },
  { src: g7, alt: "Sanrachana Project 14" },
  { src: g8, alt: "Sanrachana Project 15" },
  { src: g9, alt: "Sanrachana Project 16" },
  { src: g10, alt: "Sanrachana Project 17" },
  { src: g11, alt: "Sanrachana Project 18" },
  { src: g12, alt: "Sanrachana Project 19" },
];

const FeaturedProjects = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <ScrollReveal animation="fade-left">
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Work
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                Project Portfolio
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-right">
            <Button asChild variant="outline" className="group border-primary/20 hover:bg-primary/5">
              <Link to="/gallery">
                View Full Gallery
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>

        {/* Projects Slider */}
        <ScrollReveal animation="fade-up" delay={0}>
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
                        alt={image.alt}
                        className="w-full h-full object-cover"
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
  );
};

export default FeaturedProjects;

