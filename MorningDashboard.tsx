import React from 'react';
import { RouteSummary } from './types';

interface MorningDashboardProps {
  summary: RouteSummary;
  onStartTour: () => void;
}

export const MorningDashboard: React.FC<MorningDashboardProps> = ({ summary, onStartTour }) => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-slate-900 text-white rounded-xl shadow-2xl font-sans">
      <header className="border-b border-slate-700 pb-4 mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-extrabold text-amber-400">PACKZETTEL / HEIZSCHRANK</h1>
          <p className="text-slate-400">Tour: {summary.tourId} | Datum: {summary.date}</p>
        </div>
        <span className="px-4 py-2 bg-slate-800 border border-amber-400/30 text-amber-400 font-bold rounded-lg">
          VORBEREITUNG KÜCHE
        </span>
      </header>

      {/* FARBKASSETTEN HEIZSCHRANK */}
      <h2 className="text-xl font-bold mb-3 text-slate-300">1. Heizschrank-Bestückung (Deckelfarben)</h2>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-emerald-900/80 border-2 border-emerald-500 p-5 rounded-xl text-center">
          <span className="block text-emerald-300 font-bold text-sm tracking-wider">MENÜ 1 (M1)</span>
          <span className="text-5xl font-black text-emerald-100 my-2 block">{summary.totalM1_Green}</span>
          <span className="text-xs bg-emerald-950 px-3 py-1 rounded-full text-emerald-300 font-semibold inline-block">
            🟢 GRÜNE DECKEL
          </span>
        </div>

        <div className="bg-rose-900/80 border-2 border-rose-500 p-5 rounded-xl text-center">
          <span className="block text-rose-300 font-bold text-sm tracking-wider">MENÜ 2 (M2)</span>
          <span className="text-5xl font-black text-rose-100 my-2 block">{summary.totalM2_Red}</span>
          <span className="text-xs bg-rose-950 px-3 py-1 rounded-full text-rose-300 font-semibold inline-block">
            🔴 ROTE DECKEL
          </span>
        </div>

        <div className="bg-sky-900/80 border-2 border-sky-500 p-5 rounded-xl text-center">
          <span className="block text-sky-300 font-bold text-sm tracking-wider">MENÜ 3 / VITALK</span>
          <span className="text-5xl font-black text-sky-100 my-2 block">{summary.totalM3_Blue}</span>
          <span className="text-xs bg-sky-950 px-3 py-1 rounded-full text-sky-300 font-semibold inline-block">
            🔵 BLAUE DECKEL
          </span>
        </div>
      </div>

      {/* VERPACKUNG & EXTRAS */}
      <h2 className="text-xl font-bold mb-3 text-slate-300">2. Sonderbehälter & Kühlextras</h2>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-slate-800 border border-slate-700 p-4 rounded-lg flex justify-between items-center">
          <span className="font-semibold text-slate-300">Alu-Schalen:</span>
          <span className="text-2xl font-bold text-white">{summary.totalAlu}</span>
        </div>
        <div className="bg-slate-800 border border-slate-700 p-4 rounded-lg flex justify-between items-center">
          <span className="font-semibold text-slate-300">Naturjoghurt:</span>
          <span className="text-2xl font-bold text-amber-300">{summary.totalYogurt}</span>
        </div>
        <div className="bg-slate-800 border border-slate-700 p-4 rounded-lg flex justify-between items-center">
          <span className="font-semibold text-slate-300">Obst / Nachtisch:</span>
          <span className="text-2xl font-bold text-amber-300">{summary.totalFruit}</span>
        </div>
      </div>

      {/* START BUTTON */}
      <button
        onClick={onStartTour}
        className="w-full py-5 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-slate-950 font-black text-2xl rounded-xl shadow-lg transition-colors uppercase tracking-wide"
      >
        Alles Eingeladen – Tour Starten 🚀
      </button>
    </div>
  );
};
