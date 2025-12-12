import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ReactNode, useRef } from "react"

type Props = {
    children: ReactNode
    className?: string
}

export default function TiltCard({ children, className = "" }: Props) {
    const ref = useRef<HTMLDivElement>(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 })
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 })

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["12deg", "-12deg"])
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-12deg", "12deg"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current!.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseXFromCenter = e.clientX - rect.left - width / 2
        const mouseYFromCenter = e.clientY - rect.top - height / 2

        x.set(mouseXFromCenter / width)
        y.set(mouseYFromCenter / height)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    const glareBackground = useMotionTemplate`radial-gradient(
    circle at ${useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"])} ${useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"])},
    rgba(255,255,255,0.4) 0%,
    transparent 50%
  )`

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
            }}
            className={`relative ${className}`}
        >
            <div style={{ transform: "translateZ(50px)" }}>
                {children}
            </div>
            <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: glareBackground,
                    zIndex: 10,
                }}
            />
        </motion.div>
    )
}
