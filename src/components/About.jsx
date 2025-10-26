import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Tailwind CSS',
  'Framer Motion',
  'Spline',
  'Accessibility',
  'Testing',
  'Performance',
];

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-semibold">About Me</h2>
            <p className="mt-4 text-zinc-300">
              I’m a front-end engineer who enjoys the space where design, motion, and code intersect. I focus on crafting intuitive interfaces, optimizing performance, and ensuring accessibility. I love building products that feel fast and alive.
            </p>
            <p className="mt-4 text-zinc-300">
              Outside of work, I explore creative coding, experiment with 3D on the web, and contribute to open-source when I can.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
              <h3 className="text-xl font-medium">Core Skills</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-200">
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-zinc-300">
                <div className="rounded-xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-transparent p-4">
                  <p className="text-zinc-400">Focus</p>
                  <p className="mt-1 font-medium">UI/UX Engineering</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-transparent p-4">
                  <p className="text-zinc-400">Experience</p>
                  <p className="mt-1 font-medium">4+ years</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-transparent p-4">
                  <p className="text-zinc-400">Location</p>
                  <p className="mt-1 font-medium">Remote-friendly</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-transparent p-4">
                  <p className="text-zinc-400">Looking for</p>
                  <p className="mt-1 font-medium">Creative teams</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
