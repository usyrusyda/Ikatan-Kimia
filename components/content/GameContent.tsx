
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, FileText, Sparkles, Rocket, Gamepad, Gamepad2, Shapes, Magnet, Trophy } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';

const SectionHeader = ({ title, subtitle, icon, colorClass }: { title: string, subtitle: string, icon: React.ReactNode, colorClass: string }) => (
  <div className={`mb-8 flex items-center gap-4 border-l-4 border-current pl-6 ${colorClass}`}>
    <div className="p-3 rounded-xl bg-current opacity-20 text-inherit">
      {icon}
    </div>
    <div className="text-slate-800 dark:text-white">
      <h2 className="text-3xl font-orbitron font-black uppercase tracking-tighter">{title}</h2>
      <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium">{subtitle}</p>
    </div>
  </div>
);

export const GameContent: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* QUIZ SECTION */}
      <div className="space-y-8">
        <SectionHeader 
          title="🧠 Kuis Interaktif" 
          subtitle="Uji pemahamanmu tentang ikatan kimia melalui berbagai kuis edukatif berikut!" 
          icon={<Brain size={32}/>}
          colorClass="text-blue-400"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlassCard className="flex flex-col h-full border-blue-500/20">
            <div className="mb-4 p-3 bg-blue-500/10 rounded-xl w-fit text-blue-400"><FileText size={24} /></div>
            <h4 className="text-xl font-bold mb-2">Google Form Quiz</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-grow">Kuis konsep dasar ikatan kimia yang terhubung langsung ke Google Form.</p>
            <button onClick={() => window.open('https://share.google/Y95cCvedLwJmZMdl9', '_blank')} className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20">Mulai Kuis</button>
          </GlassCard>

          <GlassCard className="flex flex-col h-full border-indigo-500/20">
            <div className="mb-4 p-3 bg-indigo-500/10 rounded-xl w-fit text-indigo-400"><Sparkles size={24} /></div>
            <h4 className="text-xl font-bold mb-2">Wordwall: Ikatan Kimia</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-grow">Mainkan kuis interaktif dengan variasi soal dan mode permainan.</p>
            <button onClick={() => window.open('https://wordwall.net/resource/13606435/ikatan-kimia', '_blank')} className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-600/20">Main Sekarang</button>
          </GlassCard>

          <GlassCard className="flex flex-col h-full border-cyan-500/20">
            <div className="mb-4 p-3 bg-cyan-500/10 rounded-xl w-fit text-cyan-400"><Rocket size={24} /></div>
            <h4 className="text-xl font-bold mb-2">wayground</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-grow">Kuiz seru berbasis waktu untuk mengasah kecepatan berpikir dalam kimia!</p>
            <button onClick={() => window.open('https://wayground.com/admin/quiz/5ee219670ce084001ba711d9/kelas-10-ikatan-kimia', '_blank')} className="w-full py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-cyan-600/20">Main Game</button>
          </GlassCard>
        </div>
      </div>

      {/* GAME SECTION */}
      <div className="space-y-8">
        <SectionHeader 
          title="🎮 Game Edukatif" 
          subtitle="Belajar sambil bermain! Asah kemampuanmu lewat berbagai game kimia seru di bawah ini." 
          icon={<Gamepad size={32}/>}
          colorClass="text-brand-magenta"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GlassCard className="flex flex-col h-full border-pink-500/20">
            <div className="mb-4 p-3 bg-pink-500/10 rounded-xl w-fit text-pink-400"><Gamepad2 size={24} /></div>
            <h4 className="text-xl font-bold mb-2">Wordwall: Game Bersahabat</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-grow">Pertajam pemahamanmu lewat permainan interaktif bertema ikatan kimia.</p>
            <button onClick={() => window.open('https://wordwall.net/id/resource/52932462/games-bersahabat-materi-ikatan-kimiabagi-owen', '_blank')} className="w-full py-3 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-pink-600/20">Main Sekarang</button>
          </GlassCard>

          <GlassCard className="flex flex-col h-full border-purple-500/20">
            <div className="mb-4 p-3 bg-purple-500/10 rounded-xl w-fit text-purple-400"><Shapes size={24} /></div>
            <h4 className="text-xl font-bold mb-2">Qreatif: Bentuk Molekul</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-grow">Eksplorasi bentuk molekul dan ikatan melalui aplikasi interaktif Qreatif.</p>
            <button onClick={() => window.open('https://qreatif.id/apps/pages?id=qreatifid- bentuk-molekul', '_blank')} className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-purple-600/20">Mulai Eksplorasi</button>
          </GlassCard>

          <GlassCard className="flex flex-col h-full border-fuchsia-500/20">
            <div className="mb-4 p-3 bg-fuchsia-500/10 rounded-xl w-fit text-fuchsia-400"><Magnet size={24} /></div>
            <h4 className="text-xl font-bold mb-2">Qreatif: Polar & Nonpolar</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-grow">Uji kemampuanmu membedakan molekul polar dan nonpolar secara visual.</p>
            <button onClick={() => window.open('https://qreatif.id/apps/pages?id=qreatifid-ikatan-polarnonpolar', '_blank')} className="w-full py-3 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-fuchsia-600/20">Mulai Sekarang</button>
          </GlassCard>

          <GlassCard className="flex flex-col h-full border-amber-500/20 lg:col-start-2">
            <div className="mb-4 p-3 bg-amber-500/10 rounded-xl w-fit text-amber-400"><Trophy size={24} /></div>
            <h4 className="text-xl font-bold mb-2">Zep</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-grow">Game seru untuk mengasah kemampuan berpikir dalam kimia!</p>
            <button onClick={() => window.open('https://quiz.zep.us/id/play/qnMRgW', '_blank')} className="w-full py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-amber-600/20">Mulai Sekarang</button>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};
