import React from 'react';
import ActivityChart from './ActivityChart';
import RecentOrders from './RecentOrders';
import Feedback from './Feedback';
import NetProfit from './NetProfit';
import DashboardCards from './DashboardCards';
import RestaurantInfo from './RestaurantInfo';

const goals = ['Goal 1', 'Goal 2', 'Goal 3'];
const popularDishes = ['Dish 1', 'Dish 2', 'Dish 3'];
const menus = ['Menu 1', 'Menu 2', 'Menu 3'];

const Dashboard = () => {
  return (
    <div className="p-4 bg-gray-900 text-white flex-1">
      <h1 className="text-2xl mb-4 poppins-bold">Dashboard</h1>
      <DashboardCards />
      <div className="grid grid-cols-12  gap-4">
        <ActivityChart />
        <RestaurantInfo
          goals={goals}
          popularDishes={popularDishes}
          menus={menus}
        />
      </div>
      <div className="grid grid-cols-12 gap-4">
        <RecentOrders />
        <Feedback />
      </div>
    </div>
  );
}

export default Dashboard;


