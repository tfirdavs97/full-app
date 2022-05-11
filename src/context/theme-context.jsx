import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {
    const localData = localStorage.getItem("theme")
    const [theme, setTheme] = useState(localData || "light")

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme]);

    const data ={
        theme: theme,
        setTheme: setTheme
    }
    return (
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}