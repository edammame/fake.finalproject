"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";

interface StockMutation {
  id: number;
  origin_id: number;
  destination_id: number;
  qty: number;
  status: string;
}

const StockMutations = () => {
  const [mutations, setMutations] = useState<StockMutation[]>([]);

  useEffect(() => {
    fetchMutations();
  }, []);

  const fetchMutations = async () => {
    const response = await axios.get(
      "http://localhost:8000/api/stock-mutations"
    );
    setMutations(response.data);
  };

  const formik = useFormik({
    initialValues: {
      origin_id: "",
      destination_id: "",
      qty: "",
      status: "",
    },
    onSubmit: async (values) => {
      const response = await axios.post(
        "http://localhost:8000/api/stock-mutations",
        values
      );
      fetchMutations(); // Refresh list after adding
      alert("Mutation added!");
    },
  });

  return (
    <div className="container mx-auto px-4 py-5">
      <h1 className="text-xl font-semibold mb-4">Manage Stock Mutations</h1>
      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-1 gap-4 mb-5"
      >
        <div>
          <label
            htmlFor="origin_id"
            className="block text-sm font-medium text-gray-700"
          >
            Origin ID:
          </label>
          <input
            id="origin_id"
            name="origin_id"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.origin_id}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="destination_id"
            className="block text-sm font-medium text-gray-700"
          >
            Destination ID:
          </label>
          <input
            id="destination_id"
            name="destination_id"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.destination_id}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="qty"
            className="block text-sm font-medium text-gray-700"
          >
            Quantity:
          </label>
          <input
            id="qty"
            name="qty"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.qty}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700"
          >
            Status:
          </label>
          <select
            id="status"
            name="status"
            onChange={formik.handleChange}
            value={formik.values.status}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="approve">Approve</option>
            <option value="reject">Reject</option>
          </select>
        </div>

        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add Mutation
        </button>
      </form>
      <div>
        <h2 className="text-lg font-semibold mb-3">Current Stock Mutations</h2>
        <ul className="list-disc pl-5">
          {mutations.map((mutation) => (
            <li key={mutation.id} className="mb-1">
              Origin: {mutation.origin_id}, Destination:{" "}
              {mutation.destination_id}, Qty: {mutation.qty}, Status:{" "}
              {mutation.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StockMutations;
