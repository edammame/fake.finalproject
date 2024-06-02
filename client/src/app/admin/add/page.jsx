"use client";
import React from "react";
import { Button, IconButton } from "@material-tailwind/react";

function ProductPage() {
  return (
    <div className="flex flex-col items-center w-screen h-screen bg-[#f2f2f2] ">
      <main className="flex w-full h-full pb-8 px-10">
        <section className="flex justify-center items-center w-1/2">
          <input className="w-96 h-96" placeholder="image"></input>
        </section>
        <section className="flex flex-col  justify-center gap-4 w-1/2 px-10">
          name
          <input></input>
          prize
          <input className="mb-10"></input>
          <div className="grid mb-10">
            <div className="flex gap-2">
              catagory
              <div className="grid w-full">
                <input></input>
              </div>
              stock
              <div className="grid w-full">
                <input></input>
              </div>
            </div>
          </div>
          description
          <input className=""></input>
          <a href="/admin/editorial">
            <Button className="w-full bg-[#1e2b62]">submit</Button>
          </a>
        </section>
      </main>
    </div>
  );
}
export default ProductPage;
