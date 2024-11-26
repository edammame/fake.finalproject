"use client";
import { Button } from "@material-tailwind/react";

function addWarehousePage() {
  return (
    <>
      <main className="flex flex-col w-screen h-screen bg-[#f2f2f2] pb-8 px-3 lg:px-10 md:px-8">
        <a
          href="/super-admin/warehouse"
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
        <div className="flex w-full h-full justify-center items-center">
          <section className="flex flex-col justify-center gap-4 w-full xl:w-2/3 lg:w-3/4 md:w-4/5">
            Name
            <input className="p-2 rounded-md"></input>
            <div className="grid mb-10">
              <div className="lg:flex items-center gap-2">
                Province
                <input className="w-full p-2 rounded-md"></input>
                <p className="lg:ml-6 mt-4 lg:mt-0"> City</p>
                <input className="w-full p-2 rounded-md"></input>
              </div>
            </div>
            Address
            <input className="pb-20 pt-2 px-2 rounded-md"></input>
            <a href="/super-admin/warehouse" className="mt-4">
              <Button className="w-full bg-[#1e2b62] py-4">
                Add Warehouse
              </Button>
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
export default addWarehousePage;
