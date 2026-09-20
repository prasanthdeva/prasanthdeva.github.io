import Reveal from './Reveal'

type Role = {
  company: string
  companyUrl?: string
  title: string
  tag: string
  period: string
  location: string
  points: string[]
}

const ROLES: Role[] = [
  {
    company: 'Faultline',
    companyUrl: 'https://faultline.co.in',
    title: 'Founder & Lead Engineer',
    tag: 'AI / Platform',
    period: 'Present',
    location: 'Remote',
    points: [
      'Architected and built the full stack solo: a Go-based OTel collector, Kafka pipeline, ClickHouse storage, a FastAPI query layer, the React product UI, a separate platform-admin console, and the deployment infra behind all of it — every layer, no team.',
      'Built the AI reasoning layer itself: a LangGraph-based classifier that correlates faults to the deploy that caused them and explains root cause, instead of leaving that work to a human at 3am.',
      'Owns reliability end-to-end — rate limiting, tail-sampling, multi-tenant isolation — and has personally diagnosed and fixed live production incidents (TLS bootstrap failures, misrouted traffic) directly on the running system, not just in a ticket.',
      'Ships to production personally: provisions the infra, deploys the code, and is the one who shows up when something breaks — code to running system to fix, with no handoff in between.',
    ],
  },
  {
    company: 'CloudBees Inc.',
    companyUrl: 'https://www.cloudbees.com/',
    title: 'Software Engineer',
    tag: 'DevOps / CI-CD',
    period: 'Sept 2024 — Present',
    location: 'Remote, India',
    points: [
      'Work in Go on Enterprise Jenkins — tuning APIs and refactoring core service code for CI/CD and release orchestration across the required cloud vendors.',
      'Owns work end-to-end: code, build, test, deploy, and release — not handed off between stages or teams.',
    ],
  },
  {
    company: 'Agilysys Technology',
    companyUrl: 'https://www.agilysys.com/en/',
    title: 'Software Analyst',
    tag: 'Hospitality',
    period: 'Mar 2023 — Sept 2024',
    location: 'Chennai, India',
    points: [
      'Built for the hospitality industry, supporting customers across EMEA and North America through every phase of development in cross-functional teams.',
      'Carried on-call for production issues, including reverse-engineering unfamiliar failures under time pressure — direct SRE-shaped work, not just feature delivery.',
      'Worked serverless and cloud-service integration into the platform, plus performance tuning and query optimization ahead of release planning.',
    ],
  },
  {
    company: 'Tata Consultancy Services',
    companyUrl: 'https://www.tcs.com/',
    title: 'Assistant System Engineer',
    tag: 'BFSI',
    period: 'July 2021 — Mar 2023',
    location: 'Chennai, India',
    points: [
      'Worked the BFSI domain on a microservices architecture for USAA, a major US financial services and insurance client.',
      'Covered the full lifecycle — dev, test, stage, deploy — on systems handling real financial-services traffic, not a sandbox.',
    ],
  },
  {
    company: 'Wipro Pvt. Ltd.',
    companyUrl: 'https://www.wipro.com/',
    title: 'Project Engineer',
    tag: 'Telecom',
    period: 'Nov 2020 — May 2021',
    location: 'Pune, India',
    points: [
      "Shipped bug fixes and features for Singtel, Singapore's national telecom carrier, with lead support on code quality.",
    ],
  },
  {
    company: 'GeeksforGeeks',
    companyUrl: 'https://www.geeksforgeeks.org/',
    title: 'Technical Content Writer — Internship',
    tag: 'Internship',
    period: 'May 2020 — Oct 2020',
    location: 'Mumbai, India',
    points: [
      'Published articles translating competitive-programming solutions across C, C++, Python, and JavaScript — where the multi-language range started.',
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
          BFSI, hospitality, telecom, and now AI-native infrastructure
        </h2>
        <p className="mt-3 max-w-xl text-base leading-relaxed" style={{ color: 'var(--text-dim)' }}>
          Four industries, one pattern: dropped into a domain, own the system end-to-end,
          carry the pager when it breaks. Faultline is that same pattern turned into a
          product.
        </p>
      </Reveal>

      <div className="mt-10 space-y-6">
        {ROLES.map((role, i) => (
          <Reveal key={role.company} delay={Math.min(i, 4) * 0.06}>
            <div
              className="rounded-2xl border p-6 sm:p-8"
              style={{ borderColor: 'var(--border-c)', background: 'var(--bg-elevated)' }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: 'var(--text)' }}>
                    {role.title}{' '}
                    <span style={{ color: 'var(--text-dim)' }}>
                      ·{' '}
                      {role.companyUrl ? (
                        <a
                          href={role.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="underline decoration-dotted underline-offset-4 hover:opacity-70"
                        >
                          {role.company}
                        </a>
                      ) : (
                        role.company
                      )}
                    </span>
                  </h3>
                  <p className="mt-1 font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
                    {role.location}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <span
                    className="rounded-full px-2.5 py-0.5 text-xs font-medium"
                    style={{ background: 'color-mix(in srgb, var(--accent-2) 15%, transparent)', color: 'var(--accent-2)' }}
                  >
                    {role.tag}
                  </span>
                  <span className="font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
                    {role.period}
                  </span>
                </div>
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
