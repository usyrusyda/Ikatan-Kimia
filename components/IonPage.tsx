import React from "react";
import { useAppContext } from "../context/AppContext";

export const IonPage: React.FC = () => {
  const { setActiveTab } = useAppContext();

  return (
    <div className="relative z-10 max-w-5xl mx-auto px-6 py-10 text-white">

      <button
        onClick={() => setActiveTab("modules")}
        className="mb-6 px-4 py-2 bg-brand-cyan text-brand-dark rounded-lg font-bold"
      >
        ← Kembali ke Modul
      </button>

      <div className="bg-slate-900/80 rounded-2xl p-8 space-y-6">

        <h1 className="text-4xl font-bold">
          Kestabilan Atom & Ikatan Ion
        </h1>

        <p className="text-slate-300 leading-8">
          Unsur di alam umumnya tidak stabil sehingga lebih sering ditemukan
          sebagai senyawa. Atom-atom berikatan untuk mencapai keadaan yang
          lebih stabil.
        </p>

        <h2 className="text-2xl font-semibold">
          Ikatan Ion
        </h2>

        <p className="text-slate-300 leading-8">
          Ikatan ion terbentuk antara logam dan nonlogam melalui perpindahan
          elektron sehingga terbentuk kation dan anion yang saling tarik-menarik
          secara elektrostatik.
        </p>

      </div>
    </div>
  );
};
