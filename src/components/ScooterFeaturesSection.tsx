// src/components/ScooterFeaturesSection.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ScooterFeaturesSection() {
  const pinIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-red-500 rotate-45"
    >
      <path
        fillRule="evenodd"
        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm0 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM15.375 12a.75.75 0 0 1-.75.75H9.375a.75.75 0 0 1-.75-.75V8.25a.75.75 0 0 1 .75-.75h5.25a.75.75 0 0 1 .75.75v3.75Z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <section className="relative w-full bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 relative z-10 text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.4 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DIGNISSIM TELLUS.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.4 }}
            className="text-gray-700 text-base md:text-lg mb-8 max-w-lg mx-auto lg:mx-0"
          >
            Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit laoreet urna sapien quam pulvinar. Aliquet est tortor tincidunt ultricies feugiat mauris. Massa in facilisis semper libero eget.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mb-10"
          >
            <Link href="#" passHref>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="group flex items-center justify-center px-8 py-3 font-semibold text-white bg-blue-600 rounded-full shadow-lg transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Loerum Ipsum
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Sticky Note Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, amount: 0.4 }}
            className="relative bg-gray-50 border border-gray-200 rounded-lg shadow-lg p-6 max-w-md mx-auto lg:mx-0"
          >
            <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3">
              {pinIcon}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Lorem ipsum dolor sit
            </h3>
            <p className="text-sm text-gray-700 mb-2">
              Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper.
            </p>
            <p className="text-sm text-gray-700 mb-2">
              Egestas congue mattis ut placerat vitae amet suspendisse fermentum velit. Nibh dolor nunc id tristique.
            </p>
            <p className="text-sm text-gray-700">
              Hac netus consectetur amet quisque scelerisque facilisi. Ultrices lectus viverra pharetra commodo.
            </p>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
          className="w-full lg:w-1/2 h-80 md:h-[500px] lg:h-[600px] relative rounded-lg overflow-hidden shadow-xl"
        >
          <Image
            src="/images/men-with-scooter.jpg"
            alt="Two men interacting with a scooter"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* Gradient Strip */}
      <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500" />
    </section>
  );
}
