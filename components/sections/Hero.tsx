import React from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles } from 'lucide-react';
import { OBJECTIVES } from '../../constants';
import { useAppContext } from '../../context/AppContext';

export const Hero: React.FC = () => {
  const { playTone, setActiveTab } = useAppContext();

  const handleStart = () => {
    playTone(900, 0.1, 'sawtooth');
    setActiveTab('materi');
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-24">
      <div className="max-w-6xl w-full mx-auto space-y-16">
        
        {/* Main Title Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-brand-cyan/10 blur-3xl rounded-full -z-10"
          />
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-cyan/30 bg-brand-cyan/5 text-brand-cyan text-xs font-bold font-orbitron mb-6">
             <Sparkles size={14} /> WELCOME TO THE QUANTUM REALM
          </div>

          <h1 className="font-orbitron text-5xl md:text-8xl font-black mb-8 leading-none tracking-tighter">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan via-white to-brand-magenta">
              IKATAN KIMIA
            </span>
            <br />
            <span className="text-slate-800 dark:text-white text-3xl md:text-5xl opacity-80 uppercase">PETUALANGAN MOLEKUL</span>
          </h1>
          
          <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-poppins font-medium">
            Platform pembelajaran imersif untuk mahasiswa. Kuasai konsep ikatan atom melalui laboratorium virtual, 
            tantangan interaktif, dan bantuan asisten AI.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button 
            onClick={handleStart}
            className="group relative px-12 py-5 rounded-full bg-brand-cyan text-brand-dark font-orbitron font-black tracking-widest shadow-[0_0_30px_rgba(0,255,255,0.4)] hover:shadow-brand-cyan transition-all hover:-translate-y-1 flex items-center gap-4 mx-auto"
          >
            <span>MULAI PETUALANGAN</span>
            <div className="bg-brand-dark text-brand-cyan p-1.5 rounded-full group-hover:translate-x-1 transition-transform">
              <Play size={16} fill="currentColor" />
            </div>
          </button>
        </motion.div>

        {/* Learning Objectives Grid */}
        <div className="space-y-10 pt-10">
          <div className="flex flex-col items-center gap-2">
            <div className="h-1 w-20 bg-brand-magenta rounded-full"></div>
            <h3 className="font-orbitron font-black text-2xl tracking-widest uppercase text-slate-400">Target Belajar</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {OBJECTIVES.map((obj, i) => (
              <motion.div
                key={obj.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                tabIndex={0}
                className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-brand-cyan/50 hover:bg-white/10 transition-all cursor-default shadow-xl backdrop-blur-sm flex flex-col items-start gap-4 outline-none focus:ring-2 focus:ring-brand-cyan"
              >
                <div className="text-4xl filter drop-shadow-[0_0_8px_rgba(0,255,255,0.3)] group-hover:scale-125 transition-transform duration-300">
                  {obj.emoji}
                </div>
                <div>
                  <h4 className="font-orbitron font-black text-xl text-brand-cyan mb-3 tracking-tight group-hover:text-white transition-colors">
                    {obj.title}
                  </h4>
                  <p className="text-slate-400 group-hover:text-slate-200 text-sm leading-relaxed transition-colors font-poppins">
                    {obj.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};