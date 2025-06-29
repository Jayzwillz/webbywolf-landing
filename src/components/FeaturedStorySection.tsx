'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const featuredStories = [
  {
    id: 1,
    image: '/images/motorcycle-group.jpg',
    title: 'Artist & Investor',
    text: 'Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...',
    link: '#',
  },
  {
    id: 2,
    image: '/images/motorcycles-on-road.png',
    title: 'Street Racer & Mentor',
    text: 'Lorem ipsum dolor sit amet consectetur. Nisl ut sapien sed id sapien ut ut convallis sem. Et posuere egestas vel non pellentesque dignissim ...',
    link: '#',
  },
  {
    id: 3,
    image: '/images/men-with-scooter.jpg',
    title: 'Traveler & Builder',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. At vero eos et accusamus et iusto odio dignissimos ...',
    link: '#',
  },
];

export default function FeaturedStorySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentStory = featuredStories[currentIndex];

  return (
    <section className="w-full bg-white py-16 px-4 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight max-w-4xl mx-auto"
        >
          LOREM IPSUM DOLOR SIT AMET
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-700 text-base md:text-lg mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut aliquam et ac est nisi, interdum etiam dignissim.
        </motion.p>

        {/* Slide Section */}
        <div className="relative h-auto min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStory.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-6 lg:gap-0"
            >
              {/* Image */}
              <div className="w-full lg:w-3/5 xl:w-2/3 relative h-64 md:h-80 lg:h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={currentStory.image}
                  alt={currentStory.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Overlay Card */}
              <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 w-full lg:w-2/5 xl:w-1/2 -mt-16 lg:-ml-20 lg:mt-0 relative z-10">
                <h3 className="text-gray-900 font-bold text-xl md:text-2xl mb-4">{currentStory.title}</h3>
                <p className="text-gray-700 text-base leading-relaxed mb-6">{currentStory.text}</p>

                <Link
                  href={currentStory.link}
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 group"
                  aria-label={`Read more about ${currentStory.title}`}
                >
                  Read Full Story
                  <motion.span
                    whileTap={{ scale: 0.98 }}
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    &rarr;
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-12">
          {featuredStories.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 ${
                i === currentIndex ? 'bg-blue-600 scale-110' : 'bg-gray-300 hover:bg-blue-400'
              }`}
              aria-label={`Go to story ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
