import React from "react";
import Cards from "./Cards";

const Body = () => {
  return (
    // <div className="flex pt-10 pr-0 overflow-hidden ">
      <div className=" flex w-full justify-start md:justify-evenly overflow-hidden ">
        <div className=" flex flex-wrap w-10/12 justify-start ">
          
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
          <Cards />
        </div>
      </div>
    // </div>
  );
};

export default Body;
