import { motion } from "framer-motion"
import Image from "next/image"
import { useDispatch } from "react-redux"
import { Person } from "../types/Person"
import { openModal } from "../store/modalSlice"

type Props = {
  person: Person
  index: number
}

export default function Card({ person, index }: Props) {
  const dispatch = useDispatch()

  return (
    <motion.button
      onClick={() => dispatch(openModal(person))}
      className="card-surface card-hover w-full text-left p-4 focus:outline-none focus:ring-2 focus:ring-accent"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.2) }}
    >
      <div className="flex items-center gap-4">
        <div className="relative h-14 w-14 overflow-hidden rounded-full border" aria-hidden>
          <Image src={person.image} alt={person.name} fill sizes="56px" className="object-cover" />
        </div>
        <div className="min-w-0">
          <div className="font-semibold truncate">{person.name}</div>
          <div className="text-sm text-muted truncate">{person.shortDesc}</div>
          {person.tag && <span className="mt-1 inline-block rounded-full border px-2 py-0.5 text-xs text-muted">{person.tag}</span>}
        </div>
      </div>
    </motion.button>
  )
}
