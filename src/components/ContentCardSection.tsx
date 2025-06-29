// src/components/ContentCardsSection.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link'; // For the "Learn More" links
import { motion } from 'framer-motion';

export default function ContentCardsSection() {
  // Data for each content card
  // IMPORTANT: Replace these 'src' paths with your actual image paths in the 'public' directory
  const cards = [
    {
      image: '/images/card1.png', // Placeholder for the first card image (e.g., city buildings)
      alt: 'Colorful city buildings',
      heading: 'Lorem ipsum dolor sit amet consectetur.',
      description:
        'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.',
      link: '#', // Replace with actual link
    },
    {
      image: '/images/card2.png', // Placeholder for the second card image (e.g., statue)
      alt: 'White statue of a person meditating',
      heading: 'Lorem ipsum dolor sit amet consectetur.',
      description:
        'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.',
      link: '#',
    },
    {
      image: '/images/card3.png', // Placeholder for the third card image (e.g., person in traditional attire)
      alt: 'Person in traditional Japanese attire',
      heading: 'Lorem ipsum dolor sit amet consectetur.',
      description:
        'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.',
      link: '#',
    },
    {
      image: '/images/card4.png', // Placeholder for the fourth card image (e.g., oranges on a tree)
      alt: 'Oranges on a tree branch',
      heading: 'Lorem ipsum dolor sit amet consectetur.',
      description:
        'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.',
      link: '#',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative w-full bg-white py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Subtle background lines/pattern - you'll need to create this image */}
      {/* Example: place a wavy line SVG/PNG at public/backgrounds/wavy-lines.svg */}
      <div
        className="absolute inset-0 bg-no-repeat bg-right-bottom opacity-20"
        style={{ backgroundImage: 'url("/backgrounds/wavy-lines.svg")', backgroundSize: 'contain' }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Top Text Block */}
        <div className="mb-12 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-blue-600 text-sm md:text-base font-semibold mb-2"
          >
            Lorem ipsum dolor sit amet
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            LOREM IPSUM DOLOR SIT
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto md:mx-0 leading-relaxed"
          >
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi
            porttitor ut aliquam mattis maecenas eget integer in nam. Non nisi iaculis at felis
            aliquet. Hendrerit tellus at purus lectus.
          </motion.p>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of card is visible
              transition={{ delay: index * 0.15 }} // Stagger cards
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-48 md:h-56 lg:h-64">
                <Image
                  src={card.image}
                  alt={card.alt}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-snug">
                  {card.heading}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed mb-4 flex-grow">
                  {card.description}
                </p>
                <Link href={card.link} className="text-blue-600 font-semibold hover:underline">
                  Learn More
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}