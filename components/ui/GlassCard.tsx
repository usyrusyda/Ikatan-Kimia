import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', onClick, hoverEffect = true }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={hoverEffect ? { y: -8, boxShadow: '0 20px 60px rgba(0, 255, 255, 0.1)' } : {}}
      className={`
        relative overflow-hidden
        bg-white/5 dark:bg-white/5 bg-slate-900/5
        border border-white/10 dark:border-white/10 border-slate-900/10
        backdrop-blur-md rounded-xl p-6
        transition-colors duration-300
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      {children}
    </motion.div>
  );
};
