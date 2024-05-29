"use client";

function CategoriesComponent() {
  const ctr = (
    <>
      <a
        href=""
        className="lg:w-48 md:w-44 w-36 overflow-hidden rounded-xl bg-white drop-shadow-md"
      >
        <div className="m-0 h-3/4 rounded-none">
          <img
            src="https://www.home-designing.com/wp-content/uploads/2021/10/slatted-headboard-wall.jpg"
            alt="bedroom"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex justify-center px-4 py-2">
          <h2 className="md:text-sm sm:text-xs">Bedroom Furniture</h2>
        </div>
      </a>

      <a
        href=""
        className="lg:w-48 md:w-44 w-36 overflow-hidden rounded-xl bg-white drop-shadow-md"
      >
        <div className="m-0 h-3/4 rounded-none">
          <img
            src="https://img.freepik.com/premium-photo/bathroom-interior-architecture-minimalist-style_60401-710.jpg"
            alt="bathroom"
            className="h-full object-cover"
          />
        </div>
        <div className="flex justify-center px-4 py-2">
          <h2 className="md:text-sm sm:text-xs">Bathroom Furniture</h2>
        </div>
      </a>

      <a
        href=""
        className="lg:w-48 md:w-44 w-36 overflow-hidden rounded-xl bg-white drop-shadow-md"
      >
        <div className="m-0 h-3/4 rounded-none">
          <img
            src="https://www.thespruce.com/thmb/eTjEURSHcrDEW51dUVwOW4t9jZs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/morsa-images-getty-header-cb5d4e106c994631853c0a2d151c1a00.jpg"
            alt="livingroom"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-center px-4 md:py-2">
          <h2 className="md:text-sm sm:text-xs">livingroom Furniture</h2>
        </div>
      </a>

      <a
        href=""
        className="lg:w-48 md:w-44 w-36 overflow-hidden rounded-xl bg-white drop-shadow-md"
      >
        <div className="m-0 h-3/4 rounded-none">
          <img
            src="https://www.modholic.in/cdn/shop/files/MD-1012-BEI_07_23f9a9fa-7c43-4baa-aefe-2430abf3c0fd.jpg?v=1700155998&width=1445"
            alt="diningroom"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-center px-4 md:py-2">
          <h2 className="md:text-sm sm:text-xs">Diningroom Furniture</h2>
        </div>
      </a>

      <a
        href=""
        className="lg:w-48 md:w-44 w-36 overflow-hidden rounded-xl bg-white drop-shadow-md"
      >
        <div className="m-0 h-3/4 rounded-none">
          <img
            src="https://kitchensolvers.com/wp-content/uploads/2024/03/AdobeStock_571310066-scaled.jpeg"
            alt="kitchen"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-center px-4 py-2">
          <h2 className="md:text-sm sm:text-xs">Kitchen Furniture</h2>
        </div>
      </a>

      <a
        href=""
        className="lg:w-48 md:w-44 w-36 overflow-hidden rounded-xl bg-white drop-shadow-md"
      >
        <div className="m-0 h-3/4 rounded-none">
          <img
            src="https://grangettos.com/cdn/shop/articles/shutterstock_603854654_1600x.jpg?v=1617923298"
            alt="gardening"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-center px-4 py-2">
          <h2 className="md:text-sm sm:text-xs">Gardening</h2>
        </div>
      </a>
    </>
  );

  return (
    <>
      <div className="flex justify-center my-20 lg:mx-20 md:mx-8">
        <div className="hidden sm:grid grid-cols-3 gap-10 w-fit lg:flex flex-wrap justify-center">
          {ctr}
        </div>
        <div className="sm:hidden w-fit text-xs gap-8 grid grid-cols-2">
          {ctr}
        </div>
      </div>
    </>
  );
}
export default CategoriesComponent;
