import React, { memo } from 'react';
import { useState } from 'react';

const FavoriteButton = () => {
const [isFavorite, setIsFavorite] = useState(false)

const handlefavorite = () => {
    setIsFavorite(!isFavorite)
}
  return (
    <button onClick={handlefavorite} className='cursor-pointer'>
       {isFavorite ? '❤️' : '🤍'}
    </button>
  );
};

export default memo(FavoriteButton)
