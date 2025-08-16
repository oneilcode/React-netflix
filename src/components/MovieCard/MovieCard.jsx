import { memo, useState } from "react";
import  FavoriteButton  from "../FavoriteButton/FavoriteButton";
import { Modal } from "../Modal";

const MovieCard = ({ name, img, rating, trailerYoutubeId}) => {
const [isModalOpen, setModalOpen] = useState(false)

const showModal = () => {
  setModalOpen(!isModalOpen)
}

  return (
    <div className="relative w-[200px] rounded-2xl overflow-hidden bg-neutral-900 shadow-lg">
        <img className="w-full h-auto object-cover" src={img} alt={name} />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-2 text-sm text-white font-semibold">IMDb: {rating}</div>
        
        <div className="absolute flex gap-2 top-2 right-2 z-10">
          <FavoriteButton />
          <button onClick={showModal}>🎥</button>
        </div> 

        {isModalOpen && (
          <Modal onClose={showModal}>
          <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailerYoutubeId}?amp;controls=0`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Modal> 
        )}
       
    </div>
  );
};

export default memo(MovieCard)