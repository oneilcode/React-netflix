import { memo } from 'react';
import { useState } from 'react';

const FavoriteButton = () => {
const [isFavorite, setIsFavorite] = useState(false)

const handlefavorite = () => {
    setIsFavorite(!isFavorite)
}
  return (
    <button 
    onClick={handlefavorite}
    className="w-8 h-8 flex items-center justify-center bg-white/90 hover:bg-white text-black rounded-full 
              hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg"
  >
    {isFavorite ? '❤️' : '🤍'}
  </button>
  );
};

export default memo(FavoriteButton)
