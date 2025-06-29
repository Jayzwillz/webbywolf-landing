// src/components/TestimonialCardsSection.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      iconImageSrc: "/images/lightning-icon.png",
      iconAlt: "Lightning icon",
      text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
      avatar: "/images/avatar1.png",
      name: "Jane Cooper",
    },
    {
      iconImageSrc: "/images/stars-icon.png",
      iconAlt: "Stars icon",
      text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
      avatar: "/images/avatar2.png",
      name: "Ralph Edwards",
    },
    {
      iconImageSrc: "/images/castle-icon.png",
      iconAlt: "Castle icon",
      text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
      avatar: "/images/avatar3.png",
      name: "Courtney Henry",
    },
    {
      iconImageSrc: "/images/clock-icon.png",
      iconAlt: "Clock icon",
      text: "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque,",
      avatar: "/images/avatar4.png",
      name: "Cameron Williamson",
    },
  ];

  const [index, setIndex] = useState(0);
  const itemsPerPage = 2;
  const maxIndex = Math.ceil(testimonials.length / itemsPerPage) - 1;

  const paginate = (dir: "next" | "prev") => {
    if (dir === "next" && index < maxIndex) setIndex((i) => i + 1);
    if (dir === "prev" && index > 0) setIndex((i) => i - 1);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.4 } },
  };

  return (
    <section className="w-full bg-blue-700 py-16 px-4 md:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative">
        {/* Headings */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-blue-300 text-sm md:text-base font-semibold mb-2"
        >
          Join other Sun harvesters
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8"
        >
          LOREM IPSUM DOLOR SIT AMET
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-blue-200 text-base md:text-lg mb-12 max-w-3xl mx-auto"
        >
          Dui euismod iaculis libero, aliquet vitae et elementum porttitor.
          Eleifend mi condimentum congue.
        </motion.p>

        {/* Testimonials Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex justify-center gap-6 flex-wrap">
            <AnimatePresence mode="wait">
              {testimonials
                .slice(
                  index * itemsPerPage,
                  index * itemsPerPage + itemsPerPage
                )
                .map((testimonial, idx) => (
                  <motion.div
                    key={testimonial.name}
                    className="bg-white rounded-lg p-6 pb-20 shadow-xl text-left relative w-full md:w-[48%] lg:w-[30%]"
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="relative flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 overflow-hidden">
                      <Image
                        src={testimonial.iconImageSrc}
                        alt={testimonial.iconAlt}
                        layout="fill"
                        objectFit="contain"
                      />
                    </div>
                    <p className="text-gray-800 text-base mb-4">
                      {testimonial.text}
                    </p>
                    <div className="absolute bottom-6 left-6 right-6 flex items-center">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <p className="text-gray-900 font-semibold text-sm">
                        {testimonial.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Arrows */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={() => paginate("prev")}
            disabled={index === 0}
            className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-blue-700 disabled:opacity-40 transition"
          >
            &larr;
          </button>
          <button
            onClick={() => paginate("next")}
            disabled={index === maxIndex}
            className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-blue-700 disabled:opacity-40 transition"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
