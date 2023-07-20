import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="px-6 py-1 sm:py-2 font-poppins text-white bg-[#D62828] rounded-[20px] outline-none border-none">
      {text}
    </button>
  );
};

export default Button;
