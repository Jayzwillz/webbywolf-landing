'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const bulletPoints = [
  {
    title: 'Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.',
    icon: '/images/bullet-icon.jpg',
  },
  {
    title: 'Pharetra erat lacus suspendisse ornare in morbi.',
    description:
      'Aliquam ultrices bibendum. Sed tellus volutpat congue in lectus amet. Faucibus ac euismod et risus iaculis lacus dignissim. Velit malesuada augue pretium feugiat lorem.',
    icon: '/images/bullet-icon.jpg',
  },
  {
    title: 'Feugiat habitant sed consectetur viverra diam.',
    description:
      'Vitae gravida vel velit porttitor. Duis diam sit sit purus lorem scelerisque. Nec imperdiet eget fames tincidunt blandit. Donec risus leo laoreet non.',
    icon: '/images/bullet-icon.jpg',
  },
]

export default function BulletPointsSection() {
  return (
    <section className="relative flex flex-col lg:flex-row w-full min-h-screen bg-white overflow-hidden">
      {/* Top Blue Bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-blue-600 z-10" />

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex-1 flex items-center justify-center px-6 md:px-12 lg:px-16 py-12"
      >
        <div className="max-w-3xl space-y-10">
          {/* Heading */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              LOREM IPSUM DOLOR SIT<br />AMET CONSECTETUR. EU<br />ELIT.
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend
              condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec pharetra
              erat lacus suspendisse ornare.
            </p>
          </div>

          {/* Bullet Points */}
          <div className="space-y-8">
            {bulletPoints.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <Image
  src="/images/bullet-icon.jpg"
  alt="Bullet icon"
  width={24}
  height={24}
  className="w-6 h-6 object-contain"
/>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Image Right */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex-1 flex items-center justify-center px-6 md:px-10 py-10"
      >
        <div className="relative w-full max-w-lg h-[400px] md:h-[550px] rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/images/men-discussing.jpg"
            alt="Two men discussing"
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>
      </motion.div>

      {/* Bottom Gradient Bar */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 z-10" />
    </section>
  )
}
