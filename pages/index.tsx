import Head from "next/head"
import TeacherCard from "../components/TeacherCard"
import MagneticButton from "../components/MagneticButton"
import TiltCard from "../components/TiltCard"
import { teacher } from "../data/classmates"
import Link from "next/link"
import { motion } from "framer-motion"
import TextReveal from "../components/TextReveal"



export default function Home() {
  return (
    <>
      <Head>
        <title>11 D</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Classroom portfolio for 11 D" />
      </Head>
      <main className="min-h-screen relative">
        <section className="container-responsive py-12 lg:py-16 relative z-10">
          <motion.div
            className="hero-surface p-6 sm:p-8 lg:p-10 backdrop-blur-md bg-opacity-80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <TextReveal as="h2" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Welcome to 11 D
            </TextReveal>
            <TextReveal as="p" className="mt-4 text-base sm:text-lg text-muted max-w-prose" delay={0.2}>
              A class portfolio showcasing projects, events, and our journey together. Explore student profiles, browse our gallery, and see highlights from competitions and showcases.
            </TextReveal>
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <MagneticButton><Link href="/students" className="btn">See Our Students</Link></MagneticButton>
              <MagneticButton><Link href="/events" className="btn">View Events</Link></MagneticButton>
              <MagneticButton><Link href="/gallery" className="btn">View Gallery</Link></MagneticButton>
            </motion.div>
          </motion.div>
        </section>

        <section className="container-responsive py-12 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <TiltCard className="h-full">
              <motion.div
                className="card-surface p-6 h-full"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5 }}
              >
                <TextReveal as="div" className="text-xl font-semibold">About Our Class</TextReveal>
                <TextReveal as="p" className="mt-3 text-sm text-muted" delay={0.1}>We are 11 D, a group of creative and motivated students who value teamwork, curiosity, and growth. This portfolio captures our projects, milestones, and the spirit of our classroom.</TextReveal>
              </motion.div>
            </TiltCard>
            <TiltCard className="h-full">
              <motion.div
                className="card-surface p-6 h-full"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: 0.06 }}
              >
                <TextReveal as="div" className="text-xl font-semibold">What’s Inside</TextReveal>
                <ul className="mt-3 text-sm text-muted space-y-2 list-disc list-inside">
                  <li>Student profiles with photos</li>
                  <li>Gallery of class highlights</li>
                  <li>Events and competition stories</li>
                </ul>
              </motion.div>
            </TiltCard>
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
            <TextReveal as="div" className="text-xl font-semibold">Featured Teacher</TextReveal>
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
