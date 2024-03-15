import { useContext } from "react";
import { PokemonsList } from "../../Components/PokemonsList";
import { PokedexContext } from "../../Contexts/PokedexContext";
import { LanguageSelector } from "../../Components/LanguageSelector";

export const Capture = () => {

    const { config, setConfig } = useContext(PokedexContext);

    return (
        <main>
            <section>
                <LanguageSelector />
                <PokemonsList language={config.language} />
            </section>
        </main>
    )
}