// import React from 'react'
import {motion} from 'framer-motion'
import Locations from '../data/dummy'



const Restaurants = (props) => {
  return (
    <div className="Restaurants ml-4 w-[30rem]">
    <h1 className="text-xl mb-4 font-Signika text-center">
      Available Restaurants
    </h1>
    <h1 className="ml-2 font-anta">
      {props.restaurant !== null ? Locations[props.restaurant].name : ""}
    </h1>
    <div className="flex">
      {props.restaurant !== null ? (
        Locations[props.restaurant].restaurants.map(
          (restaurants, restaurantIndex) => (
            <>
              <div key={restaurantIndex} className="w-1/2 m-2">
                <motion.button
                  className="w-full bg-slate-800 text-white py-2 px-4 rounded relative"
                  whileHover={{
                    scale: 1.06,
                    transition: { duration: 0.09 },
                  }}
                >
                  {restaurants.name}
                  <span className="absolute top-0 right-0 -mr-[3px] -mt-[4px] flex h-3 w-3">
                    <span
                      className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                        restaurants.available
                          ? "bg-green-400"
                          : "bg-red-600"
                      } opacity-75`}
                    ></span>
                    <span
                      className={`relative inline-flex rounded-full h-3 w-3 ${
                        restaurants.available
                          ? "bg-green-800"
                          : "bg-red-800"
                      }`}
                    ></span>
                  </span>
                </motion.button>
              </div>
            </>
          )
        )
      ) : (
        <h1 className="text-xl text-gray-500 ml-[2rem] font-Madimi">
          Select a Location
        </h1>
      )}
    </div>
  </div>
  )
}

export default Restaurants