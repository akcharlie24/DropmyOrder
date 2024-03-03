import React from 'react'
import {motion} from 'framer-motion'
import Locations from '../data/dummy'


const LocationContainer = (props) => {
  return (
    <div className="LocationContainer w-[30rem]">
              <h1 className="text-xl mb-4 font-Signika">Locations</h1>
              <div
                className="flex flex-col mt-2 overflow-auto"
                style={{ maxHeight: "20rem" }}
      >
        
        
                {Locations.map((location, index) => (
                  <React.Fragment key={index}>
                    <motion.button
                      className={`mt-2 mb-2 text-left p-4 rounded-xl font-Comfortaa flex mx-[2rem]`}
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
                      onClick={() => {
                        props.setRestaurant(index)
                        props.toggleModal()
                      }}
                    >
                      <div
                        className={`mt-[2px] mr-[1rem] animate-pulse ${
                          location.loaded ? "text-red-700" : "text-green-700"
                        }`}
                      >
                        {/* <FaLocationCrosshairs /> */}
                      </div>
                      {location.name}
                    </motion.button>
                  </React.Fragment>
                ))}
              </div>
            </div>
  )
}

export default LocationContainer