import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false)
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    const springConfig = { damping: 25, stiffness: 700 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16)
            cursorY.set(e.clientY - 16)
        }

        const handleMouseOver = (e: MouseEvent) => {
            if ((e.target as HTMLElement).closest("a, button, .card-hover")) {
                setIsHovering(true)
            } else {
                setIsHovering(false)
            }
        }

        window.addEventListener("mousemove", moveCursor)
        window.addEventListener("mouseover", handleMouseOver)

        return () => {
            window.removeEventListener("mousemove", moveCursor)
            window.removeEventListener("mouseover", handleMouseOver)
        }
    }, [cursorX, cursorY])

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 border-2 border-accent rounded-full pointer-events-none z-[9999] hidden sm:block"
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
            }}
            animate={{
                scale: isHovering ? 1.5 : 1,
                backgroundColor: isHovering ? "var(--accent)" : "transparent",
                opacity: isHovering ? 0.5 : 1,
            }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
    )
}
