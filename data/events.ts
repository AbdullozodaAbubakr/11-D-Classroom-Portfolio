export type EventItem = {
  id: string
  title: string
  date?: string
  images: string[]
  description: string
  tags?: string[]
}

export const events: EventItem[] = [
  { id: "e-1", title: "Math Olympiad", date: "2025-02-10", images: ["/events/ev-01.svg", "/events/ev-02.svg"], description: "Participation in regional Math Olympiad with outstanding teamwork and problem solving." },
  { id: "e-2", title: "Science Fair", date: "2025-03-05", images: ["/events/ev-03.svg"], description: "Showcased innovative experiments and research posters across multiple disciplines." },
  { id: "e-3", title: "Coding Challenge", date: "2025-04-12", images: ["/events/ev-04.svg"], description: "Algorithmic programming contest fostering collaboration and creativity." }
]
