import { useEffect, useRef } from "react"

type Props = {
    variant?: "constellation" | "bubbles" | "molecules" | "shapes"
}

export default function ParticleBackground({ variant = "constellation" }: Props) {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationFrameId: number
        let particles: Particle[] = []
        let mouse = { x: -1000, y: -1000 }

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            initParticles()
        }

        class Particle {
            x: number
            y: number
            originX: number
            originY: number
            vx: number
            vy: number
            size: number
            color: string

            // Properties for other variants (kept for compatibility)
            angle: number
            speed: number
            connections: number[] = []
            shapeType: "square" | "triangle" | "hexagon"
            rotation: number
            rotationSpeed: number

            constructor() {
                this.x = Math.random() * canvas!.width
                this.y = Math.random() * canvas!.height
                this.originX = this.x
                this.originY = this.y

                // Slower, more professional movement
                this.vx = (Math.random() - 0.5) * 0.3
                this.vy = (Math.random() - 0.5) * 0.3

                // Slightly larger particles for better visibility
                this.size = Math.random() * 2 + 1.5
                this.color = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || "#7c3aed"

                this.angle = Math.random() * 360
                this.speed = Math.random() * 0.5 + 0.2

                const shapes = ["square", "triangle", "hexagon"] as const
                this.shapeType = shapes[Math.floor(Math.random() * shapes.length)]
                this.rotation = Math.random() * Math.PI * 2
                this.rotationSpeed = (Math.random() - 0.5) * 0.02
            }

            update() {
                // Constellation Logic (Scatter and Recover)
                if (variant === "constellation") {
                    const dx = mouse.x - this.x
                    const dy = mouse.y - this.y
                    const distance = Math.sqrt(dx * dx + dy * dy)
                    const forceDistance = 120

                    if (distance < forceDistance) {
                        const forceDirectionX = dx / distance
                        const forceDirectionY = dy / distance
                        const force = (forceDistance - distance) / forceDistance
                        const repulsionStrength = 8
                        this.vx -= forceDirectionX * force * repulsionStrength
                        this.vy -= forceDirectionY * force * repulsionStrength
                    } else {
                        const dxOrigin = this.originX - this.x
                        const dyOrigin = this.originY - this.y
                        this.vx += dxOrigin * 0.005
                        this.vy += dyOrigin * 0.005
                    }
                    this.vx *= 0.9
                    this.vy *= 0.9
                    this.x += this.vx
                    this.y += this.vy
                } else {
                    // Fallback for other variants if they were used
                    this.x += this.vx
                    this.y += this.vy
                    if (this.x < 0 || this.x > canvas!.width) this.vx *= -1
                    if (this.y < 0 || this.y > canvas!.height) this.vy *= -1
                }
            }

            draw() {
                if (!ctx) return
                ctx.fillStyle = this.color
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        const initParticles = () => {
            particles = []
            // Increased density: divide by 9000 instead of 15000 for more particles
            const numberOfParticles = Math.min(150, (canvas.width * canvas.height) / 9000)
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle())
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            if (variant === "constellation") {
                // Draw particles and connections
                for (let i = 0; i < particles.length; i++) {
                    const p = particles[i]
                    p.update()
                    p.draw()

                    // Connections
                    for (let j = i; j < particles.length; j++) {
                        const p2 = particles[j]
                        const dx = p.x - p2.x
                        const dy = p.y - p2.y
                        const distance = Math.sqrt(dx * dx + dy * dy)
                        // Increased connection distance for "more attached" look
                        const connectDistance = 140

                        if (distance < connectDistance) {
                            ctx.beginPath()
                            ctx.strokeStyle = p.color
                            // More visible lines
                            ctx.globalAlpha = (1 - distance / connectDistance) * 0.8
                            ctx.lineWidth = 0.8
                            ctx.moveTo(p.x, p.y)
                            ctx.lineTo(p2.x, p2.y)
                            ctx.stroke()
                            ctx.globalAlpha = 1
                        }
                    }
                }
            } else {
                // Fallback loop
                for (let i = 0; i < particles.length; i++) {
                    particles[i].update()
                    particles[i].draw()
                }
            }

            animationFrameId = requestAnimationFrame(animate)
        }

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
        }

        window.addEventListener("resize", resize)
        window.addEventListener("mousemove", handleMouseMove)

        resize()
        animate()

        return () => {
            window.removeEventListener("resize", resize)
            window.removeEventListener("mousemove", handleMouseMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [variant])

    return <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none opacity-30" />
}
