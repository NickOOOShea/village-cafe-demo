import type { Metadata } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DemoAdminButton from '@/components/DemoAdminButton'
import businessInfo from '@/data/business-info.json'

const DAY_LABEL: Record<string, string> = {
  monday: 'Monday', tuesday: 'Tuesday', wednesday: 'Wednesday',
  thursday: 'Thursday', friday: 'Friday', saturday: 'Saturday', sunday: 'Sunday'
}

const dmSerifDisplay = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://village-cafe-demo.pages.dev'),
  title: {
    default: 'Village Cafe - Artisan Coffee & Homemade Goodness | Westport, Co. Mayo',
    template: '%s | Village Cafe',
  },
  description: 'Cozy neighborhood cafe in Westport serving specialty coffee, fresh pastries, and wholesome meals made with locally-sourced ingredients. Open daily from 8am.',
  keywords: ['cafe Westport', 'coffee shop Mayo', 'breakfast Westport', 'lunch cafe', 'artisan coffee', 'homemade pastries', 'local ingredients', 'vegetarian cafe Ireland'],
  authors: [{ name: 'Village Cafe' }],
  openGraph: {
    title: 'Village Cafe - Artisan Coffee & Homemade Goodness',
    description: 'Specialty coffee, fresh pastries, and wholesome meals in the heart of Westport',
    type: 'website',
    locale: 'en_IE',
    siteName: 'Village Cafe',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Village Cafe - Artisan Coffee & Homemade Goodness',
    description: 'Specialty coffee, fresh pastries, and wholesome meals in the heart of Westport',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CafeOrCoffeeShop',
  name: businessInfo.name,
  description: businessInfo.description,
  url: 'https://village-cafe-demo.pages.dev',
  telephone: businessInfo.contact.primaryPhone,
  email: businessInfo.contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: businessInfo.address.street,
    addressLocality: businessInfo.address.town,
    addressRegion: businessInfo.address.county,
    addressCountry: 'IE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 53.8008,
    longitude: -9.5200,
  },
  openingHoursSpecification: businessInfo.hours.filter(h => !h.closed).map((entry) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: DAY_LABEL[entry.day],
    opens: entry.open,
    closes: entry.close,
  })),
  servesCuisine: ['Coffee', 'Breakfast', 'Lunch', 'Bakery'],
  priceRange: '€€',
  paymentAccepted: 'Cash, Credit Card',
  currenciesAccepted: 'EUR',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dmSerifDisplay.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body bg-warm-white-50 text-coffee-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <DemoAdminButton />
      </body>
    </html>
  )
}
