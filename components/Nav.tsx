import Link from "next/link"
import ThemeToggle from "./ThemeToggle"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur" style={{ backgroundColor: "var(--card)", borderColor: "var(--card-border)" }}>
      <div className="container-responsive">
        <nav className="py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-2xl sm:text-3xl font-extrabold tracking-tight">11 D</Link>
            <div className="hidden sm:flex items-center gap-4 text-sm text-muted">
              <Link href="/students" className="hover:underline font-medium">Students</Link>
              <Link href="/gallery" className="hover:underline font-medium">Gallery</Link>
              <Link href="/events" className="hover:underline font-medium">Events</Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button aria-label="Menu" className="btn h-10 w-10 p-0 rounded-full sm:hidden" onClick={() => setOpen((v) => !v)}>
              <motion.span initial={false} animate={{ rotate: open ? 90 : 0 }} className="inline-flex">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </motion.span>
            </button>
            <ThemeToggle />
          </div>
        </nav>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="sm:hidden pb-4"
            >
              <div className="grid gap-2 text-sm text-muted">
                <Link href="/students" className="card-surface p-3" onClick={() => setOpen(false)}>Students</Link>
                <Link href="/gallery" className="card-surface p-3" onClick={() => setOpen(false)}>Gallery</Link>
                <Link href="/events" className="card-surface p-3" onClick={() => setOpen(false)}>Events</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
