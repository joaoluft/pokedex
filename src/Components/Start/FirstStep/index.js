import logo from "./../../../Assets/Images/pokemon_logo.png";
import { InputText } from "../../InputText";
import { Button } from "../../Button";
import { useState } from "react";

export const FirstStep = ({ stepControl, setUserData }) => {
  const [error, setError] = useState("");

  const nameStartHandler = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const username = form.get("username");

    if (username.length < 3)
      return setError("Seu nome precisa conter mais de 3 caracteres!");
    setUserData((prevData) => ({
      ...prevData,
      username: username,
    }));
    stepControl(2);
  };

  return (
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
  );
};
