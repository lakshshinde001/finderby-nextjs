// AddProduct Component
"use client"
// AddProduct Component
// AddProduct Component
import { useState } from 'react';


export default function AddProduct() {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    stock: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to backend
    console.log('Submitted:', product);
    // Reset form fields
    setProduct({
      name: '',
      price: '',
      description: '',
      category: '',
      stock: '',
      image: ''
    });
  };

  return (
    <div className="bg-gradient-to-r from-purple-400 to-indigo-600 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-md rounded px-8 py-6">
        <h1 className="text-3xl font-bold mb-8 text-center">Add Products</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-lg mb-2">Product Name</label>
            <input type="text" id="name" name="name" value={product.name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600" required />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-gray-700 text-lg mb-2">Price</label>
            <input type="number" id="price" name="price" value={product.price} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600" required />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-gray-700 text-lg mb-2">Description</label>
            <textarea id="description" name="description" value={product.description} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600" rows="4" required />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-gray-700 text-lg mb-2">Category</label>
            <input type="text" id="category" name="category" value={product.category} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600" required />
          </div>
          <div className="mb-4">
            <label htmlFor="stock" className="block text-gray-700 text-lg mb-2">Stock</label>
            <input type="number" id="stock" name="stock" value={product.stock} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600" required />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 text-lg mb-2">Image</label>
            <input type="file" id="image" name="image" onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-600" required />
          </div>
          <div className="text-center">
            <button type="submit" className="bg-purple-600 text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-purple-700 transition duration-300">Add Product</button>
          </div>
        </form>
      </div>
    </div>

  );
}


