// src/components/AppDownloadSection.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AppDownloadSection() {
  return (
    <section className="w-full bg-white py-16 px-4 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {/* Left Content Block */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 text-center lg:text-left"
        >
          {/* Small Heading */}
          <p className="text-blue-600 text-sm md:text-base font-semibold mb-2">
            Lorem Ipsum
          </p>

          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Lorem Ipsum Dolor<br />Sit Amet
          </h2>

          {/* Description Paragraph */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8 max-w-lg lg:max-w-none mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.
          </p>

          {/* App Download Buttons */}
          <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Link href="#" passHref>
                <motion.div
                  className="inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src="/images/google-play-badge.png" // <== REPLACE THIS PATH with your Google Play badge
                    alt="Get it on Google Play"
                    width={150} // Adjust width as needed for your badge image
                    height={45} // Adjust height as needed for your badge image
                    className="h-auto" // Maintain aspect ratio
                  />
                </motion.div>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Link href="#" passHref>
                <motion.div
                  className="inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src="/images/app-store-badge.png" // <== REPLACE THIS PATH with your App Store badge
                    alt="Download on the App Store"
                    width={130} // Adjust width as needed for your badge image
                    height={45} // Adjust height as needed for your badge image
                    className="h-auto" // Maintain aspect ratio
                  />
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image Block (Hand holding Phone) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0"
        >
          <div className="relative w-64 h-auto md:w-80 lg:w-96">
            <Image
              src="/images/phone-in-hand.png" // <== REPLACE THIS PATH with your phone image (from image_ee6b11.png)
              alt="Hand holding a smartphone"
              width={400} // Set a max width for the image
              height={500} // Set a max height (adjust based on your image's aspect ratio)
              className="object-contain"
              priority // Prioritize loading for this key visual
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}