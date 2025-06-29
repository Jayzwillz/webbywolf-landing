'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function FeaturesWithImageSection() {
  const bulletPoints = [
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
    'Lorem Ipsum',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative w-full bg-gray-50 pt-16 lg:pt-0 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center bg-white shadow-lg lg:min-h-[600px]">
        {/* Left Image Block */}
        <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true, amount: 0.3 }}
  className="relative w-full lg:w-1/2 h-80 lg:h-[600px]"
>
  <Image
    src="/images/motorcycles-on-road.png"
    alt="Two motorcycles riding on the road"
    fill
    priority
    className="object-cover"
  />
</motion.div>


        {/* Right Content Block */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center text-center lg:text-left"
        >
          <p className="text-blue-600 text-sm md:text-base font-semibold mb-2">
            Lorem ipsum
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. ENIM DONEC.
          </h2>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
            Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.
          </p>

          {/* Bullet Points */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            {bulletPoints.map((text, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                className="text-gray-800 font-medium"
              >
                {text}
              </motion.p>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="flex justify-center lg:justify-start"
          >
            <Link href="#" passHref>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center px-8 py-3 font-semibold text-white bg-blue-600 rounded-full shadow-lg transition-all duration-300
                           hover:bg-blue-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white"
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

      {/* Bottom Gradient Strip */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-blue-500 via-green-500 to-green-300" />
    </section>
  );
}
