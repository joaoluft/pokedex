import { useState } from 'react';
import { ColorExtractor } from 'react-color-extractor';
import { useNavigate } from "react-router-dom";

export const Banner = ({user, trainer}) => {
  const [banner, setBanner] = useState([]);
  const navigate = useNavigate();

  const setBannerColorHandler = (colors) => setBanner([colors[0], colors[1]]);

  return (
    <section>
      <div className={`relative flex items-center justify-center bg-gradient-to-br from-[${banner[0]}] to-[${banner[1]}] w-full h-64`}>
        <div onClick={() => navigate("/capture")} className="cursor-pointer absolute flex gap-2 items-center justify-center text-sm top-4 left-4 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <span>VOLTAR</span>
        </div>
        <ColorExtractor getColors={setBannerColorHandler}>
          <img className="absolute -bottom-14 w-36 bg-gradient-to-t from-gray-100/30 rounded-full border-2 border-white" draggable="false" src={trainer.icon} alt="Logo treinador(a) pokemon" />
        </ColorExtractor>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center pt-20">
        <h1 className="font-semibold text-xl text-gray-600">{trainer.name}</h1>
        <h1 className="font-semibold text-gray-700">{user.username}</h1>
      </div>
    </section>
  )
}