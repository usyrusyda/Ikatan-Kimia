
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Atom, Gamepad2, FlaskConical, FileText, MessageSquare, Award } from 'lucide-react';
import { GlassCard } from '../ui/GlassCard';
import { Modal } from '../ui/Modal';
import { MateriContent } from '../content/MateriContent';
import { GameContent } from '../content/GameContent';
import { LabContent } from '../content/LabContent';
import { LKPDContent } from '../content/LKPDContent';
import { ForumContent } from '../content/ForumContent';
import { BadgeContent } from '../content/BadgeContent';
import { useAppContext } from '../../context/AppContext';

const SectionHeader: React.FC<{ title: string; subtitle: string; icon: React.ReactNode; colorClass?: string }> = ({ title, subtitle, icon, colorClass = "text-brand-cyan" }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    className={`mb-12 flex items-center gap-4 border-l-4 border-current pl-6 ${colorClass}`}
  >
    <div className="p-3 rounded-xl bg-current opacity-20 text-inherit">
      {icon}
    </div>
    <div className="text-slate-800 dark:text-white">
      <h2 className="text-3xl font-orbitron font-black uppercase tracking-tighter">{title}</h2>
      <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium">{subtitle}</p>
    </div>
  </motion.div>
);

export const Modules: React.FC = () => {
  const { activeTab } = useAppContext();
  const [showLKPD, setShowLKPD] = useState(false);

  const renderModule = () => {
    switch(activeTab) {
      case 'materi':
        return (
          <div className="space-y-6">
            <SectionHeader title="Modul Materi" subtitle="Eksplorasi konsep dasar ikatan kimia secara mendalam." icon={<Atom size={32}/>} />
            <MateriContent />
          </div>
        );
      case 'game':
        return <GameContent />;
      case 'lab':
        return (
          <div className="space-y-6">
            <SectionHeader title="Virtual Lab" subtitle="Simulasi laboratorium 3D interaktif dari PhET." icon={<FlaskConical size={32}/>} />
            <LabContent />
          </div>
        );
      case 'case':
        return (
          <div className="space-y-12">
            <SectionHeader title="Studi Kasus" subtitle="Analisis fenomena nyata dengan kimia." icon={<FileText size={32}/>} />
            <GlassCard className="flex flex-col md:flex-row gap-8 items-center p-10 border-brand-cyan/20">
              <div className="w-full md:w-1/3 aspect-square bg-yellow-500/10 rounded-2xl flex items-center justify-center border border-yellow-500/30">
                <Atom size={80} className="text-yellow-400 animate-pulse" />
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-black mb-4 text-brand-cyan font-orbitron uppercase">Investigasi Emas & Logam</h3>
                <p className="text-lg opacity-80 mb-6 leading-relaxed">Mengapa emas berkilau? Bagaimana cara membedakan emas asli dan palsu menggunakan konsep ikatan kimia? Kerjakan LKPD untuk menemukan jawabannya.</p>
                <button 
                  onClick={() => setShowLKPD(true)} 
                  className="px-8 py-3 bg-brand-cyan text-brand-dark font-black rounded-full shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:scale-105 transition-transform"
                >
                  BUKA LKPD INVESTIGASI
                </button>
              </div>
            </GlassCard>
            <Modal isOpen={showLKPD} onClose={() => setShowLKPD(false)} title="LKPD: Investigasi Logam">
              <LKPDContent />
            </Modal>
          </div>
        );
      case 'forum':
        return <ForumContent />;
      case 'badge':
        return (
          <div className="space-y-6">
            <SectionHeader title="Achievements" subtitle="Pantau progres petualanganmu." icon={<Award size={32}/>} />
            <BadgeContent />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <main className="max-w-6xl mx-auto px-4 py-24 min-h-screen">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {renderModule()}
        </motion.div>
      </AnimatePresence>
    </main>
  );
};
