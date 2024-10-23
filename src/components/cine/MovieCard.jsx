import { useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import tag from "../../assets/icons/tag.svg";
import { MovieContext } from "../../context";
import { getImgUrl } from "../../utils/cine-utility";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { cartData, setCartData } = useContext(MovieContext);

  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  const handleMovieSelection = () => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleAddToCart = (e, movie) => {
    e.stopPropagation();
    const existingMovie = cartData.find((item) => item.id === movie.id);
    if (!existingMovie) {
      setCartData([...cartData, movie]);
      toast.success("Movie added to the cart!");
    } else {
      toast.warning("This movie is already in the cart!");
    }
  };

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleModalClose}
          onAddToCart={handleAddToCart}
        />
      )}
      <figure
        onClick={handleMovieSelection}
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl flex flex-col h-full"
      >
        <div className="aspect-[2/3] w-full mb-2 sm:mb-4 overflow-hidden rounded-md">
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
          <button
            onClick={(e) => handleAddToCart(e, movie)}
            className="bg-primary rounded-lg py-1 sm:py-2 px-3 sm:px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          >
            <img src={tag} alt="tag" className="w-4 h-4" />
            <span>${movie.price} | Add to Cart</span>
          </button>
        </figcaption>
      </figure>
    </>
  );
};

export default MovieCard;
