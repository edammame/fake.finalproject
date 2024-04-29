"use client";
import Image from "next/image";
import product1 from "../assets/product1.jpeg";
import { FaCartShopping } from "react-icons/fa6";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Pagination from "./pagination";
import Link from "next/link";

function ProductList() {
  return (
    <>
      <div className=" grid max-w-screen-2xl md:grid-cols-4 grid-cols-1 p-7 gap-3 mx-28 ">
        <ProductCard />
        {/* buat looping disini */}
      </div>
      <div className=" flex items-center justify-center">
        <Pagination />
      </div>
    </>
  );
}
export default ProductList;

export function ProductCard() {
  return (
    <>
      {/* <Link href={"/products/" + id}> */}
      <Card className=" w-72 hover:scale-105">
        <CardHeader shadow={false} floated={false} className="">
          <Image
            src={product1}
            alt="card-image"
            className="h-full w-full object-contain"
          />
        </CardHeader>
        <CardBody className=" flex flex-col">
          <Typography
            color="blue-gray"
            className=" font-extrabold text-[#1e2b62] text-lg"
          >
            AFTONSPARV
          </Typography>

          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75 text-[#222831]"
          >
            Set boneka jari 5 buah, aneka warna
          </Typography>
          {/* tambahin short description di db? */}
          <Typography color="blue-gray" className="font-semibold pt-3 text-lg">
            <sup className=" text-xs p-0.5">Rp</sup>29.000
          </Typography>
          <div className=" py-3">
            <Button
              ripple={false}
              fullWidth={true}
              className=" flex gap-2 justify-center items-center bg-[#1e2b62] text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
            >
              Add to Cart <FaCartShopping className="text-white" />
            </Button>
          </div>
        </CardBody>
      </Card>
      {/* </Link> */}
    </>
  );
}
