import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import sanrachanaLogo from "@/assets/sanrachana-logo.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={sanrachanaLogo} alt="Sanrachana Logo" className="w-10 h-10 aspect-square object-contain" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-foreground tracking-tight">
                  Sanrachana Enterprises
                </span>
                <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold leading-tight">
                  Civil Engineering & <br />Industrial Contractors
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm">
              Your trusted partner for quality construction in Pune. Building excellence with dedication.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/services" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/gallery" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                Gallery
              </Link>
              <Link to="/contact" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Our Services</h4>
            <nav className="flex flex-col gap-2">
              <span className="text-muted-foreground text-sm">Machine Foundation</span>
              <span className="text-muted-foreground text-sm">All Types of Construction</span>
              <span className="text-muted-foreground text-sm">Residential Construction</span>
              <span className="text-muted-foreground text-sm">Commercial Construction</span>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+919822196355" className="hover:text-primary transition-colors">+91 98221 96355</a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:nssanrachana@gmail.com" className="hover:text-primary transition-colors">nssanrachana@gmail.com</a>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>160/18, Shivaji Park, Chinchwad,<br />Pune - 411019</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Sanrachana Enterprises. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="text-muted-foreground text-sm">Licensed & Insured</span>
            <span className="text-muted-foreground text-sm">•</span>
            <span className="text-muted-foreground text-sm">Est. 1995</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;