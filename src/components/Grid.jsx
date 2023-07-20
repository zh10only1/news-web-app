import Card from "./Card";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Grid = ({ items, isFavorite }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[2em] justify-center justify-items-center max-w-[100%]">
      {items.map((item, i) => (
        <Card key={i} data={item} isFavorite={isFavorite} />
      ))}
    </div>
  );
};

export default Grid;
