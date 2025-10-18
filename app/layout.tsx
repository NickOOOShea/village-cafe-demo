import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Village Cafe - Artisan Coffee & Homemade Goodness | Westport, Co. Mayo',
  description: 'Cozy neighborhood cafe in Westport serving specialty coffee, fresh pastries, and wholesome meals made with locally-sourced ingredients. Open daily from 8am.',
  keywords: 'cafe Westport, coffee shop Mayo, breakfast Westport, lunch cafe, artisan coffee, homemade pastries, local ingredients, vegetarian cafe Ireland',
  authors: [{ name: 'Village Cafe' }],
  openGraph: {
    title: 'Village Cafe - Artisan Coffee & Homemade Goodness',
    description: 'Specialty coffee, fresh pastries, and wholesome meals in the heart of Westport',
    type: 'website',
    locale: 'en_IE',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
