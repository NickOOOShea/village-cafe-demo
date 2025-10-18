'use client'

import { motion } from 'framer-motion'
import { Coffee, MapPin, Clock, Phone, ChevronDown } from 'lucide-react'
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

        {/* Terracotta accent blob */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute bottom-40 -left-20 w-80 h-80 bg-gradient-to-br from-terracotta-200/30 to-cream-300/20 rounded-full blur-3xl animate-float-gentle animation-delay-4000"
        />

        {/* Small cream accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-cream-300/20 to-sage-200/10 rounded-full blur-2xl animate-float-gentle animation-delay-6000"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
              className="inline-flex items-center gap-2 mb-6"
            >
              <div className={`w-3 h-3 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
              <span className="text-sm font-semibold text-coffee-700">
                {isOpen ? 'Open Now' : 'Currently Closed'} · {formatTime(todayHours.open)} - {formatTime(todayHours.close)}
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight"
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
              className="text-xl md:text-2xl text-coffee-600 mb-4 font-medium"
            >
              {businessInfo.tagline}
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg text-coffee-500 mb-8 max-w-2xl mx-auto lg:mx-0"
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
              {businessInfo.features.slice(0, 3).map((feature, index) => (
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
                <Coffee className="inline-block ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
              <a
                href={`tel:${businessInfo.contact.phone}`}
                className="btn-outline group"
              >
                <Phone className="inline-block mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Call to Reserve
              </a>
            </motion.div>
          </motion.div>

          {/* Right column - Visual element / Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Main card with coffee cup illustration */}
              <div className="relative bg-gradient-to-br from-white to-cream-100 rounded-3xl p-12 shadow-2xl border-2 border-sage-100">
                {/* Coffee cup illustration placeholder - using decorative elements */}
                <div className="flex items-center justify-center mb-8">
                  <div className="relative">
                    <div className="w-48 h-48 bg-gradient-to-br from-coffee-400 to-coffee-600 rounded-full flex items-center justify-center shadow-2xl">
                      <Coffee className="w-24 h-24 text-cream-50" strokeWidth={1.5} />
                    </div>
                    {/* Steam effect */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                      <div className="w-2 h-8 bg-gradient-to-t from-coffee-300/40 to-transparent rounded-full animate-steam" />
                    </div>
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 ml-4">
                      <div className="w-2 h-8 bg-gradient-to-t from-coffee-300/40 to-transparent rounded-full animate-steam animation-delay-500" />
                    </div>
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 -ml-4">
                      <div className="w-2 h-8 bg-gradient-to-t from-coffee-300/40 to-transparent rounded-full animate-steam animation-delay-700" />
                    </div>
                  </div>
                </div>

                {/* Quick info cards */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-warm border border-cream-200">
                    <div className="w-12 h-12 rounded-full bg-sage-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-sage-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-coffee-800">Find Us</p>
                      <p className="text-sm text-coffee-600">{businessInfo.address.street}, {businessInfo.address.town}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-warm border border-cream-200">
                    <div className="w-12 h-12 rounded-full bg-terracotta-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-terracotta-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-coffee-800">Today's Hours</p>
                      <p className="text-sm text-coffee-600">{formatTime(todayHours.open)} - {formatTime(todayHours.close)}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-warm border border-cream-200">
                    <div className="w-12 h-12 rounded-full bg-coffee-100 flex items-center justify-center flex-shrink-0">
                      <Coffee className="w-6 h-6 text-coffee-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-coffee-800">Since {businessInfo.established}</p>
                      <p className="text-sm text-coffee-600">Serving the community with love</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-terracotta-200/30 to-sage-200/30 rounded-3xl -z-10" />
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
