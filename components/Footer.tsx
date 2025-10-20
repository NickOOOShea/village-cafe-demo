'use client'

import { Coffee, Phone, Mail, MapPin, Facebook, Instagram, Clock } from 'lucide-react'
import businessInfo from '@/app/data/business-info.json'
import { formatTime } from '@/lib/utils'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase() as keyof typeof businessInfo.openingHours
  const todayHours = businessInfo.openingHours[today]

  return (
    <footer className="bg-coffee-800 text-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-sage-gradient flex items-center justify-center">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-display font-bold text-white">
                {businessInfo.name}
              </h3>
            </div>
            <p className="text-cream-300 text-sm leading-relaxed">
              {businessInfo.description}
            </p>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-sage-400" />
              Opening Hours
            </h4>
            <div className="space-y-2 text-sm">
              {Object.entries(businessInfo.openingHours).map(([day, hours]) => (
                <div
                  key={day}
                  className={`flex justify-between ${
                    day === today ? 'text-white font-semibold' : 'text-cream-300'
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

          {/* Contact */}
          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-terracotta-400" />
              Visit Us
            </h4>
            <address className="not-italic text-cream-300 text-sm space-y-2">
              <p>{businessInfo.address.street}</p>
              <p>{businessInfo.address.town}</p>
              <p>{businessInfo.address.county}</p>
              <p className="pt-3 space-y-1">
                <a
                  href={`tel:${businessInfo.contact.phone}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {businessInfo.contact.phone}
                </a>
                <a
                  href={`mailto:${businessInfo.contact.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {businessInfo.contact.email}
                </a>
              </p>
            </address>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-4">
              Legal
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href="/privacy"
                className="block text-cream-300 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="block text-cream-300 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>

          {/* Social & Features */}
          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-4">
              Connect With Us
            </h4>
            <div className="flex gap-3 mb-6">
              <a
                href={businessInfo.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream-800 hover:bg-sage-600 flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-cream-200 group-hover:text-white" />
              </a>
              <a
                href={`https://instagram.com/${businessInfo.contact.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream-800 hover:bg-terracotta-600 flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-cream-200 group-hover:text-white" />
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold text-white mb-2">What We Offer</p>
              <div className="flex flex-wrap gap-2">
                {businessInfo.features.slice(0, 4).map((feature) => (
                  <span
                    key={feature}
                    className="text-xs px-2 py-1 bg-cream-800 text-cream-200 rounded"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-cream-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-cream-400">
          <p>
            © {currentYear} {businessInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span>Website by</span>
            <a
              href="https://connecteire.ie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-400 hover:text-sage-300 font-medium transition-colors"
            >
              Connecteire
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
