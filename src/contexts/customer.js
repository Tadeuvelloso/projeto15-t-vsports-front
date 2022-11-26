import { createContext } from "react";
import { useState } from "react";


export const CustomerContext = createContext()


export const CustomerProvider = ({ children }) => {
    const [token, setToken] = useState() 
    const [name, setName] = useState("");

    return(
        <CustomerContext.Provider 
            value={{ token, setToken, name, setName }}>
            {children}
        </CustomerContext.Provider>
    )
}