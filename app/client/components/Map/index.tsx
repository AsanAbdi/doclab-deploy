"use client";
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
      center: { lat: 42.851078, lng: 74.634836 }, // Установите начальные координаты
      zoom: 15,
    });

    // Добавление маркеров
    const locations = [
      { lat: 42.851078, lng: 74.634836, title: 'Point 1' },
    ];

    locations.forEach((location) => {
      new (window as any).google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map,
        title: location.title,
      });
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '55vh',
        margin: '20px 0',
      }}
    >
      <h1
        style={{
          fontSize: '4vw',
          marginBottom: '2vh',
          marginTop: '8vh',
          textAlign: 'center',
          maxWidth: '85vw',
        }}
      >
        Наша лаборатория находится здесь
      </h1>
      <p
        style={{
          color: 'gray',
          fontSize: '1.2rem',
          textAlign: 'center',
          marginBottom: '40px',
        }}
      >
        <b>Адрес:</b> ул. 7-апреля 3/1. <b>Tелефонный номер:</b> +996 000-000 <br/> <b>Bремя работы:</b> в будние дни с 9 до 16:30, сб-вс выходные
      </p>
      <div
        id="map"
        style={{
          padding: '6vw',
          marginBottom: '30px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          maxWidth: '1000px',
          height: '50vw',
          maxHeight: '450px',
          border: '0',
        }}
      ></div>
    </div>
  );
};

export default MapEmbed;
