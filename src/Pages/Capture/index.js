import { PokemonsList } from "../../Components/PokemonsList";
import {useCapture} from "./useCapture";

export const Capture = () => {
    const { data, trainer } = useCapture();

    return (
        <main>
            <header className="flex justify-between items-center w-full p-4 bg-red-700 text-white">
                <h1 className="text-2xl font-bold uppercase">Pokedex</h1>
                <div className="flex items-center gap-4">
                    <p>{data.username}</p>
                    <img className="w-12 h-12 bg-gray-50/30 rounded-full border border-white" src={trainer.icon} alt="" />
                </div>
            </header>
            <section>
                <PokemonsList />
            </section>
        </main>
    );
};