import React, {useState} from 'react';
import { OpenStreetMapProvider} from 'leaflet-geosearch';

const AdressSearch = ({onAddressSelect}) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const provider = new OpenStreetMapProvider();

    const handleSearch = async (event) => {
        const value = event.target.value;
        setQuery(value);

        if (value.length > 2) {
            const searchResults = await provider.search({ query: value});
            setResults(searchResults);
            console.log(searchResults);
        }else {
            setResults([]);
        }
    };

    const handleSelect = (result) => {
        setQuery(result.label);
        setResults([]);
        onAddressSelect({lat: result.y, lng:result.x, label: result.label});
    };

    return (
        <div>
            <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Entrez une adresse ..."/>
             <ul style={{ listStyleType: 'none', padding: 0 }}>
            {results.map((result, index) => (
          <li key={index} onClick={() => handleSelect(result)} style={{ cursor: 'pointer' }}>
            {result.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdressSearch;