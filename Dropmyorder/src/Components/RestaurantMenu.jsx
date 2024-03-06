import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../Schemas/restraunts";
import { Search } from "react-feather";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const data = await db.restraunts.toArray();
        const element = data.find((restaurant) => restaurant.id == resid);
        setRestaurant(element);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    if (resid) {
      fetchRestaurant();
    }
  }, [resid]);

  return (
    <>
      <nav className="h-[5rem] border-b border-gray-300 shadow-md flex items-center justify-between px-6">
        <h1 className="text-lime-700 font-anta text-2xl">DROP MY ORDER</h1>
        <div className="w-full max-w-lg mx-auto rounded-lg bg-lime-100 flex items-center gap-2 shadow-sm">
          <Search className="h-6 w-6 m-2.5 text-lime-700" />
          <input
            type="text"
            placeholder="Search the menu"
            className="w-full md:w-11/12 focus:outline-none focus:border-none bg-lime-100 font-Signika text-lg"
          />
        </div>
      </nav>
    </>
  );
};

export default RestaurantMenu;
