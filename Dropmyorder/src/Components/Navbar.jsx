import "../App.css";
import { TfiAlignJustify } from "react-icons/tfi";
import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };
  return (
    <div className="absolute inset-0 wrapper flex justify-between py-5 px-5 bg-transparent">
      <div className="flex text-xl md:text-2xl lg:text-3xl">
        <p className=" font-Signika font-bold text-lime-100 ">
          Drop It
          <p className="  font-Signika font-bold text-lime-100 ">
            We Deliver It
          </p>
        </p>
      </div>

      <div className="flex  gap-4 md:gap-11 mr-6 md:mr-28">
        <div className={`lg:hidden ${mobileMenu ? "hidden" : "block"}`}>
          <button
            id="menu-toggle"
            onClick={() => toggleMobileMenu()}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-11 font-Signika">
          <p className="text-xl md:text-2xl lg:text-3xl text-lime-100 flex ">
            Login
          </p>
          <p className="text-xl md:text-2xl lg:text-3xl text-lime-100 flex ">
            Signup
          </p>
        </div>

        <div className={`lg:hidden ${mobileMenu ? "block" : "hidden"} `}>
          <div className="bg-tranparent backdrop-blur-lg p-4 pr-[2px] pt-1 rounded-lg">
            <div className="float-right mb-2  text-lime-100 text-2xl">
                   <IoCloseCircleOutline onClick={toggleMobileMenu}/>
            </div>
            <ul className="flex flex-col mt-5 font-Madimi">
              <li>
                <a href="#" className="block text-white">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="block text-white mt-2">
                  Signup
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
