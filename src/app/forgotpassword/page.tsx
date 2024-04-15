"use client"
import React, { useState } from 'react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Here you can add your forgot password logic
    // For this example, let's just display the email in console and show a success message
    console.log('Email:', email);
    setSuccessMessage('Password reset link sent to your email.');
    // Clear form fields after submission
    setEmail('');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-indigo-600">
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl text-center font-extrabold text-gray-800 mb-6">Forgot Password?</h2>
        <form className="space-y-4" onSubmit={handleForgotPassword}>
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
          {successMessage && <p className="text-sm text-green-500">{successMessage}</p>}
          {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
          <button
            type="submit"
            className="block w-full py-3 px-4 bg-purple-600 text-white font-semibold rounded-md transition duration-300 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
          >
            Reset Password
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600">Remembered your password?</p>
          <a href="/login" className="text-purple-600 hover:underline">Sign in here</a>
        </div>
      </div>
    </div>
  );
}
