import { usePokemonModal } from './usePokemonModal';
import { animated } from 'react-spring';

export const PokemonModal = ({ data, onClose }) => {
  const { fadeAnim, isVisible, closeModal, modalContent } = usePokemonModal(data, onClose);

  return (
    <animated.div style={{ ...fadeAnim, pointerEvents: isVisible ? 'auto' : 'none' }}>
      <div className={`modal-dropdown fixed top-0 px-6 md:px-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-50 ${isVisible ? '' : 'pointer-events-none'}`}>
        <div className="flex flex-col items-center md:w-1/3 h-fit pb-6 bg-gray-200 rounded-2xl overflow-hidden border-2 border-gray-100/50">
          {modalContent}
        </div>
      </div>
    </animated.div>
  );
};
