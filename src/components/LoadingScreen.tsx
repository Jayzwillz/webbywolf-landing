// src/components/LoadingScreen.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: 'spring',
              stiffness: 120,
              damping: 15,
            }}
            className="flex flex-col items-center justify-center"
          >
            {/* Spinner */}
            <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>

            {/* Optional: Label */}
            <p className="text-sm text-blue-600 font-semibold">Loading...</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
