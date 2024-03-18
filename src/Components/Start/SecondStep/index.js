import { useEffect, useState } from "react";
import { getTrainersData } from "./../../../utils";
import unknown from "./../../../Assets/Images/Trainers/unknown.png";

export const SecondStep = ({ userData }) => {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTrainersData()
      .then((res) => {
        setTrainers(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const selectCharacterHandler = (key) => {};

  useEffect(() => {
    if (trainers.lenght > 0) {
      setLoading(true);
      console.log(trainers);
    }
  }, [trainers]);

  const renderTrainers = (trainers) => {
    console.log(trainers);
    return trainers.map((trainer) => (
      <div
        className="cursor-pointer hover:scale-105 transition-transform"
        key={trainer.id}
        onClick={() => selectCharacterHandler(trainer.id)}
      >
        <img
          draggable="false"
          className="rounded-full w-32 h-32 bg-gray-50/50 border border-white "
          src={trainer.icon}
          alt={trainer.name}
        />
        <p className="text-center text-white pt-2">{trainer.name}</p>
      </div>
    ));
  };

  return (
    <section>
      <h1 className="text-white font-bold text-center pb-6 text-2xl">
        Escolha seu treinador(a)
      </h1>
      <div className="flex flex-col gap-4">
        {loading ? (
          <>
            <div className="flex gap-6">{renderTrainers(trainers.male)}</div>
            <div className="flex gap-6">{renderTrainers(trainers.female)}</div>
          </>
        ) : (
          <>
            <p className="text-center text-white">Carregando personagens...</p>
          </>
        )}
        <div className="flex item-center justify-center ">
          <div className="cursor-pointer hover:scale-105 transition-transform">
            <img
              src={unknown}
              draggable="false"
              className="rounded-full w-32 h-32 bg-gray-50/50 border border-white"
            />
            <p className="text-center text-white pt-2">Nenhum</p>
          </div>
        </div>
      </div>
    </section>
  );
};
