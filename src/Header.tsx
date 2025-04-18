import React from 'react';
import { FaUser, FaSignOutAlt } from 'react-icons/fa';

const Header = ({ activeSection }) => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-orange-600 capitalize">
        {activeSection === 'overview' ? 'Dashboard Overview' : activeSection}
      </h1>
      <div className="flex space-x-4">
        <button className="flex items-center text-gray-600 hover:text-orange-600 transition duration-300">
          <FaUser className="mr-1" /> Profile
        </button>
        <button className="flex items-center text-gray-600 hover:text-orange-600 transition duration-300">
          <FaSignOutAlt className="mr-1" /> Logout
        </button>
      </div>
    </header>
  );
};

export default Header;