import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MOVIES } from '../../movies.data';
import { convertToHours } from '../../helpers/convertToHours';

export const MovieDetailedPage = () => {

const {id} = useParams()

const detailedMovie = useMemo(() => {
  return MOVIES.find(movie => movie.trailerYoutubeId === id)
}, [id])

if(!detailedMovie) {
  return <p className='text-center mt-10 text-grey-400'>Movie is not found</p>
}

return (
  <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white">
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
       
        <div className="relative group w-full md:w-2/5 lg:w-1/3">
          <img 
            className="w-full rounded-xl shadow-2xl object-cover transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-xl"
            src={detailedMovie.img} 
            alt={detailedMovie.name}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
        </div>

        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {detailedMovie.name}
            </h2>
            <div className="flex items-center mt-2">
              <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-md text-sm font-medium">
                IMDb: {detailedMovie.rating}
              </span>
              <span className="ml-3 text-gray-400 text-sm">{convertToHours(detailedMovie.duration)} • {detailedMovie.year} • {detailedMovie.genre}</span>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, perspiciatis 
            voluptatum nisi eum doloremque accusamus, temporibus cumque doloribus.
          </p>

          <Link 
            to="/" 
            className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300 group"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>

        </div>
      </div>
    </div>
  </div>
);
};
