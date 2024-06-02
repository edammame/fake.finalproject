"use client";
import React from "react";
import { Button } from "@material-tailwind/react";

function ProductPage() {
  return (
    <header className="flex flex-col items-center w-screen h-screen bg-[#f2f2f2] gap-4 pt-10">
      <div className="flex h-28 w-9/12 justify-center gap-4 mb-10">
        <Button className="w-full bg-[#1e2b62]">Jakarta</Button>
        <Button className="w-full bg-[#1e2b62]">BSD</Button>
        <Button className="w-full bg-[#1e2b62]">Bandung</Button>
        {/* ini pagination */}
      </div>
      <div className="flex justify-between w-full px-16">
        <div>stock</div>
        <div className="flex justify-end items-start w-full gap-2 ">
          <a href="/admin/add">
            <Button className="bg-[#dfdfdf] text-[#222831]">add</Button>
          </a>
          <Button className="bg-[#dfdfdf] text-[#222831]">edit</Button>
          <Button className="bg-[#ec3f3f]">delete</Button>
        </div>
      </div>
      <main className="flex justify-center w-11/12 h-full">ini product</main>
    </header>
  );
}
export default ProductPage;
