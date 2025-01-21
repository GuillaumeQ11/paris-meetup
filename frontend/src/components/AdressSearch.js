import React, {useState, useEffect} from 'react';
import { OpenStreetMapProvider} from 'leaflet-geosearch';

// Fonction de debounce pour limiter les appels API
const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
};

const AdressSearch = ({onAddressSelect}) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const provider = new OpenStreetMapProvider();
    const debouncedQuery = useDebounce(query, 500);  // Attente de 500ms avant d’exécuter la recherche

    useEffect(() => {
        const fetchData = async () => {
            if (debouncedQuery.length > 2) {
                // Effectuer la recherche seulement si la requête a plus de 2 caractères
                const searchResults = await provider.search({ query: debouncedQuery });
                setResults(searchResults);
            } else {
                setResults([]);
            }
        };

        // Lancer la recherche uniquement si la requête a changé
        fetchData();
    }, [debouncedQuery]);  

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
            onChange={(e) => setQuery(e.target.value)}
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