import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import { gallery } from "../data/gallery"
import ImageLightbox from "../components/ImageLightbox"
import { motion } from "framer-motion"

export default function Gallery() {
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
        <title>Gallery · 11 D</title>
        <meta name="description" content="Gallery of class 11 D" />
      </Head>
      <main className="min-h-screen">
        <section className="container-responsive py-6">
          <motion.h1 className="text-2xl sm:text-3xl font-bold tracking-tight" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>Gallery</motion.h1>
          <motion.p className="mt-2 text-sm text-muted" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}>Highlights and memories.</motion.p>
          <div className="mt-6 grid-auto-fit">
            {gallery.map((g, idx) => (
              <motion.button
                key={g.id}
                className="card-surface card-hover overflow-hidden text-left focus:outline-none"
                onClick={() => openItem(g.images[0], g.title, g.description)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: Math.min(idx * 0.03, 0.2) }}
                whileHover={{ y: -2, scale: 1.01 }}
              >
                <div className="relative w-full h-48">
                  <Image src={g.images[0]} alt={g.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="p-4">
                  <div className="font-semibold truncate">{g.title}</div>
                  {g.description && <div className="text-xs text-muted mt-1 truncate">{g.description}</div>}
                </div>
              </motion.button>
            ))}
          </div>
        </section>
      </main>
      <ImageLightbox open={open} src={src} alt={title} onClose={() => setOpen(false)} title={title} description={desc} />
    </>
  )
}
