import React, { useState } from 'react';
import AddressSearch from './AdressSearch';

const AddressForm = () => {
  const [addresses, setAddresses] = useState([]);

  const handleAddressSelect = (address) => {
    setAddresses((prevAddresses) => [...prevAddresses, address]);
  };

  return (
    <div>
      <h1>Entrez les adresses</h1>
      <AddressSearch onAddressSelect={handleAddressSelect} />
      <AddressSearch onAddressSelect={handleAddressSelect} />
      
      <h2>Adresses sélectionnées :</h2>
      <pre>{JSON.stringify(addresses, null, 2)}</pre>
    </div>
  );
};

export default AddressForm;
