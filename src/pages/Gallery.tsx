import Layout from "@/components/layout/Layout";
import ScrollReveal from "@/components/ui/ScrollReveal";

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

const galleryImages = [
  { src: g1, alt: "Project 1", category: "Residential" },
  { src: g2, alt: "Project 2", category: "Commercial" },
  { src: g3, alt: "Project 3", category: "Industrial" },
  { src: g4, alt: "Project 4", category: "Infrastructure" },
  { src: g5, alt: "Project 5", category: "Residential" },
  { src: g6, alt: "Project 6", category: "Commercial" },
  { src: g7, alt: "Project 7", category: "Industrial" },
  { src: g8, alt: "Project 8", category: "Infrastructure" },
  { src: g9, alt: "Project 9", category: "Residential" },
  { src: g10, alt: "Project 10", category: "Commercial" },
  { src: g11, alt: "Project 11", category: "Industrial" },
  { src: g12, alt: "Project 12", category: "Infrastructure" },
];

const Gallery = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-down">
            <div className="text-center mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Visual Journey
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2">
                Project Gallery
              </h1>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Explore our diverse portfolio of projects ranging from structural consultancy 
                to architectural design and industrial developments.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <ScrollReveal key={index} animation="scale" delay={index * 0.05}>
                <div className="group relative overflow-hidden rounded-xl border border-border bg-card aspect-[4/3] w-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
