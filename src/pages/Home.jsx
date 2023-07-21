import HeroSection from "../components/HeroSection";
import Dropdown from "../components/Dropdown";
import Grid from "../components/Grid";
import Loader from "../components/Loader";
import { CATEGORIES } from "../constants";
import { getNews } from "../api/newsApi";
import { useState, useEffect } from "react";

const Home = () => {
  const [selectedValue, setSelectedValue] = useState(CATEGORIES[0].value);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async function newsApiCall() {
      let response;
      try {
        response = await getNews(selectedValue);
        response = response.data.articles;
      } catch (error) {
        console.log(error);
      }
      setArticles(response);
    })();

    setArticles([]);
  }, [selectedValue]);

  const handleDropdownChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <div>
      <HeroSection />
      <section id="categories" className="mt-10 px-6 sm:px-16">
        <div className="bg-red-gradient-2 p-4 rounded-lg flex flex-row justify-between items-center">
          <h1 className="font-poppins font-semibold text-2xl sm:text-3xl text-white">
            Latest News
          </h1>
          <Dropdown
            categories={CATEGORIES}
            selectedValue={selectedValue}
            onDropdownChange={handleDropdownChange}
          />
        </div>
        <div className="my-10 mx-0 z-0">
          {articles.length === 0 ? (
            <Loader text="Articles" />
          ) : (
            <Grid items={articles} isFavorite={false} />
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
