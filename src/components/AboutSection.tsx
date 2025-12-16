import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Code, Database, ShoppingBag, Zap } from "lucide-react";

const highlights = [
  "Custom PHP & Laravel Development",
  "E-commerce & Shopify Expert",
  "POS System Specialist",
  "Clean & Scalable Code",
  "API Integration Expert",
  "Responsive Web Design",
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(187_85%_53%/0.03),transparent_70%)]" />
      
      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Image/Visual */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background Shapes */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10 rotate-6 scale-95" />
              <div className="absolute inset-0 rounded-3xl bg-card border border-border overflow-hidden">
                {/* Code Pattern Background */}
                <div className="absolute inset-0 opacity-20">
                  <div className="p-6 font-mono text-xs text-primary/60 leading-relaxed">
                    <pre>{`<?php
namespace App\\Http;

class Developer
{
  public $name = "Jareer Iqbal";
  public $role = "Full-Stack Dev";
  
  public function skills()
  {
    return [
      'PHP', 'Laravel',
      'MySQL', 'Shopify',
      'JavaScript', 'APIs'
    ];
  }
  
  public function build($project)
  {
    return $this->craft(
      clean: true,
      scalable: true,
      quality: "exceptional"
    );
  }
}`}</pre>
                  </div>
                </div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-card via-card/80 to-transparent">
                  <div className="text-center p-8">
                    <div className="w-24 h-24 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl font-bold gradient-text">JI</span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Jareer Iqbal</h3>
                    <p className="text-primary font-medium">Full-Stack Web Developer</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -right-4 top-1/4 glass-card p-3 flex items-center gap-2"
              >
                <Database className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">MySQL Expert</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -left-4 bottom-1/4 glass-card p-3 flex items-center gap-2"
              >
                <ShoppingBag className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Shopify Pro</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4">
              About Me
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Crafting Digital Experiences with{" "}
              <span className="gradient-text">Precision & Passion</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                I'm Jareer Iqbal, a dedicated Full-Stack Web Developer with extensive experience 
                in building robust web applications using PHP, Laravel, and modern web technologies. 
                My journey in web development has equipped me with the skills to transform complex 
                business requirements into elegant, scalable solutions.
              </p>
              <p>
                From developing comprehensive POS systems to crafting stunning e-commerce platforms 
                and Shopify stores, I bring a blend of technical expertise and creative problem-solving 
                to every project. I believe in writing clean, maintainable code that stands the test of time.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
