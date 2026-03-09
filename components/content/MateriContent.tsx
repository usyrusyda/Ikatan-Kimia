
import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Target, FlaskConical, Zap, Link as LinkIcon, Triangle, Settings } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

{
  title: "Ikatan Ion",
  desc: "Transfer elektron dan pembentukan ion",
  icon: <Zap size={32} className="text-yellow-400" />,
  path: "/materi/ikatan-ion"
},
{
  title: "Ikatan Kovalen",
  desc: "Berbagi pasangan elektron",
  icon: <LinkIcon size={32} className="text-purple-400" />,
  path: "/materi/ikatan-kovalen"
},
{
  title: "Kepolaran",
  desc: "Polar dan nonpolar",
  icon: <Target size={32} className="text-red-400" />,
  path: "/materi/kepolaran"
},
{
  title: "Ikatan Logam",
  desc: "Lautan elektron",
  icon: <Settings size={32} className="text-slate-400" />,
  path: "/materi/ikatan-logam"
},
{
  title: "Bentuk Molekul",
  desc: "Teori VSEPR",
  icon: <Triangle size={32} className="text-pink-400" />,
  path: "/materi/bentuk-molekul"
},
{
  title: "Gaya Antarmolekul",
  desc: "Gaya London, dipol, dan hidrogen",
  icon: <Orbit size={32} className="text-cyan-400" />,
  path: "/materi/gaya-antarmolekul"
}

export const MateriContent: React.FC = () => {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MATERIALS.map((item, i) => (
          <GlassCard key={i} className="group">
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-brand-cyan transition-colors">{item.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">{item.desc}</p>
            <button 
              onClick={() => window.open(item.link, '_blank')} 
              className="px-4 py-2 bg-brand-cyan text-brand-dark font-bold rounded-lg text-xs hover:scale-105 transition-transform"
            >
              PELAJARI
            </button>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};
