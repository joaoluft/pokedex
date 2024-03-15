import { useEffect, useState } from "react";
import { getTrainersData } from "./../../../utils";

export const SecondStep = () => {

  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    getTrainersData().then(res => {
      setTrainers(res);
    }).catch(err => {
      console.error(err);
    })
  }, [])

  return (
    <section>
      <h1 className="">Escolha seu treinador(a)</h1>
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          {trainers.male && trainers.male.map(trainer => (
            <div key={trainer.id}>
              <img src={trainer.icon} alt={trainer.name} />
              <p>{trainer.name}</p>
            </div>
          )
          )}
        </div>
        <div></div>
        <div></div>
      </div>
    </section>
  )
}