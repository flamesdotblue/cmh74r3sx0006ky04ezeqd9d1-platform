import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Nebula Commerce',
    description: 'Headless e-commerce starter with Next.js, edge caching, and delightful micro-interactions.',
    tags: ['Next.js', 'Tailwind', 'Stripe', 'Vercel'],
    href: '#',
  },
  {
    title: 'Orion Dashboard',
    description: 'Realtime admin analytics with role-based access, theming, and responsive charts.',
    tags: ['React', 'Framer Motion', 'Supabase', 'Chart.js'],
    href: '#',
  },
  {
    title: 'Astra Portfolio',
    description: '3D-enhanced personal site with Spline scenes, MDX content, and SEO optimizations.',
    tags: ['Spline', 'MDX', 'SEO', 'Accessibility'],
    href: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 -z-[0] pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.12),rgba(0,0,0,0)_50%)]" />
      <div className="container mx-auto px-6 relative">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">Selected Projects</h2>
            <p className="mt-2 text-zinc-400">A snapshot of things I’ve built and shipped.</p>
          </div>
          <div className="hidden sm:block text-zinc-400">2022 — 2025</div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-5 hover:from-white/10 hover:to-white/[0.06] transition-all backdrop-blur-sm"
            >
              <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-[linear-gradient(135deg,rgba(124,58,237,0.28),rgba(0,0,0,0))] ring-1 ring-white/10">
                <div className="h-full w-full bg-[radial-gradient(ellipse_at_top_left,rgba(124,58,237,0.25),transparent_60%)]" />
              </div>

              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-medium group-hover:text-white/90">{p.title}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{p.description}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-zinc-400 group-hover:text-zinc-200 mt-1" />
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] tracking-wide rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
