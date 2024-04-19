import PropTypes from 'prop-types'
import { Button } from '@mui/material'

const MarkerList = ({ markers, removeMarker, setCenter }) => {
    // sets the location to the setCenter
    const handleItemClick = (item) => {
        setCenter({ lat: item.lat, lng: item.lng })
    }

    return (
        <div className="markers-container">
            <h2>Markers</h2>
            <div className="markers-list">
                <ul>
                    {markers.map((item, index) => (
                        <li key={index}>
                            <span onClick={() => handleItemClick(item)}> 
                                <b>Lat:</b> {item.lat}, <b>Lng:</b> {item.lng}
                            </span>
                            <Button size='small' variant='outlined' onClick={() => removeMarker(item.id)}>
                                Remove
                            </Button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

MarkerList.propTypes = {
    markers: PropTypes.array.isRequired,
    removeMarker: PropTypes.func.isRequired,
    setCenter: PropTypes.func.isRequired
}

export default MarkerList