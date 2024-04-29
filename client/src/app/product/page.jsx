"use client";
import Image from "next/image";
import product1 from "../../assets/product1.jpeg";
import Description from "./description";
import { GoPlus } from "react-icons/go";
import { HiMinus } from "react-icons/hi2";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { FaShop } from "react-icons/fa6";

function Page() {
  const [qty, setQty] = useState(1);
  return (
    <>
      <div className=" mx-40 mt-10">
        <div className=" flex">
          <div className=" w-[60%]">
            <Image
              src={product1}
              className=" m-auto w-[70%] object-contain rounded-lg"
            />
          </div>
          <div className=" flex flex-col my-auto gap-6">
            <div className=" justify-center rounded-xl text-center items-start gap-4 flex flex-col pt-6 ">
              <div className=" font-semibold text-2xl">AFTONSPARV</div>
              <div>
                <div className=" flex items-center gap-2">
                  <div className="text-[#274C5B]">
                    Set of 5 finger puppets, assorted colors
                  </div>
                </div>
              </div>
              <div className="text-[#E02828] font-semibold items-center text-xl">
                <sup className=" text-xs p-0.5">Rp</sup>29.000
              </div>
            </div>
            <hr />
            <div className=" flex flex-col gap-4 ">
              <div className=" font-medium">Enter the product quantity</div>
              <div className=" flex gap-4 justify-between items-center">
                <div>Quantity :</div>
                <div className=" flex gap-5 rounded-xl border px-2 py-1">
                  <button>
                    <GoPlus />
                  </button>
                  <div>{qty}</div>
                  <button>
                    <HiMinus />
                  </button>
                </div>
              </div>
              <button className=" flex gap-2 justify-center items-center bg-[#1e2b62] text-white rounded-2xl py-2">
                Add to Cart <FaCartShopping className="text-white" />
              </button>
              <button className=" flex gap-2 justify-center items-center bg-white border border-[#1e2b62] text-[#1e2b62] rounded-2xl py-2">
                Buy Now
              </button>
            </div>
            <hr />
            <div className=" flex gap-2 items-center">
              <TbTruckDelivery className="text-[#1e2b62] text-xl" />
              <div className=" text-xs">
                <div className=" font-semibold">
                  Delivery start from Rp 12.000
                </div>
                <div className=" font-light">Check delivery fee</div>
              </div>
            </div>
            <div className=" flex gap-2 items-center">
              <FaShop className="text-[#1e2b62] text-xl" />
              <div className=" text-xs">
                <div className=" font-semibold">
                  Find product in our warehouses
                </div>
                <div className=" font-light">Find warehouse</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Description />
        </div>
      </div>
    </>
  );
}
export default Page;
