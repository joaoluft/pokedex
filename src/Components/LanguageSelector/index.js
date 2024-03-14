import { useContext } from "react"
import { PokedexContext } from "../../Contexts/PokedexContext"

export const LanguageSelector = () => {

    const { config, setConfig } = useContext(PokedexContext);

    const changeLanguageHandler = (event) => {
        setConfig(prevConfig => ({ ...prevConfig, language: event.target.value }))
    }

    return (
        <select onChange={changeLanguageHandler}>
            <option value="english">English</option>
            <option value="japanese">Japanese</option>
            <option value="chinese">Chinese</option>
            <option value="french">French</option>
        </select>
    )
}