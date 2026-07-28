import React from 'react';
import { DeliveryStop } from './types';

interface DriverScreenProps {
  stop: DeliveryStop;
  currentStopIndex: number;
  totalStops: number;
  onAction: (action: DeliveryStop['dishAction'], note?: string) => void;
}

export const DriverScreen: React.FC<DriverScreenProps> = ({
  stop,
  currentStopIndex,
  totalStops,
  onAction,
}) => {
  const { customer, order } = stop;

  // Farb-Badge für den Heizschrank/Deckel
  const getLidBadge = () => {
    if (!order) return null;
    switch (order.lidColor) {
      case 'GREEN':
        return <span className="px-6 py-3 bg-emerald-500 text-slate-950 font-black text-2xl rounded-xl shadow-lg border-2 border-emerald-300">🟩 GRÜNER DECKEL (M1)</span>;
      case 'RED':
        return <span className="px-6 py-3 bg-rose-600 text-white font-black text-2xl rounded-xl shadow-lg border-2 border-rose-300">🔴 ROTER DECKEL (M2)</span>;
      case 'BLUE':
        return <span className="px-6 py-3 bg-sky-500 text-slate-950 font-black text-2xl rounded-xl shadow-lg border-2 border-sky-300">🔵 BLAUER DECKEL (M3)</span>;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-screen bg-slate-950 text-white flex flex-col p-4 select-none font-sans overflow-hidden">
      {/* KOPFZEILE: KUNDE & DECKELFARBE */}
      <div className="bg-slate-900 border-2 border-slate-700 rounded-2xl p-6 mb-4 flex justify-between items-center shadow-xl">
        <div>
          <div className="text-slate-400 font-extrabold text-lg uppercase tracking-wider mb-1">
            Kunde {currentStopIndex + 1} von {totalStops}
          </div>
          <h1 className="text-5xl font-black text-white tracking-tight">{customer.name}</h1>
          <p className="text-3xl text-amber-400 font-bold mt-1">{customer.address}</p>
          {customer.notes && (
            <div className="mt-2 text-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3 py-1 rounded-lg font-bold inline-block">
              ⚠️ {customer.notes}
            </div>
          )}
        </div>
        <div>{getLidBadge()}</div>
      </div>

      {/* DIE 4 RIESIGEN TREFFERZONEN (FRESSPANZER-PROOF) */}
      <div className="grid grid-cols-2 gap-4 flex-1">
        {/* BUTTON 1: GRÜN - TELLER DA */}
        <button
          onClick={() => onAction('RETURNED_PLUS_1')}
          className="bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 rounded-3xl p-6 flex flex-col items-center justify-center border-4 border-emerald-400 shadow-2xl active:scale-95 transition-all"
        >
          <span className="text-7xl mb-2">🟢</span>
          <span className="text-4xl font-black uppercase text-white tracking-wide">TELLER DA</span>
          <span className="text-2xl text-emerald-200 font-bold mt-1">(+1 im Korb)</span>
        </button>

        {/* BUTTON 2: ROT - TELLER FEHLT */}
        <button
          onClick={() => onAction('MISSING_ZERO')}
          className="bg-rose-700 hover:bg-rose-600 active:bg-rose-800 rounded-3xl p-6 flex flex-col items-center justify-center border-4 border-rose-500 shadow-2xl active:scale-95 transition-all"
        >
          <span className="text-7xl mb-2">🔴</span>
          <span className="text-4xl font-black uppercase text-white tracking-wide">TELLER FEHLT</span>
          <span className="text-2xl text-rose-200 font-bold mt-1">(Nicht rausgestellt)</span>
        </button>

        {/* BUTTON 3: ALU / KEIN TELLER */}
        <button
          onClick={() => onAction('ALU_NO_PLATE')}
          className="bg-slate-700 hover:bg-slate-600 active:bg-slate-800 rounded-3xl p-6 flex flex-col items-center justify-center border-4 border-slate-500 shadow-2xl active:scale-95 transition-all"
        >
          <span className="text-7xl mb-2">⚪</span>
          <span className="text-4xl font-black uppercase text-white tracking-wide">ALU SCHALE</span>
          <span className="text-2xl text-slate-300 font-bold mt-1">(Kein Geschirr)</span>
        </button>

        {/* BUTTON 4: NOTIZ / SPEISEPLAN */}
        <button
          onClick={() => {
            const note = prompt('Schnellnotiz für Büro/Küche:', 'Morgen kein Essen');
            if (note !== null) onAction('NOTE_ADDED', note);
          }}
          className="bg-amber-600 hover:bg-amber-500 active:bg-amber-700 rounded-3xl p-6 flex flex-col items-center justify-center border-4 border-amber-400 shadow-2xl active:scale-95 transition-all"
        >
          <span className="text-7xl mb-2">💬</span>
          <span className="text-4xl font-black uppercase text-white tracking-wide">BEMERKUNG</span>
          <span className="text-2xl text-amber-100 font-bold mt-1">(Morgen kein Essen / SP)</span>
        </button>
      </div>
    </div>
  );
};
