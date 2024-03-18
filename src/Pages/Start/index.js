import { useContext, useState } from "react";
import { FirstStep, SecondStep } from "../../Components/Start";
import { UserContext } from "../../Contexts/UserContext";

export const Start = () => {
  const [step, setStep] = useState(1);
  const { data, setData } = useContext(UserContext);

  return (
    <main
      className="
        flex 
        items-center 
        justify-center
        h-screen 
        bg-gradient-to-r 
        from-[#3c5aa6]
        to-[#2a75bb]
        select-none
        "
    >
      {(() => {
        switch (step) {
          case 1:
            return <FirstStep stepControl={setStep} setUserData={setData} />;
          case 2:
            return <SecondStep userData={data} />;
          default:
            return <FirstStep />;
        }
      })()}
    </main>
  );
};
