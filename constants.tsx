import React from 'react';
import { Home, BookOpen, Gamepad2, FolderOpen, FlaskConical, MessageSquare, Award, Brain, Lightbulb, Wrench, Search, Scale, Puzzle } from 'lucide-react';
import { NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Beranda', icon: <Home size={20} /> },
  { id: 'materi', label: 'Materi', icon: <BookOpen size={20} /> },
  { id: 'game', label: 'Game', icon: <Gamepad2 size={20} /> },
  { 
    id: 'lab', 
    label: 'Lab', 
    icon: <FlaskConical size={20} />,
    isDropdown: true,
    dropdownLinks: [
      { label: 'Molecule Shapes', url: 'https://phet.colorado.edu/sims/html/molecule-shapes/latest/molecule-shapes_all.html' },
      { label: 'Build a Molecule', url: 'https://phet.colorado.edu/en/simulations/build-a-molecule' },
      { label: 'Molecule Polarity', url: 'https://phet.colorado.edu/in/simulations/molecule-polarity' }
    ]
  },
  { id: 'case', label: 'Studi Kasus', icon: <FolderOpen size={20} /> },
  { id: 'forum', label: 'Forum Diskusi', icon: <MessageSquare size={20} /> },
  { id: 'badge', label: 'Badge', icon: <Award size={20} /> },
];

export const OBJECTIVES = [
  { 
    title: 'Remember', 
    desc: 'Mengidentifikasi jenis-jenis ikatan kimia (ionik, kovalen, dan logam) serta unsur-unsur yang dapat membentuknya.', 
    icon: <Brain className="text-brand-cyan" size={32} />,
    emoji: '🧠'
  },
  { 
    title: 'Understand', 
    desc: 'Menjelaskan konsep kestabilan atom melalui aturan duplet dan oktet serta perbedaan antara ikatan ion dan ikatan kovalen.', 
    icon: <Lightbulb className="text-yellow-400" size={32} />,
    emoji: '💡'
  },
  { 
    title: 'Apply', 
    desc: 'Menuliskan dan menggambarkan struktur Lewis untuk senyawa ionik dan kovalen sederhana.', 
    icon: <Wrench className="text-brand-magenta" size={32} />,
    emoji: '🔧'
  },
  { 
    title: 'Analyze', 
    desc: 'Menganalisis polaritas suatu molekul berdasarkan perbedaan keelektronegatifan dan bentuk geometri molekul (VSEPR).', 
    icon: <Search className="text-blue-400" size={32} />,
    emoji: '🔍'
  },
  { 
    title: 'Evaluate', 
    desc: 'Mengevaluasi jenis dan kekuatan ikatan kimia yang memengaruhi sifat fisik (titik leleh, kelarutan, konduktivitas) suatu senyawa.', 
    icon: <Scale className="text-green-400" size={32} />,
    emoji: '⚖️'
  },
  { 
    title: 'Create (Opsional)', 
    desc: 'Merancang model atau simulasi digital 3D yang menunjukkan perbedaan struktur dan sifat antara ikatan ionik, kovalen, dan logam.', 
    icon: <Puzzle className="text-purple-400" size={32} />,
    emoji: '🧩'
  },
];