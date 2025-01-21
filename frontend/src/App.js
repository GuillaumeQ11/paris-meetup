import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import AdressForm from './components/AdressForm';

function App() {
  return (
    <div className='Paris Meetup'>
      <h1>Paris Meetup</h1>
      <AdressForm/>
    </div>
  )
}

export default App;
