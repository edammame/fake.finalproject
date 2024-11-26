"use client";

import { Button } from "@material-tailwind/react";

function WarehousePgae() {
  return (
    <>
      <main className="flex flex-col lg:w-screen lg:h-screen pt-2 px-3 lg:px-16 md:px-8">
        <a href="" className="w-8 h-8 translate-y-10 opacity-20">
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
            Manage Warehouses
          </h1>

          <div className="flex justify-end items-start w-full gap-2 mt-6">
            <a href="/super-admin/warehouse/add">
              <Button className="bg-[#dfdfdf] h-full text-[#222831]">
                add
              </Button>
            </a>
            <Button className="bg-[#dfdfdf] text-[#222831]">edit</Button>
            <Button className="bg-[#ec3f3f]">delete</Button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 text-white gap-3 lg:gap-6 md:gap-4 sm:gap-4">
            <Button className="w-full bg-[#1e2b62] py-10 lg:py-16 md:py-12 sm:py-10">
              JAKARTA
            </Button>
            <Button className="w-full bg-[#1e2b62]">BSD</Button>
            <Button className="w-full bg-[#1e2b62]">BANDUNG</Button>
            <Button className="w-full bg-[#1e2b62] py-10 lg:py-16 md:py-12 sm:py-10">
              JAKARTA
            </Button>
            <Button className="w-full bg-[#1e2b62] py-10 lg:py-16 md:py-12 sm:py-10">
              BSD
            </Button>
            <Button className="w-full bg-[#1e2b62]">BANDUNG</Button>
            <Button className="w-full bg-[#1e2b62]">JAKARTA</Button>
            <Button className="w-full bg-[#1e2b62] py-10 lg:py-16 md:py-12 sm:py-10">
              BSD
            </Button>
            <Button className="w-full bg-[#1e2b62] py-10 lg:py-16 md:py-12 sm:py-10">
              BANDUNG
            </Button>
          </div>
        </div>
      </main>
    </>
  );
}
export default WarehousePgae;
