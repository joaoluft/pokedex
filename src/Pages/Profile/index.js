import { useContext, useEffect, useState } from "react";
import { UserContext } from "./../../Contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from 'react-spring';
import { Banner, Pokedex } from "../../Components/Profile";
import { getTrainerData } from "../../utils";

export const Profile = () => {
  const { data } = useContext(UserContext);
  const [trainer, setTrainer] = useState({});

  useEffect(() => {
    getTrainerData(data.trainer).then(res => {
        setTrainer(res);
    }).catch(err => {
        console.error(err);
    });
}, [data.trainer]);

  const navigate = useNavigate();

  const fadeAnim = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  useEffect(() => {
    if (!data.tutorial) navigate("/");
  })

  return (
    <main className="
    h-screen 
    bg-gray-200
    select-none
    overflow-auto">
      <animated.div style={fadeAnim}>
        <Banner user={data} trainer={trainer} />
        <Pokedex />
      </animated.div>
    </main>
  );
}