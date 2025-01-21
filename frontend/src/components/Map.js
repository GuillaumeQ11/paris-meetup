import React from "react";
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import { LatLng } from "leaflet";
import L from "leaflet";

const Map = ({locations = []}) => {
    const defaultCenter = [48.8566, 2.3522];
    const zoomLevel = 12;
    
    const customIcon = new L.Icon({
        iconUrl: 'friends_icon.png',  
        iconSize: [40, 40],  
        iconAnchor: [15, 30],  
        popupAnchor: [0, -30], 
      });
      
    return (
        <MapContainer center={defaultCenter} zoom={zoomLevel} style={{ height: '800px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {locations.length > 0 ? (
                locations
                    .filter(loc => loc && loc.lat !== undefined && loc.lng !== undefined)
                    .map((loc, index) => (
                        <Marker key={index} position={new LatLng(loc.lat, loc.lng)} icon={customIcon}>
                            <Popup>{loc.label || "Adresse sélectionnée"}</Popup>
                        </Marker>
                    ))
            ) : (
                <></> // Pas de message visible sur la carte
            )}
        </MapContainer>
    );
};

export default Map;