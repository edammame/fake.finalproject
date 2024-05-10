import ProductList from "@/components/productList";

export const metadata = {
  title: "Jakarta Warehouse Project",
  description: "Multi Warehouse E-commerce",
};

export default function Home() {
  return (
    <>
      <div className=" bg-[#f2f2f2] min-h-screen">
        <ProductList />
      </div>
    </>
  );
}
