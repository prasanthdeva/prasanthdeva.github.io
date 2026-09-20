import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-5 py-20">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--text-dim)' }}>
          04 — Work
        </span>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl" style={{ color: 'var(--text)' }}>
          Currently building
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mt-8">
        <motion.a
          href="https://faultline.co.in"
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -4 }}
          className="group relative block overflow-hidden rounded-3xl border p-8 sm:p-10"
          style={{ borderColor: 'var(--border-c)', background: 'var(--bg-elevated)' }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-35"
            style={{ background: 'var(--accent)' }}
          />

          <div className="relative flex flex-wrap items-center gap-3">
            <span
              className="rounded-full px-3 py-1 text-xs font-medium"
              style={{ background: 'color-mix(in srgb, var(--accent-2) 15%, transparent)', color: 'var(--accent-2)' }}
            >
              Founder
            </span>
            <span className="font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
              faultline.co.in
            </span>
          </div>

          <h3 className="relative mt-4 flex items-center gap-2 text-2xl font-semibold sm:text-3xl" style={{ color: 'var(--text)' }}>
            Faultline
            <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </h3>

          <p className="relative mt-3 max-w-2xl text-base leading-relaxed sm:text-lg" style={{ color: 'var(--text-dim)' }}>
            An open-source-AI alternative to Datadog, Dynatrace, and SigNoz — full
            observability (traces, logs, metrics) plus incident management, end to end, in
            one system. Correlates every fault to the deploy that caused it, explains root
            cause with open-source AI, and tracks MTTR automatically all the way to a
            closed incident — not a graph tool bolted onto a pager.
          </p>

          <div className="relative mt-6 flex flex-wrap gap-2">
            {['Observability', 'Incident management', 'Deploy correlation', 'AI root cause', 'Open source AI'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border px-3 py-1 text-xs"
                style={{ borderColor: 'var(--border-c)', color: 'var(--text-dim)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.a>
      </Reveal>
    </section>
  )
}
