import { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import { FiCopy, FiCheck, FiMail, FiPhone, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import Reveal from './Reveal'

// vCard 3.0 -- scanning this with any phone camera offers "add contact"
// directly, no app/website round-trip needed.
const VCARD = [
  'BEGIN:VCARD',
  'VERSION:3.0',
  'N:Murugesan;Manirathnam;;;',
  'FN:Manirathnam Murugesan',
  'TITLE:Founder, Faultline',
  'ORG:Faultline',
  'EMAIL:prasanthwit@gmail.com',
  'TEL;TYPE=CELL:+91 8667848270',
  'URL:https://faultline.co.in',
  'X-SOCIALPROFILE;TYPE=linkedin:https://www.linkedin.com/in/manirathnam-m-33531914b/',
  'END:VCARD',
].join('\n')

const EMAIL = 'prasanthwit@gmail.com'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // clipboard API unavailable -- the email is also just plain text on the page
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 py-20">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-widest" style={{ color: 'var(--text-dim)' }}>
          05 — Contact
        </span>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl" style={{ color: 'var(--text)' }}>
          Let's talk
        </h2>
        <p className="mt-3 max-w-xl text-base leading-relaxed" style={{ color: 'var(--text-dim)' }}>
          Building something in observability or incident response? Investing? Just want
          to talk shop about deploy-correlated tracing? Reach out.
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div
          className="mt-10 flex flex-col items-center gap-8 rounded-3xl border p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10"
          style={{ borderColor: 'var(--border-c)', background: 'var(--bg-elevated)' }}
        >
          <div className="w-full max-w-sm">
            <button
              type="button"
              onClick={copyEmail}
              className="flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-colors hover:opacity-80"
              style={{ borderColor: 'var(--border-c)' }}
            >
              <span className="flex items-center gap-3 text-sm" style={{ color: 'var(--text)' }}>
                <FiMail style={{ color: 'var(--accent)' }} />
                {EMAIL}
              </span>
              {copied ? <FiCheck style={{ color: 'var(--accent-2)' }} /> : <FiCopy style={{ color: 'var(--text-dim)' }} />}
            </button>

            <a
              href="tel:+918667848270"
              className="mt-3 flex items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors hover:opacity-80"
              style={{ borderColor: 'var(--border-c)', color: 'var(--text)' }}
            >
              <FiPhone style={{ color: 'var(--accent)' }} />
              +91 86678 48270
            </a>

            <div className="mt-4 flex gap-3">
              <a
                href="https://github.com/prasanthdeva"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-full border transition-transform hover:scale-105"
                style={{ borderColor: 'var(--border-c)', color: 'var(--text)' }}
              >
                <FiGithub size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/manirathnam-m-33531914b/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-full border transition-transform hover:scale-105"
                style={{ borderColor: 'var(--border-c)', color: 'var(--text)' }}
              >
                <FiLinkedin size={16} />
              </a>
              <a
                href="https://x.com/Prasanth0o7"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="grid h-10 w-10 place-items-center rounded-full border transition-transform hover:scale-105"
                style={{ borderColor: 'var(--border-c)', color: 'var(--text)' }}
              >
                <FiTwitter size={16} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="rounded-2xl bg-white p-4 shadow-lg">
              <QRCodeSVG value={VCARD} size={148} bgColor="#ffffff" fgColor="#0a0a0a" level="M" />
            </div>
            <p className="font-mono text-xs" style={{ color: 'var(--text-dim)' }}>
              scan to save contact
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
