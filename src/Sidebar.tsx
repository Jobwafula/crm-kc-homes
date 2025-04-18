import React from 'react';
import { FaHome, FaBus, FaCamera, FaCar, FaChartLine } from 'react-icons/fa';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: 'overview', label: 'Overview', icon: <FaChartLine /> },
    { id: 'tours', label: 'Tours', icon: <FaBus /> },
    { id: 'photography', label: 'Photography', icon: <FaCamera /> },
    { id: 'airbnb', label: 'Airbnb', icon: <FaHome /> },
    { id: 'carHiring', label: 'Car Hiring', icon: <FaCar /> },
  ];

  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4 fixed top-0 left-0">
      <div className="text-2xl font-bold mb-8">KCHomes Dashboard</div>
      <nav>
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center w-full p-2 rounded-lg hover:bg-orange-700 transition duration-300 ${
                  activeSection === item.id ? 'bg-orange-700' : ''
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