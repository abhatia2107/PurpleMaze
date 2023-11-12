import "./navbar.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import iconimg from "../images/purplemaze_navbar_icon.png";

const Navbar = () => {
  let [open, setOpen] = useState(false);

  return (
    <>
      <header className="flex header_color justify-between bx-auto py-2">
        <Link to="/">
          <div className="flex justify-center items-center px-8 py-3 sm:px-8">
            <img src={iconimg} />
            <h1 className="px-2 text-color font-type-quicksand">Purple Maze</h1>
          </div>
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
            </svg>
          </ion-icon>
        </div>

        <div
          className={`flex flex-col space-y-[2px] sm:py-2 md:flex md:flex-row md:items-center md:pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <a
            href="/#see-pricing"
            className="px-3 font-type-monasans text-color-1 sm:inline sm:px-4 "
          >
            Pricing
          </a>
          <Link to={"/login"} className="no-underline hover:no-underline">
            <button className="bg-transparent my-2 text-color-1 login_border hover:no-underline	px-6 py-2 rounded-full font-type-monasans inline px-4">
              Login
            </button>
          </Link>

          <Link to={"/signup"}>
            <button
              className="purple signup_color px-6 py-2 my-2 rounded-full sm:mx-2 "
              href="/#signup"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};
export default Navbar;
