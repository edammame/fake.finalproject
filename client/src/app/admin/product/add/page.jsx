"use client";
import React, { useEffect, useState } from "react";
import { axiosInstance } from "@/axios/axios";
import { useDebounce } from "use-debounce";
import { useFormik } from "formik";
import { Button } from "@material-tailwind/react";

function ProductPage() {
  const [products, setProducts] = useState([]);
  // const [value] = useDebounce(search, 500);
  
  const Product = {
    id: 0,
    image_url: "",
    product_name: "", //String
    price: 0, //Decimal @db.Decimal(8,2)
    description: "", //String? @db.VarChar(255)
  };

  const Catagories = {
    id: 0,
    category_name: "",
  };

  const Stock = {
    id: 0,
    quantity: 0,
  };

  const formik = useFormik({
    initialValues: Product,
    onSubmit: () => {
      save();
    },
  });

  const add = () => {
    const form = new FormData();
    form.append("image_url", formik.values.image_url);
    form.append("product_name", formik.values.product_name);
    form.append("price", formik.values.price);
    form.append("catagory", formik.values.category_name);
    form.append("stock", formik.values.quantity);
    form.append("description", formik.values.description);
  };

  const renderFile = (e) => {
    console.log(e.target.files[0]);
    formik.setFieldValue("image_url", e.target.files[0]);
    // formik.setFieldValue(
    //   "image_url",
    //   window.URL.createObjectURL(e.target.files[0])
    // );
  };

  return (
    <main className="lg:w-screen lg:h-screen bg-[#f2f2f2] pb-8 lg:pb-16 px-3 lg:px-10 md:px-8 ">
      <a
        href="/admin/product"
        className="opacity-30 flex justify-start w-8 translate-y-8"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="size-8"
        >
          <path
            fill-rule="evenodd"
            d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
      <main className="w-full h-full lg:flex">
        <section className="flex justify-center items-center w-full lg:w-1/2">
          <input
            className="w-full h-80 xl:w-9/12 xl:h-[500px] lg:w-11/12 lg:h-[455px] md:w-7/12 md:h-[400px] sm:w-3/5 sm:h-96 mb-6 lg:mb-0"
            type="file"
            placeholder="image"
            required
            id="image-url"
            onChange={(e) => renderFile(e)}
          />
        </section>
        <section className="flex flex-col justify-center w-full lg:w-1/2 gap-4 px-2 xl:px-10 lg:px-6 md:px-20">
          Name
          <input
            className="p-2 rounded-md"
            type="text"
            required
            id="product_name"
            value={formik.values.product_name}
            onChange={formik.handleChange}
          />
          Prize
          <input
            className="mb-10 p-2 rounded-md"
            type="number"
            required
            id="price"
            value={formik.values.price}
            onChange={formik.handleChange}
          />
          <div className="grid mb-10">
            <div className="lg:flex items-center gap-2">
              Catagory
              <input
                className="w-full p-2 rounded-md"
                type="text"
                required
                id="category_name"
                value={formik.values.category_name}
                onChange={formik.handleChange}
              />
              <p className="lg:ml-6 mt-4 lg:mt-0">Stock</p>
              <input
                className="w-full p-2 rounded-md"
                type="number"
                required
                id="quantity"
                value={formik.values.quantity}
                onChange={formik.handleChange}
              />
            </div>
          </div>
          Description
          <input
            className="pb-20 pt-2 px-2 rounded-md"
            type="text"
            required
            id="description"
            value={formik.values.description}
            onChange={formik.handleChange}
          />
          <a href="/admin/product" className="mt-4">
            <Button className="w-full bg-[#1e2b62] py-4" type="submit">
              Add Product
            </Button>
          </a>
        </section>
      </main>
    </main>
  );
}
export default ProductPage;
