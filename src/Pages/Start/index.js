import { useContext, useState } from "react";
import { FirstStep, SecondStep, ThirdStep } from "../../Components/Start";
import { UserContext } from "../../Contexts/UserContext";

export const Start = () => {
  const [step, setStep] = useState(1);
  const { data, setData } = useContext(UserContext);

  return (
    <main className="
        bg-gradient-to-r 
        from-[#3c5aa6]
        to-[#2a75bb]
        select-none
        overflow-auto">
      {(() => {
        switch (step) {
          case 1:
            return <FirstStep stepControl={setStep} setUserData={setData} />;
          case 2:
            return <SecondStep userData={data} setUserData={setData} stepControl={setStep} />;
          case 3:
            return <ThirdStep userData={data} setUserData={setData} />;
          default:
            return <FirstStep stepControl={setStep} setUserData={setData} />;
        }
      })()}
    </main>
  );
};