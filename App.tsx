
import React, { useState, useEffect } from 'react';
import { AppProvider, useAppContext } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { BackgroundCanvas } from './components/layout/BackgroundCanvas';
import { Hero } from './components/sections/Hero';
import { Modules } from './components/sections/Modules';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onFinish }: { onFinish: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 1500);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-brand-dark flex items-center justify-center"
    >
      <div className="relative w-32 h-32 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-t-2 border-brand-cyan animate-spin"></div>
        <div className="font-orbitron font-bold text-white text-xs animate-pulse">INITIATING...</div>
      </div>
    </motion.div>
  );
};

const MainLayout: React.FC = () => {
  const { activeTab } = useAppContext();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundCanvas />
      
      {/* Navbar hanya muncul jika sudah masuk ke modul, atau tampilkan dock kecil */}
      <Navbar />

      <AnimatePresence mode="wait">
        {activeTab === 'home' ? (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10"
          >
            <Hero />
          </motion.div>
        ) : (
          <motion.div
            key="dashboard"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative z-10"
          >
            <Modules />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <AppProvider>
      <AnimatePresence>
        {loading && <Preloader onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && <MainLayout />}
    </AppProvider>
  );
};

export default App;
