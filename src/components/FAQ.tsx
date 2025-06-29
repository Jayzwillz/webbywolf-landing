// src/components/FAQsSection.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence, easeIn, easeOut } from 'framer-motion';

export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Set first item open by default

  const faqs = [
    {
      question: 'Lorem ipsum dolor sit amet consectetur?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.',
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Et massa neque ac feugiat. Nisl ut massa amet pellentesque. Ultricies nunc non scelerisque nisl egestas. Non pulvinar sed.',
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Diam lacus, dolor eu eu massa. Commodo leo aliquet mauris, elit eget quis. Velit diam nunc quisque fermentum. Nulla nec.',
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Arcu vitae enim sit pulvinar sit. Massa in scelerisque facilisi. Ipsum sit tortor et et. Faucibus mi viverra.',
    },
    {
      question: 'Lorem ipsum dolor sit amet consectetur?',
      answer: 'Lorem ipsum dolor sit amet consectetur. Vitae tristique proin vel, eu. Ultricies nunc non scelerisque nisl egestas. Non pulvinar sed tincidunt. Ut eget elit.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const answerVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: 'auto', transition: { duration: 0.3, ease: easeOut } }, // easeOut
    exit: { opacity: 0, height: 0, transition: { duration: 0.2, ease: easeIn } }, // easeIn
  };

  return (
    <section className="relative w-full bg-white py-16 px-4 md:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-10 text-center md:text-left"
        >
          FREQUENTLY ASKED QUESTIONS (FAQS)
        </motion.h2>

        <div className="border-t border-gray-200">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.05 }}
              className="border-b border-gray-200 py-6"
            >
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none group"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="text-gray-900 text-lg md:text-xl font-semibold leading-relaxed group-hover:text-blue-600 transition-colors duration-200">
                  {faq.question}
                </span>
                <span className="text-gray-500 text-2xl ml-4">
                  {openIndex === index ? '—' : '+'}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    variants={answerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-gray-600 text-base leading-relaxed pr-8">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dotted line at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-10 overflow-hidden">
        <div className="absolute inset-0 bg-[length:16px_16px] bg-repeat-x"
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #add8e6 2px, transparent 2px)' }}>
          {/* This creates a light blue dotted line effect */}
        </div>
      </div>
    </section>
  );
}