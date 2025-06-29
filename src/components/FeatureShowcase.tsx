'use client'

import Image from 'next/image'
import { Phone } from 'lucide-react'
import { motion } from 'framer-motion'

const thumbnails = [
  {
    img: '/images/thumb1.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.',
  },
  {
    img: '/images/thumb2.jpg',
    text: 'Lorem ipsum dolor sit amet consectetur. Dictum at ac et tellus faucibus una ullamcorper id dui cursus. Venenatis.',
  },
  {
    img: '/images/thumb3.jpg',
    text: 'Lorem ipsum nisl morbi metus gravida eu facilisis enim. Ut diam auctor tortor tincidunt.',
  },
]

export default function FeatureShowcase() {
  return (
    <section className="bg-white py-16 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 items-start">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 space-y-6"
        >
          {/* Blue label */}
          <p className="text-blue-600 font-semibold uppercase text-sm">
            Lorem ipsum dolor sit
          </p>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            LOREM IPSUM <br /> DOLOR SIT AMET
          </h2>

          {/* Description */}
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi
            porttitor ut aliquam mattis maecenas eget integer in diam. Non nisi facilisis at felis
            aliquet. Hendrerit tellus at purus luctus.
          </p>

          {/* Thumbnails */}
          <div className="space-y-4">
            {thumbnails.map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <Image
                  src={item.img}
                  alt={`Thumbnail ${index + 1}`}
                  width={60}
                  height={60}
                  className="rounded-md object-cover"
                />
                <p className="text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4 pt-2">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-blue-700 transition-all">
              Lorem Ipsum <Phone size={16} />
            </button>
            <span className="text-blue-800 font-semibold">123456789</span>
          </div>
        </motion.div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full md:w-1/2 h-[400px] md:h-[500px] rounded-md overflow-hidden shadow-md"
        >
          <Image
            src="/images/feature-bike.jpg" // Replace with your actual image
            alt="Motorcycles"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}
