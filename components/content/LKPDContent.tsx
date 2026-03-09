import React, { useState } from 'react';
import { Video, PenTool, BookOpen, Target, CheckCircle, Users, Send } from 'lucide-react';

export const LKPDContent: React.FC = () => {
  // State untuk menyimpan data form
  const [formData, setFormData] = useState({
    groupName: '',
    className: '',
    members: '',
    problem: '',
    investigation: '',
    solution: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSendEmail = () => {
    const { groupName, className, members, problem, investigation, solution } = formData;

    // Validasi sederhana
    if (!groupName || !className) {
      alert("Mohon isi Nama Kelompok dan Kelas terlebih dahulu.");
      return;
    }

    // Email tujuan
    const emailTo = "rusyda.ramadhani.2203316@students.um.ac.id";
    
    // Subjek Email
    const subject = `[LKPD LOGAM] ${groupName} - ${className}`;

    // Isi Body Email
    const body = `
HASIL PENGERJAAN LKPD: IKATAN LOGAM
------------------------------------------------
IDENTITAS
Nama Kelompok : ${groupName}
Kelas         : ${className}
Anggota       : 
${members}

------------------------------------------------
1. RUMUSAN MASALAH
${problem}

2. HASIL PENYELIDIKAN
${investigation}

3. GAGASAN SOLUSI
${solution}

------------------------------------------------
Dikirim melalui Web Petualangan Ikatan Kimia
    `.trim();

    // Membuka email client default
    window.location.href = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20 font-poppins text-slate-800 dark:text-slate-200">
      
      {/* Header LKPD */}
      <div className="text-center space-y-4 border-b pb-8 border-dashed border-slate-300 dark:border-slate-700">
        <h1 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-magenta font-orbitron">
          LKPD: IKATAN LOGAM
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 font-bold">Lembar Kerja Peserta Didik Berbasis Masalah</p>
      </div>

      {/* Identitas */}
      <div className="bg-yellow-50 dark:bg-yellow-900/10 p-6 rounded-2xl border border-yellow-200 dark:border-yellow-700/30 shadow-sm">
        <div className="flex items-center gap-2 mb-4 text-yellow-600 dark:text-yellow-500 font-bold border-b border-yellow-200 dark:border-yellow-700/30 pb-2">
            <Users size={20} /> Identitas Kelompok
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-bold mb-1">Nama Kelompok:</label>
              <input 
                type="text" 
                name="groupName"
                value={formData.groupName}
                onChange={handleChange}
                className="w-full bg-white dark:bg-black/20 border-b-2 border-slate-300 focus:border-brand-cyan outline-none px-3 py-2 transition-colors rounded-t-md" 
                placeholder="Contoh: Kelompok 1"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-1">Kelas:</label>
              <input 
                type="text" 
                name="className"
                value={formData.className}
                onChange={handleChange}
                className="w-full bg-white dark:bg-black/20 border-b-2 border-slate-300 focus:border-brand-cyan outline-none px-3 py-2 transition-colors rounded-t-md" 
                placeholder="Contoh: X IPA 2"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Anggota Kelompok:</label>
            <textarea 
              name="members"
              rows={3} 
              value={formData.members}
              onChange={handleChange}
              className="w-full bg-white dark:bg-black/20 border-2 border-slate-200 dark:border-slate-700 rounded-lg p-2 focus:border-brand-cyan outline-none transition-colors" 
              placeholder="1. ...&#10;2. ...&#10;3. ..."
            ></textarea>
          </div>
        </div>
      </div>

      {/* Tujuan & Indikator */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-2xl border border-blue-200 dark:border-blue-700/30">
          <h3 className="font-bold text-blue-700 dark:text-blue-400 mb-3 flex items-center gap-2 font-orbitron">
            <Target size={20} /> TUJUAN PEMBELAJARAN
          </h3>
          <ul className="list-disc list-inside text-sm space-y-2 opacity-90 leading-relaxed">
            <li>Peserta didik dapat menyebutkan sifat-sifat ikatan logam.</li>
          </ul>
        </div>
        <div className="bg-green-50 dark:bg-green-900/10 p-6 rounded-2xl border border-green-200 dark:border-green-700/30">
          <h3 className="font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2 font-orbitron">
            <CheckCircle size={20} /> INDIKATOR PENCAPAIAN
          </h3>
          <ul className="list-disc list-inside text-sm space-y-2 opacity-90 leading-relaxed">
            <li>Mengetahui ciri-ciri emas palsu dan emas asli.</li>
            <li>Menyebutkan langkah-langkah untuk menghindari pembelian emas palsu.</li>
          </ul>
        </div>
      </div>

      {/* Kegiatan Pembelajaran */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 border-b border-white/10 pb-2">
          <div className="bg-brand-magenta text-white p-2 rounded-lg shadow-lg shadow-brand-magenta/20">
            <Video size={24} />
          </div>
          <h2 className="text-2xl font-bold font-orbitron">Langkah Kegiatan</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Video 1 */}
          <div className="bg-white dark:bg-white/5 p-4 rounded-2xl border border-slate-200 dark:border-white/10 shadow-lg">
            <h3 className="font-bold mb-4 text-sm md:text-base">1. Amati video masalah: "Proses Pembuatan Emas"</h3>
            <div className="aspect-video rounded-xl overflow-hidden bg-black shadow-inner">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/HrItemeShLM" 
                title="Proses Pembuatan Emas" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video 2 */}
          <div className="bg-white dark:bg-white/5 p-4 rounded-2xl border border-slate-200 dark:border-white/10 shadow-lg">
            <h3 className="font-bold mb-4 text-sm md:text-base">2. Amati video masalah: "Maraknya Emas Palsu"</h3>
            <div className="aspect-video rounded-xl overflow-hidden bg-black shadow-inner">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/bp3XbdlwRLU" 
                title="Maraknya Emas Palsu" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Diskusi Form */}
      <div className="space-y-8">
        <div className="flex items-center gap-3 border-b border-white/10 pb-2">
          <div className="bg-brand-cyan text-black p-2 rounded-lg shadow-lg shadow-brand-cyan/20">
            <PenTool size={24} />
          </div>
          <h2 className="text-2xl font-bold font-orbitron">Hasil Diskusi</h2>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-white/5 p-6 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm hover:border-brand-magenta/50 transition-colors">
            <label className="block text-lg font-bold mb-2 text-brand-magenta">Rumusan Masalah</label>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Diskusikan rumusan masalah yang didapat setelah mengamati video tersebut.</p>
            <textarea 
              name="problem"
              value={formData.problem}
              onChange={handleChange}
              className="w-full h-32 bg-slate-50 dark:bg-black/40 border border-slate-300 dark:border-white/10 rounded-xl p-4 focus:ring-2 focus:ring-brand-magenta outline-none transition-all resize-y" 
              placeholder="Tuliskan rumusan masalah di sini..."
            ></textarea>
          </div>

          <div className="bg-white dark:bg-white/5 p-6 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm hover:border-blue-500/50 transition-colors">
            <label className="block text-lg font-bold mb-2 text-blue-600 dark:text-blue-400">Penyelidikan Kelompok & Pakar</label>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Lakukan kajian literasi dan penyelidikan bersama kelompok.</p>
            <textarea 
              name="investigation"
              value={formData.investigation}
              onChange={handleChange}
              className="w-full h-40 bg-slate-50 dark:bg-black/40 border border-slate-300 dark:border-white/10 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-y" 
              placeholder="Tuliskan hasil penyelidikan di sini..."
            ></textarea>
          </div>

          <div className="bg-white dark:bg-white/5 p-6 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm hover:border-green-500/50 transition-colors">
            <label className="block text-lg font-bold mb-2 text-green-600 dark:text-green-400">Gagasan Solusi Masalah</label>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Diskusikan gagasan solusi masalah yang ditemukan dari hasil penyelidikan.</p>
            <textarea 
              name="solution"
              value={formData.solution}
              onChange={handleChange}
              className="w-full h-32 bg-slate-50 dark:bg-black/40 border border-slate-300 dark:border-white/10 rounded-xl p-4 focus:ring-2 focus:ring-green-500 outline-none transition-all resize-y" 
              placeholder="Tuliskan solusi di sini..."
            ></textarea>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-100 dark:bg-white/5 p-6 rounded-2xl border border-slate-200 dark:border-white/10 sticky bottom-4 shadow-2xl backdrop-blur-lg">
        <div className="text-sm text-slate-500 dark:text-slate-400">
          Pastikan semua kolom telah terisi dengan benar sebelum mengirim.
        </div>
        <button 
          onClick={handleSendEmail}
          className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-brand-cyan to-blue-600 text-white font-orbitron font-bold tracking-wider shadow-lg hover:shadow-brand-cyan/40 transition-all hover:-translate-y-1 flex items-center gap-2"
        >
          <span>KIRIM JAWABAN</span>
          <Send size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Bahan Ajar */}
      <div className="space-y-6 bg-slate-100 dark:bg-white/5 p-8 rounded-3xl border border-slate-200 dark:border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-slate-700 dark:bg-slate-600 text-white p-2 rounded-lg shadow-lg">
            <BookOpen size={24} />
          </div>
          <h2 className="text-2xl font-bold font-orbitron">Bahan Ajar: Ikatan Logam</h2>
        </div>

        <div className="prose dark:prose-invert max-w-none space-y-6 text-slate-700 dark:text-slate-300">
          <p className="leading-relaxed">
            <strong>Ikatan logam</strong> adalah ikatan yang terbentuk karena adanya gaya tarik inti atom-atom logam dengan lautan elektron. Logam mempunyai beberapa sifat yang unik, antara lain mengkilap, dapat menghantarkan arus listrik dan kalor dengan baik, mudah ditempa, ulet dan diulur menjadi kawat.
          </p>
          <div className="p-5 bg-brand-cyan/10 rounded-xl border-l-4 border-brand-cyan shadow-sm">
            <strong className="text-brand-dark dark:text-brand-cyan block mb-1 text-lg">Teori Lautan Elektron</strong> 
            Logam tersusun dalam suatu kisi kristal yang terdiri dari ion-ion positif logam di dalam lautan elektron. Elektron valensi bergerak bebas (terdislokalisasi) mengelilingi inti atom.
          </div>
          
          <h3 className="text-xl font-bold text-brand-magenta mt-6">Sifat Khas Logam</h3>
          <ul className="grid md:grid-cols-2 gap-4 list-none pl-0">
            <li className="bg-white dark:bg-black/20 p-4 rounded-xl border border-slate-200 dark:border-white/5 shadow-sm">
              <strong className="block text-amber-500 mb-1">✨ Mengkilap</strong> 
              Elektron valensi tereksitasi saat terkena cahaya dan memancarkan kembali energi tersebut sebagai kilap.
            </li>
            <li className="bg-white dark:bg-black/20 p-4 rounded-xl border border-slate-200 dark:border-white/5 shadow-sm">
              <strong className="block text-yellow-500 mb-1">⚡ Konduktor Listrik</strong> 
              Elektron bebas bergerak membawa muatan listrik melalui logam.
            </li>
            <li className="bg-white dark:bg-black/20 p-4 rounded-xl border border-slate-200 dark:border-white/5 shadow-sm">
              <strong className="block text-red-500 mb-1">🔥 Konduktor Panas</strong> 
              Elektron mentransfer energi kinetik dengan cepat saat dipanaskan.
            </li>
            <li className="bg-white dark:bg-black/20 p-4 rounded-xl border border-slate-200 dark:border-white/5 shadow-sm">
              <strong className="block text-blue-500 mb-1">🔨 Dapat Ditempa (Malleable)</strong> 
              Lautan elektron memegang erat ion positif sehingga saat dipukul, atom bergeser tanpa pecah.
            </li>
          </ul>

          <div className="mt-8 pt-8 border-t border-slate-300 dark:border-white/10">
            <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-400 mb-4 flex items-center gap-2">
                Studi Kasus: Emas (Au)
            </h3>
            <div className="bg-yellow-50 dark:bg-yellow-900/10 p-5 rounded-xl border border-yellow-200 dark:border-yellow-700/30">
                <p className="mb-4">
                Emas (Au, nomor atom 79) adalah logam mulia yang lunak (skala Mohs 2.5-3). Karena sifatnya yang lunak, emas murni sering dicampur dengan logam lain (Perak, Tembaga) untuk perhiasan agar lebih kuat.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div className="bg-white dark:bg-black/20 p-3 rounded-lg text-center">
                        <div className="font-bold text-lg">24 Karat</div>
                        <div className="opacity-70">99.9% Emas Murni</div>
                    </div>
                    <div className="bg-white dark:bg-black/20 p-3 rounded-lg text-center">
                        <div className="font-bold text-lg">18 Karat</div>
                        <div className="opacity-70">75% Emas + 25% Campuran</div>
                    </div>
                </div>
                <p className="font-bold text-red-500 dark:text-red-400 text-center bg-red-100 dark:bg-red-900/20 p-3 rounded-lg">
                ⚠️ Waspada penipuan emas! Perbedaan berat jenis dan sifat fisik akibat campuran logam lain dapat menjadi indikator keaslian.
                </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};