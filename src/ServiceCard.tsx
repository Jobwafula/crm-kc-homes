import React from 'react';

const ServiceCard = ({ title, icon, metrics, actions }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold text-gray-800 ml-3">{title}</h3>
      </div>
      <div className="space-y-2">
        <p className="text-gray-600">
          Bookings: <span className="font-bold text-orange-600">{metrics.bookings}</span>
        </p>
        <p className="text-gray-600">
          Revenue: <span className="font-bold text-orange-600">{metrics.revenue}</span>
        </p>
        <p className="text-gray-600">
          Pending: <span className="font-bold text-orange-500">{metrics.pending}</span>
        </p>
      </div>
      <div className="mt-4 flex flex-col space-y-2">
        {actions.map((action, index) => (
          <button
            key={index}
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full transition duration-300"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;