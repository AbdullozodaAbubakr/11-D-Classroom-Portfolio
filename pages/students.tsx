import Head from "next/head"
import { classmates } from "../data/classmates"
import StudentCardLarge from "../components/StudentCardLarge"
import TeacherCard from "../components/TeacherCard"
import { teacher } from "../data/classmates"
import { motion } from "framer-motion"

export default function Students() {
  return (
    <>
      <Head>
        <title>Students · 11 D</title>
        <meta name="description" content="Students of class 11 D" />
      </Head>
      <main className="min-h-screen">
        <section className="container-responsive py-6">
          <motion.h1 className="text-2xl sm:text-3xl font-bold tracking-tight" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>Students</motion.h1>
          <motion.p className="mt-2 text-sm text-muted" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }}>Profiles of our classmates.</motion.p>
          <div className="mt-6">
            <TeacherCard person={teacher} />
          </div>
          <div className="mt-6 grid-auto-fit">
            {classmates.map((p, i) => (
              <StudentCardLarge key={p.id} person={p} index={i} />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
