import React from "react";
import { GoGoal } from "react-icons/go";
import { GrFormNext } from "react-icons/gr";
import { PiBowlFoodBold } from "react-icons/pi";
import { MdOutlineMenuBook } from "react-icons/md";

function RestaurantInfo() {
  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-4 col-span-12 md:col-span-5 lg:col-span-5 grid grid-cols-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-red-500 text-6xl">
            <GoGoal />
          </span>
          <h2 className="text-white text-lg font-bold ml-4">Goals</h2>
        </div>
        <GrFormNext className="cursor-pointer"/>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-blue-500 text-6xl">
            <PiBowlFoodBold/>
          </span>
          <h2 className="text-white text-lg font-bold ml-4">Popular Dish</h2>
        </div>
        <GrFormNext className="cursor-pointer"/>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-green-500 text-6xl">
            <MdOutlineMenuBook/>
          </span>
          <h2 className="text-white text-lg font-bold ml-4">Menu</h2>
        </div>
        <GrFormNext className="cursor-pointer"/>
      </div>
    </div>
  );
}

export default RestaurantInfo;
