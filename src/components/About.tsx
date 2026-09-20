import { FiTarget } from 'react-icons/fi'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-5 py-20">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--text-dim)' }}>
          01 — About
        </span>
        <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl" style={{ color: 'var(--text)' }}>
          I spent five years shipping backend systems at scale. Now I'm spending every day
          on Faultline.
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-6 max-w-2xl text-base leading-relaxed sm:text-lg" style={{ color: 'var(--text-dim)' }}>
          Faultline is an open-source-AI alternative to Datadog, Dynatrace, and SigNoz —
          observability and incident management as one system instead of two. It correlates
          every fault to the deploy that caused it, explains root cause with open-source AI,
          and carries it all the way through to a closed incident — MTTR tracked
          automatically. No black-box vendor, no per-GB tax on your own data. It's the
          product of everything I learned building and operating distributed systems in
          Java/Spring Boot, Go, Python, and Kafka — turned into something founders and
          on-call engineers actually want to use at 3am.
        </p>
      </Reveal>

      <Reveal delay={0.2} className="mt-8">
        <div
          className="flex items-start gap-4 rounded-2xl border p-5"
          style={{ borderColor: 'var(--border-c)', background: 'var(--bg-elevated)' }}
        >
          <div
            className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-full"
            style={{ background: 'color-mix(in srgb, var(--accent) 15%, transparent)', color: 'var(--accent)' }}
          >
            <FiTarget size={16} />
          </div>
          <div>
            <p className="text-sm font-semibold" style={{ color: 'var(--text)' }}>
              Applying to Y Combinator
            </p>
            <p className="mt-1 text-sm leading-relaxed" style={{ color: 'var(--text-dim)' }}>
              Every batch, until it clicks. Persistence isn't a fallback plan here — it's
              the plan.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
