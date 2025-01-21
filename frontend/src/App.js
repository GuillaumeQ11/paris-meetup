import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import AdressForm from './components/AdressForm';
import Map from './components/Map';
import 'leaflet/dist/leaflet.css';

function App() {

  const [addresses, setAddresses] = useState([null, null]);
  const [midpoint, setMidpoint] = useState(null);

  const calculateMidPoint = () => {
    if (addresses.some((addr) => addr === null)) return; // Vérifie que toutes les adresses sont définies
    const midLat = (addresses[0].lat + addresses[1].lat) / 2;
    const midLng = (addresses[0].lng + addresses[1].lng) / 2;
    setMidpoint({ lat: midLat, lng: midLng });
  };


  return (
    <div className='Paris Meetup'>
      <h1>Paris Meetup</h1>
      <AdressForm/>
      <button onClick={calculateMidPoint}>
        Où se retrouver ?
      </button>
      <Map locations={addresses}></Map>
    </div>
    
  )
}

export default App;
