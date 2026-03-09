
import React from 'react';
import { motion } from 'framer-motion';
import { Atom, Target, FlaskConical, Zap, Link as LinkIcon, Triangle, Settings } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

const MATERIALS = [
  { title: "Konfigurasi Elektron", desc: "Visualisasi pengisian orbital.", icon: <Atom size={32} className="text-blue-400" />, link: "https://read.bookcreator.com/fyO8AH2rOhW11nFZCEarrYxjQNm2/yUiTQ77_RX-RYVIsA4sVzw/DLAECQIuSz-57INREGp-Ig" },
  { title: "Aturan Oktet & Duplet", desc: "Kestabilan melalui pengisian elektron.", icon: <Target size={32} className="text-red-400" />, link: "https://www.youtube.com/watch?v=qg1L1SbG0oA" },
  { title: "Struktur Lewis", desc: "Representasi titik elektron.", icon: <FlaskConical size={32} className="text-green-400" />, link: "https://www.webqc.org/lewis_structure_generator.php" },
  { title: "Ikatan Ionik", desc: "Transfer elektron & pembentukan ion.", icon: <Zap size={32} className="text-yellow-400" />, link: "https://share.google/4DkXK8QKAs3uNfpZX" },
  { title: "Ikatan Kovalen", desc: "Berbagi pasangan elektron.", icon: <LinkIcon size={32} className="text-purple-400" />, link: "https://share.google/Alx4cwQj6ZlzzG4in" },
  { title: "Polaritas & Geometri", desc: "Bentuk molekul & momen dipol.", icon: <Triangle size={32} className="text-pink-400" />, link: "https://share.google/6vlezl8hArcECQLOc" },
  { title: "Ikatan Logam", desc: "Elektron delokalisasi.", icon: <Settings size={32} className="text-slate-400" />, link: "https://p2k.stekom.ac.id/ensiklopedia/Ikatan_logam" }
];

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
