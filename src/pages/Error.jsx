import { NavLink } from "react-router-dom";
import Button from "../components/Button";

function Error() {
  return (
    <div className="flex flex-col justify-center items-center gap-[10px]">
      <h1 className="sm:text-[100px] text-[60px]"> Oops! </h1>
      <h4 className="text-[20px] xs:text-[30px]"> 404 - PAGE NOT FOUND </h4>
      <div className="mb-5 sm:w-[500px]">
        <p className="font-poppins text-center">
          {" "}
          The page you are looking for might have been removed or had its name
          changed or is temporarily unavailable.
        </p>
      </div>
      <NavLink to="/">
        {" "}
        <Button text="Go to Homepage" />{" "}
      </NavLink>
    </div>
  );
}

export default Error;
