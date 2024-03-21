import failIcon from "./../../../Assets/Images/fail.gif";
import { useSpring, animated } from 'react-spring';

export const Fail = ({ closeModal }) => {

  const fadeAnim = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  return (
    <animated.div style={fadeAnim}>
    <section className="relative flex flex-col items-center justify-center pb-4">
      <button onClick={closeModal} className="absolute top-2 right-2 flex items-center justify-center h-10 w-10 text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>

      <img draggable="false" src={failIcon} alt="Icone de falha ao capturar pokemon" />
      <p className="text-gray-600 uppercase font-semibold">O pokémon escapou!</p>
    </section>
    </animated.div>
  )
}