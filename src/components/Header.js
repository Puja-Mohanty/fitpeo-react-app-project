import React from 'react';
import { FaBell, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white pl-0">
      <div className='flex gap-12'>
        <img src="https://img.lovepik.com/element/45006/8218.png_860.png" width={40} height={40} alt="" />
        <input type="text" placeholder="Search" className="p-2 rounded bg-gray-600 text-white" />
      </div>
      <div className="flex items-center">
        <FaBell className="mr-4" />
        <FaEnvelope className="mr-4" />
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Profile" className="w-10 h-10 rounded-full" />
      </div>
    </header>
  );
}

export default Header;




