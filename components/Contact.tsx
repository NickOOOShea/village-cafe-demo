'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Navigation, Facebook, Instagram } from 'lucide-react'
import businessInfo from '@/app/data/business-info.json'
import { formatTime } from '@/lib/utils'

export default function Contact() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase() as keyof typeof businessInfo.openingHours

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Visit <span className="text-gradient-terracotta">Us</span>
          </h2>
          <p className="section-subheading">
            We can't wait to welcome you to our cozy corner of {businessInfo.address.town}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sage-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-sage-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold text-coffee-900 mb-2">
                    Location
                  </h3>
                  <address className="not-italic text-coffee-600 leading-relaxed">
                    {businessInfo.address.street}<br />
                    {businessInfo.address.town}<br />
                    {businessInfo.address.county}<br />
                    {businessInfo.address.eircode}
                  </address>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${businessInfo.coordinates.lat},${businessInfo.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sage-600 hover:text-sage-700 font-semibold group"
                  >
                    <Navigation className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Contact details */}
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-terracotta-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-terracotta-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold text-coffee-900 mb-2">
                    Get in Touch
                  </h3>
                  <div className="space-y-3">
                    <a
                      href={`tel:${businessInfo.contact.phone}`}
                      className="flex items-center gap-2 text-coffee-600 hover:text-sage-600 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {businessInfo.contact.phone}
                    </a>
                    <a
                      href={`mailto:${businessInfo.contact.email}`}
                      className="flex items-center gap-2 text-coffee-600 hover:text-sage-600 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      {businessInfo.contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening hours */}
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-coffee-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-coffee-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display font-bold text-coffee-900 mb-4">
                    Opening Hours
                  </h3>
                  <div className="space-y-2">
                    {Object.entries(businessInfo.openingHours).map(([day, hours]) => (
                      <div
                        key={day}
                        className={`flex justify-between py-2 px-3 rounded-lg ${
                          day === today
                            ? 'bg-sage-50 font-semibold text-sage-900'
                            : 'text-coffee-600'
                        }`}
                      >
                        <span className="capitalize">{day}</span>
                        <span>
                          {formatTime(hours.open)} - {formatTime(hours.close)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Social media */}
            <div className="card">
              <h3 className="text-xl font-display font-bold text-coffee-900 mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a
                  href={businessInfo.contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-sage-50 hover:bg-sage-100 rounded-xl transition-colors group flex-1"
                >
                  <Facebook className="w-5 h-5 text-sage-600 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-sage-700">Facebook</span>
                </a>
                <a
                  href={`https://instagram.com/${businessInfo.contact.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-terracotta-50 hover:bg-terracotta-100 rounded-xl transition-colors group flex-1"
                >
                  <Instagram className="w-5 h-5 text-terracotta-600 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-terracotta-700">Instagram</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:sticky lg:top-24"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl border-2 border-sage-100">
              {/* Google Maps embed */}
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2352.${Math.floor(businessInfo.coordinates.lat * 1000)}!2d${businessInfo.coordinates.lng}!3d${businessInfo.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM${Math.floor(businessInfo.coordinates.lat)}wrCwrDQ0MDYh!5e0!3m2!1sen!2sie!4v1234567890123!5m2!1sen!2sie`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title={`Map showing location of ${businessInfo.name}`}
              />

              {/* Overlay card with quick info */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-sage-100">
                <p className="font-display font-bold text-lg text-coffee-900 mb-2">
                  {businessInfo.name}
                </p>
                <p className="text-sm text-coffee-600 mb-3">
                  {businessInfo.address.street}, {businessInfo.address.town}
                </p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${businessInfo.coordinates.lat},${businessInfo.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm py-2 px-4 w-full text-center"
                >
                  <Navigation className="inline-block mr-2 w-4 h-4" />
                  Open in Maps
                </a>
              </div>
            </div>

            {/* Features below map */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              {businessInfo.features.slice(-2).map((feature) => (
                <div
                  key={feature}
                  className="bg-gradient-to-br from-cream-50 to-white rounded-xl p-4 border border-sage-100 text-center"
                >
                  <p className="text-sm font-semibold text-sage-700">{feature}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-sage-500 to-sage-700 rounded-3xl p-12 md:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Ready to Visit?
              </h3>
              <p className="text-lg text-sage-100 mb-8 max-w-2xl mx-auto">
                We welcome walk-ins, but if you're planning to visit with a larger group,
                feel free to give us a call to ensure we have space for you.
              </p>
              <a
                href={`tel:${businessInfo.contact.phone}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sage-700 rounded-xl font-bold text-lg hover:bg-cream-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
              >
                <Phone className="w-5 h-5" />
                {businessInfo.contact.phone}
              </a>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-terracotta-400/20 rounded-full blur-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
