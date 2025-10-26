import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hItYec195M0PYk2X/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.18),rgba(0,0,0,0)_45%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-28 pb-20 flex min-h-screen items-center">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-sm uppercase tracking-[0.25em] text-purple-300/80">Portfolio</p>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              Crafting immersive, performant experiences for the modern web
            </h1>
            <p className="mt-5 max-w-2xl text-zinc-300">
              I’m a creative developer focused on building interactive, accessible interfaces with delightful motion. I blend strong design sensibilities with solid engineering.
            </p>
          </motion.div>

          <motion.div className="mt-8 flex flex-wrap items-center gap-3" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.6 }}>
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-purple-600 text-white px-5 py-3 hover:bg-purple-500 transition-colors">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 hover:bg-white/10 transition-colors">
              Get in touch
            </a>
          </motion.div>

          <motion.div className="mt-8 flex items-center gap-4" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.6 }}>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-zinc-300 hover:text-white">
              <div className="rounded-full bg-white/5 p-2 group-hover:bg-white/10 transition-colors">
                <Github className="h-4 w-4" />
              </div>
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 text-zinc-300 hover:text-white">
              <div className="rounded-full bg-white/5 p-2 group-hover:bg-white/10 transition-colors">
                <Linkedin className="h-4 w-4" />
              </div>
              LinkedIn
            </a>
            <a href="#contact" className="group inline-flex items-center gap-2 text-zinc-300 hover:text-white">
              <div className="rounded-full bg-white/5 p-2 group-hover:bg-white/10 transition-colors">
                <Mail className="h-4 w-4" />
              </div>
              Email
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
