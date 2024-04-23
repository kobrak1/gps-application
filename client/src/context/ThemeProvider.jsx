import PropTypes from 'prop-types'
import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const storedTheme = localStorage.getItem('Theme')
    const [theme, setTheme] = useState(
        storedTheme 
          ? JSON.parse(storedTheme) 
          : false
    )

    // set the theme data whenever theme changes
    useEffect(() => {
        localStorage.setItem('Theme', JSON.stringify(theme))
    }, [theme])

    const values = {
        theme,
        setTheme
    }

    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
    const context = useContext(ThemeContext)
    
    // check if the context used in the correct place
    if (!context) {
        throw new Error('This useTheme hook must be called inside the ThemeProvider')
    }
    return context
}

ThemeProvider.propTypes = {
    children: PropTypes.node
}

