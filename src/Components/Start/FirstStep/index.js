import logo from "./../../../Assets/Images/pokemon_logo.png";
import { InputText } from "../../InputText";
import { Button } from "../../Button";

export const FirstStep = () => {
  return (
    <section className="px-10 md:px-0 flex flex-col items-center justify-center gap-8">
      <img className="w-full md:w-1/2" src={logo} alt="Logo do anime Pokémon" />
      <div className="flex flex-col gap-3">
        <InputText type="text" placeholder="Insira Seu Nome" />
        <Button>Iniciar</Button>
      </div>
    </section>
  )
}