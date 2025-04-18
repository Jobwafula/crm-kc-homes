import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ServiceTable = ({ service, data, onAdd, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-orange-600 capitalize">{service}</h3>
        <button
          onClick={onAdd}
          className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-full transition duration-300"
        >
        +  Add New
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3">ID</th>
              <th className="p-3">Name</th>
              <th className="p-3">Details</th>
              <th className="p-3">Price (KES)</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{item.id}</td>
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.details}</td>
                <td className="p-3">{item.price}</td>
                <td className="p-3 flex space-x-2">
                  <button
                    onClick={() => onEdit(item)}
                    className="text-orange-600 hover:text-orange-700"
                    title="Edit"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => onDelete(item.id)}
                    className="text-red-600 hover:text-red-700"
                    title="Delete"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ServiceTable;