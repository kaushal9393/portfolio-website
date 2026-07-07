"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-surface/30">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Client <span className="text-accent">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto"></div>
        </motion.div>
        
        {/* TODO: add testimonial once received */}
        {/* 
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface border border-white/10 p-8 rounded-2xl relative">
            <div className="text-4xl text-accent/20 absolute top-4 right-6 font-serif">"</div>
            <p className="text-muted italic mb-6 relative z-10">
              "Kaushal delivered an exceptional product that exceeded our expectations. His attention to detail and technical expertise were invaluable."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center font-bold text-accent">JD</div>
              <div>
                <h4 className="font-bold text-primary">John Doe</h4>
                <p className="text-sm text-muted">CTO, Example Corp</p>
              </div>
            </div>
          </div>
        </div> 
        */}
        
        <div className="text-center text-muted/50 italic">
          More testimonials coming soon...
        </div>
      </div>
    </section>
  );
}
