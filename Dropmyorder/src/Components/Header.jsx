// import React from "react";
import { Search } from "react-feather";
import Navbar from "./Navbar";


const Header = () => {
  return (
    <div className="relative w-full border border-black">
      <div className="absolute inset-0 bg-black opacity-50 object-cover"></div>
      <Navbar/>
      <div className="absolute inset-0 flex justify-center items-center ">
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-anta text-lime-400 ">
          DROP-MY-ORDER
        </h1>
      </div>
      <img  
      className="w-full h-[28rem] object-cover object-bottom filter z-10 "
        src="https://imgur.com/E0Rdb6v.png"
        alt="Docplanner "
        style={{ loading: "lazy" }}
      />


      <div className="absolute inset-0 flex justify-center items-center mt-[15rem] ">
        <div className=" mx-4 md:mx-auto lg:w-[80rem] w-full max-w-6xl">
          <div className=" flex flex-col md:flex-row justify-center items-center gap-5 p-4 bg-white rounded-lg shadow-lg">
            <select className="p-2 border border-gray-300 rounded-lg  w-full md:w-3/5 py-4 ">

              <option value="1">Nigeria</option>
              <option value="2">Ghana</option>
              <option value="3">Kenya</option>
              <option value="4">South Africa</option>
            </select>

            <div className="flex items-center justify-between w-full px-2 border border-gray-300 rounded-lg py-2">
              <input
                type="text"
                placeholder="Search your Location"
                className="w-full md:w-11/12 p-2"
              />
              {/* Assuming Search is a component */}
              <Search />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
