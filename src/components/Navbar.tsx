'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Link from 'next/link'

const navItems = [
  { label: 'Lorem Ipsum', href: '#' },
  { label: 'Lorem Ipsum', href: '#' },
  { label: 'Lorem Ipsum', href: '#' },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="w-24 h-10 relative">
          <Image
            src="/images/logo.png" // Replace with your actual logo
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Center nav */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <div key={index} className="group relative cursor-pointer">
              <span className="text-blue-600 font-medium flex items-center gap-1 hover:underline transition-all">
                {item.label}
                <ChevronDown size={16} />
              </span>

              {/* Example dropdown (hover trigger) */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 bg-white border p-4 shadow-md hidden group-hover:block"
              >
                <ul className="text-sm text-gray-700 space-y-2">
                  <li><Link href="#">Option 1</Link></li>
                  <li><Link href="#">Option 2</Link></li>
                  <li><Link href="#">Option 3</Link></li>
                </ul>
              </motion.div>
            </div>
          ))}
        </nav>

        {/* Sign In Button */}
        <button className="bg-white text-black px-6 py-2 rounded-md shadow-md hover:scale-105 transition-transform font-semibold">
          Sign In
        </button>
      </div>
    </header>
  )
}
