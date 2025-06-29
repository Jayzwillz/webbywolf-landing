'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

type TabName = 'Research' | 'Plan' | 'Design';

// Create motion-enhanced Link component
const MotionLink = motion(Link);

export default function TabbedContentSection() {
  const [activeTab, setActiveTab] = useState<TabName>('Research');

  const tabContent: Record<TabName, { paragraph: string }> = {
    Research: {
      paragraph:
        'Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan. This is the content for Research tab.',
    },
    Plan: {
      paragraph:
        'This is the content for the Plan tab. Lorem ipsum dolor sit amet consectetur. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan. Varius lorem elit. Neque pellentesque donec.',
    },
    Design: {
      paragraph:
        'This is the content for the Design tab. Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Purus malesuada placerat arcu at enim elit in accumsan.',
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative w-full bg-white py-16 px-4 md:py-20 lg:py-24 overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-no-repeat bg-right-top opacity-30"
        // style={{
        //   backgroundImage: "url('/images/plus-pattern.svg')",
        //   backgroundSize: 'contain',
        // }}
      />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-8 relative z-10">
        {/* Left Block */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight"
          >
            LOREM IPSUM DOLOR SIT AMET
          </motion.h2>

          {/* Tabs */}
          <div className="flex justify-center lg:justify-start border-b border-gray-200 mb-8">
            {['Research', 'Plan', 'Design'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as TabName)}
                className={`px-6 py-3 text-lg font-medium transition-colors duration-300 ${
                  activeTab === tab
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content */}
          <motion.p
            key={activeTab}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: true }}
            className="text-gray-700 text-base md:text-lg leading-relaxed mb-8"
          >
            {tabContent[activeTab].paragraph}
          </motion.p>

          {/* CTA Link (fixed) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <MotionLink
              href="#"
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 group"
            >
              Check tools
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                &rarr;
              </span>
            </MotionLink>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="w-full lg:w-1/2 relative h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl"
        >
          <Image
            src="/images/handshake.jpg"
            alt="Two people shaking hands, symbolizing partnership"
            layout="fill"
            objectFit="cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
