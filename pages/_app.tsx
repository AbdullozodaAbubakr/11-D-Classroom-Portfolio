import type { AppProps } from "next/app"
import "../styles/globals.css"
import { Provider, useSelector } from "react-redux"
import { store, RootState } from "../store"
import Modal from "../components/Modal"
import { useEffect } from "react"
import { Poppins } from "next/font/google"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import ParticleBackground from "../components/ParticleBackground"
import { useRouter } from "next/router"

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] })

function ThemeApplier({ children }: { children: React.ReactNode }) {
  const mode = useSelector((s: RootState) => s.theme.mode)
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", mode)
    }
  }, [mode])
  return <>{children}</>
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ThemeApplier>
        <ParticleBackground variant="constellation" />
        <div className={poppins.className}>
          <Nav />
          <div className="h-16 sm:h-20" />
          <Component {...pageProps} />
          <Footer />
          <Modal />
        </div>
      </ThemeApplier>
    </Provider>
  )
}
