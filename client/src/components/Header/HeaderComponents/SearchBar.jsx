import PropTypes from 'prop-types'
import { message } from 'antd'

const SearchBar = ({ setCenter, searchItem, setSearchItem }) => {
    // handle search item
    const handleSubmit = (e) => {
      e.preventDefault()

      try {
        const [lat,lng] = searchItem.split(',') // parse the lat-lng from string to object
  
        // check if both lattitude and longitude are present and valid
        if (lat && lng) {
          const coordinatesObject = {
            lat: parseFloat(lat),
            lng: parseFloat(lng)
          }
          setCenter(coordinatesObject)
          setSearchItem('')
        } 
        console.error('Lattitude or longitude is missing, or invalid:')
        message.error('Lattitude or longitude is missing, or invalid')
      } catch (error) {
        console.error('Error parsing lattitude or longitude:', error)
        message.error('Error parsing lattitude or longitude')
      }
    }

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          placeholder="e.g. 41.032492,28.977298"
        />
        <button className="search-button" type='submit'>
          Search
        </button>
      </form>
    </div>
  )
}

SearchBar.propTypes = {
  searchItem: PropTypes.string.isRequired,
  setSearchItem: PropTypes.func.isRequired,
  setCenter: PropTypes.func.isRequired
}

export default SearchBar;
