import ListItem from "./ListItem";

const List = ({ searchResults }) => {
  return (
    <div
      className={`${
        searchResults.length === 0 ? "hidden" : "flex"
      } absolute flex-col justify-center items-center gap-[10px] p-2 bg-white rounded-lg max-w-[80%] top-14 left-16 sm:left-0 sm:max-w-full sm:top-14`}
    >
      {searchResults.length >= 1 &&
        searchResults.map((result, i) => <ListItem key={i} result={result} />)}
    </div>
  );
};

export default List;
