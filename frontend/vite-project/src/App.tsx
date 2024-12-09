import React from 'react';
import Mapa from './components/Mapa';

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-[40px] font-bold mb-4">Urbanize</h1>
      <Mapa />
    </div>
  );
};

export default App;
