'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Coffee, Menu, X, Phone, Mail } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import businessInfo from '@/app/data/business-info.json'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#menu', label: 'Menu' },
    { href: '#specials', label: 'Daily Specials' },
    { href: '#story', label: 'Our Story' },
    { href: '#contact', label: 'Visit Us' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-card border-b border-sage-100' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="section-container">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-sage-400 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity" />
              <div className="relative w-11 h-11 rounded-full bg-sage-gradient flex items-center justify-center shadow-sage">
                <Coffee className="w-6 h-6 text-white" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-display text-coffee-900 group-hover:text-sage-600 transition-colors">
                {businessInfo.name}
              </h1>
              <p className="text-xs text-sage-600 font-medium -mt-0.5">
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
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`tel:${businessInfo.contact.phone}`}
              className="btn-secondary text-sm px-5 py-2.5"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">Call Us</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 text-coffee-700 hover:text-sage-600 hover:bg-sage-50 rounded-xl transition-all"
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
            <nav className="px-5 py-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-coffee-700 hover:text-sage-600 font-medium py-3 px-4 rounded-xl hover:bg-sage-50 transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href={`tel:${businessInfo.contact.phone}`}
                  className="btn-secondary w-full justify-center"
                >
                  <Phone className="w-4 h-4" />
                  {businessInfo.contact.phone}
                </a>
                <a
                  href={`mailto:${businessInfo.contact.email}`}
                  className="btn-outline w-full justify-center"
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
