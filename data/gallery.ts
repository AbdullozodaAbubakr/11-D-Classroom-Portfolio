export type GalleryItem = {
  id: string
  title: string
  images: string[]
  description?: string
  tags?: string[]
}

export const gallery: GalleryItem[] = [
  { id: "g-1", title: "Lab Day", images: ["/gallery/img-01.svg"], description: "Hands-on experiments." },
  { id: "g-2", title: "Art Showcase", images: ["/gallery/img-02.svg"], description: "Creative works by students." },
  { id: "g-3", title: "Robotics", images: ["/gallery/img-03.svg"], description: "Building and coding robots." },
  { id: "g-4", title: "Sports", images: ["/gallery/img-04.svg"], description: "Team spirit and health." },
  { id: "g-5", title: "Field Trip", images: ["/gallery/img-05.svg"], description: "Learning beyond the classroom." },
  { id: "g-6", title: "Workshop", images: ["/gallery/img-06.svg"], description: "Skills and collaboration." }
]
