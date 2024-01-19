import { createContext, useContext, useState } from "react";

const ContextModo = createContext()

export const ModoProvider = ({ children }) => {
    const [modo,setModo] = useState(true)

    const cambiarModo = () => setModo(!modo)
    
    return (
        <ContextModo.Provider value={{ modo, cambiarModo }}>
            {children}
        </ContextModo.Provider>
    )
}

export const useModo = () => {
    return useContext(ContextModo)
}  

