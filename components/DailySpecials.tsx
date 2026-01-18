'use client'

import { motion } from 'framer-motion'
import { Sparkles, Leaf, Wheat, Calendar } from 'lucide-react'
import specials from '@/data/specials.json'
import { formatPrice } from '@/lib/utils'

const DAY_LABEL: Record<string, string> = {
  monday: 'Monday', tuesday: 'Tuesday', wednesday: 'Wednesday',
  thursday: 'Thursday', friday: 'Friday', saturday: 'Saturday', sunday: 'Sunday'
}

// Type for a special item - flexible structure
interface SpecialItem {
  id: string
  category: string
  name: string
  description: string
  price: number
  dietary: string[]
}

export default function DailySpecials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.215, 0.610, 0.355, 1.000]
      }
    }
  }

  const getDietaryIcon = (dietary: string[]) => {
    if (dietary.includes('vegan')) return <Leaf className="w-4 h-4 text-emerald-600" />
    if (dietary.includes('vegetarian')) return <Leaf className="w-4 h-4 text-sage-600" />
    if (dietary.includes('gluten-free') || dietary.includes('gluten-free-option')) {
      return <Wheat className="w-4 h-4 text-butter-600" />
    }
    return null
  }

  const getDietaryBadgeClass = (dietary: string[]) => {
    if (dietary.includes('vegan')) return 'badge-vegan'
    if (dietary.includes('vegetarian')) return 'badge-vegetarian'
    if (dietary.includes('gluten-free') || dietary.includes('gluten-free-option')) {
      return 'badge-gluten-free'
    }
    return ''
  }

  // Cast to array - flexible schema
  const todaySpecials = specials.today as SpecialItem[]

  return (
    <section id="specials" className="py-20 lg:py-32 bg-gradient-to-b from-warm-white-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-butter-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-sage-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-butter-200 rounded-full mb-4">
            <Sparkles className="w-5 h-5 text-butter-700" />
            <span className="text-sm font-semibold text-butter-800">Fresh Today</span>
          </div>

          <h2 className="section-heading">
            Today's <span className="text-gradient-warm">Specials</span>
          </h2>
          <p className="section-subheading">
            Handcrafted daily with the freshest local ingredients
          </p>
        </motion.div>

        {/* Today's specials grid - DYNAMIC from array */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {todaySpecials.map((item) => (
            <motion.div key={item.id} variants={itemVariants} className="card group relative">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-xs font-semibold text-butter-700 uppercase tracking-wide">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-display text-coffee-900 mt-1 group-hover:text-sage-700 transition-colors">
                    {item.name}
                  </h3>
                </div>
                <span className="text-2xl font-display text-sage-600">
                  {formatPrice(item.price)}
                </span>
              </div>
              <p className="text-coffee-600 mb-4 leading-relaxed">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.dietary.map((diet) => (
                  <span
                    key={diet}
                    className={`badge-dietary ${getDietaryBadgeClass([diet])}`}
                  >
                    {getDietaryIcon([diet])}
                    <span className="capitalize">{diet.replace('-', ' ')}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Seasonal highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative bg-sage-gradient rounded-3xl p-8 md:p-12 text-white shadow-lifted overflow-hidden"
        >
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6" />
              <span className="font-semibold uppercase tracking-wide text-sage-100">
                Seasonal Menu
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-display mb-4">
              {specials.seasonalHighlight.title}
            </h3>
            <p className="text-lg text-sage-100 mb-6 max-w-2xl">
              {specials.seasonalHighlight.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {specials.seasonalHighlight.items.map((item) => (
                <span
                  key={item.id}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30"
                >
                  {item.name}
                </span>
              ))}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-butter-400/20 rounded-full blur-2xl" />
        </motion.div>

        {/* Weekly specials preview */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-display text-center text-coffee-900 mb-8">
            This Week's Soup Schedule
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {specials.weeklySpecials.map((day, index) => (
              <motion.div
                key={day.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="bg-white rounded-xl p-4 shadow-warm border border-warm-white-200 text-center hover:shadow-card hover:scale-105 transition-all"
              >
                <p className="text-xs font-semibold text-sage-600 uppercase tracking-wide mb-2">
                  {DAY_LABEL[day.day] || day.day}
                </p>
                <p className="text-sm text-coffee-700 font-medium">
                  {day.special}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
