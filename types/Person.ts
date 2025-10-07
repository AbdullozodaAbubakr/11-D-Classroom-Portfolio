export type Role = "student" | "teacher"

export interface Person {
  id: string
  name: string
  shortDesc: string
  fullDesc: string
  role: Role
  image: string
  tag?: string
}
