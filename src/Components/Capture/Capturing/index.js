import React from 'react';
import { useSpring, animated } from 'react-spring';
import capturingIcon from "./../../../Assets/Images/capturing.gif";

export const Capturing = ({attemps}) => {
  const fadeAnim = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 800 },
  });

  return (
    <animated.div style={fadeAnim}>
      <section className="flex flex-col items-center justify-center py-4">
        <p className="text-gray-600 uppercase text-sm font-semibold">Tentativa {attemps} de 3</p>
        <img draggable="false" src={capturingIcon} alt="Pokebola capturando pokemon" />
        <p className="animate-pulse text-gray-600 uppercase font-semibold">Capturando pokemon...</p>
      </section>
    </animated.div>
  );
};