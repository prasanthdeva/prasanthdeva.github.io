export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: 'var(--border-c)' }}>
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm sm:flex-row" style={{ color: 'var(--text-dim)' }}>
        <p>© {new Date().getFullYear()} Manirathnam Murugesan</p>
        <p className="font-mono text-xs">
          Building{' '}
          <a href="https://faultline.co.in" target="_blank" rel="noreferrer" className="underline" style={{ color: 'var(--accent)' }}>
            faultline.co.in
          </a>
        </p>
      </div>
    </footer>
  )
}
