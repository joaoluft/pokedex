import { useEffect, useState } from "react"
import { getPokemonsData } from "../../utils"
import { Button } from "./../Button"
import { InputText } from "./../InputText"

export const PokemonsList = ({ language }) => {
    const [pokemons, setPokemons] = useState([]);
    const [filter, setFilter] = useState({
        quantity: 10,
        search: "",
        type: [],
        language: language
    });

    useEffect(() => {
        getPokemonsData(filter).then(res => {
            setPokemons(res);
        }).catch(err => {
            console.error(err);
        })
    }, [filter])

    const changeFilterValue = (filter, value) => {
        setFilter(prevFilter => ({ ...prevFilter, [filter]: value }));
    }

    const filterSearchHandler = (event) => {
        changeFilterValue("search", event.target.value);
    }

    return (
        <>
            <InputText onChange={filterSearchHandler} placeholder="Digite o pokemon à buscar..." />

            <div>
                {pokemons && pokemons.map(pokemon => <div key={pokemon.id}>{pokemon.name[language]}</div>)}
            </div>

            <Button onClick={() => changeFilterValue("quantity", filter.quantity + 10)}>Ver mais...</Button>
        </>
    )
}