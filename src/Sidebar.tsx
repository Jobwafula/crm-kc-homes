import React from 'react';
import { FaChartLine, FaBus, FaCamera, FaHome, FaCar } from 'react-icons/fa';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: <FaChartLine className="text-xl" /> },
    { id: 'tours', label: 'Tours', icon: <FaBus className="text-xl" /> },
    { id: 'photography', label: 'Photography', icon: <FaCamera className="text-xl" /> },
    { id: 'airbnb', label: 'Airbnb', icon: <FaHome className="text-xl" /> },
    { id: 'carHiring', label: 'Car Hiring', icon: <FaCar className="text-xl" /> },
  ];

  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4 fixed top-0 left-0 shadow-lg">
      <div className="text-2xl font-bold mb-8">KCHomes Dashboard</div>
      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center w-full p-3 rounded-lg hover:bg-orange-500 transition duration-300 ${
                  activeSection === item.id ? 'bg-orange-500' : ''
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;