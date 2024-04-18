import Image from "next/image";
import product1 from "../assets/product1.jpeg";
import { FaCartShopping } from "react-icons/fa6";
// import { useState } from "react";

function ProductList() {
  return (
    <>
      <div>
        <ProductCard />
      </div>
    </>
  );
}
export default ProductList;

export function ProductCard() {
  return (
    <>
      <div className="flex flex-col items-start rounded-lg bg-[#F8F7F3]">
        <div className="max-h-full max-w-full text-center">
          <Image
            src={product1}
            className="h-[150px]  w-[300px] rounded-t-lg "
          />
        </div>
        <div className="md:p-5 lg:p-5 p-2 w-full h-full flex flex-col justify-between gap-2">
          <div className=" font-bold w-full text-[#1F5673] md:text-sm text-xs">
            AFTONSPARV
          </div>
          <div className=" font-medium w-full text-slate-400 md:text-base text-xs">
            Set boneka jari 5 buah, aneka warna
          </div>

          <div className="md:flex justify-between md:text-sm text-xs">
            <div className="text-[#E02828] font-semibold  ">
              <sup>Rp</sup>
              29.900
            </div>
            <div className="flex items-center text-[#676666] md:text-sm text-xs">
              <FaCartShopping />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
