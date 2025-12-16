import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Monitor, ShoppingBag, Store, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "RetailPro POS System",
    category: "POS System",
    description:
      "A comprehensive Point of Sale system with inventory management, sales reporting, and multi-store support built for retail businesses.",
    tech: ["Laravel", "MySQL", "jQuery", "Bootstrap"],
    icon: CreditCard,
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "StyleHub E-commerce",
    category: "E-commerce",
    description:
      "Full-featured fashion e-commerce platform with product variants, wishlist, reviews, and integrated payment gateways.",
    tech: ["PHP", "Laravel", "MySQL", "Stripe"],
    icon: ShoppingBag,
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "TechGadgets Shopify Store",
    category: "Shopify",
    description:
      "Custom Shopify store with unique theme design, advanced filtering, and optimized checkout flow for electronics retailer.",
    tech: ["Shopify", "Liquid", "JavaScript", "CSS"],
    icon: Store,
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Corporate Portfolio",
    category: "Portfolio",
    description:
      "Modern portfolio website for a digital agency featuring case studies, team profiles, and contact management system.",
    tech: ["Laravel", "Vue.js", "MySQL", "Tailwind"],
    icon: Monitor,
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "FoodieHub Delivery",
    category: "E-commerce",
    description:
      "Food delivery platform with real-time order tracking, restaurant management, and driver allocation system.",
    tech: ["Laravel", "MySQL", "APIs", "Bootstrap"],
    icon: ShoppingBag,
    color: "from-red-500/20 to-rose-500/20",
  },
  {
    title: "LuxuryWatch Shopify",
    category: "Shopify",
    description:
      "Premium Shopify store for luxury watches with 360° product views, authentication certificates, and VIP customer features.",
    tech: ["Shopify", "Liquid", "JavaScript", "API"],
    icon: Store,
    color: "from-indigo-500/20 to-violet-500/20",
  },
];

const categories = ["All", "POS System", "E-commerce", "Shopify", "Portfolio"];

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(187_85%_53%/0.05),transparent_50%)]" />
      
      <div className="container-custom relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground">
            A showcase of my recent work across various domains including POS systems,
            e-commerce platforms, and Shopify stores.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              layout
              className="group"
            >
              <div className="glass-card overflow-hidden h-full hover-glow transition-all duration-300 hover:border-primary/30 hover:-translate-y-1">
                {/* Project Preview */}
                <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <project.icon className="w-16 h-16 text-foreground/30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md bg-secondary text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button variant="glass" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4" />
                      Preview
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
