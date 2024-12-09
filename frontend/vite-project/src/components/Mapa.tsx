import React, { useEffect } from 'react';
import L from 'leaflet';

const Mapa: React.FC = () => {
  useEffect(() => {
    const map = L.map('map').setView([-15.7941, -47.8823], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(map);

    L.marker([-15.7941, -47.8823])
      .addTo(map)
      .bindPopup('Brasília, DF')
      .openPopup();

    return () => {
      map.remove(); // Remove o mapa ao desmontar o componente
    };
  }, []);


  return (
    <div className="w-full h-screen">
      <div id="map" className="w-full h-full"></div>
    </div>


  );

};

export default Mapa;
