
import React from 'react';
// Fix: Added Rocket to the import list to resolve the "Cannot find name 'Rocket'" error
import { Award, ShieldCheck, Zap, Microscope, Star, Rocket } from 'lucide-react';

const BADGES = [
  { name: 'Quantum Pioneer', desc: 'Selesaikan modul pertama.', icon: <Rocket size={32}/>, color: 'text-brand-cyan' },
  { name: 'Molecular Master', desc: 'Benar 100% di Quiz Arena.', icon: <Star size={32}/>, color: 'text-yellow-400' },
  { name: 'Atomic Alchemist', desc: 'Gunakan semua simulasi lab.', icon: <Microscope size={32}/>, color: 'text-brand-magenta' },
  { name: 'Noble Gas Scholar', desc: 'Aktif di forum diskusi.', icon: <ShieldCheck size={32}/>, color: 'text-green-400' },
];

export const BadgeContent: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {BADGES.map((badge, i) => (
        <div key={i} className="flex flex-col items-center p-8 bg-white/5 border border-white/10 rounded-3xl group hover:border-brand-cyan/40 transition-all">
          <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 bg-white/5 border-2 border-white/10 transition-transform group-hover:scale-110 ${i === 0 ? 'border-brand-cyan shadow-[0_0_20px_rgba(0,255,255,0.3)] ' + badge.color : 'opacity-40'}`}>
            {badge.icon}
          </div>
          <span className="font-orbitron font-bold text-sm text-center mb-2">{badge.name}</span>
          <p className="text-xs text-slate-500 text-center">{badge.desc}</p>
          {i !== 0 && <span className="mt-4 text-[10px] font-bold text-slate-600 uppercase tracking-widest">Locked</span>}
        </div>
      ))}
    </div>
  );
};
