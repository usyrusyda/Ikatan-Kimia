
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Moon, Sun, Atom, ChevronRight, Menu, ChevronLeft } from 'lucide-react';
import { NAV_ITEMS } from '../../constants';
import { useAppContext } from '../../context/AppContext';

export const Navbar: React.FC = () => {
  const { isDark, toggleTheme, isSoundEnabled, toggleSound, playTone, activeTab, setActiveTab } = useAppContext();
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(true);

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    playTone(750, 0.05);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-start gap-2">
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="bg-brand-cyan/80 text-brand-dark p-3 rounded-full shadow-[0_0_15px_rgba(0,255,255,0.3)] border border-white/20 backdrop-blur-sm"
          >
            <Menu size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            className="bg-white/10 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full py-4 px-2 shadow-2xl flex flex-col items-center gap-3 relative"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white/20 dark:bg-black/60 p-1 rounded-full border border-white/10 text-slate-400 hover:text-white"
            >
              <ChevronLeft size={14} />
            </button>

            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-brand-cyan to-brand-magenta mb-1 cursor-pointer" onClick={() => handleNavClick('home')}>
              <Atom className="text-white" size={16} />
            </div>

            <div className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <div 
                  key={item.id} 
                  className="relative group"
                  onMouseEnter={() => item.isDropdown && setHoveredDropdown(item.id)}
                  onMouseLeave={() => item.isDropdown && setHoveredDropdown(null)}
                >
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`
                      flex items-center justify-center p-2.5 rounded-full transition-all duration-300 relative
                      ${activeTab === item.id 
                        ? 'bg-brand-cyan text-brand-dark shadow-[0_0_15px_rgba(0,255,255,0.5)]' 
                        : 'text-slate-500 dark:text-slate-400 hover:text-brand-cyan hover:bg-white/5'}
                    `}
                  >
                    {React.cloneElement(item.icon as React.ReactElement<any>, { size: 18 })}
                  </button>

                  <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-3 py-1.5 bg-black text-white text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                    {item.label}
                  </div>

                  <AnimatePresence>
                    {item.isDropdown && hoveredDropdown === item.id && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="absolute left-full top-0 ml-4 w-48 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-2xl flex flex-col gap-1 z-50"
                      >
                        {item.dropdownLinks?.map((link) => (
                          <a key={link.url} href={link.url} target="_blank" className="block px-3 py-2 text-xs text-slate-300 hover:text-white hover:bg-white/10 rounded-lg">
                            {link.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="w-8 h-[1px] bg-white/10 my-1"></div>

            <div className="flex flex-col items-center gap-2">
              <button onClick={toggleSound} className="p-2 rounded-full text-slate-500 hover:text-brand-cyan">
                {isSoundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
              </button>
              <button onClick={toggleTheme} className="p-2 rounded-full text-slate-500 hover:text-yellow-400">
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};
