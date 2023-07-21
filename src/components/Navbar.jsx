import logo from "../assets/news_logo.png";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { NAV_LINKS } from "../constants";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <nav className="w-full flex justify-between items-center py-6 sm:px-16 px-6">
        <div className="w-[20%] flex justify-start">
          <img src={logo} alt="logo" className="w-[70px] h-[30px]" />
        </div>
        <ul className="hidden list-none sm:flex flex-row justify-end items-center gap-10 font-poppins">
          {NAV_LINKS.map((navLink) => (
            <NavLink
              key={navLink.id}
              to={navLink.route}
              className={({ isActive }) =>
                isActive
                  ? `text-[#D62828]`
                  : `text-neutral-600 hover:text-neutral-950`
              }
            >
              {navLink.title}
            </NavLink>
          ))}
          <li>
            <a
              href="#categories"
              className="text-neutral-600 hover:text-neutral-950"
            >
              Categories
            </a>
          </li>
        </ul>

        <div className="sm:hidden flex">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-red-gradient absolute top-16 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-20`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1 gap-4">
              {NAV_LINKS.map((navLink) => (
                <NavLink
                  key={navLink.id}
                  to={navLink.route}
                  className={({ isActive }) =>
                    isActive
                      ? `text-[#D62828]`
                      : `text-gray-300 hover:text-white`
                  }
                >
                  {navLink.title}
                </NavLink>
              ))}
              <li>
                <a
                  href="#categories"
                  className="text-gray-300 hover:text-white"
                >
                  Categories
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
