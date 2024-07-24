import React from 'react'; 
 
const MapEmbed: React.FC = () => { 
  return ( 
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '50vh', margin: '20px 0' }}> 
      <h1 style={{ fontSize: '5vw', marginBottom: '5vh', textAlign: 'center', maxWidth: '90vw' }}>Наша лаборатория находится здесь:</h1> 
      <div style={{ padding: '5vw', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}> 
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.378908227124!2d13.035541632349121!3d77.60936996196725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDQyJzA3LjciTiA1wrAyOCcwMy41Ilc!5e0!3m2!1sen!2sus!4v1618298271234!5m2!1sen!2sus" 
          style={{ width: '100%', maxWidth: '800px', height: '50vw', maxHeight: '450px', border: '0' }} 
          loading="lazy" 
        ></iframe> 
      </div> 
    </div> 
  ); 
}; 
 
export default MapEmbed;