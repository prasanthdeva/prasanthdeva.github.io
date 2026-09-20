import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-5xl px-5 pt-20 pb-24 sm:pt-28 sm:pb-32">
      {/* soft ambient glow -- css only, no image assets to keep this fast/lightweight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--accent), transparent 70%)' }}
      />

      <motion.a
        href="https://faultline.co.in"
        target="_blank"
        rel="noreferrer"
        custom={0}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="relative mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium transition-transform hover:scale-105"
        style={{ borderColor: 'var(--border-c)', color: 'var(--accent-2)' }}
      >
        <span className="relative flex h-1.5 w-1.5">
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
            style={{ background: 'var(--accent-2)' }}
          />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: 'var(--accent-2)' }} />
        </span>
        Founder @ Faultline — faultline.co.in
        <FiArrowUpRight size={12} />
      </motion.a>

      <motion.h1
        custom={1}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="relative max-w-3xl text-4xl leading-[1.1] font-semibold tracking-tight sm:text-5xl md:text-6xl"
        style={{ color: 'var(--text)' }}
      >
        Manirathnam Murugesan
      </motion.h1>

      <motion.p
        custom={2}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="relative mt-3 font-mono text-base sm:text-lg"
        style={{ color: 'var(--accent)' }}
      >
        Building a SaaS alternative to Datadog, Dynatrace &amp; SigNoz — powered by open-source AI
      </motion.p>

      <motion.p
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="relative mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
        style={{ color: 'var(--text-dim)' }}
      >
        AI-native full-stack engineer — React, Angular, Java/Spring Boot, Go, and Python
        across 5+ years of frontend, backend, and distributed systems work. Now building
        Faultline — full observability (traces, logs, metrics) plus incident management, end to end,
        in one system.
      </motion.p>

      <motion.div
        custom={4}
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="relative mt-9 flex flex-wrap items-center gap-4"
      >
        <a
          href="#contact"
          className="rounded-full px-5 py-2.5 text-sm font-medium transition-transform hover:scale-105"
          style={{ background: 'var(--accent)', color: '#0a0a0a' }}
        >
          Get in touch
        </a>
        <a
          href="#work"
          className="rounded-full border px-5 py-2.5 text-sm font-medium transition-colors hover:opacity-70"
          style={{ borderColor: 'var(--border-c)', color: 'var(--text)' }}
        >
          See what I'm building
        </a>
      </motion.div>
    </section>
  )
}
