// "use client";
// import { FaCartShopping } from "react-icons/fa6";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Button,
// } from "@material-tailwind/react";
// import Pagination from "@/components/pagination";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { axiosInstance } from "@/axios/axios";

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const productSearch = useSelector((state) => state.product);

//   const fetchProducts = () => {
//     axiosInstance()
//       .get("/products/", {
//         params: {
//           name: productSearch.name,
//         },
//       })
//       .then((res) => {
//         setProducts(res.data.result);
//       })
//       .catch((err) => console.log(err));
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, [productSearch]);

//   return (
//     <>
//       <div className=" grid max-w-screen-2xl md:grid-cols-4 grid-cols-1 p-7 gap-3 mx-28 ">
//         {products.map((product, key) => (
//           <ProductCard {...product} key={key} />
//         ))}

//         {/* buat looping disini */}
//       </div>
//       <div className=" flex items-center justify-center">
//         <Pagination />
//       </div>
//     </>
//   );
// }
// export default ProductList;

// export function ProductCard({ name, image_url, description, price, id }) {
//   return (
//     <>
//       <Link href={"/products/" + id}>
//         <Card className=" w-72 hover:scale-105">
//           <CardHeader shadow={false} floated={false} className="">
//             <img
//               // src={process.env.API_URL + image_url} kalo udah ada multer
//               src={image_url}
//               alt="card-image"
//               className="h-full w-full object-contain"
//             />
//           </CardHeader>
//           <CardBody className=" flex flex-col">
//             <Typography
//               color="blue-gray"
//               className=" font-extrabold text-[#1e2b62] text-lg"
//             >
//               {name}
//             </Typography>

//             <Typography
//               variant="small"
//               color="gray"
//               className="font-normal opacity-75 text-[#222831]"
//             >
//               {description}
//             </Typography>
//             {/* tambahin short description di db? */}
//             <Typography
//               color="blue-gray"
//               className="font-semibold pt-3 text-lg"
//             >
//               <sup className=" text-xs p-0.5">Rp</sup>
//               {Number(price).toLocaleString("id-ID")}
//             </Typography>
//             <div className=" py-3">
//               <Button
//                 ripple={false}
//                 fullWidth={true}
//                 className=" flex gap-2 justify-center items-center bg-[#1e2b62] text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
//               >
//                 Add to Cart <FaCartShopping className="text-white" />
//               </Button>
//             </div>
//           </CardBody>
//         </Card>
//       </Link>
//     </>
//   );
// }
