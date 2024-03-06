import React from "react";
import Cards from "./Cards";
import { restaurantsHimachal } from "../data/dummy";
import Locations from "../data/dummy";

const RestaurantsBody = (props) => {
   
  return (
    <>
    <div className="w-[90%] ml-10 bg-gray-300 h-[2px]"></div>
      <div className="w-[90%] ml-10 bg-gray-300 h-[2px] mt-10"></div>
          
      <h1 className="m-4 ml-10 text-3xl font-Signika">
        Restaurants with online food delivery in {props.restaurant !== null ? Locations[props.selectedOption-1].name : ""}
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

export default RestaurantsBody;
