'use client'

import { motion } from 'framer-motion'
import { Coffee, MapPin, Clock, Phone, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import businessInfo from '@/app/data/business-info.json'
import { formatTime } from '@/lib/utils'

export default function Hero() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase() as keyof typeof businessInfo.openingHours
  const todayHours = businessInfo.openingHours[today]

  // Check if currently open
  const now = new Date()
  const currentTime = now.getHours() * 60 + now.getMinutes()
  const [openHour, openMin] = todayHours.open.split(':').map(Number)
  const [closeHour, closeMin] = todayHours.close.split(':').map(Number)
  const openTime = openHour * 60 + openMin
  const closeTime = closeHour * 60 + closeMin
  const isOpen = currentTime >= openTime && currentTime <= closeTime

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 cafe-pattern">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large sage blob */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-20 -right-20 w-96 h-96 bg-gradient-to-br from-sage-200/40 to-sage-300/20 rounded-full blur-3xl animate-float-gentle"
        />

        {/* Butter yellow accent blob */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute bottom-40 -left-20 w-80 h-80 bg-gradient-to-br from-butter-200/40 to-butter-300/20 rounded-full blur-3xl animate-float-gentle animation-delay-4000"
        />

        {/* Small warm accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-warm-white-200/30 to-sage-200/10 rounded-full blur-2xl animate-float-gentle animation-delay-6000"
        />
      </div>

      <div className="relative section-container py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center lg:text-left"
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-sage-200 shadow-warm"
            >
              <div className={`w-2.5 h-2.5 rounded-full ${isOpen ? 'bg-sage-500 animate-pulse' : 'bg-coffee-400'}`} />
              <span className="text-sm font-semibold text-coffee-700">
                {isOpen ? 'Open Now' : 'Currently Closed'} · {formatTime(todayHours.open)} - {formatTime(todayHours.close)}
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display mb-6 leading-tight"
            >
              <span className="text-gradient-warm text-shadow-warm">
                {businessInfo.name}
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl md:text-2xl text-coffee-700 mb-4 font-medium"
            >
              {businessInfo.tagline}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-coffee-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              {businessInfo.description}
            </motion.p>

            {/* Quick info badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              {businessInfo.features.slice(0, 3).map((feature) => (
                <span
                  key={feature}
                  className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-semibold text-sage-700 border border-sage-200 shadow-warm"
                >
                  {feature}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#menu"
                className="btn-secondary group"
              >
                View Menu
                <Coffee className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
              <a
                href={`tel:${businessInfo.contact.phone}`}
                className="btn-outline group"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Call to Reserve
              </a>
            </motion.div>
          </motion.div>

          {/* Right column - Photo collage */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Photo collage grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* Main large image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="col-span-2 relative aspect-[16/10] rounded-3xl overflow-hidden shadow-lifted"
                >
                  <Image
                    src="/images/coffee/latte-art-1.webp"
                    alt="Beautiful latte art"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso-900/30 to-transparent" />
                </motion.div>

                {/* Bottom left image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-card"
                >
                  <Image
                    src="/images/bakery/croissant-classic.webp"
                    alt="Fresh croissants"
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Bottom right image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-card"
                >
                  <Image
                    src="/images/food/avocado-toast.webp"
                    alt="Avocado toast"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>

              {/* Quick info floating cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -left-6 top-1/2 -translate-y-1/2 flex flex-col gap-3"
              >
                <div className="flex items-center gap-3 p-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-lifted border border-sage-100">
                  <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-sage-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-coffee-900">{businessInfo.address.town}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-lifted border border-butter-200">
                  <div className="w-10 h-10 rounded-full bg-butter-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-butter-700" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-coffee-900">{formatTime(todayHours.open)} - {formatTime(todayHours.close)}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white/95 backdrop-blur-sm rounded-xl shadow-lifted border border-espresso-200">
                  <div className="w-10 h-10 rounded-full bg-espresso-100 flex items-center justify-center flex-shrink-0">
                    <Coffee className="w-5 h-5 text-espresso-700" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-coffee-900">Est. {businessInfo.established}</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-butter-200/40 to-sage-200/30 rounded-3xl -z-10" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#specials"
            className="flex flex-col items-center gap-2 text-sage-600 hover:text-sage-700 transition-colors group"
          >
            <span className="text-sm font-medium">Discover More</span>
            <ChevronDown className="w-6 h-6 animate-bounce group-hover:translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
