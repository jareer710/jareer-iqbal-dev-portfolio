import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  ShoppingCart,
  Monitor,
  Store,
  Wrench,
  Plug,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "PHP & Laravel Development",
    description:
      "Custom web applications built with PHP and Laravel framework. Scalable architecture, clean code, and best practices for enterprise-grade solutions.",
  },
  {
    icon: Monitor,
    title: "POS System Development",
    description:
      "Feature-rich Point of Sale systems tailored for retail businesses. Inventory management, sales tracking, and seamless payment integration.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    description:
      "Complete e-commerce solutions with product management, secure checkout, payment gateways, and order management systems.",
  },
  {
    icon: Store,
    title: "Shopify Store Design",
    description:
      "Professional Shopify store setup, theme customization, and development. Create stunning online stores that convert visitors into customers.",
  },
  {
    icon: Plug,
    title: "API Integration",
    description:
      "Seamless integration of third-party APIs including payment gateways, shipping providers, CRM systems, and custom API development.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "Ongoing website maintenance, bug fixing, performance optimization, and technical support to keep your applications running smoothly.",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative bg-secondary/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(187_85%_53%/0.05),transparent_50%)]" />
      
      <div className="container-custom relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What I <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-muted-foreground">
            Comprehensive web development services tailored to transform your ideas
            into powerful digital solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass-card p-8 h-full hover-glow transition-all duration-300 hover:border-primary/30 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
