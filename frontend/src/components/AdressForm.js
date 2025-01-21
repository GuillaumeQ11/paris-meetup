import React, {useState} from "react";

function AdressForm() {
    // Déclarer deux états pour stocker les adresses
    const [address1, setAddres1] = useState('');
    const [address2, setAddres2] = useState('');

    // Gère le changement d'une adresse
    const handleAdress1Change = (event) => {
        setAddres1(event.target.value);
    }
    const handleAdress2Change = (event) => {
        setAddres2(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Adresse 1: ${address1}\nAdresse 2: ${address2}`);
    };

    return (
        <div>
            <h1>Entrez les adresses :</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="address1">Adresse 1 :</label>
                    <input
                    type="text"
                    id="adress1"
                    value={address1}
                    onChange={handleAdress1Change}
                    placeholder="Entrez la première adresse"/>
                </div>
                <div>
                    <label htmlFor="address2">Adresse 2 :</label>
                    <input
                    type="text"
                    id="adress2"
                    value={address2}
                    onChange={handleAdress2Change}
                    placeholder="Entrez la deuxième adresse"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        
    );
}

export default AdressForm;