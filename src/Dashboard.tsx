import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import ServiceCard from './ServiceCard';
import { FaBus, FaCamera, FaHome, FaCar } from 'react-icons/fa';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const services = [
    {
      id: 1,
      title: 'Tours',
      icon: <FaBus className="text-3xl text-orange-500" />,
      metrics: { bookings: 45, revenue: 'KES 2,250,000', pending: 8 },
      actions: ['View Bookings', 'Add Tour Package'],
    },
    {
      id: 2,
      title: 'Photography',
      icon: <FaCamera className="text-3xl text-orange-500" />,
      metrics: { bookings: 20, revenue: 'KES 500,000', pending: 3 },
      actions: ['View Sessions', 'Schedule Shoot'],
    },
    {
      id: 3,
      title: 'Airbnb',
      icon: <FaHome className="text-3xl text-orange-500" />,
      metrics: { bookings: 30, revenue: 'KES 1,800,000', pending: 5 },
      actions: ['View Listings', 'Manage Bookings'],
    },
    {
      id: 4,
      title: 'Car Hiring',
      icon: <FaCar className="text-3xl text-orange-500" />,
      metrics: { bookings: 25, revenue: 'KES 750,000', pending: 4 },
      actions: ['View Rentals', 'Add Vehicle'],
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content */}
      <div className="flex-1 ml-64">
        <Header activeSection={activeSection} />
        <main className="p-6">
          {activeSection === 'overview' ? (
            <div>
              <h2 className="text-2xl font-semibold text-orange-600 mb-6">Overview</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-white rounded-lg shadow-lg p-4 text-center">
                  <p className="text-gray-600">Total Bookings</p>
                  <p className="text-2xl font-bold text-orange-600">
                    {services.reduce((sum, service) => sum + service.metrics.bookings, 0)}
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-4 text-center">
                  <p className="text-gray-600">Total Revenue</p>
                  <p className="text-2xl font-bold text-orange-600">
                    KES {services.reduce((sum, service) => {
                      const revenue = parseInt(service.metrics.revenue.replace('KES ', '').replace(',', ''));
                      return sum + revenue;
                    }, 0).toLocaleString()}
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-4 text-center">
                  <p className="text-gray-600">Pending Tasks</p>
                  <p className="text-2xl font-bold text-orange-600">
                    {services.reduce((sum, service) => sum + service.metrics.pending, 0)}
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-4 text-center">
                  <p className="text-gray-600">Active Services</p>
                  <p className="text-2xl font-bold text-orange-600">{services.length}</p>
                </div>
              </div>
              <h2 className="text-2xl font-semibold text-orange-600 mb-6">Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                  <ServiceCard
                    key={service.id}
                    title={service.title}
                    icon={service.icon}
                    metrics={service.metrics}
                    actions={service.actions}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-semibold text-orange-500 mb-6 capitalize">{activeSection}</h2>
              <ServiceCard
                title={services.find((s) => s.title.toLowerCase() === activeSection).title}
                icon={services.find((s) => s.title.toLowerCase() === activeSection).icon}
                metrics={services.find((s) => s.title.toLowerCase() === activeSection).metrics}
                actions={services.find((s) => s.title.toLowerCase() === activeSection).actions}
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;