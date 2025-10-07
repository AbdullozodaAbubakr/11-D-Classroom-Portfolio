import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { setTheme, toggleTheme } from "../store/themeSlice"
import { motion } from "framer-motion"

export default function ThemeToggle() {
  const dispatch = useDispatch()
  const mode = useSelector((s: RootState) => s.theme.mode)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = typeof window !== "undefined" ? window.localStorage.getItem("theme") : null
    if (saved === "light" || saved === "dark") {
      dispatch(setTheme(saved))
    }
    setMounted(true)
  }, [dispatch])

  useEffect(() => {
    if (!mounted) return
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", mode)
    }
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", mode)
    }
  }, [mode, mounted])

  return (
    <motion.button
      whileTap={{ scale: 0.94 }}
      whileHover={{ scale: 1.05 }}
      aria-label={mode === "light" ? "Activate dark mode" : "Activate light mode"}
      className="btn h-10 w-10 p-0 rounded-full"
      onClick={() => dispatch(toggleTheme())}
    >
      <motion.div
        key={mode}
        initial={{ opacity: 0, rotate: -90, scale: 0.9 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="flex items-center justify-center"
      >
        {mode === "light" ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" strokeWidth="1.5" fill="currentColor"/>
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" fill="currentColor"/>
            <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.4 1.4M17.6 17.6L19 19M17.6 6.4L19 5M5 19l1.4-1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        )}
      </motion.div>
    </motion.button>
  )
}
