import { motion } from "framer-motion"
import Image from "next/image"
import { useDispatch } from "react-redux"
import { Person } from "../types/Person"
import { openModal } from "../store/modalSlice"

type Props = { person: Person }

export default function TeacherCard({ person }: Props) {
  const dispatch = useDispatch()
  return (
    <motion.button
      onClick={() => dispatch(openModal(person))}
      className="card-surface card-hover w-full text-left p-6 sm:p-7 border-2"
      style={{ borderColor: "var(--accent)" }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-6">
        <div className="relative h-40 w-40 overflow-hidden rounded-full border-2" style={{ borderColor: "var(--accent)" }} aria-hidden>
          <Image src={person.image} alt={person.name} fill sizes="160px" className="object-cover" />
        </div>
        <div className="min-w-0">
          <div className="text-2xl font-extrabold tracking-tight" style={{ color: "var(--accent)" }}>{person.name}</div>
          <div className="text-sm text-muted truncate">{person.shortDesc}</div>
          {person.tag && <span className="mt-2 inline-block rounded-full border px-2 py-0.5 text-xs" style={{ borderColor: "var(--accent)", color: "var(--accent)" }}>{person.tag}</span>}
        </div>
      </div>
    </motion.button>
  )
}
