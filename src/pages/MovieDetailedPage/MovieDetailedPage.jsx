import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { MOVIES } from '../../movies.data';

export const MovieDetailedPage = () => {

const {id} = useParams()

const detailedMovie = useMemo(() => {
  return MOVIES.find(movie => movie.trailerYoutubeId === id)
}, [id])

if(!detailedMovie) {
  return <p className='text-center mt-10 text-grey-400'>Movie is not found</p>
}

  return (
    <div className='min-h-screen px-6 py-10 bg-black text-white'>
      <img className='w-2/3 md:w-1/3 rounded-xl shadow-lg object-cover' src={detailedMovie.img} alt={detailedMovie.name} />
      <div className='flex-1 space-y-4'>
        <h2 className='text-4xl font-bold'>{detailedMovie.name}</h2> 
        <p className='text-sm text-grey-400'>IMDb: {detailedMovie.rating}</p>
        <p className='text-sm text-grey-300'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, perspiciatis.
        </p>
      </div>
      
    </div>
  );
};
