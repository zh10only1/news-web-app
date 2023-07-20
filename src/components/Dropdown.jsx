import React, { useState } from "react";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";

const Dropdown = ({ categories, selectedValue, onDropdownChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  function onClickSelect(categoryValue) {
    setIsOpen((prev) => !prev);
    onDropdownChange(categoryValue);
  }

  return (
    <div className="relative flex flex-col items-center rounded-lg">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-white px-4 w-[180px] gap-2 flex items-center justify-between font-semibold font-poppins text-sm rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
      >
        {categories.find((category) => category.value === selectedValue).title}
        {!isOpen ? (
          <AiOutlineCaretDown className="h-8" />
        ) : (
          <AiOutlineCaretUp className="h-8" />
        )}
      </button>

      {isOpen && (
        <div className="bg-white border-[1px] border-black absolute top-[50px] flex flex-col items-start rounded-lg p-2 w-full z-10">
          {categories.map((category) => (
            <div
              key={category.id}
              className="w-full hover:bg-[#D62828] hover:text-white text-black cursor-pointer rounded-md"
              onClick={() => onClickSelect(category.value)}
            >
              <h3 className="px-2 py-1">{category.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
