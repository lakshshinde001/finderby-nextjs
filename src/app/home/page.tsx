"use client"
import React from 'react';
import { FaLocationDot } from "react-icons/fa6";


// Footer Component
// Footer Component
function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">Your Store</h2>
            <p className="mt-2">Discover the latest trends and shop your favorites.</p>
          </div>
          <ul className="flex space-x-6">
            <li><a href="/about" className="hover:text-purple-600 transition duration-300">About Us</a></li>
            <li><a href="/contact" className="hover:text-purple-600 transition duration-300">Contact</a></li>
            <li><a href="/terms" className="hover:text-purple-600 transition duration-300">Terms of Service</a></li>
            <li><a href="/privacy" className="hover:text-purple-600 transition duration-300">Privacy Policy</a></li>
          </ul>
          <div>
            <p>&copy; {new Date().getFullYear()} Your Store. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  function Shop({ image, name, description, location, category }) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <img src={image} alt={name} className="rounded-full w-24 h-24 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-gray-600 mb-2">Location: {location}</p>
        <p className="text-gray-600">Category: {category}</p>
      </div>
    );
  }


  // Main Content Component
function MainContent() {
    return (
      <div className="container mx-auto text-center text-white py-24 px-6 flex flex-col justify-center items-center "> {/* Added min-h-screen and flex properties */}
        <h1 className="text-5xl font-bold mb-4">Welcome to Finderby</h1>
        <p className="text-lg mb-8">Discover the latest trends and shop your favorites.</p>
        <div className="flex justify-center space-x-4">
          <a href="/shop" className="bg-white text-purple-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-purple-700 hover:text-white transition duration-300 shadow-md">Shop Now</a>
          <a href="/login" className="border-2 border-white text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition duration-300 shadow-md">Sign In</a>
        </div>
        
        <div className='mt-5 mb-5'>
          <h3>Near by You</h3>
        
    
          <p>Gokhle Nagar,  Pune </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Shop
          image="shop1.jpg"
          name="Darshana Enterprises"
          description="All Types of Accessories Available at Cheap Rate"
          location="Behind Main Ground, Gokhle nagar"
          category="Accessories"
        />
        <Shop
          image="shop2.jpg"
          name="Medico Pharmacy"
          description="Chemist and Drugist Medicines are available"
          location="Sheti Mahamandal Chowk, Gokhle Nagar"
          category="Medical"
        />
        <Shop
          image="shop3.jpg"
          name="Vinay Kirana Store"
          description="All types of Daily Needs products are available at cheap rate"
          location="Hanuman nagar Wadarwadi, Gokhle Nagar"
          category="Daily Needs"
        />
        <Shop
          image="shop4.jpg"
          name="Shinde Xerox"
          description="All types of Online works are Done Here"
          location="FC Road, Shivaji Nagar Pune"
          category="Books"
        />
        <Shop
          image="shop5.jpg"
          name="Rahul Books Store"
          description="All types of Books are Done Here"
          location="Books"
          category="Books"
        />
        <Shop
          image="shop6.jpg"
          name="Aaditya watch centre"
          description="All types of Watches are available at cheap rates"
          location="Pune"
          category="Fashion"
        />
      </div>

        {/* <div className="flex-grow"></div> Added flex-grow to fill remaining space */}
      </div>
    );
  }
  

  function Header(){
    return (
        <header className="bg-gray-800 py-4">
        <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
            <a href="/" className="text-white text-3xl font-bold mr-6">Finderby</a>
        
        </div>
        <nav>
            <ul className="flex space-x-6">
            <li><a href="/" className="text-gray-200 hover:text-white transition duration-300 font-medium">Home</a></li>
            <li><a href="/shop" className="text-gray-200 hover:text-white transition duration-300 font-medium">Shop</a></li>
            <li><a href="/login" className="text-gray-200 hover:text-white transition duration-300 font-medium">Sign In</a></li>
            <li><a href="/addshop" className="text-gray-200 hover:text-white transition duration-300 font-medium">Join us</a></li>
            <li><a href="/about" className="text-gray-200 hover:text-white transition duration-300 font-medium">About us</a></li>
            <li><a href="/register" className="text-gray-200 hover:text-white transition duration-300 font-medium">Sign Up</a></li>
            
            </ul>
        </nav>
        </div>
    </header>
    )
  }

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 to-indigo-600 m-auto " >
     <Header/>
     <MainContent/>
      <Footer />
    </div>
  );
}
