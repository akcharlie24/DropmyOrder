import React, { useRef } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { restaurantData } from "../data/dummy";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HiArrowCircleRight } from "react-icons/hi";
import { HiArrowCircleLeft } from "react-icons/hi";
import { MdStars } from "react-icons/md";

const RestrauntCards = () => {


  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  var settings = {
    dots: true,
    infinite: true,
    initialSlide: 0,
    lazyLoad: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 784,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="w-[90%] ml-10 bg-gray-300 h-[2px]"></div>
      <h1 className="m-4 ml-10 text-3xl font-Signika mt-6">
        Himachal's Finest: Top Restaurant Chains Await!
      </h1>

      <div className="h-full mt-4">
        <div className="flex justify-end mr-20 gap-2 ">
          <HiArrowCircleLeft
            className="text-[2rem] text-green-700 cursor-pointer"
            onClick={previous}
          />
          <HiArrowCircleRight
            className=" text-[2rem] text-green-700 cursor-pointer"
            onClick={next}
          />
        </div>
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
          className="mx-4 lg:mx-10 md:mx-6 sm:mx-4"
        >
          {restaurantData.map((restaurant, index) => (
            <div key={index} className="my-4 md:my-8">
              <motion.div
                className="w-[95%] h-[19.5rem] bg-lime-100 rounded-lg shadow-lg"
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.09 },
                }}
                whileTap={{
                  scale: 0.9,
                  transition: { duration: 0.09 },
                }}
              >
                <div>
                  <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="w-full h-[10rem] object-cover rounded-t-lg"
                  />
                  <h1 className="text-xl font-Signika ml-2 mt-4 mb-2">
                    {restaurant.name}
                  </h1>
                  <div className="flex ml-2">
                    <MdStars className="text-2xl text-green-500 mr-1" />
                    <h1 className="text-xl font-Signika ml-0">
                      {restaurant.rating}
                    </h1>
                  </div>
                  <h1 className="text-lg text-gray-700 font-Signika mt-1 mb-2 ml-2">
                    {restaurant.location}
                  </h1>
                </div>
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="h-20"></div>
    </div>
  );
};

export default RestrauntCards;
