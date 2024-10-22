import tag from "../../assets/icons/tag.svg";
import { getImgUrl } from "../../utils/cine-utility";

const MovieDetailsModal = ({ movie, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl sm:grid sm:grid-cols-[2fr_1fr] overflow-hidden">
          <img
            className="sm:order-2 w-full object-cover h-full"
            src={getImgUrl(movie.cover)}
            alt={movie.title}
          />
          <div className="p-5 lg:p-10">
            <h2 className="text-3xl lg:text-[50px] lg:leading-[64px] mb-4 font-bold">
              {movie.title}
            </h2>
            <span className="block text-base text-[#9fa0a4] dark:text-[#575A6E] my-4">
              {movie.genre}
            </span>
            <p className="text-sm lg:text-base mb-10 lg:mb-20">
              {movie.description}
            </p>
            <div className="grid lg:grid-cols-2 gap-3">
              <button className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm">
                <img src={tag} alt="tag" />
                <span>${movie.price} | Add to Cart</span>
              </button>
              <button
                className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
