import React from "react";
import { motion } from "framer-motion";
import { MdStars } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { restaurantsHimachal } from "../data/dummy";
import db from "../Schemas/restraunts";
import { useNavigate } from "react-router-dom";


const Cards = (props) => {

  const navigate = useNavigate();
  
  const dbAdd = async (restaurant) => {
    try {
      await db.restraunts.add({
        name: restaurantsHimachal[props.restaurant].name,
        starRating: restaurantsHimachal[props.restaurant].starRating,
        timeToDeliver: restaurantsHimachal[props.restaurant].timeToDeliver,
        priceForTwo: restaurantsHimachal[props.restaurant].priceForTwo,  
      }); 
    } catch (error) {
      console.error('Error adding restaurant:', error);
    }
  };
  
  const onRestaurantClick = async (restaurant) => {
    try {
      const data = await db.restraunts.toArray();
      const element = data.find(item => item.name === restaurantsHimachal[props.restaurant].name);
      
      if (!element) {
        await dbAdd(restaurant);
      } 
  
      const updatedData = await db.restraunts.toArray();
      const updatedElement = updatedData.find(item => item.name === restaurantsHimachal[props.restaurant].name);
      
      navigate(`/restaurant/${updatedElement.id}`);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  



  const images = [
    "https://imgur.com/YlIwiXx.png",
    "https://imgur.com/odtNlHx.png",
    "https://imgur.com/8gP1qFh.png",
    "https://imgur.com/G8JlsIQ.png",
    "https://imgur.com/tSM6J4s.png",

  ]
  return (
    <div className="mx-auto md:m-0">
      <motion.div className="m-7 rounded-2x"
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.99 }}
        onTap = {() => onRestaurantClick(restaurantsHimachal[props.restaurant].name)}

      >
        <img
          className="res-logo w-[25rem] h-[15rem] rounded-3xl"
          src= {`${images[Math.floor(Math.random() * images.length)]}`}
        ></img>
        <div className="pl-1 pt-0 ">
          <h3 className="font-Signika py-2 text-xl ">
            {restaurantsHimachal[props.restaurant].name}
          </h3>
          <div className="flex gap-2">
          <h4 className="font-anta mr-1">
            <MdStars className="inline mr-2 text-xl mb-[3px] text-green-700 " />
            {restaurantsHimachal[props.restaurant].starRating}
          </h4>
          <h4 className="font-anta">
            <FaClock className="inline mr-2 mb-[3px] text-orange-500" />
            {restaurantsHimachal[props.restaurant].timeToDeliver}
          </h4>
         </div>
          <h4 className="font-anta">
            <FaRupeeSign className="inline mb-[3px] text-slate-700" />
            {restaurantsHimachal[props.restaurant].priceForTwo}
          </h4>
        </div>
      </motion.div>
    </div>
  );
};

export default Cards;
