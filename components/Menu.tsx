'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Coffee, UtensilsCrossed, Cookie, Sunrise, Leaf, Wheat } from 'lucide-react'
import menuData from '@/data/menu.json'
import { formatPrice } from '@/lib/utils'

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuData.categories[0].id)

  const categoryIcons = {
    coffee: Coffee,
    breakfast: Sunrise,
    lunch: UtensilsCrossed,
    baked: Cookie,
  }

  const getDietaryIcon = (dietary: string[]) => {
    if (dietary.includes('vegan')) return <Leaf className="w-3.5 h-3.5 text-emerald-600" />
    if (dietary.includes('vegetarian')) return <Leaf className="w-3.5 h-3.5 text-sage-600" />
    if (dietary.includes('gluten-free') || dietary.includes('gluten-free-option')) {
      return <Wheat className="w-3.5 h-3.5 text-butter-600" />
    }
    return null
  }

  const getDietaryBadgeClass = (diet: string) => {
    if (diet === 'vegan') return 'badge-vegan'
    if (diet === 'vegetarian') return 'badge-vegetarian'
    if (diet.includes('gluten-free')) return 'badge-gluten-free'
    return 'bg-warm-white-200 text-coffee-700'
  }

  const getDietaryLabel = (diet: string) => {
    return menuData.dietaryLegend[diet as keyof typeof menuData.dietaryLegend] || diet
  }

  return (
    <section id="menu" className="py-20 lg:py-32 bg-white relative">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">
            Our <span className="text-gradient-sage">Menu</span>
          </h2>
          <p className="section-subheading">
            From sunrise to sunset, we have something special for every moment
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {menuData.categories.map((category) => {
            const Icon = categoryIcons[category.id as keyof typeof categoryIcons]
            const isActive = activeCategory === category.id

            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`menu-tab ${isActive ? 'menu-tab-active' : 'menu-tab-inactive'}`}
              >
                {Icon && <Icon className="w-5 h-5 inline-block mr-2" />}
                {category.name}
              </button>
            )
          })}
        </motion.div>

        {/* Category description */}
        <AnimatePresence mode="wait">
          {menuData.categories.map((category) => {
            if (category.id !== activeCategory) return null

            return (
              <motion.div
                key={`desc-${category.id}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="text-center mb-10"
              >
                <p className="text-lg text-coffee-600 max-w-3xl mx-auto">
                  {category.description}
                </p>
              </motion.div>
            )
          })}
        </AnimatePresence>

        {/* Menu items grid */}
        <AnimatePresence mode="wait">
          {menuData.categories.map((category) => {
            if (category.id !== activeCategory) return null

            return (
              <motion.div
                key={`items-${category.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {category.items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="card-menu group relative"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex-1">
                        <h3 className="text-xl font-display text-coffee-900 group-hover:text-sage-700 transition-colors">
                          {item.name}
                        </h3>
                      </div>
                      <span className="text-xl font-display text-sage-600 ml-4">
                        {formatPrice(item.price)}
                      </span>
                    </div>

                    <p className="text-coffee-600 mb-3 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Dietary info and options */}
                    <div className="flex flex-wrap gap-2">
                      {item.dietary && item.dietary.length > 0 && (
                        <>
                          {item.dietary.map((diet) => (
                            <span
                              key={diet}
                              className={`badge-dietary ${getDietaryBadgeClass(diet)}`}
                            >
                              {getDietaryIcon([diet])}
                              <span>{getDietaryLabel(diet)}</span>
                            </span>
                          ))}
                        </>
                      )}
                    </div>

                    {/* Options if available */}
                    {item.options && item.options.length > 0 && (
                      <div className="mt-3 pt-3 border-t border-sage-100">
                        <p className="text-xs font-semibold text-sage-600 uppercase tracking-wide mb-2">
                          Milk Options:
                        </p>
                        <p className="text-sm text-coffee-600">
                          {item.options.join(' · ')}
                        </p>
                      </div>
                    )}

                    {/* Hover effect decoration */}
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-sage-100/30 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </motion.div>
            )
          })}
        </AnimatePresence>

        {/* Dietary legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-12 border-t border-sage-100"
        >
          <p className="text-center text-sm font-semibold text-coffee-700 mb-4">
            Dietary Information
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-sage-600" />
              <span className="text-sm text-coffee-600">Vegetarian</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-emerald-600" />
              <span className="text-sm text-coffee-600">Vegan</span>
            </div>
            <div className="flex items-center gap-2">
              <Wheat className="w-4 h-4 text-butter-600" />
              <span className="text-sm text-coffee-600">Gluten Free</span>
            </div>
          </div>
          <p className="text-center text-xs text-coffee-500 mt-4 max-w-2xl mx-auto">
            Please inform our staff of any allergies or dietary requirements. We prepare all food fresh in our kitchen where allergens are present.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
