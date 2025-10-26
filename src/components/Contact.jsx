import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(124,58,237,0.18),transparent_50%)]" />
      <div className="container mx-auto px-6 relative">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-semibold">Let’s build something great</h2>
          <p className="mt-3 text-zinc-300">
            I’m open to freelance work, collaborations, and full-time roles. Drop a line and I’ll get back soon.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-5 py-3 text-white hover:bg-purple-500 transition-colors">
              <Mail className="h-4 w-4" /> Email me
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10 transition-colors">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10 transition-colors">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </motion.div>

        <div className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-zinc-500">
          © {new Date().getFullYear()} Your Name. Built with React, Tailwind, and Framer Motion.
        </div>
      </div>
    </section>
  );
}
