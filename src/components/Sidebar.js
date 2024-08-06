import React from 'react';
import { FaTachometerAlt, FaList, FaUtensils, FaCommentDots } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="w-12 bg-gray-800 text-white h-auto py-4 px-2">
      <ul className='custom_list_sidenav'>
        <li className="mb-4 flex items-center active">
          <FaTachometerAlt className="" />
        </li>
        <li className="mb-4 flex items-center">
          <FaList className="" />
        </li>
        <li className="mb-4 flex items-center">
          <FaUtensils className="" />
        </li>
        <li className="mb-4 flex items-center">
          <FaCommentDots className="" />
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;



