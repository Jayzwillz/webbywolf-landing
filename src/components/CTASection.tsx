'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SimpleHeroCTASection() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="w-full bg-white py-16 px-4 md:py-20 lg:py-24 text-center overflow-hidden">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Logo Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-8"
        >
          <Image
            src="/images/logo.png" // ✅ Replace with your actual logo path
            alt="Company Logo"
            width={120} // Adjust to match your design scale
            height={40}
            priority
            className="mx-auto"
          />
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight max-w-2xl"
        >
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DUI.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2 }}
          className="text-gray-700 text-base md:text-lg leading-relaxed mb-10 max-w-xl"
        >
          Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.3 }}
        >
          <Link href="#" passHref>
            <motion.button
              className="group flex items-center justify-center px-8 py-3 font-semibold text-white bg-blue-600 rounded-full shadow-lg transition-all duration-300
                         hover:bg-blue-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
              whileTap={{ scale: 0.95 }}
            >
              Loerum Ipsum
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
