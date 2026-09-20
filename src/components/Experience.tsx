import Reveal from './Reveal'

type Role = {
  company: string
  title: string
  period: string
  points: string[]
}

const ROLES: Role[] = [
  {
    company: 'Faultline',
    title: 'Founder & Lead Engineer',
    period: 'Present',
    points: [
      'Architected and built the full stack solo: a Go-based OTel collector, Kafka pipeline, ClickHouse storage, a FastAPI query layer, the React product UI, a separate platform-admin console, and the deployment infra behind all of it — every layer, no team.',
      'Built the AI reasoning layer itself: a LangGraph-based classifier that correlates faults to the deploy that caused them and explains root cause, instead of leaving that work to a human at 3am.',
      'Owns reliability end-to-end — rate limiting, tail-sampling, multi-tenant isolation — and has personally diagnosed and fixed live production incidents (TLS bootstrap failures, misrouted traffic) directly on the running system, not just in a ticket.',
      'Ships to production personally: provisions the infra, deploys the code, and is the one who shows up when something breaks — code to running system to fix, with no handoff in between.',
    ],
  },
  {
    company: 'CloudBees',
    title: 'Software Engineer — Golang',
    period: '',
    points: [
      'Built and shipped a UI system end-to-end in Go — owned it from the backend service through to the product surface customers actually used, not just one layer of a larger team\'s work.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-5 py-20">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--text-dim)' }}>
          02 — Experience
        </span>
        <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight sm:text-3xl" style={{ color: 'var(--text)' }}>
          AI engineering, reliability, and shipping straight into production
        </h2>
        <p className="mt-3 max-w-xl text-base leading-relaxed" style={{ color: 'var(--text-dim)' }}>
          Usually three different roles on three different people. Here, it's been one — by
          necessity at Faultline, and by how I was already wired at CloudBees.
        </p>
      </Reveal>

      <div className="mt-10 space-y-6">
        {ROLES.map((role, i) => (
          <Reveal key={role.company} delay={i * 0.1}>
            <div
              className="rounded-2xl border p-6 sm:p-8"
              style={{ borderColor: 'var(--border-c)', background: 'var(--bg-elevated)' }}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold" style={{ color: 'var(--text)' }}>
                  {role.title} <span style={{ color: 'var(--text-dim)' }}>· {role.company}</span>
                </h3>
                {role.period && (
                  <span className="font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
                    {role.period}
                  </span>
                )}
              </div>
              <ul className="mt-4 space-y-2.5">
                {role.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2.5 text-sm leading-relaxed"
                    style={{ color: 'var(--text-dim)' }}
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full" style={{ background: 'var(--accent)' }} />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
