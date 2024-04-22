import { createContext, useState } from "react"
import { saveAs } from 'file-saver'
import PropTypes from 'prop-types'

export const MainContext = createContext()

const MainProvider = ({children}) => {
    const [center, setCenter] = useState({ lat: 41.015137, lng: 28.979530 })  // handle lat lng state
    const [darkMode, setDarkMode] = useState(false)  // handle dark mode state

    // handle JSON download function
    const downloadJSON = (markers) => {
        const jsonMarkers = JSON.stringify(markers)
        const blob = new Blob([jsonMarkers], { type: 'application/json' })
        saveAs(blob, 'markers.json')
    }

    // handle transitioning between dark mode and light mode
    const handleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    // sets the location to the setCenter
    const handleItemClick = (item) => {
        setCenter({ lat: item.lat, lng: item.lng })
    }

    const propValues = { 
        center,
        setCenter,
        downloadJSON,
        darkMode,
        handleDarkMode,
        handleItemClick
     }

    return (
        <MainContext.Provider
            value={propValues}
        >
            {children}
        </MainContext.Provider>
    )
}

MainProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default MainProvider