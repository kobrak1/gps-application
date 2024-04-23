import { createContext, useContext, useState } from "react"
import { saveAs } from 'file-saver'
import PropTypes from 'prop-types'

export const MainContext = createContext()

export const MainProvider = ({children}) => {
    const [center, setCenter] = useState({ lat: 41.015137, lng: 28.979530 })  // handle lat lng state

    // handle JSON download function
    const downloadJSON = (markers) => {
        const jsonMarkers = JSON.stringify(markers)
        const blob = new Blob([jsonMarkers], { type: 'application/json' })
        saveAs(blob, 'markers.json')
    }

    // sets the location to the setCenter
    const handleItemClick = (item) => {
        setCenter({ lat: item.lat, lng: item.lng })
    }

    const values = { 
        center,
        setCenter,
        downloadJSON,
        handleItemClick 
     }

    return (
        <MainContext.Provider value={values}>
            {children}
        </MainContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useMain = () => {
    const context = useContext(MainContext)

    // check if the context used inside the MainProvider
    if (!context) {
        throw new Error('This useMain hook must be called inside the MainProvider')
    }
    return context
}

MainProvider.propTypes = {
    children: PropTypes.node
}