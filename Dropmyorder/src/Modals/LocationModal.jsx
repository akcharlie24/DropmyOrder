import React, { useState } from "react";
import { motion } from "framer-motion";
import "./LocationModal.css";
import Locations from "../data/dummy.jsx";
import { FaLocationCrosshairs } from "react-icons/fa6";

export default function LocationModal() {
  const [modal, setModal] = useState(false);
  const [restaurant, setRestaurant] = useState(null);

  const toggleModal = () => {
    setModal(!modal);
  };
  console.log(Locations);

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <div className="h-screen bg-[#F8FCEB] overflow-hidden">
        <div className="flex justify-center items-center mt-[10rem]">
          <motion.button
            className="bg-gray-800 hover:bg-[#3CB371] p-4 rounded-lg text-white hover:text-gray-800 font-Signika font-bold text-xl"
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.09 },
            }}
            onClick={toggleModal}
          >
            SELECT LOCATION
          </motion.button>
        </div>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content rounded-xl flex">
            <div className="LocationContainer w-[30rem]">
              <h1 className="text-xl mb-4 font-Signika">Locations</h1>
              <div
                className="flex flex-col mt-2 overflow-auto"
                style={{ maxHeight: "20rem" }}
              >
                {Locations.map((location, index) => (
                  <React.Fragment key={index}>
                    <motion.button
                      className={`mt-2 mb-2 text-lef p-4 rounded-xl font-Comfortaa flex mx-[2rem]`}
                      whileHover={{
                        backgroundColor: "#3CB371",
                        boxShadow: "0 0 0 5px #3CB3715f",
                        color: "#fff",
                        scale: 1.1,
                        transition: { duration: 0.09 },
                      }}
                      whileTap={{
                        scale: 0.9,
                        transition: { duration: 0.09 },
                      }}
                      style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)" }}
                      onClick={() => setRestaurant(index)}
                    >
                      <div
                        className={`mt-[2px] mr-[1rem] animate-pulse ${
                          location.loaded ? "text-red-700" : "text-green-700"
                        }`}
                      >
                        <FaLocationCrosshairs />
                      </div>
                      {location.name}
                    </motion.button>
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="Restraunts ml-4 w-[30rem]">
              <h1 className="text-xl mb-4 font-Signika text-center">
                Available Restaurants
              </h1>
              <h1 className="ml-2 font-anta">
                {restaurant !== null ? Locations[restaurant].name : ""}
              </h1>
              <div className="flex">
                {restaurant !== null ? (
                  Locations[restaurant].restaurants.map(
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
          </div>
        </div>
      )}
    </>
  );
}
