"use client";
import { Input } from "@material-tailwind/react";
import { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";

function AddressComponents() {
  const [active, setActive] = useState(false);
  return (
    <>
      {/* <div className=" max-w-[50%]">
        <div className=" flex flex-col gap-2 mb-4">
          <div className=" font-bold pb-3 text-xl text-[#1e2b62]">
            Shipping Address
          </div>
          <Input size="lg" label="Address" />
          <div className=" w-20">
            <Input variant="outlined" label="Zip Code" placeholder="Zip Code" />
          </div>
          <div className=" flex gap-2">
            <div className=" relative flex w-full">
              <Input size="lg" label="City" />
              <button>
                <HiOutlineX className=" !absolute right-3 top-3" />
              </button>
            </div>
            <div className=" relative flex w-full">
              <Input size="lg" label="Province" />
              <button>
                <HiOutlineX className=" !absolute right-3 top-3" />
              </button>
            </div>
          </div>
        </div>
        <div className=" flex gap-4">
          <button className=" bg-[#1e2b62] text-white rounded-2xl p-2">
            Save Changes
          </button>
          <button className="bg-white text-[#1e2b62] rounded-2xl p-2">
            Cancel
          </button>
        </div>
      </div> */}
      <div>
        <button
          data-ripple-light="true"
          data-popover-target="menu"
          className="flex gap-1 items-center select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={() => setActive(!active)}
        >
          Select Shipping Address
          <IoMdArrowDropdown className=" text-xl" />
        </button>
        {active && (
          <ul
            role="menu"
            data-popover="menu"
            data-popover-placement="bottom"
            className="absolute z-10 min-w-[180px] overflow-auto rounded-md border border-blue-gray-50 bg-white p-3 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
          >
            <li
              role="menuitem"
              className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
            >
              Address 1
            </li>
            <li
              role="menuitem"
              className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
            >
              Address 2
            </li>
            <li
              role="menuitem"
              className="block w-full cursor-pointer select-none rounded-md px-3 pt-[9px] pb-2 text-start leading-tight transition-all hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
            >
              Address 3
            </li>
          </ul>
        )}
      </div>
    </>
  );
}
export default AddressComponents;
