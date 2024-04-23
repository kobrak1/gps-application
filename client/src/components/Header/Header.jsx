import { useState } from "react"
import { useMain } from "../../context/MainProvider"
import Logo from "./HeaderComponents/Logo"
import SearchBar from "./HeaderComponents/SearchBar"
import DarkModeButton from "./HeaderComponents/DarkModeButton"
import "./Header.css"

const Header = () => {
  const { setCenter } = useMain()
  const [searchItem, setSearchItem] = useState('')

  return (
    <header>
      <div className="header-wrapper">
        <Logo />
        <SearchBar 
          searchItem={searchItem} 
          setSearchItem={setSearchItem} 
          setCenter={setCenter} 
        />
        <DarkModeButton />
      </div>
    </header>
  )
}

export default Header;
