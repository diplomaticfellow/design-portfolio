import { Nav } from "@/components/site/nav"
import { Hero } from "@/components/site/hero"
import { Marquee } from "@/components/site/marquee"
import { Posters } from "@/components/site/posters"
import { Mockups } from "@/components/site/mockups"
import { WebDesign } from "@/components/site/web-design"
import { About } from "@/components/site/about"
import { Contact } from "@/components/site/contact"
import { Footer } from "@/components/site/footer"

const marqueeItems = [
  "Posters",
  "Motion",
  "3D",
  "Web Design",
  "Editorial",
  "Identity",
  "Print",
  "Campaign",
  "Available 2026",
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee items={marqueeItems} />
      <Posters />
      <Mockups />
      <WebDesign />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}
