import { useState } from 'react'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav({
  theme,
  onToggleTheme,
}: {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}) {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur border-b"
      style={{ borderColor: 'var(--border-c)', background: 'color-mix(in srgb, var(--bg) 80%, transparent)' }}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight" style={{ color: 'var(--text)' }}>
          manirathnam<span style={{ color: 'var(--accent)' }}>.dev</span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm transition-opacity hover:opacity-70"
              style={{ color: 'var(--text-dim)' }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a
            href="https://faultline.co.in"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full px-4 py-1.5 text-sm font-medium transition-transform hover:scale-105 sm:inline-block"
            style={{ background: 'var(--accent)', color: '#0a0a0a' }}
          >
            Faultline ↗
          </a>
          <button
            type="button"
            className="grid h-9 w-9 place-items-center rounded-full border md:hidden"
            style={{ borderColor: 'var(--border-c)' }}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <div className="flex flex-col gap-[3px]">
              <span className="block h-[1.5px] w-4" style={{ background: 'var(--text)' }} />
              <span className="block h-[1.5px] w-4" style={{ background: 'var(--text)' }} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="flex flex-col gap-1 border-t px-5 py-3 md:hidden"
          style={{ borderColor: 'var(--border-c)' }}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2 text-sm"
              style={{ color: 'var(--text-dim)' }}
            >
              {l.label}
            </a>
          ))}
        </motion.nav>
      )}
    </header>
  )
}
