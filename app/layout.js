import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Victor Babiuc - Wannabe Entrepreneur & Tech Enthusiast",
  description: "Personal website of Victor Babiuc - Founder of Bold Profiles, angel investor, and tech enthusiast.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}