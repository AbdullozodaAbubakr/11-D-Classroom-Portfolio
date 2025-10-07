import { Person } from "../types/Person"

export const teacher: Person = {
  id: "t-1",
  name: "Sitamova Nargis",
  shortDesc: "Class teacher guiding 11 D",
  fullDesc: "Teacher of 11 D focusing on creativity, collaboration, and critical thinking.",
  role: "teacher",
  image: "/avatars/teacher.svg",
  tag: "Teacher"
}

export const classmates: Person[] = Array.from({ length: 40 }).map((_, i) => {
  const n = i + 1
  return {
    id: `s-${n}`,
    name: `Student ${n}`,
    shortDesc: "Curious learner in 11 D",
    fullDesc: "Passionate about learning, teamwork, and building meaningful projects in class.",
    role: "student",
    image: `/avatars/avatar-${String(n).padStart(2, "0")}.svg`,
    tag: n % 5 === 0 ? "Lead" : undefined
  }
})
