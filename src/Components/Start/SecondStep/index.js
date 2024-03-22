import { useSecondStep } from "./useSecondStep";
import unknown from "./../../../Assets/Images/Trainers/unknown.png";
import { useSpring, animated } from "react-spring";

export const SecondStep = ({ userData, setUserData, stepControl }) => {
  const { trainers, isLoading } = useSecondStep();

  const fadeAnim = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  const selectCharacterHandler = (key) => {
    setUserData((prevData) => ({ ...prevData, trainer: key }));
    stepControl(3);
  };

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return (
    <animated.div style={fadeAnim}>
      <section className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl text-center font-bold pb-6 text-white capitalize">Olá, {userData && userData.username}</h1>
        <h2 className="text-gray-100 font-semibold text-center pb-6 text-2xl">
          Escolha seu treinador(a)
        </h2>
        <div className="flex flex-col gap-4">

          <div className="flex justify-center gap-6 flex-wrap">
            {trainers.map((trainer) => (
              <div
                className="w-1/4 flex flex-col gap-2 items-center cursor-pointer hover:scale-105 transition-transform"
                key={trainer.id}
                onClick={() => selectCharacterHandler(trainer.id)}
              >
                <img
                  draggable="false"
                  className="rounded-full w-24 h-24 md:w-32 md:h-32 bg-gradient-to-t from-gray-100/30 border-2 border-white"
                  src={trainer.icon}
                  alt={trainer.name}
                />
                <p className="text-white">{trainer.name}</p>
              </div>
            ))}
          </div>

          <div className="flex item-center justify-center">
            <div onClick={() => selectCharacterHandler(null)} className="cursor-pointer hover:scale-105 transition-transform">
              <img
                src={unknown}
                draggable="false"
                className="rounded-full w-24 h-24 md:w-32 md:h-32 bg-gradient-to-t from-gray-100/30 border-2 border-white"
                alt="Personagem indefinido"
              />
              <p className="text-center text-white pt-2">Nenhum</p>
            </div>
          </div>
        </div>
      </section>
    </animated.div>
  );
};
