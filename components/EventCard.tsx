import { motion } from "framer-motion"
import Image from "next/image"

type EventItem = {
  id: string
  title: string
  date?: string
  images: string[]
  description: string
  tags?: string[]
}

type Props = {
  item: EventItem
  index: number
  onOpen: (item: EventItem) => void
}

export default function EventCard({ item, index, onOpen }: Props) {
  const cover = item.images[0]
  return (
    <motion.button
      onClick={() => onOpen(item)}
      className="card-surface card-hover w-full text-left overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: Math.min(index * 0.03, 0.2) }}
      whileHover={{ y: -2, scale: 1.01 }}
    >
      <div className="relative w-full h-48">
        <Image src={cover} alt={item.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
      </div>
      <div className="p-4">
        <div className="font-semibold truncate">{item.title}</div>
        {item.date && <div className="text-xs text-muted mt-1">{item.date}</div>}
      </div>
    </motion.button>
  )
}
