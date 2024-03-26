import { PokemonsList } from "Components/PokemonsList";
import {useCapture} from "./useCapture";
import { useNavigate } from "react-router-dom";

export const Capture = () => {
    const { data, trainer } = useCapture();

    const navigate = useNavigate();

    return (
        <main>
            <header className="flex justify-between items-center w-full p-4 bg-red-700 text-white">
                <h1 className="text-2xl font-bold uppercase">Pokedex</h1>
                <span className="hidden md:flex font-semibold text-xl">Lista de Pokémons</span>
                <div onClick={() => navigate("/profile")} className="cursor-pointer flex items-center gap-4">
                    <p className="font-semibold capitalize">{data.username}</p>
                    <img draggable="false" className="w-12 h-12 bg-gray-50/50 rounded-full border border-white" src={trainer.icon && trainer.icon} alt="Imagem do treinador pokemon escolhido pelo usuario" />
                </div>
            </header>
            <section>
                <PokemonsList />
            </section>
        </main>
    );
};