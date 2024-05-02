import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useFormik } from "formik";

interface FormValues {
  orderId: string;
}

const PaymentUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const formik = useFormik<FormValues>({
    initialValues: {
      orderId: "",
    },
    onSubmit: async (values) => {
      if (!file) {
        setMessage("Please select a file to upload.");
        return;
      }

      const formData = new FormData();
      formData.append("paymentProof", file);
      formData.append("orderId", values.orderId);

      try {
        setUploading(true);
        const response = await axios.post(
          "http://localhost:8000/api/payment-proof",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setMessage(
          "File uploaded successfully: " + response.data.order.payment_img
        );
        setUploading(false);
      } catch (error) {
        setMessage("Upload failed: " + error.message);
        setUploading(false);
      }
    },
  });

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-xl font-bold text-gray-800 mb-4">
        Upload Payment Proof
      </h1>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <label
          htmlFor="orderId"
          className="block text-sm font-medium text-gray-700"
        >
          Order ID:
        </label>
        <input
          id="orderId"
          name="orderId"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.orderId}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
        />
        <input
          type="file"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
        />
        <button
          type="submit"
          disabled={uploading}
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Upload
        </button>
      </form>
      {message && <p className="mt-3 text-sm text-red-600">{message}</p>}
    </div>
  );
};

export default PaymentUpload;
