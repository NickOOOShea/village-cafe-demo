'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Coffee, Menu, X, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import businessInfo from '@/app/data/business-info.json'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '#menu', label: 'Menu' },
    { href: '#specials', label: 'Daily Specials' },
    { href: '#story', label: 'Our Story' },
    { href: '#contact', label: 'Visit Us' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-sage-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-sage-400 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative w-10 h-10 rounded-full bg-sage-gradient flex items-center justify-center">
                <Coffee className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-display font-bold text-coffee-800 group-hover:text-sage-600 transition-colors">
                {businessInfo.name}
              </h1>
              <p className="text-xs text-sage-600 -mt-0.5">
                {businessInfo.address.town}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-coffee-700 hover:text-sage-600 font-medium transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sage-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href={`tel:${businessInfo.contact.phone}`}
              className="flex items-center gap-2 px-4 py-2 bg-terracotta-500 text-white rounded-lg hover:bg-terracotta-600 hover:scale-105 transition-all shadow-terracotta font-medium"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">Call Us</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-coffee-700 hover:text-sage-600 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-sage-100 bg-white overflow-hidden"
          >
            <nav className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-coffee-700 hover:text-sage-600 font-medium py-2 border-l-2 border-transparent hover:border-sage-500 pl-4 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 space-y-2">
                <a
                  href={`tel:${businessInfo.contact.phone}`}
                  className="flex items-center gap-2 px-4 py-3 bg-terracotta-500 text-white rounded-lg hover:bg-terracotta-600 transition-colors justify-center font-medium shadow-terracotta"
                >
                  <Phone className="w-4 h-4" />
                  {businessInfo.contact.phone}
                </a>
                <a
                  href={`mailto:${businessInfo.contact.email}`}
                  className="flex items-center gap-2 px-4 py-3 border-2 border-sage-300 text-sage-700 rounded-lg hover:bg-sage-50 transition-colors justify-center font-medium"
                >
                  <Mail className="w-4 h-4" />
                  {businessInfo.contact.email}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
