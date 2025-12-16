import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Backend Development",
    skills: [
      { name: "PHP", level: 95 },
      { name: "Laravel", level: 92 },
      { name: "MySQL", level: 90 },
      { name: "REST APIs", level: 88 },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 85 },
      { name: "jQuery", level: 88 },
      { name: "Bootstrap", level: 90 },
    ],
  },
  {
    title: "E-commerce & CMS",
    skills: [
      { name: "Shopify", level: 90 },
      { name: "WooCommerce", level: 85 },
      { name: "Payment Gateways", level: 88 },
      { name: "Theme Development", level: 85 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git/GitHub", level: 88 },
      { name: "cPanel/Hosting", level: 90 },
      { name: "API Integration", level: 92 },
      { name: "Database Design", level: 88 },
    ],
  },
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative bg-secondary/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,hsl(187_85%_53%/0.05),transparent_50%)]" />
      
      <div className="container-custom relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground">
            A comprehensive skill set honed through years of building web applications
            across diverse industries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-bold mb-6 text-foreground">
                {category.title}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-foreground">
                        {skill.name}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-6">Technologies I work with</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "PHP",
              "Laravel",
              "MySQL",
              "JavaScript",
              "jQuery",
              "Bootstrap",
              "Shopify",
              "HTML5",
              "CSS3",
              "Git",
              "REST API",
              "Stripe",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-card border border-border text-sm font-medium text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
