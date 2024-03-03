import React, { useState } from "react";
import { motion } from "framer-motion";
import "./LocationModal.css";
import Locations from "../data/dummy.jsx";
import { FaLocationCrosshairs } from "react-icons/fa6";
import LocationContainer from "../Components/LocationContainer.jsx";
import Restaurants from "../Components/Restaurants.jsx";

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
      <div className="h-screen bg-lime-50 overflow-hidden">
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
        <div className="flex flex-col">
                  <h1 className="mt-4 font-anta text-xl text-center">{restaurant !== null ? Locations[restaurant].name : ""} </h1>
                  <div className="flex justify-center mt-8">
                  <Restaurants restaurant={restaurant} />
                  </div>
                  
        </div>
      </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content rounded-xl flex">
            <LocationContainer
              setRestaurant={setRestaurant}
              toggleModal={toggleModal}
            />
            {/* <Restaurants restaurant={restaurant} /> */}
          </div>
        </div>
      )}
    </>
  );
}
