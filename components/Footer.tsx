import Link from "next/link"

export default function Footer() {
  return (
    <footer className="container-responsive py-10">
      <div className="text-center text-sm text-muted">© 11 D – Memories Forever</div>
      <div className="mt-3 flex items-center justify-center gap-4 text-xs text-muted">
        <Link href="/events" className="hover:underline">Events</Link>
        <Link href="/students" className="hover:underline">Students</Link>
        <Link href="/gallery" className="hover:underline">Gallery</Link>
      </div>
    </footer>
  )
}
