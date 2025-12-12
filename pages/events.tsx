import Head from "next/head"
import { useState } from "react"
import { events } from "../data/events"
import EventCard from "../components/EventCard"
import ImageLightbox from "../components/ImageLightbox"
import { motion } from "framer-motion"
import TextReveal from "../components/TextReveal"

export default function Events() {
  const [open, setOpen] = useState(false)
  const [src, setSrc] = useState("")
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState<string | undefined>(undefined)

  function openItem(s: string, t: string, d?: string) {
    setSrc(s)
    setTitle(t)
    setDesc(d)
    setOpen(true)
  }

  return (
    <>
      <Head>
        <title>Events · 11 D</title>
        <meta name="description" content="Events and competitions of 11 D" />
      </Head>
      <main className="min-h-screen">
        <section className="container-responsive py-6">
          <TextReveal as="h1" className="text-2xl sm:text-3xl font-bold tracking-tight">Events</TextReveal>
          <TextReveal as="p" className="mt-2 text-sm text-muted" delay={0.05}>Olympiads, competitions, and showcases.</TextReveal>
          <div className="mt-6 grid-auto-fit">
            {events.map((e, i) => (
              <EventCard key={e.id} item={e} index={i} onOpen={(it) => openItem(it.images[0], it.title, it.description)} />
            ))}
          </div>
        </section>
      </main>
      <ImageLightbox open={open} src={src} alt={title} onClose={() => setOpen(false)} title={title} description={desc} />
    </>
  )
}
