import { useState } from "react";
import { Button } from "../../Button";
import wavingPikachu from "./../../../Assets/Images/Start/waving_pikachu.gif";
import { useNavigate } from "react-router-dom";

export const ThirdStep = ({ userData, setUserData }) => {
  const [chating, setChating] = useState(1);

  const navigate = useNavigate();

  const chats = {
    1: `Olá, ${userData.username}! Bem-vindo ao mundo Pokémon, onde aventuras extraordinárias e laços de amizade aguardam por você. Prepare-se para explorar, e se tornar um treinador Pokémon!`,
    2: "Prepare-se para embarcar em uma jornada como treinador Pokémon. Com sua Pokébola em mãos, explore o mundo em busca de criaturas incríveis. Está pronto para se tornar uma lenda?",
    3: "Para capturar um pokémon você deve acessar as informações dele clicando em cima do pokémon desejado, e logo após clicar em capturar para iniciar o processo de captura para sua pokedéx!",
    4: "Uma dica! Você pode filtrar os pokémons que deseja encontrar com base em tipos, nomes, e quantidade, boa sorte em sua aventura como treinador pokémon!",
  };

  const nextChatHandler = () => {
    const lastQuestion = chating === Object.keys(chats).length;
    if (!lastQuestion) {
      setChating((prevChat) => prevChat + 1);
    } else {
      setUserData((prevData) => ({ ...prevData, tutorial: true }));
      navigate("/capture");
    }
  };

  return (
    <section className="px-6">
      <h1 className="text-center text-3xl uppercase text-white font-semibold">
        Boas-vindas {userData.username}!
      </h1>
      <div className="w-full flex items-center justify-center">
        <img
          className="w-1/2"
          draggable="false"
          src={wavingPikachu}
          alt="Gif animado do pokemon Pikachu Acenando"
        />
      </div>
      <div className="animate-pulse p-3 bg-gray-50 border-2 border-black rounded-xl shadow-xl">
        <p className="tracking-wide text-gray-700 text-sm">{chats[chating]}</p>
      </div>
      <div className="flex items-center justify-center pt-6">
        <Button onClick={nextChatHandler}>
          {chating === Object.keys(chats).length ? "Finalizar" : "Próximo"}
        </Button>
      </div>
    </section>
  );
};
