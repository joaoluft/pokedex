import successIcon from "./../../../Assets/Images/success.gif";
import { InputText } from "./../../InputText";
import { useSpring, animated } from 'react-spring';
import { UserContext } from "./../../../Contexts/UserContext";
import { PokedexContext } from "./../../../Contexts/PokedexContext";
import { useContext } from "react";

export const Success = ({ pokemon, closeModal }) => {

  const { setData } = useContext(UserContext);
  const { config } = useContext(PokedexContext);

  const fadeAnim = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  const capturePokemonHandler = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const surname = form.get("surname");

    console.log(surname)
    if (surname.length < 3) return;

    try {
      setData(prevData => ({...prevData, capturedPokemons: [...prevData.capturedPokemons, {...pokemon, surname: surname}]}))
    } catch (err) {
      console.error(err);
    }

    closeModal();
  }

  return (
    <animated.div style={fadeAnim}>
      {pokemon ? (
        <section className="flex flex-col items-center justify-center pt-4 pb-2 px-6">
          <p className="text-gray-600 uppercase text-sm font-semibold">Pokémon capturado!</p>
          <img draggable="false" className="w-3/4" src={successIcon} alt="Icone de sucesso ao capturar pokemon" />
          <p className="text-xs text-gray-500 pb-2">Insira um nome para seu novo {config && pokemon.name[config.language]}</p>
          <form onSubmit={capturePokemonHandler} className="flex flex-col gap-3">
            <InputText name="surname" pokemonrename type="text" placeholder="Nome do pokémon" />
            <button type="submit" className="px-4 py-2.5 bg-green-600 text-white rounded-full uppercase text-sm font-bold">Pronto</button>
          </form>
        </section>
      ) : (
        <p>Carregando...</p>
      )}
    </animated.div>
  )
}