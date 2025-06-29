'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ClientLogosSection() {
  const logos = [
    { src: '/images/hero.png', alt: 'Hero MotoCorp Logo' },
    { src: '/images/honda.png', alt: 'Honda Logo' },
    { src: '/images/bajaj.png', alt: 'Bajaj Logo' },
    { src: '/images/tvs.png', alt: 'TVS Logo' },
    { src: '/images/royal-enfield.png', alt: 'Royal Enfield Logo' },
    { src: '/images/yamaha.png', alt: 'Yamaha Logo' },
    { src: '/images/ktm.png', alt: 'KTM Logo' },
    { src: '/images/ather.png', alt: 'Ather Energy Logo' },
    { src: '/images/ola-electric.png', alt: 'Ola Electric Logo' },
    { src: '/images/revolt.png', alt: 'Revolt Motors Logo' },
    { src: '/images/ultraviolette.png', alt: 'Ultraviolette Automotive Logo' },
    { src: '/images/tork-motors.png', alt: 'Tork Motors Logo' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section className="w-full bg-white py-16 px-4 md:py-20 lg:py-24">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-12 max-w-3xl mx-auto"
      >
        LOREM IPSUM DOLOR SIT AMET CONSECTETUR. COMMODO LEO AMET.
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl mx-auto items-center justify-items-center"
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="w-full h-20 sm:h-24 flex items-center justify-center p-2 transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={100}
              height={50}
              className="object-contain max-h-full"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
