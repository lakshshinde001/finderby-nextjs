"use client"
import React, { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can add your login logic, such as sending a request to a server
    // For this example, let's just display the email and password in console
    console.log('Email:', email);
    console.log('Password:', password);
    // Clear form fields after submission
    setEmail('');
    setPassword('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-indigo-600">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl text-center font-extrabold text-gray-800 mb-6">Welcome Back!</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white"
              placeholder="Email address"
            />
          </div>
          <div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-3 rounded-md bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:bg-white"
              placeholder="Password"
            />
          </div>
          {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
          <button
            type="submit"
            className="block w-full py-3 px-4 bg-purple-600 text-white font-semibold rounded-md transition duration-300 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          >
            Sign in
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="/forgotpassword" className="text-purple-600 hover:underline">Forgot your password?</a>
        </div>
      </div>
    </div>
  );
}


