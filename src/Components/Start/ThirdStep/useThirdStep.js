import { useState } from "react";

export const useThirdStep = (initialChat = 1, userData) => {
  const [chatStep, setChatStep] = useState(initialChat);

  const chats = {
    1: `Olá, ${userData.username}! Bem-vindo ao mundo Pokémon, onde aventuras extraordinárias e laços de amizade aguardam por você. Prepare-se para explorar, e se tornar um treinador Pokémon!`,
    2: "Prepare-se para embarcar em uma jornada como treinador Pokémon. Com sua Pokébola em mãos, explore o mundo em busca de criaturas incríveis. Está pronto para se tornar uma lenda?",
    3: "Para capturar um pokémon você deve acessar as informações dele clicando em cima do pokémon desejado, e logo após clicar em capturar para iniciar o processo de captura para sua pokedéx!",
    4: "Uma dica! Você pode filtrar os pokémons que deseja encontrar com base em tipos, nomes, e quantidade, boa sorte em sua aventura construindo sua história como treinador pokémon!",
  };

  const nextChatStep = () => {
    setChatStep((prevStep) => prevStep + 1);
  };

  const isLastChatStep = () => {
    return chatStep === Object.keys(chats).length;
  };

  const getCurrentChatMessage = () => {
    return chats[chatStep];
  };

  return {
    nextChatStep,
    isLastChatStep,
    getCurrentChatMessage,
  };
};