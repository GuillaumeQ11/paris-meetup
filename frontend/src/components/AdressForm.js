import React, { useState } from 'react';
import AddressSearch from './AdressSearch';

const AddressForm = () => {
  const [addresses, setAddresses] = useState([null, null]);

  const handleAddressSelect = (index, address) => {
    const newAddresses = [...addresses]; // Copie du tableau
    newAddresses[index] = address; // Mise à jour de l'adresse correspondante
    setAddresses(newAddresses);
  };
  return (
    <div>
      <h1>Entrez les adresses</h1>
      <AddressSearch onAddressSelect={(address) => handleAddressSelect(0, address)} />
      <AddressSearch onAddressSelect={(address) => handleAddressSelect(1, address)} />
      
      <h2>Adresses sélectionnées :</h2>
      <pre>{JSON.stringify(addresses, null, 2)}</pre>
    </div>
  );
};

export default AddressForm;
