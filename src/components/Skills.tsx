import Reveal from './Reveal'

const GROUPS = [
  { label: 'Languages', items: ['Go', 'Java', 'Python', 'TypeScript'] },
  { label: 'AI / GenAI', items: ['LangGraph', 'MCP', 'RAG pipelines', 'Prompt engineering'] },
  { label: 'Systems', items: ['Kafka', 'ClickHouse', 'Distributed tracing', 'OpenTelemetry'] },
  { label: 'Platform', items: ['Spring Boot', 'Kubernetes', 'Docker', 'GCP'] },
]

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-5 py-20">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--text-dim)' }}>
          02 — Toolbox
        </span>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl" style={{ color: 'var(--text)' }}>
          What I actually build with
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {GROUPS.map((g, i) => (
          <Reveal key={g.label} delay={i * 0.08}>
            <div
              className="h-full rounded-2xl border p-5 transition-transform hover:-translate-y-1"
              style={{ borderColor: 'var(--border-c)', background: 'var(--bg-elevated)' }}
            >
              <p className="font-mono text-xs" style={{ color: 'var(--accent-2)' }}>
                {g.label}
              </p>
              <ul className="mt-3 space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="text-sm" style={{ color: 'var(--text)' }}>
                    {item}
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
