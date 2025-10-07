import Head from "next/head"
import TeacherCard from "../components/TeacherCard"
import { teacher } from "../data/classmates"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <>
      <Head>
        <title>11 D</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Classroom portfolio for 11 D" />
      </Head>
      <main className="min-h-screen">
        <section className="container-responsive py-12 lg:py-16">
          <motion.div
            className="hero-surface p-6 sm:p-8 lg:p-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              Welcome to 11 D
            </motion.h2>
            <motion.p
              className="mt-4 text-base sm:text-lg text-muted max-w-prose"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
            >
              A class portfolio showcasing projects, events, and our journey together. Explore student profiles, browse our gallery, and see highlights from competitions and showcases.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link href="/students" className="btn">See Our Students</Link>
              <Link href="/events" className="btn">View Events</Link>
              <Link href="/gallery" className="btn">View Gallery</Link>
            </motion.div>
          </motion.div>
        </section>

        <section className="container-responsive py-12">
          <div className="grid gap-6 lg:grid-cols-2">
            <motion.div
              className="card-surface p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-xl font-semibold">About Our Class</div>
              <p className="mt-3 text-sm text-muted">We are 11 D, a group of creative and motivated students who value teamwork, curiosity, and growth. This portfolio captures our projects, milestones, and the spirit of our classroom.</p>
            </motion.div>
            <motion.div
              className="card-surface p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.06 }}
            >
              <div className="text-xl font-semibold">What’s Inside</div>
              <ul className="mt-3 text-sm text-muted space-y-2 list-disc list-inside">
                <li>Student profiles with photos</li>
                <li>Gallery of class highlights</li>
                <li>Events and competition stories</li>
              </ul>
            </motion.div>
          </div>
        </section>

        <section className="container-responsive py-12">
          <motion.div
            className="card-surface p-6"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-xl font-semibold">Featured Teacher</div>
            <div className="mt-4">
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.45 }}>
                <TeacherCard person={teacher} />
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  )
}
