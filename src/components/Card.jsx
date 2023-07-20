import { useDispatch, useSelector } from "react-redux";
import { removeFavorite, setFavorite } from "../store/favoriteSlice";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ data, isFavorite }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const website = data.url.replace("https://", "").split("/")[0];
  const date = data.publishedAt.replace("T", " ").replace("Z", "");
  const [isInFavorite, setIsInFavorite] = useState(isFavorite);
  if (!isFavorite) {
    const favorites = useSelector((state) => state.favorite);
    useEffect(() => {
      if (
        favorites.some((fav) => JSON.stringify(fav) === JSON.stringify(data))
      ) {
        setIsInFavorite(true);
      } else {
        setIsInFavorite(false);
      }
    }, []);
  }

  function onBookmarkClicked() {
    dispatch(setFavorite(data));
    setIsInFavorite((prev) => !prev);
  }

  function onRemovedClicked() {
    dispatch(removeFavorite(data));
    navigate("/favorites");
  }

  return (
    <div className="bg-white shadow-md w-80 h-120 rounded-lg overflow-hidden text-black pb-2 transition duration-100 flex flex-col hover:shadow-lg">
      <div className="mb-[0.5em] h-[15em] overflow-hidden">
        <a href={data.url}>
          <img
            className="flex justify-center items-center w-full h-full transition-all duration-700 ease-in-out hover:scale-110"
            src={data.urlToImage}
            alt={data.title}
          />
        </a>
      </div>
      <div className="font-poppins py-[0.5em] px-[1em] flex flex-col justify-between items-start gap-[0.5em] flex-grow">
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex justify-start items-center gap-[0.5em]">
            <img
              src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE%2CSIZE%2CURL&url=http%3A%2F%2F${website}&size=16`}
              alt={data.source.id}
            />
            <span>{data.source.name}</span>
          </div>
          <div>
            {isInFavorite ? (
              <button
                onClick={() => {
                  onRemovedClicked();
                }}
              >
                <ion-icon name="remove-circle"></ion-icon>
              </button>
            ) : (
              <button
                onClick={() => {
                  onBookmarkClicked();
                }}
              >
                <ion-icon name="bookmark"></ion-icon>
              </button>
            )}
          </div>
        </div>
        <div>
          <a href={data.url}>
            <h2 className="font-semibold text-lg">{data.title}</h2>
          </a>
        </div>
        <a href={data.url}>
          <p className="leading-6 text-[#555] text-sm">{data.description}</p>
        </a>
        <div>
          <small>
            <b>Published At: </b>
            {date}
          </small>
        </div>
      </div>
    </div>
  );
};

export default Card;
