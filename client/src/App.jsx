import { useContext, useEffect, useState } from 'react';
import { Button } from '@mui/material'
import { message } from 'antd'
import L from 'leaflet'
import { MapContainer, Marker, TileLayer, useMapEvents } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import markerService from './services/services'
import MarkerList from './components/MarkerList';
import { MainContext } from './context/MainProvider';

// icon not found problem by adding marker icon manually
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import Header from './components/Header/Header';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
})

L.Marker.prototype.options.icon = DefaultIcon

const App = () => {
  const [markers, setMarkers] = useState([])
  const { center, setCenter, downloadJSON, darkMode } = useContext(MainContext)

  useEffect(() => {
    markerService
      .getAll()
      .then(initialMarkers => {
        setMarkers(initialMarkers)
        console.log('markers are fetched from the db');
      })
  }, [])

  // Event handler for moving the map
  const SetViewOnMove = () => {
    const map = useMapEvents({
      move: () => {
        const newCenter = map.getCenter();
        setCenter({ lat: newCenter.lat, lng: newCenter.lng });
      },
    })
    return null
  }

  // event handler for clicking the save button
  const handleSave = () => {
    const currentDate = new Date().toISOString()
    const data = {
      lat: center.lat,
      lng: center.lng,
      datetime: currentDate,
    }
    console.log('Marker data:', data)
    markerService
      .post(data)
      .then(returnedMarker => {
        setMarkers(markers.concat(returnedMarker))
        message.success('Marker saved successfully')
      })
      .catch(error => {
        console.error('Error:', error)
        message.error(`${error.message}`)
      })
  }

  // handle remove a marker from the markerlist
  const removeMarker = async (id) => {
    try {
      // send delete request to the backend
      await markerService.remove(id)
      
      // filter out the removed item from the current list of blogs
      const updatedMarkers = markers.filter(item => item.id !== id)

      // update the state wşth the new list of blogs
      setMarkers(updatedMarkers)

      message.success('Marker deleted successfully')
    } catch(error) {
      console.error('Failed to delete the marker:', error)
      message.error('Failed to delete the marker!')
    }
  }

  // handle dark mode with DOM manipulation
  document.body.style.backgroundColor = darkMode ? '#333333' : '#ffffff'

  return (
    <div>
      <Header />
      <div className="marker">
        <MapContainer center={center} zoom={13} style={{ height: '400px', width: '85%' }}>
          <TileLayer url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' />
          <SetViewOnMove />
          <Marker position={center} />
        </MapContainer>
        <MarkerList 
          className='markers-main'
          markers={markers}
          removeMarker={removeMarker}
          setCenter={setCenter}
        />
      </div>
      <div className="button-container">
        <Button 
          variant='contained'
          onClick={handleSave}
          style={{margin: '1rem 0'}}
        >
          Save Marker
        </Button>
        <Button
          variant='outlined'
          onClick={() => downloadJSON(markers)}
          style={{margin: '1rem'}}
        >
          Donwload JSON
        </Button>
      </div>
    </div>
  );
};

export default App