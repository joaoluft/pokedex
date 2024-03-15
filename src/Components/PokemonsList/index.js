import { useEffect, useState } from "react";
import { getPokemonsData } from "../../utils";
import { Button } from "./../Button";
import { InputSearch } from "../InputSearch";

export const PokemonsList = ({ language }) => {
    const [pokemons, setPokemons] = useState([]);
    const [filter, setFilter] = useState({
        quantity: 10,
        search: "",
        types: [],
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
        <section>
            <div className="w-fit">
                <InputSearch onChange={filterSearchHandler} placeholder="Digite o pokemon à buscar..." />
            </div>

            <div>
                {pokemons && pokemons.map(pokemon => <div key={pokemon.id}>{pokemon.name[language]}</div>)}
            </div>

            <Button onClick={() => changeFilterValue("quantity", filter.quantity + 10)}>Ver mais...</Button>
        </section>
    )
}