import { motion } from "framer-motion"
import { ReactNode } from "react"

type Props = {
    children: ReactNode
    className?: string
    delay?: number
    as?: "h1" | "h2" | "h3" | "p" | "div"
}

export default function TextReveal({ children, className = "", delay = 0, as = "div" }: Props) {
    const Component = motion[as]

    const blurReveal = {
        hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
        visible: { opacity: 1, filter: "blur(0px)", y: 0 },
    }

    return (
        <Component
            className={className}
            variants={blurReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
        >
            {children}
        </Component>
    )
}
