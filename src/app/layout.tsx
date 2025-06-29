// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import LoadingScreen from '@/components/LoadingScreen'; // ✅ Import the loader

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WebbyWolf Landing Page',
  description: 'Pixel-perfect landing page built with Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingScreen /> {/* ✅ Always shows on mount */}
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
