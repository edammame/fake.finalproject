"use client";
import React from "react";
import { Button } from "@material-tailwind/react";
import ProductList, { ProductCard } from "@/components/productlist";

function EditorialPage() {
  return (
    <>
      <main className="flex flex-col lg:w-screen lg:h-screen pt-2 px-3 lg:px-16 md:px-8">
        <a
          href="/admin/product"
          className="opacity-20 flex justify-start w-8 translate-y-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="size-8"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <div className="flex flex-col w-full gap-4">
          <h1 className="flex justify-center text-3xl sm:text-4xl md:text-5xl font-semibold ml-10 lg:ml-0 md:ml-0 mt-2 md:mt-0">
            Nama warehousenya
          </h1>
          <div className="flex justify-end items-start w-full gap-2 mt-6">
            <a href="/admin/product/add">
              <Button className="bg-[#dfdfdf] text-[#222831]">add</Button>
            </a>
            <Button className="bg-[#dfdfdf] text-[#222831]">edit</Button>
            <Button className="bg-[#ec3f3f]">delete</Button>
          </div>
          <ProductList />
          <ProductCard/>
        </div>
      </main>
    </>
  );
}
export default EditorialPage;
