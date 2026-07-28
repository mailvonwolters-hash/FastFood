import React from 'react';
import ReactDOM from 'react-dom/client';
// Hier deinen Haupt-Screen oder App-Komponente importieren:
import { DriverScreen } from '../feature/DriverScreen'; 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Hier übergibst du testweise deine Props oder deine Hauptkomponente */}
    <DriverScreen 
      stop={{ customer: { name: "Test" }, order: { lidColor: "GREEN" } } as any}
      currentStopIndex={1}
      totalStops={10}
      onAction={() => {}}
    />
  </React.StrictMode>
);
