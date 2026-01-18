'use client'

import { Coffee, Phone, Mail, MapPin, Facebook, Instagram, Clock } from 'lucide-react'
import businessInfo from '@/data/business-info.json'
import { formatTime } from '@/lib/utils'

// Day labels map
const DAY_LABEL: Record<string, string> = {
  monday: 'Monday', tuesday: 'Tuesday', wednesday: 'Wednesday',
  thursday: 'Thursday', friday: 'Friday', saturday: 'Saturday', sunday: 'Sunday'
}

// Helper to get social URL
const getSocialUrl = (platform: string) => {
  const social = businessInfo.social.find(s => s.platform === platform)
  return social?.url || '#'
}

// Helper to get feature names (features is now array of objects)
const getFeatureNames = () => businessInfo.features.map(f => f.name)

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
  const todayKey = days[new Date().getDay()]

  return (
    <footer className="bg-espresso-900 text-warm-white-100">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-sage-gradient flex items-center justify-center">
                <Coffee className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-display text-white">
                {businessInfo.name}
              </h3>
            </div>
            <p className="text-warm-white-300 text-sm leading-relaxed">
              {businessInfo.description}
            </p>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-display text-white mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-sage-400" />
              Opening Hours
            </h4>
            <div className="space-y-2 text-sm">
              {businessInfo.hours.map((entry) => (
                <div
                  key={entry.day}
                  className={`flex justify-between ${
                    entry.day === todayKey ? 'text-butter-300 font-semibold' : 'text-warm-white-300'
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

          {/* Contact */}
          <div>
            <h4 className="text-lg font-display text-white mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-butter-400" />
              Visit Us
            </h4>
            <address className="not-italic text-warm-white-300 text-sm space-y-2">
              <p>{businessInfo.address.street}</p>
              <p>{businessInfo.address.town}</p>
              <p>{businessInfo.address.county}</p>
              <div className="pt-3 space-y-2">
                <a
                  href={`tel:${businessInfo.contact.primaryPhone}`}
                  className="flex items-center gap-2 hover:text-butter-300 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {businessInfo.contact.primaryPhone}
                </a>
                <a
                  href={`mailto:${businessInfo.contact.email}`}
                  className="flex items-center gap-2 hover:text-butter-300 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {businessInfo.contact.email}
                </a>
              </div>
            </address>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-display text-white mb-4">
              Legal
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href="/privacy"
                className="block text-warm-white-300 hover:text-butter-300 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="block text-warm-white-300 hover:text-butter-300 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>

          {/* Social & Features */}
          <div>
            <h4 className="text-lg font-display text-white mb-4">
              Connect With Us
            </h4>
            <div className="flex gap-3 mb-6">
              <a
                href={getSocialUrl('facebook')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-espresso-800 hover:bg-sage-600 flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-warm-white-200 group-hover:text-white" />
              </a>
              <a
                href={getSocialUrl('instagram')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-espresso-800 hover:bg-butter-500 flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-warm-white-200 group-hover:text-espresso-900" />
              </a>
            </div>
            <div>
              <p className="text-sm font-semibold text-white mb-2">What We Offer</p>
              <div className="flex flex-wrap gap-2">
                {getFeatureNames().slice(0, 4).map((feature) => (
                  <span
                    key={feature}
                    className="text-xs px-2 py-1 bg-espresso-800 text-warm-white-200 rounded"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-espresso-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-warm-white-400">
          <p>
            &copy; {currentYear} {businessInfo.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span>Website by</span>
            <a
              href="https://connecteire.ie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-400 hover:text-sage-300 font-medium transition-colors"
            >
              ConnectÉire
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
