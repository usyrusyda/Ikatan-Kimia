import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-6 text-center relative z-10 border-t border-white/5 bg-slate-950/30 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6">
        <p className="font-orbitron font-bold text-sm text-slate-400 mb-1">
          ✨ Dikembangkan oleh Rusyda Ramadhani — Ikatan Kimia
        </p>
        <p className="text-xs text-slate-600 dark:text-slate-500">
          © 2025 Petualangan Ikatan Kimia. All rights reserved.
        </p>
      </div>
    </footer>
  );
};