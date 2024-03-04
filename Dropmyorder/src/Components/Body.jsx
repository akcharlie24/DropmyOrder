import React from "react";
import Cards from "./Cards";
import { restaurantsHimachal } from "../data/dummy";

const Body = () => {
  return (
    <>
      <div className="w-[90%] ml-10 bg-gray-300 h-[2px]"></div>
      <h1 className="m-4 ml-10 text-3xl font-Signika">
        Restaurants with online food delivery in Himachal
      </h1>
      <div className="flex justify-center md:mx-2 overflow-hidden">
        <div className="flex flex-wrap w-full justify-start ">
          {restaurantsHimachal.map((restaurant, index) => (
            <Cards key={index} restaurant={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
