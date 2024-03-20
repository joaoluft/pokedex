import logo from "./../../../Assets/Images/pokemon_logo.png";
import { InputText } from "../../InputText";
import { Button } from "../../Button";
import { useSpring, animated } from 'react-spring';
import {useFirstStep} from './useFirstStep';

export const FirstStep = ({ stepControl, setUserData }) => {
  const { error, nameStartHandler } = useFirstStep({ stepControl, setUserData });

  const fadeAnim = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  return (
    <animated.div style={fadeAnim}>
      <section className="px-10 md:px-0 flex flex-col items-center justify-center gap-8">
        <img className="w-full md:w-1/2" src={logo} alt="Logo do anime Pokémon" />
        <form onSubmit={nameStartHandler} className="flex flex-col gap-3">
          <InputText
            required
            type="text"
            name="username"
            placeholder="INSIRA SEU NOME"
          />
          <Button type="submit">Iniciar</Button>
          <p className="text-center text-yellow-500 font-medium">{error}</p>
        </form>
      </section>
    </animated.div>
  );
};
