import React from 'react';
import ReactDOM from 'react-dom/client';
import { DriverScreen } from '../feature/DriverScreen';

// Dummy-Daten für den ersten Test
const mockStop = {
  customer: { name: 'Max Mustermann', address: 'Musterstraße 1' },
  order: { lidColor: 'GREEN', dishName: 'Menü 1 - Schweinebraten' }
};

const App = () => {
  return (
    <div style={{ fontFamily: 'sans-serif', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      <DriverScreen
        stop={mockStop as any}
        currentStopIndex={1}
        totalStops={12}
        onAction={(action, note) => console.log('Aktion:', action, note)}
      />
    </div>
  );
};

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
