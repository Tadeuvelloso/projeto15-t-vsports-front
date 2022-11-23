import { createContext } from "react";
import { useState } from "react";


export const CustomerContext = createContext()


export const CustomerProvider = ({ children }) => {

    const [nome, setNome] = useState("");

    return(
        <CustomerContext.Provider 
            value={ {nome, setNome} }>
            {children}
        </CustomerContext.Provider>
    )
}