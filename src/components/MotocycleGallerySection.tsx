// src/components/MotorcycleGallerySection.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function MotorcycleGallerySection() {
  return (
    <section className="relative w-full min-h-screen flex items-center py-16 px-4 md:py-20 lg:py-24 overflow-hidden">
      {/* Full Background Image */}
      <Image
        src="/images/grouped-bike.png" // <== REPLACE WITH YOUR COMPOSITE BACKGROUND IMAGE PATH (e.g., image_edf710.jpg)
        alt="Motorcycle riders as a background image"
        layout="fill"
        objectFit="cover"
        quality={80}
        priority // Load with high priority for this hero-like section
        className="z-0"
      />

      {/* Dark Overlay for Text Readability */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Content Block */}
      <div className="relative z-20 max-w-7xl mx-auto flex justify-center lg:justify-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center lg:text-left max-w-lg text-white" // Text color is white for dark background
        >
          {/* Small Heading */}
          <p className="text-gray-300 text-sm md:text-base font-semibold mb-2 uppercase">
            NO LIMITS
          </p>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            LOREM IPSUM DOLOR SIT<br />AMET
          </h2>

          {/* Description Paragraph */}
          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-8">
            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
          </p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <Link href="#" passHref>
              <motion.button
                className="group flex items-center justify-center px-8 py-3 font-semibold text-white bg-blue-600 rounded-full shadow-lg transition-all duration-300
                           hover:bg-blue-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black" // Ring offset color for dark background
                whileTap={{ scale: 0.95 }}
              >
                Loerum Ipsum
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}