import { motion } from 'framer-motion'
import { FiMoon, FiSun } from 'react-icons/fi'

export default function ThemeToggle({
  theme,
  onToggle,
}: {
  theme: 'dark' | 'light'
  onToggle: () => void
}) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.08 }}
      className="grid h-9 w-9 place-items-center rounded-full border cursor-pointer"
      style={{ borderColor: 'var(--border-c)', color: 'var(--text)' }}
    >
      {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
    </motion.button>
  )
}
