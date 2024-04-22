import { useContext, useState } from "react";
import { MainContext } from "../../context/MainProvider";
import "./Header.css";

const Header = () => {
  const { 
    darkMode, 
    handleDarkMode,
    setCenter
  } = useContext(MainContext);
  const [searchItem, setSearchItem] = useState({lat: '', lng: ''})

  // handle search item
  const handleSearch = () => {
    const [lat,lng] = searchItem.split(',')
    const coordinatesObject = {
      lat: parseFloat(lat),
      lng: parseFloat(lng)
    }
    setCenter(coordinatesObject)
  }

  return (
    <header>
      <div className="header-wrapper">
        <div className="logo-container">
          <h2>
            <a 
              href="https://github.com/kobrak1/gps-application" 
              target="_blank" 
              title="https://github.com/kobrak1/gps-application"
            >
              Location Mapper
            </a>
          </h2>
        </div>
        <div className="search-container">
          <input 
            className="search-input"
            type="text"
            value={searchItem}
            onChange={e => setSearchItem(e.target.value)}
            placeholder="Search..." 
          />
          <button className="search-button" onClick={() => handleSearch(searchItem)}>Search</button>
        </div>
        <div className={`dark-mode ${!darkMode === false && "dark"}`}>
          <span
            className={`material-symbols-outlined ${!darkMode && "dark"}`}
            onClick={handleDarkMode}
            style={{ cursor: "pointer" }}
          >
            {darkMode ? "light_mode" : "dark_mode"}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
