import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "#contact", label: "Email" },
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <a href="#home" className="inline-block mb-4">
              <span className="text-2xl font-bold">
                <span className="gradient-text">Jareer</span>
                <span className="text-foreground">.dev</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm mb-4 max-w-xs">
              Full-Stack Web Developer specializing in PHP, Laravel, and Shopify
              development. Building scalable web solutions for businesses worldwide.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <nav className="space-y-2">
              <a
                href="#services"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                PHP & Laravel Development
              </a>
              <a
                href="#services"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                E-commerce Solutions
              </a>
              <a
                href="#services"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                POS System Development
              </a>
              <a
                href="#services"
                className="block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Shopify Store Design
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Jareer Iqbal. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Crafted with <Heart className="w-4 h-4 text-primary" /> using modern web technologies
          </p>
        </div>
      </div>
    </footer>
  );
}
