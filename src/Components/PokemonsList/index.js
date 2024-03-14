import { useEffect, useState } from "react"
import { getPokemonsData } from "../../utils"

export const PokemonsList = ({ language }) => {
    const [pokemons, setPokemons] = useState([]);
    const [viewQuantity, setViewQuantity] = useState(2);

    useEffect(() => {
        getPokemonsData(viewQuantity).then(res => {
            setPokemons(res);
        }).catch(err => {
            console.error(err);
        })
    }, [])

    return (
        <div>
            {pokemons && pokemons.map(pokemon => <div key={pokemon.id}>{pokemon.name[language]}</div>)}
        </div>
    )
}