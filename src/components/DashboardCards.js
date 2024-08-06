import React from "react";
import Netprofit from "./NetProfit";
import { CiShoppingCart } from "react-icons/ci";
import { TiArrowSortedUp ,TiArrowSortedDown } from "react-icons/ti";
import { GiProfit } from "react-icons/gi";
import { LuShoppingBag } from "react-icons/lu";


const DashboardCards=()=>{
    return (
      <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-7 lg:col-span-7 grid grid-cols-4 gap-4 mb-4">
          <div className="bg-gray-800 p-4 rounded">
            <div className="icon_wrapper text-blue-500 text-5xl">
              <CiShoppingCart />
            </div>
            <div className="my-2">Total Orders: 75</div>
            <div className="flex justify-between">
              <div>75</div>
              <div className="flex text-green-500">
                <span>
                  <TiArrowSortedUp />
                </span>
                <span className="text-green-500">3%</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <div className="icon_wrapper text-green-500 text-5xl">
              <LuShoppingBag />
            </div>
            <div className="my-2">Total Delivered: 70</div>
            <div className="flex justify-between">
              <div>70</div>
              <div className="flex">
                <span className="text-red-500">
                  <TiArrowSortedDown />
                </span>
                <span className="text-red-500">3%</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <div className="icon_wrapper text-5xl text-red-500">
              <CiShoppingCart />
            </div>
            <div className="my-2">Total Cancelled: 5</div>
            <div className="flex justify-between">
              <div>70</div>
              <div className="flex">
                <span className="text-green-500">
                  <TiArrowSortedUp />
                </span>
                <span className="text-green-500">3%</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <div className="icon_wrapper text-pink-500 text-5xl">
              <GiProfit />
            </div>
            <div className="my-2">Total Revenue: $12k</div>
            <div className="flex justify-between">
              <div>70</div>
              <div className="flex">
                <span className="text-red-500">
                  <TiArrowSortedDown />
                </span>
                <span className="text-red-500">3%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 lg:col-span-5 grid grid-cols-1 gap-4 mb-4 bg-gray-800">
          <Netprofit />
        </div>
      </div>

      </>
    );
};

export default DashboardCards;
