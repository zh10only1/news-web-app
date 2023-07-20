import Button from "./Button";
import heroImg from "../assets/hero-img.jpg";
import List from "./List";
import { useState } from "react";
import { getNewsBySearch } from "../api/newsApi";

const HeroSection = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleSearchClick = async () => {
    if (searchText === "") {
      return;
    }

    let response;
    try {
      response = await getNewsBySearch(searchText);
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    setSearchResults(response);
  };

  return (
    <section className="sm:px-16 px-6 relative z-[10]">
      <div
        style={{ backgroundImage: `url(${heroImg})` }}
        className="flex flex-col justify-center items-center gap-10 bg-center bg-cover bg-blend-overlay bg-black/50 h-[450px] rounded-lg backdrop-blur-sm"
      >
        <div className="text-center max-w-[90%]">
          <h1 className="font-poppins font-semibold text-4xl sm:text-5xl text-white">
            Welcome to <span className="text-[#D62828]">CNN</span>
          </h1>
          <p className="mt-3 font-poppins text-white text-[15px] sm:text-lg max-w-[80%] mx-auto">
            Stay in touch with what's happening around the Globe anywhere,
            everywhere.{" "}
            <span className="text-[#D62828] font-bold">Explore now.</span>
          </p>
        </div>
        <div className="sm:w-[70%] md:w-[60%] w-[100%] mx-auto flex flex-row items-center relative">
          <input
            type="text"
            placeholder="Type to search..."
            className="outline-none border-none font-poppins px-6 py-1 sm:py-2 rounded-[20px] relative w-[80%] z-0 left-10"
            onChange={(e) => {
              setSearchText(e.target.value);
              setSearchResults([]);
            }}
          />
          <div className="z-10 mr-10">
            <Button text="Search" onClick={handleSearchClick} />
          </div>
          <List searchResults={searchResults} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
