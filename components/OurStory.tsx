'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Sprout, Award } from 'lucide-react'
import Image from 'next/image'
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
    <section id="story" className="py-20 lg:py-32 bg-gradient-to-b from-warm-white-50 via-white to-warm-white-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-sage-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-butter-200/30 rounded-full blur-3xl" />
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
              <p className="text-xl font-display text-coffee-900">
                {businessInfo.story.owner}
              </p>
              <p className="text-sm text-sage-600 font-medium">
                {businessInfo.story.ownerTitle}
              </p>
            </motion.div>
          </motion.div>

          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Cafe Interior Photo */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lifted">
              <Image
                src="/images/atmosphere/cafe-interior.jpg"
                alt="Village Cafe interior with warm, welcoming atmosphere"
                fill
                className="object-cover"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-900/30 to-transparent" />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-lg font-display">Cafe Interior Photo</p>
                <p className="text-sm opacity-80">Warm, welcoming atmosphere</p>
              </div>
            </div>

            {/* Accent decoration */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-butter-200/30 to-sage-200/30 rounded-3xl -z-10" />

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-lifted border-2 border-sage-100"
            >
              <p className="text-4xl font-display text-sage-600">
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
          <h3 className="text-3xl font-display text-center text-coffee-900 mb-12">
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
                  <div className="absolute inset-0 bg-sage-200/40 rounded-2xl blur-xl group-hover:bg-butter-200/40 transition-colors" />
                  <div className="relative w-16 h-16 mx-auto bg-sage-gradient rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sage">
                    <value.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                </div>
                <h4 className="text-xl font-display text-coffee-900 mb-2">
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
