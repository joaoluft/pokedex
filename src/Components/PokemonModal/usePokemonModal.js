import { useState, useEffect, useContext } from 'react';
import { useSpring } from 'react-spring';
import { PokedexContext } from './../../Contexts/PokedexContext';
import { ColorExtractor } from 'react-color-extractor';
import captureIcon from './../../Assets/Images/capture.gif';
import { Capturing, Success, Fail } from './../Capture';
import { typesColors } from "./../../Constants/types";

export const usePokemonModal = (initialData, onClose, profile) => {
  const { config } = useContext(PokedexContext);
  const { current = false, open } = initialData;
  const [isVisible, setIsVisible] = useState(open);
  const [closing, setClosing] = useState(false);
  const [banner, setBanner] = useState([]);
  const [captureStep, setCaptureStep] = useState(0);
  const [captureAttempts, setCaptureAttempts] = useState(1);

  useEffect(() => {
    setIsVisible(open);
    setCaptureStep(0);
    if (!open) {
      setClosing(true);
    }
  }, [open]);

  const fadeAnim = useSpring({
    opacity: isVisible ? 1 : 0,
    config: { duration: 250 },
    onRest: () => {
      if (!isVisible && closing) {
        onClose();
        setClosing(false);
      }
    },
  });

  const closeModal = () => {
    setIsVisible(false);
    setClosing(true); 
  };

  const startCapturingHandler = () => {
    setCaptureStep(1);
    setCaptureAttempts(1);
  
    const delay = () => new Promise(resolve => setTimeout(resolve, 5000));
  
    const captureAttempts = [];
  
    const captureStep = async () => {
      for (let i = 0; i < 3; i++) {

        // 90% de chance de dar certo
        const captureResult = Math.random() < 0.90;
  
        captureAttempts.push(captureResult);
  
        await delay();

        setCaptureAttempts(prevAttemps => (prevAttemps + 1))
  
        console.log(captureAttempts);
  
        // Caso falhe em alguma etapa
        if (!captureResult) {
          setCaptureStep(3);
          break;
        }
      }
      
      // Caso tenha capturado
      if (captureAttempts.every(attempt => attempt)) {
        setCaptureStep(2);
      }
    };
  
    captureStep();
  };
  

  const setBannerColorHandler = (colors) => setBanner([colors[0], colors[1]]);

  const renderModalContent = () => {
    switch (captureStep) {
      case 1:
        return <Capturing attemps={captureAttempts} />;
      case 2:
        return <Success pokemon={current} closeModal={closeModal} />;
      case 3:
        return <Fail closeModal={closeModal} />;
      default:
        return current ? renderPokemonInfo() : <p>Carregando informações...</p>;
    }
  };

  const renderPokemonInfo = () => (
    <div className="w-full">
      <div className={`relative flex items-center justify-center bg-gradient-to-br from-[${banner[0]}] to-[${banner[1]}] h-36 w-full`}>
        <ColorExtractor maxColors={3} getColors={setBannerColorHandler}>
          <img draggable="false" className="absolute object-none -bottom-16 w-36 h-36 bg-gradient-to-t from-gray-100/50 border-2 border-white rounded-full" src={current.icon} alt={current.name[config.language]} />
        </ColorExtractor>
        <button onClick={closeModal} className="absolute top-2 right-2 flex items-center justify-center h-10 w-10 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col gap-2 items-center pt-20">
        {!profile ? (
          <h1 className="font-semibold text-xl text-gray-600">{current.name[config.language]}</h1>
        ) : (
          <>
            <h1 className="text-gray-600 text-xl font-semibold">{current.surname}</h1>
            <h2 className="text-md text-gray-400 pb-2">{current.name[config.language]}</h2>
          </>
        )}
        <div className="flex gap-2 items-center justify-center">
          {current.type.map((type) => (
            <div
              key={type + current.id}
              className={`text-gray-100 text-xs rounded-lg px-2 py-1 bg-[${typesColors[type]}]`}
            >
              {type}
            </div>
          ))}
        </div>
        <div className="pt-6 pb-4 px-10 text-sm flex flex-wrap gap-3 text-gray-800 items-center justify-center">
          <span>HP: {current.base.HP}</span>
          <span>Attack: {current.base.Attack}</span>
          <span>Defense: {current.base.Defense}</span>
          <span>Sp. Attack: {current.base["Sp. Attack"]}</span>
          <span>Sp. Defense: {current.base["Sp. Defense"]}</span>
          <span>Speed: {current.base.Speed}</span>
        </div>
        {!profile && (
        <div className="pt-4 w-full flex items-center justify-center">
          <button onClick={startCapturingHandler} className="flex gap-3 items-center justify-center bg-red-500 text-white px-4 py-2.5 rounded-xl font-medium text-sm uppercase">
            <img draggable="false" className="w-6" src={captureIcon} alt="" />
            <span>Capturar</span>
          </button>
        </div>
        )}
      </div>
    </div>
  );

  return { fadeAnim, isVisible, modalContent: renderModalContent() };
};