'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Sprout, Award } from 'lucide-react'
import businessInfo from '@/app/data/business-info.json'

export default function OurStory() {
  const values = [
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every dish is prepared with care and attention to detail',
    },
    {
      icon: Sprout,
      title: 'Locally Sourced',
      description: 'We partner with local farmers and producers',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'A gathering place for neighbors and friends',
    },
    {
      icon: Award,
      title: 'Quality Matters',
      description: 'Only the finest ingredients make it to your plate',
    },
  ]

  return (
    <section id="story" className="py-20 lg:py-32 bg-gradient-to-b from-cream-50 via-white to-cream-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-sage-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-terracotta-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">
            {businessInfo.story.title}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Story text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {businessInfo.story.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="text-lg text-coffee-600 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Owner signature */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="pt-6 border-t border-sage-200"
            >
              <p className="text-xl font-display font-bold text-coffee-900">
                {businessInfo.story.owner}
              </p>
              <p className="text-sm text-sage-600 font-medium">
                {businessInfo.story.ownerTitle}
              </p>
            </motion.div>
          </motion.div>

          {/* Visual element - could be replaced with actual photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Placeholder for cafe photo */}
            <div className="relative aspect-[4/5] bg-gradient-to-br from-cream-200 to-sage-200 rounded-3xl overflow-hidden shadow-2xl">
              {/* Image placeholder with decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <Heart className="w-20 h-20 text-sage-400 mx-auto mb-4" />
                  <p className="text-2xl font-display font-bold text-coffee-700">
                    Cafe Interior Photo
                  </p>
                  <p className="text-coffee-500 mt-2">
                    Warm, welcoming atmosphere
                  </p>
                </div>
              </div>

              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/20 to-transparent" />
            </div>

            {/* Accent decoration */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-terracotta-300/20 to-sage-300/20 rounded-3xl -z-10" />

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl border-2 border-sage-100"
            >
              <p className="text-4xl font-display font-bold text-sage-600">
                {businessInfo.established}
              </p>
              <p className="text-sm text-coffee-600 font-semibold">
                Est. {businessInfo.established}
              </p>
              <p className="text-xs text-coffee-500 mt-1">
                {new Date().getFullYear() - businessInfo.established}+ years serving our community
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Values grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-display font-bold text-center text-coffee-900 mb-12">
            What We <span className="text-gradient-sage">Believe In</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center group"
              >
                <div className="relative mb-4 inline-block">
                  <div className="absolute inset-0 bg-sage-200/40 rounded-2xl blur-xl group-hover:bg-terracotta-200/40 transition-colors" />
                  <div className="relative w-16 h-16 mx-auto bg-gradient-to-br from-sage-500 to-sage-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sage">
                    <value.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                </div>
                <h4 className="text-xl font-display font-bold text-coffee-900 mb-2">
                  {value.title}
                </h4>
                <p className="text-coffee-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
