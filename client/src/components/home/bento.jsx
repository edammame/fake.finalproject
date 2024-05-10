"use client";

function BentoComponents() {
  return (
    <>
      <h1 className="flex justify-center text-3xl font-bold mt-20 mb-4">
        JAKARTA WAREHOUSE PROJECT
      </h1>
      <div className="mx-20 h-2/4 mb-10">
        <div className="flex gap-4 w-full">
          <a href="" className="w-full">
            <div
              shadow={false}
              className="relative grid h-full w-full items-end justify-center overflow-hidden text-center"
            >
              <div
                floated={false}
                shadow={false}
                color="transparent"
                className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://i0.wp.com/shipper.id/wp-content/uploads/2023/09/Fungsi-WMS-Warehouse-Management-System-Shipper.webp?fit=1280%2C853&ssl=1')] bg-cover bg-center"
              >
                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
              </div>
              <div className="relative py-14 px-6 md:px-12">
                <p className="mb-6 font-medium leading-[1.5] text-gray-400">
                  How we design and code open-source projects?
                </p>
                <p className="mb-4 text-gray-400">Tania Andrew</p>
              </div>
            </div>
          </a>
          <div className="flex flex-col w-2/5 gap-4">
            <a href="" className="w-full">
              <img
                src="https://assets-global.website-files.com/627b58f5e6ebae48302dd1f6/64f44bcbf4808529eee61d68_two-kids-chairs-and-a-table.jpg"
                className="w-full h-full object-cover"
              />
            </a>
            <a href="" className="w-full">
              <img
                src="https://www.modholic.in/cdn/shop/files/MD-1012-BEI_07_23f9a9fa-7c43-4baa-aefe-2430abf3c0fd.jpg?v=1700155998&width=1445"
                className="w-full h-full object-cover"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default BentoComponents;
