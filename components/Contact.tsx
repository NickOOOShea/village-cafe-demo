'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Navigation, Facebook, Instagram } from 'lucide-react'
import businessInfo from '@/data/business-info.json'
import { formatTime } from '@/lib/utils'

const DAY_LABEL: Record<string, string> = {
  monday: 'Monday', tuesday: 'Tuesday', wednesday: 'Wednesday',
  thursday: 'Thursday', friday: 'Friday', saturday: 'Saturday', sunday: 'Sunday'
}
const getSocialUrl = (platform: string) => businessInfo.social.find(s => s.platform === platform)?.url || '#'
const getFeatureNames = () => businessInfo.features.map(f => f.name)

export default function Contact() {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  const todayKey = days[new Date().getDay()]

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white relative">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            Visit <span className="text-gradient-warm">Us</span>
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
                  <h3 className="text-xl font-display text-coffee-900 mb-2">
                    Location
                  </h3>
                  <address className="not-italic text-coffee-600 leading-relaxed">
                    {businessInfo.address.street}<br />
                    {businessInfo.address.town}<br />
                    {businessInfo.address.county}<br />
                    {businessInfo.address.eircode}
                  </address>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${businessInfo.location.lat},${businessInfo.location.lng}`}
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
                <div className="w-12 h-12 rounded-xl bg-butter-200 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-butter-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display text-coffee-900 mb-2">
                    Get in Touch
                  </h3>
                  <div className="space-y-3">
                    <a
                      href={`tel:${businessInfo.contact.primaryPhone}`}
                      className="flex items-center gap-2 text-coffee-600 hover:text-sage-600 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {businessInfo.contact.primaryPhone}
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
                <div className="w-12 h-12 rounded-xl bg-espresso-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-espresso-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display text-coffee-900 mb-4">
                    Opening Hours
                  </h3>
                  <div className="space-y-2">
                    {businessInfo.hours.map((entry) => (
                      <div
                        key={entry.day}
                        className={`flex justify-between py-2 px-3 rounded-lg ${
                          entry.day === todayKey
                            ? 'bg-sage-50 font-semibold text-sage-900'
                            : 'text-coffee-600'
                        }`}
                      >
                        <span>{DAY_LABEL[entry.day]}</span>
                        <span>
                          {entry.closed ? 'Closed' : `${formatTime(entry.open)} - ${formatTime(entry.close)}`}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Social media */}
            <div className="card">
              <h3 className="text-xl font-display text-coffee-900 mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a
                  href={getSocialUrl('facebook')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-sage-50 hover:bg-sage-100 rounded-xl transition-colors group flex-1"
                >
                  <Facebook className="w-5 h-5 text-sage-600 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-sage-700">Facebook</span>
                </a>
                <a
                  href={getSocialUrl('instagram')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-butter-100 hover:bg-butter-200 rounded-xl transition-colors group flex-1"
                >
                  <Instagram className="w-5 h-5 text-butter-700 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-butter-800">Instagram</span>
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
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lifted border-2 border-sage-100">
              {/* Google Maps embed */}
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2352.${Math.floor(businessInfo.location.lat * 1000)}!2d${businessInfo.location.lng}!3d${businessInfo.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM${Math.floor(businessInfo.location.lat)}wrCwrDQ0MDYh!5e0!3m2!1sen!2sie!4v1234567890123!5m2!1sen!2sie`}
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
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lifted border border-sage-100">
                <p className="font-display text-lg text-coffee-900 mb-2">
                  {businessInfo.name}
                </p>
                <p className="text-sm text-coffee-600 mb-3">
                  {businessInfo.address.street}, {businessInfo.address.town}
                </p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${businessInfo.location.lat},${businessInfo.location.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm py-2 px-4 w-full justify-center"
                >
                  <Navigation className="w-4 h-4" />
                  Open in Maps
                </a>
              </div>
            </div>

            {/* Features below map */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              {getFeatureNames().slice(-2).map((feature) => (
                <div
                  key={feature}
                  className="bg-gradient-to-br from-warm-white-50 to-white rounded-xl p-4 border border-sage-100 text-center"
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
          <div className="bg-sage-gradient rounded-3xl p-12 md:p-16 text-white shadow-lifted relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-display mb-4">
                Ready to Visit?
              </h3>
              <p className="text-lg text-sage-100 mb-8 max-w-2xl mx-auto">
                We welcome walk-ins, but if you're planning to visit with a larger group,
                feel free to give us a call to ensure we have space for you.
              </p>
              <a
                href={`tel:${businessInfo.contact.primaryPhone}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-sage-700 rounded-xl font-bold text-lg hover:bg-warm-white-50 transition-all shadow-lifted hover:shadow-2xl hover:scale-105 active:scale-95"
              >
                <Phone className="w-5 h-5" />
                {businessInfo.contact.primaryPhone}
              </a>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-butter-400/20 rounded-full blur-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
