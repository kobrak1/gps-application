import { useContext } from "react";
import { MainContext } from "../../context/MainProvider";
import "./Header.css";

const Header = () => {
  const { darkMode, handleDarkMode } = useContext(MainContext);
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
          <input type="text" className="search-input" placeholder="Search..." />
          <button className="search-button">Search</button>
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
