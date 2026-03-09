
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AppContextType } from '../types';

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(true);
  const [isSoundEnabled, setIsSoundEnabled] = useState(true);
  const [isForumOpen, setIsForumOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [audioCtx, setAudioCtx] = useState<AudioContext | null>(null);

  useEffect(() => {
    const Ctx = window.AudioContext || (window as any).webkitAudioContext;
    setAudioCtx(new Ctx());
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
    playTone(isDark ? 880 : 440, 0.05);
  };

  const toggleSound = () => {
    setIsSoundEnabled(prev => !prev);
    if (!isSoundEnabled) playTone(600, 0.1);
  };

  const toggleForum = () => {
    setIsForumOpen(prev => !prev);
    if (!isForumOpen) playTone(500, 0.05);
  };

  const playTone = (freq = 880, duration = 0.06, type: OscillatorType = 'sine') => {
    if (!isSoundEnabled || !audioCtx) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();

    try {
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.type = type;
      o.frequency.value = freq;
      g.gain.value = 0.05;
      o.connect(g);
      g.connect(audioCtx.destination);
      o.start();
      g.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + duration);
      setTimeout(() => o.stop(), duration * 1000 + 50);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AppContext.Provider value={{ 
      isDark, toggleTheme, isSoundEnabled, toggleSound, playTone, 
      isForumOpen, toggleForum, activeTab, setActiveTab 
    }}>
      <div className={isDark ? 'dark' : ''}>
        <div className="min-h-screen bg-brand-light dark:bg-brand-dark text-slate-900 dark:text-slate-100 transition-colors duration-500">
           {children}
        </div>
      </div>
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
