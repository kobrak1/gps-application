import { createContext, useState } from "react"
import { saveAs } from 'file-saver'
import PropTypes from 'prop-types'

export const MainContext = createContext()

const MainProvider = ({children}) => {
    const [center, setCenter] = useState({ lat: 41.015137, lng: 28.979530 })

    const downloadJSON = (markers) => {
        const jsonMarkers = JSON.stringify(markers)
        const blob = new Blob([jsonMarkers], { type: 'application/json' })
        saveAs(blob, 'markers.json')
    }

    const propValues = { 
        center,
        setCenter,
        downloadJSON
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