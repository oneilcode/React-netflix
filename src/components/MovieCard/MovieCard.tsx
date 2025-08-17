import { memo, useState } from "react";
import  FavoriteButton  from "../FavoriteButton/FavoriteButton";
import { Modal } from "../Modal/Modal";
import { Link } from "react-router-dom";
import type { IMovie } from "../../movie.interface";

interface Props {
  movie: IMovie;
}

const MovieCard = ({ movie }: Props) => {
const [isModalOpen, setModalOpen] = useState(false)

const showModal = () => {
  setModalOpen(!isModalOpen)
}

  return (
    <div className="group relative w-[200px] rounded-2xl overflow-hidden bg-neutral-900 shadow-lg 
                transition-all duration-300 hover:brightness-75 cursor-pointer
                transform hover:-translate-y-1 hover:shadow-xl">
        <img className="w-full h-auto object-cover" src={movie.img} alt={movie.name} />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-2 text-sm text-white font-semibold">IMDb: {movie.rating}</div>
        
          <div className="absolute flex gap-2 top-2 right-2 z-10">
            <FavoriteButton />
            <button className="w-8 h-8 flex items-center justify-center bg-white/90 hover:bg-white text-black rounded-full 
                    hover:scale-110 transition-all duration-200 shadow-md hover:shadow-l" onClick={showModal}>🎥</button>
            <Link className="w-8 h-8 flex items-center justify-center bg-white/90 hover:bg-white text-black rounded-full 
                    hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg" to={`/movie/${movie.trailerYoutubeId}`}>🎞</Link>
          </div> 

          {isModalOpen && (
            <Modal onClose={showModal}>
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${movie.trailerYoutubeId}?amp;controls=0`} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </Modal> 
          )}
        
      </div>
  );
};

export default memo(MovieCard)