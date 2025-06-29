'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 12 },
  },
};

export default function Footer() {
  const footerColumns = [
    {
      title: 'Products',
      links: ['Motorcycles', 'Scooters', 'Electric Bikes', 'Accessories'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Newsroom', 'Contact'],
    },
    {
      title: 'Support',
      links: ['Help Center', 'Warranty', 'Find a Dealer'],
    },
    {
      title: 'Legal',
      links: ['Terms of Service', 'Privacy Policy'],
    },
  ];

  return (
    <footer className="w-full bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-10"
        >
          {/* Logo Section */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1 flex justify-center lg:justify-start"
          >
            <Image
              src="/images/logo.png" // ✅ Replace with your logo path
              alt="Company Logo"
              width={140}
              height={40}
              priority
              className="object-contain"
            />
          </motion.div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerColumns.map((column, i) => (
              <motion.div key={i} variants={itemVariants}>
                <h3 className="text-white font-semibold text-base mb-4">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link, j) => (
                    <li key={j}>
                      <Link
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-slate-700"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© 2025 WebbyWolf. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
