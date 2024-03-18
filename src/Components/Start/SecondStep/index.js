import { useEffect, useState } from "react";
import { getTrainersData } from "./../../../utils";
import unknown from "./../../../Assets/Images/Trainers/unknown.png";

export const SecondStep = ({ userData }) => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    getTrainersData()
      .then((res) => {
        setTrainers(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const selectCharacterHandler = (key) => {
    console.log(key)
  };

  return (
    <section>
      <h1 className="text-3xl text-center font-bold pb-6 text-white">Olá, {userData && userData.username}</h1>
      <h2 className="text-white font-bold text-center pb-6 text-2xl">
        Escolha seu treinador(a)
      </h2>
      <div className="flex flex-col gap-4">

        <div className="flex justify-center gap-6 flex-wrap">{trainers.map((trainer) => (
          <div
            className="w-1/4 flex flex-col gap-2 items-center cursor-pointer hover:scale-105 transition-transform"
            key={trainer.id}
            onClick={() => selectCharacterHandler(trainer.id)}
          >
            <img
              draggable="false"
              className="rounded-full w-32 h-32 bg-gray-50/50 border border-white "
              src={trainer.icon}
              alt={trainer.name}
            />
            <p className="text-white">{trainer.name}</p>
          </div>
        )
        )}
        </div>

        <div className="flex item-center justify-center">
          <div onClick={() => selectCharacterHandler(null)} className="cursor-pointer hover:scale-105 transition-transform">
            <img
              src={unknown}
              draggable="false"
              className="rounded-full w-32 h-32 bg-gray-50/50 border border-white"
              alt="Personagem indefinido"
            />
            <p className="text-center text-white pt-2">Nenhum</p>
          </div>
        </div>
      </div>
    </section>
  );
};
