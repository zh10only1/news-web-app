import React from "react";

const ListItem = ({ result }) => {
  return (
    <a href={result.url}>
      <div className="flex flex-row p-2 bg-gray-300 rounded-lg items-center gap-[0.5em] justify-center">
        <div className="w-[15em] h-[10em] overflow-hidden">
          <img
            src={result.urlToImage}
            className="w-full h-full rounded-md object-cover"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-[0.5em] text-left">
          <h3 className="font-poppins font-semibold text-[18px] leading-5">
            {result.title}
          </h3>
          <p className="font-poppins font-normal text-[12px]">
            {result.description}
          </p>
        </div>
      </div>
    </a>
  );
};

export default ListItem;
