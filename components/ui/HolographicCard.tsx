'use client';
import { motion } from 'framer-motion';

export function HolographicCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 shadow-xl"
    >
      <div className="absolute inset-0 bg-noise opacity-20 rounded-xl" />
      {children}
    </motion.div>
  );
}