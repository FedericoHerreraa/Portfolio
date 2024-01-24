import { createContext, useContext, useEffect, useState } from "react";

const ContextModo = createContext()

export const ModoProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode)
    })

    useEffect(() => {
        const savedModo = localStorage.getItem('darkMode')
        console.log(savedModo)
        setDarkMode(JSON.parse(!savedModo))
        console.log(darkMode)
    }, [])

    const cambiarModo = () => {
        setDarkMode(!darkMode)
        localStorage.setItem('darkMode', JSON.stringify(darkMode))
    };
    
    return (
        <ContextModo.Provider value={{ darkMode, cambiarModo }}>
            {children}
        </ContextModo.Provider>
    )
}

export const useModo = () => {
    return useContext(ContextModo)
}  

