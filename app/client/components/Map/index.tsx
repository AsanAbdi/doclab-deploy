"use client"
import React, { useEffect } from 'react';

const MapEmbed: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCpZWACq6ZA9G3UuH5g8UTGGAE91fqqGEU&callback=initMap`;
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      (window as any).initMap = initMap;
    };
  }, []);

  const initMap = () => {
    const map = new (window as any).google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: { lat: 35.47694915258956,   lng: -1.3353277983452758 }, // Установите начальные координаты
      zoom: 2,
    });

    // Добавление маркеров
    const locations = [
      { lat: 37.692114915960495,  lng: -122.4056100037079, title: 'Point 1' },
      { lat: 49.954481154403545,  lng: 11.53402629494665, title: 'Point 2' },
      { lat: 11.25148558856772,    lng: 75.78986126610397, title: 'Point 3' },
      { lat: 26.878739869754316,   lng: 80.98414508977237, title: 'Point 4' },
      { lat: 33.84007421194791,    lng: 35.51273043295772, title: 'Point 5' },
      { lat: 42.87510540365108,    lng: 74.57942826984815, title: 'Point 6' },
      { lat: 51.26016139787606,    lng: 6.408751126188709, title: 'Point 7' },
    ];

    locations.forEach(location => {
      new (window as any).google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map,
        title: location.title,
      });
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '55vh', margin: '20px 0' }}>
      <h1 style={{ fontSize: '4vw', marginBottom: '5vh', textAlign: 'center', maxWidth: '85vw' }}>Наша лаборатория находится здесь</h1>
      <div id="map" style={{ padding: '8vw', marginBottom: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: '1000px', height: '50vw', maxHeight: '450px', border: '0' }}></div>
    </div>
  );
};

export default MapEmbed;
