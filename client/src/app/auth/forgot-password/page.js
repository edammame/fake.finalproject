// File: pages/auth/forgotpassword.js
"use client";
import { useState } from "react";
import axios from "axios";
import Link from "next/link";

function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sesuaikan dengan endpoint API Anda
      const response = await axios.post("/api/auth/forgot-password", { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      {/* Card container */}
      <div className="z-10 p-8 bg-white bg-opacity-90 rounded-2xl shadow-xl max-w-md w-full">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4 text-center">Reset password</h2>
        {/* Description */}
        <p className="mb-4 text-center text-sm text-gray-600">
          Enter the registered email. We will send you a link to reset your
          password.
        </p>
        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Input */}
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full p-3 rounded-lg border border-gray-300 mb-4"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
          >
            Reset Password
          </button>
        </form>
        {/* Message Display */}
        {message && (
          <div className="text-center text-sm text-gray-600 mt-6">
            {message}
          </div>
        )}
        {/* Additional Links */}
        <div className="flex justify-center items-center my-4">
          <Link href="/auth/login">
            <span className="text-blue-600 cursor-pointer hover:underline">
              Back to login
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
