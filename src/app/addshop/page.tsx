"use client"
// RegisterShop Component
// RegisterShop Component
import { useState } from 'react';

export default function RegisterShop() {
  const [shop, setShop] = useState({
    name: '',
    description: '',
    category: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShop({ ...shop, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend
    console.log('Submitted:', shop);
    // Reset form fields
    setShop({
      name: '',
      description: '',
      category: '',
      address: ''
    });
  };

  return (
    <div className="bg-gradient-to-r from-purple-400 to-indigo-600 min-h-screen flex justify-center items-center">
      <div className=" shadow-md rounded-md p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Register Shop</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg text-gray-700 mb-2">Shop Name</label>
            <input type="text" id="name" name="name" value={shop.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 text-gray-800" required />
            {/* Highlight: Added text-gray-800 class to adjust text color */}
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-lg text-gray-700 mb-2">Description</label>
            <textarea id="description" name="description" value={shop.description} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 text-gray-800" rows="4" required />
            {/* Highlight: Added text-gray-800 class to adjust text color */}
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-lg text-gray-700 mb-2">Category</label>
            <select id="category" name="category" value={shop.category} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 text-gray-800" required>
              <option value="">Select Category</option>
              {/* Add options for categories */}
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </select>
            {/* Highlight: Added text-gray-800 class to adjust text color */}
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-lg text-gray-700 mb-2">Address</label>
            <input type="text" id="address" name="address" value={shop.address} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 text-gray-800" required />
            {/* Highlight: Added text-gray-800 class to adjust text color */}
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300">Register Shop</button>
          </div>
        </form>
      </div>
    </div>
  );
}
