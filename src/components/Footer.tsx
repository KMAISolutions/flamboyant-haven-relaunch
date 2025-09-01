import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Rooms & Rates", href: "#rooms" },
    { label: "Gallery", href: "#gallery" },
    { label: "Facilities", href: "#facilities" },
    { label: "Location", href: "#location" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Flamboyant Guesthouse</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your home away from home in the heart of Bela-Bela. Experience warm hospitality and comfortable accommodation.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+27 76 259 7111</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>info@flamboyantguesthouse.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>5 Flamboyant Street, Bela-Bela</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-sm text-primary-foreground/80 hover:text-primary-foreground transition-smooth"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Comfortable Accommodation</li>
              <li>Self-Catering Units</li>
              <li>Conference Facilities</li>
              <li>Group Bookings</li>
              <li>Wedding Venues</li>
              <li>Event Hosting</li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Connected</h4>
            <p className="text-sm text-primary-foreground/80">
              Subscribe to our newsletter for special offers and updates.
            </p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" size="sm">
                Subscribe
              </Button>
            </div>
            
            <div className="space-y-3">
              <Button variant="whatsapp" size="sm" className="w-full">
                <MessageCircle className="w-4 h-4 mr-2" />
                Join WhatsApp Updates
              </Button>
              
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-primary-foreground/80">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-primary-foreground/80">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-primary-foreground/80">
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/80">
              © 2024 Flamboyant Guesthouse. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-primary-foreground/80">
              <a href="/privacy" className="hover:text-primary-foreground transition-smooth">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-primary-foreground transition-smooth">
                Terms of Service
              </a>
              <a href="/popia" className="hover:text-primary-foreground transition-smooth">
                POPIA Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;