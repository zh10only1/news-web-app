import Grid from "../components/Grid";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Favorites = () => {
  const [articles, setArticles] = useState([]);
  const favorites = useSelector((state) => state.favorite);

  useEffect(() => {
    setArticles(favorites);
  }, [favorites]);

  return (
    <div className="sm:px-16 px-6 mt-[90px]">
      <div className="text-center w-[45%] mx-auto">
        <h1 className="font-poppins font-semibold text-4xl border-b-2 border-solid border-black">
          Your Favorite Articles
        </h1>
      </div>
      <div className="my-10 mx-0 z-0 ">
        {articles.length === 0 ? (
          <div className="text-center my-[150px]">
            <h2 className="font-poppins font-normal text-xl text-[#D62828]">
              You haven't added any favorite articles yet :(
            </h2>
          </div>
        ) : (
          <Grid items={articles} isFavorite={true} />
        )}
      </div>
    </div>
  );
};

export default Favorites;
