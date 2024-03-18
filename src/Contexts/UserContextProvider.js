import { useState } from "react";
import { UserContext } from "./UserContext";


export const UserContextProvider = ({ children }) => {
    const [data, setData] = useState({
        username: "",
        icon: {
          path: "",
          gender: ""
        },
        capturedPokemons: []
    });

    return (
        <UserContext.Provider value={{ data, setData }}>
            {children}
        </UserContext.Provider>
    )
}