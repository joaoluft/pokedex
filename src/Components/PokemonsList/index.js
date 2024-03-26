import { usePokemonsList } from './usePokemonsList';
import { Button } from './../Button';
import { InputSearch } from '../InputSearch';
import { SelectType } from '../SelectType';
import { LanguageSelector } from '../LanguageSelector';
import { typesColors } from '../../Constants/types';
import { animated, useSpring } from 'react-spring';
import { useState } from 'react';
import { PokemonModal } from '../PokemonModal';
import { PokemonCard } from '../PokemonCard';

export const PokemonsList = () => {

  const [modalData, setModalData] = useState({});

  const {
    pokemons,
    types,
    filter,
    updateSearchFilter,
    addTypeFilter,
    removeTypeFilter,
    loadMorePokemons,
  } = usePokemonsList();

  const fadeAnim = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
  });

  const filterSearchHandler = (event) => {
    updateSearchFilter(event.target.value);
  };

  const addTypeFilterHandler = (event) => {
    addTypeFilter(event.target.value);
  };

  return (
    <animated.div style={fadeAnim}>
      <PokemonModal data={modalData} onClose={() => setModalData({open: false})} />

      <section className="flex flex-col items-center justify-center pt-10 pb-24">
        <div className="grid sm:flex gap-4 items-center justify-center">
          <LanguageSelector />
          <InputSearch onChange={filterSearchHandler} placeholder="Pikachu, Charizard..." />
          <SelectType onChange={addTypeFilterHandler} types={types} />
        </div>

        <div className="flex gap-2 items-center justify-center pt-4 pb-6">
          {filter.types.map((filter) => (
            <div
              onClick={() => removeTypeFilter(filter)}
              key={filter}
              className={`text-white 
                flex gap-1 
                items-center 
                justify-center 
                bg-[${typesColors[filter]}] 
                px-2 
                rounded-full 
                py-1`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="text-sm">{filter}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-8 flex-wrap">
          {pokemons &&
            pokemons.map((pokemon) => (
              <PokemonCard pokemon={pokemon} onClick={() => setModalData({current: pokemon, open: true})} />
            ))}
        </div>

        <div className="pt-12">
          <Button
            disabled={filter.quantity > pokemons.length}
            onClick={loadMorePokemons}
          >
            <span>Ver mais...</span>
          </Button>
        </div>
      </section>
    </animated.div>
  );
};