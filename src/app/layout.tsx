import "./globals.css"
import Navigation from "@/components/layouts/Navaigation"
import Footer from "@/components/layouts/Footer"
import { Space_Grotesk } from 'next/font/google';

export const metadata = {
  title: "Sang Portfolio",
  description: "Fullstack Developer | AI Engineer",
}


const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk', // Tên biến CSS
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="bg-black text-white ">
        {/* Navbar */}
        <Navigation />
        {/* Main content */}
        <main className=" pt-20 w-full px-4">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  )
}