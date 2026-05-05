import type { Metadata, Viewport } from "next"
import { Archivo, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "700", "900"],
  display: "swap",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Danial Jeelani — Visual Designer",
  description:
    "Portfolio of Danial Jeelani — visual designer working across posters, motion, dimension, and digital interfaces.",
  generator: "v0.app",
  openGraph: {
    title: "Danial Jeelani — Visual Designer",
    description:
      "Portfolio of Danial Jeelani — visual designer working across posters, motion, dimension, and digital interfaces.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${archivo.variable} ${jetbrains.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
