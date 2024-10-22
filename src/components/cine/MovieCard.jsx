import { useState } from "react";
import tag from "../../assets/icons/tag.svg";
import { getImgUrl } from "../../utils/cine-utility";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  const handleMovieSelection = () => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <MovieDetailsModal movie={selectedMovie} onClose={handleModalClose} />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl flex flex-col h-full">
        <div
          onClick={handleMovieSelection}
          className="aspect-[2/3] w-full mb-2 sm:mb-4 overflow-hidden rounded-md"
        >
          <img
            className="w-full h-full object-contain"
            src={getImgUrl(movie.cover)}
            alt={movie.title}
          />
        </div>
        <figcaption className="flex flex-col flex-grow">
          <h3 className="text-lg sm:text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
          <div className="flex items-center space-x-1 mb-3 sm:mb-5">
            <Rating value={movie.rating} />
          </div>
          <button className="bg-primary rounded-lg py-1 sm:py-2 px-3 sm:px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm">
            <img src={tag} alt="tag" className="w-4 h-4" />
            <span>${movie.price} | Add to Cart</span>
          </button>
        </figcaption>
      </figure>
    </>
  );
};

export default MovieCard;
