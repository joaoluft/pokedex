import { useState } from "react";
import { PokedexContext } from "./PokedexContext";


export const PokedexContextProvider = ({ children }) => {
    const [config, setConfig] = useState({
        language: "english"
    });

    return (
        <PokedexContext.Provider value={{ config, setConfig }}>
            {children}
        </PokedexContext.Provider>
    )
}