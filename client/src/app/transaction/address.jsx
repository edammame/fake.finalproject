"use client";
import { Input } from "@material-tailwind/react";
import { HiOutlineX } from "react-icons/hi";

function AddressComponents() {
  return (
    <>
      <div className=" max-w-[50%]">
        <div className=" flex flex-col gap-2 mb-4">
          <div className=" font-bold pb-3 text-xl text-[#1e2b62]">
            Shipping Address
          </div>
          {/* <div></div> */}
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
      </div>
    </>
  );
}
export default AddressComponents;
