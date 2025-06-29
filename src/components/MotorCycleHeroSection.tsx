'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function MotorcycleHeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center p-4 md:p-8 overflow-hidden bg-black">
      {/* Background Image */}
      <Image
        src="/images/motorcycle-bg.jpg"
        alt="Two people on motorcycles in a rainy city"
        fill
        className="object-cover z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Logo at top-left */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="absolute top-6 left-6 z-30 w-24 h-10 md:w-28 md:h-12"
      >
        <Image
          src="/images/logo.png" // Ensure logo exists in /public/images/
          alt="Company Logo"
          fill
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Hero Text Content */}
      <div className="relative z-20 max-w-5xl mx-auto text-white text-center px-4 mt-10 md:mt-16">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
        >
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.
        </motion.h1>

        {/* Paragraph 1 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-base md:text-lg mb-4 leading-relaxed"
        >
          Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum
          nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id
          luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisi porta massa diam
          condimentum nulla quam.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-base md:text-lg leading-relaxed"
        >
          Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum
          ultrices non. Ornare semper in tincidunt pellentesque cras mauris in vitae. At viverra
          quis eu malesuada vel et porttitor. Nulla luctus quam lacus non at. Tincidunt
          morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
        </motion.p>
      </div>
    </section>
  )
}
