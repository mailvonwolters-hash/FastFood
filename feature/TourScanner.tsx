import React, { useState } from 'react';

interface TourScannerProps {
  onScanComplete: (scannedData: any) => void;
}

export const TourScanner: React.FC<TourScannerProps> = ({ onScanComplete }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  // Foto auswählen oder direkt per Smartphone/iPad Kamera aufnehmen
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  // Simulation der KI-Erkennung des gedruckten Tourenzettels
  const handleStartOCR = () => {
    setIsProcessing(true);
    
    // Simulierter KI-Scan-Ablauf
    setTimeout(() => {
      setIsProcessing(false);
      // Hier werden die ausgelesenen Daten an das System übergeben
      onScanComplete({
        tourId: 'Tour 1 - St. Johannis',
        date: new Date().toISOString().split('T')[0],
        totalPlates: 14,
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 flex flex-col justify-between font-sans">
      {/* HEADER */}
      <div className="bg-slate-900 border-2 border-slate-700 rounded-2xl p-6 shadow-xl">
        <h1 className="text-4xl font-black text-amber-400 uppercase tracking-wide">
          📸 Tourenzettel fotografieren
        </h1>
        <p className="text-slate-300 text-xl mt-2">
          Mache ein scharfes Foto vom ausgedruckten Papierzettel. Die KI liest Adressen und Menüs automatisch aus.
        </p>
      </div>

      {/* FOTO-BEREICH / UPLOAD */}
      <div className="my-6 flex-1 flex flex-col justify-center items-center border-4 border-dashed border-slate-700 rounded-3xl p-6 bg-slate-900/50">
        {selectedImage ? (
          <div className="flex flex-col items-center w-full max-w-lg">
            <img
              src={selectedImage}
              alt="Tourenzettel Vorschau"
              className="max-h-[50vh] rounded-2xl shadow-2xl border-2 border-slate-600 object-contain mb-4"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="text-rose-400 font-bold underline text-lg hover:text-rose-300"
            >
              Foto verwerfen / neues Foto machen
            </button>
          </div>
        ) : (
          <label className="flex flex-col items-center justify-center cursor-pointer p-8 text-center hover:bg-slate-800/50 rounded-2xl transition-all w-full">
            <span className="text-8xl mb-4">📷</span>
            <span className="text-3xl font-black text-white uppercase tracking-wider mb-2">
              Foto aufnehmen / Hochladen
            </span>
            <span className="text-slate-400 text-lg">
              (Auf dem Tablet öffnet sich direkt die Kamera)
            </span>
            <input
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>
        )}
      </div>

      {/* AKTIONEN */}
      <div className="bg-slate-900 border-2 border-slate-700 rounded-2xl p-6 shadow-xl">
        {isProcessing ? (
          <div className="text-center py-4">
            <span className="text-4xl animate-spin inline-block mb-2">🔄</span>
            <h2 className="text-3xl font-black text-amber-400">
              Tourenzettel wird analysiert...
            </h2>
            <p className="text-slate-400 text-lg">Kunden & Menüs werden extrahiert</p>
          </div>
        ) : (
          <button
            disabled={!selectedImage}
            onClick={handleStartOCR}
            className={`w-full py-6 rounded-2xl text-3xl font-black uppercase tracking-wider shadow-2xl transition-all ${
              selectedImage
                ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 active:scale-95'
                : 'bg-slate-800 text-slate-600 cursor-not-allowed'
            }`}
          >
            {selectedImage ? '⚡ Zettel einlesen & Tour starten' : 'Bitte zuerst ein Foto machen'}
          </button>
        )}
      </div>
    </div>
  );
};
