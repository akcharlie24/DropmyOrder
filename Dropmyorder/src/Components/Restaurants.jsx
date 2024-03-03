// import React from 'react'
import { motion } from "framer-motion";
import Locations from "../data/dummy";

const Restaurants = (props) => {
  return (
    <div className="Restaurants w-full md:w-[30rem] md:mx-auto mt-8">
      <h1 className="text-3xl mb-4 font-Signika text-center">
        {props.restaurant !== null ? "Available Restaurants " + " in " + Locations[props.restaurant-1].name : ""}
      </h1>

      <div className="flex">
        {props.restaurant !== null ? (
          Locations[props.restaurant].restaurants.map(
            (restaurants, restaurantIndex) => (
              <>
                <div key={restaurantIndex} className="w-full md:w-1/2 m-2">
                  <motion.button
                    className="w-full bg-slate-800 text-white py-2 px-4 rounded relative"
                    whileHover={{
                      scale: 1.06,
                      transition: { duration: 0.09 },
                    }}
                  >
                    {restaurants.name}
                  </motion.button>
                </div>
              </>
            )
          )
        ) : (
          <h1 className="text-xl text-gray-500 ml-[2rem] font-Madimi"></h1>
        )}
      </div>
    </div>
  );
};

export default Restaurants;
