import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import AdressForm from './components/AdressForm';
import Map from './components/Map';
import 'leaflet/dist/leaflet.css';

function App() {

  const [addresses, setAddresses] = useState([
    { address: "Friend 1", lat: 48.8584, lng: 2.2945 }, // Exemple : Tour Eiffel
    { address: "Friend 2", lat: 48.853, lng: 2.3499 },  // Exemple : Musée du Louvre
  ]);

  return (
    <div className='Paris Meetup'>
      <h1>Paris Meetup</h1>
      <AdressForm/>
      <Map locations={addresses}></Map>
    </div>
    
  )
}

export default App;
