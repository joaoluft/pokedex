import { useContext, useEffect, useState } from "react";
import { PokemonsList } from "../../Components/PokemonsList";
import { PokedexContext } from "../../Contexts/PokedexContext";
import { UserContext } from "../../Contexts/UserContext";
import { getTrainerData } from "../../utils";

export const Capture = () => {

    const { data, setData } = useContext(UserContext);
    const { config, setConfig } = useContext(PokedexContext);
    const [trainer, setTrainer] = useState({});

    useEffect(() => {
        getTrainerData(data.trainer).then(res => {
            console.log(res)
            setTrainer(res)
        }).catch(err => {
            console.error(err);
        })
    }, [data.trainer])

    return (
        <main>
            <header className="flex justify-between items-center w-full p-4 bg-red-700 text-white">
                <h1 className="text-xl font-bold uppercase">Pokedex</h1>
                <div className="flex items-center gap-4">
                    <p>{data.username}</p>
                    <img className="w-12 h-12 bg-gray-50/30 rounded-full border border-white" src={trainer.icon} alt="" />
                </div>
            </header>
            <section>
                <PokemonsList language={config.language} />
            </section>
        </main>
    )
}