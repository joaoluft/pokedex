import { Button } from "../../Button";
import professorImage from "./../../../Assets/Images/Start/professor.gif";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import {useThirdStep} from "./useThirdStep";

export const ThirdStep = ({ userData, setUserData }) => {
  const {nextChatStep, isLastChatStep, getCurrentChatMessage } = useThirdStep(1, userData);

  const fadeAnim = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  const navigate = useNavigate();

  const nextChatHandler = () => {
    if (!isLastChatStep()) {
      nextChatStep();
    } else {
      setUserData((prevData) => ({ ...prevData, tutorial: true }));
      navigate("/capture");
    }
  };

  return (
    <animated.div style={fadeAnim}>
      <section className="h-screen px-6 flex flex-col items-center justify-center gap-4">
        <h1 className="text-center text-3xl uppercase text-white font-semibold">
          Boas-vindas {userData.username}!
        </h1>
        <div className="w-full flex items-center justify-center">
          <img
            className="w-[35%] sm:w-[12%]"
            draggable="false"
            src={professorImage}
            alt="Gif animado do pokemon Pikachu Acenando"
          />
        </div>
        <div className="max-w-1/2 h-52 md:h-32 animate-pulse py-4 px-6 bg-gray-50 border-2 border-black rounded-xl shadow-xl overflow-auto">
          <h1 className="text-[#3c5aa6] pb-1">Professor:</h1>
          <p className="text-gray-700 text-sm">{getCurrentChatMessage()}</p>
        </div>
        <div className="flex items-center justify-center pt-6">
          <Button onClick={nextChatHandler}>
            {isLastChatStep() ? "Finalizar" : "Próximo"}
          </Button>
        </div>
      </section>
    </animated.div>
  );
};