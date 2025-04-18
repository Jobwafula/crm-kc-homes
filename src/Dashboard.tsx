import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import ServiceTable from './ServiceTable';
import ServiceModal from './ServiceModal';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [modalService, setModalService] = useState('');

  // Mock data for services
  const [servicesData, setServicesData] = useState({
    tours: [
      { id: 1, name: 'Maasai Mara Safari', details: '5-day wildlife safari', price: '150000' },
      { id: 2, name: 'Mount Kenya Trek', details: '6-day trek', price: '90000' },
    ],
    photography: [
      { id: 1, name: 'Safari Shoot', details: 'Wildlife photography', price: '25000' },
      { id: 2, name: 'Cultural Shoot', details: 'Lamu cultural session', price: '20000' },
    ],
    airbnb: [
      { id: 1, name: 'Nairobi Villa', details: 'Luxury villa rental', price: '60000' },
      { id: 2, name: 'Mombasa Beach House', details: 'Coastal getaway', price: '50000' },
    ],
    carHiring: [
      { id: 1, name: '4x4 Safari Jeep', details: 'Off-road vehicle', price: '15000' },
      { id: 2, name: 'Luxury Sedan', details: 'City travel', price: '10000' },
    ],
  });

  const handleAdd = (service) => {
    setModalService(service);
    setModalData(null);
    setModalOpen(true);
  };

  const handleEdit = (service, item) => {
    setModalService(service);
    setModalData(item);
    setModalOpen(true);
  };

  const handleDelete = (service, id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      setServicesData((prev) => ({
        ...prev,
        [service]: prev[service].filter((item) => item.id !== id),
      }));
    }
  };

  const handleSubmit = (service, formData) => {
    setServicesData((prev) => {
      if (formData.id) {
        // Update existing item
        return {
          ...prev,
          [service]: prev[service].map((item) =>
            item.id === formData.id ? { ...formData, id: item.id } : item
          ),
        };
      } else {
        // Add new item
        const newId = prev[service].length ? Math.max(...prev[service].map((item) => item.id)) + 1 : 1;
        return {
          ...prev,
          [service]: [...prev[service], { ...formData, id: newId }],
        };
      }
    });
  };

  const renderOverview = () => {
    const totalBookings = Object.values(servicesData).flat().length;
    const totalRevenue = Object.values(servicesData)
      .flat()
      .reduce((sum, item) => sum + parseInt(item.price), 0);

    return (
      <div>
        {/* <h2 className="text-2xl font-semibold text-orange-600 mb-6">Overview</h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <p className="text-gray-600">Total Bookings</p>
            <p className="text-2xl font-bold text-orange-600">{totalBookings}</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <p className="text-gray-600">Total Revenue</p>
            <p className="text-2xl font-bold text-orange-600">KES {totalRevenue.toLocaleString()}</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 text-center">
            <p className="text-gray-600">Active Services</p>
            <p className="text-2xl font-bold text-orange-600">{Object.keys(servicesData).length}</p>
          </div>
        </div>
        {Object.keys(servicesData).map((service) => (
          <ServiceTable
            key={service}
            service={service}
            data={servicesData[service]}
            onAdd={() => handleAdd(service)}
            onEdit={(item) => handleEdit(service, item)}
            onDelete={(id) => handleDelete(service, id)}
          />
        ))}
      </div>
    );
  };

  const renderService = (service) => {
    return (
      <ServiceTable
        service={service}
        data={servicesData[service]}
        onAdd={() => handleAdd(service)}
        onEdit={(item) => handleEdit(service, item)}
        onDelete={(id) => handleDelete(service, id)}
      />
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="flex-1 ml-64">
        <Header activeSection={activeSection} />
        <main className="p-6">
          {activeSection === 'overview' ? renderOverview() : renderService(activeSection)}
          <ServiceModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            onSubmit={(formData) => handleSubmit(modalService, formData)}
            initialData={modalData}
            service={modalService}
          />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;