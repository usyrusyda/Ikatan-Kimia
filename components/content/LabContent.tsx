
import React from 'react';
import { FlaskConical, Shapes, Atom, Magnet } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

const LABS = [
  { title: "Molecule Shapes", link: "https://phet.colorado.edu/sims/html/molecule-shapes/latest/molecule-shapes_all.html", icon: <Shapes className="text-pink-500" size={40}/> },
  { title: "Build a Molecule", link: "https://phet.colorado.edu/en/simulations/build-a-molecule", icon: <Atom className="text-cyan-500" size={40}/> },
  { title: "Molecule Polarity", link: "https://phet.colorado.edu/in/simulations/molecule-polarity", icon: <Magnet className="text-yellow-500" size={40}/> }
];

export const LabContent: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {LABS.map((lab, i) => (
        <GlassCard key={i} className="flex flex-col items-center text-center p-8">
          <div className="mb-6 p-4 bg-white/5 rounded-2xl">{lab.icon}</div>
          <h3 className="text-xl font-bold mb-6">{lab.title}</h3>
          <button 
            onClick={() => window.open(lab.link, '_blank')} 
            className="w-full py-3 border-2 border-brand-cyan text-brand-cyan rounded-xl font-bold hover:bg-brand-cyan hover:text-black transition-all shadow-[0_0_15px_rgba(0,255,255,0.2)]"
          >
            BUKA LABORATORIUM
          </button>
        </GlassCard>
      ))}
    </div>
  );
};
