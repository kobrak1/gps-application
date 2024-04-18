import 'leaflet/dist/leaflet.css'
import { useState } from 'react';
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet'

const App = () => {
  const [center, setCenter] = useState([41.015137, 28.979530]);

  // Event handler for moving the map
  const SetViewOnMove = () => {
    const map = useMapEvents({
      move: () => {
        setCenter(map.getCenter());
      },
    });
    return null;
  };

  // Event handler for clicking the save button
  const handleSave = () => {
    const currentDate = new Date().toISOString();
    const data = {
      lat: center[0],
      lng: center[1],
      date: currentDate,
    };
    console.log('Point saved:', data);
  };

  return (
    <div>
      <MapContainer center={center} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <SetViewOnMove />
        <Marker position={center} />
      </MapContainer>
      <button onClick={handleSave}>Noktayı Kaydet</button>
    </div>
  );
};

export default App