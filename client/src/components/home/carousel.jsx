"use client";
import { Carousel } from "@material-tailwind/react";

function CarouselComponent() {
  return (
    <>
      <main className="flex justify-center mt-8 mx-3 lg:mx-20 md:mx-8">
        <Carousel
          transition={{ duration: 1 }}
          autoplay
          loop
          nextArrow={false}
          prevArrow={false}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-1 bg-white" : "w-1 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
          className="lg:h-[550px] sm:h-[400px] h-[200px]"
        >
          <div className="w-full h-full">
            <img
              src="https://ii1.pepperfry.com/assets/0f08e814-b827-453b-bdb3-d5e607502794.jpg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-full">
            <img
              src="https://img.freepik.com/premium-photo/bathroom-interior-architecture-minimalist-style_60401-710.jpg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full">
            <img
              src="https://urbanquarter.com/storage/2022/09/230217_CVP21136-01-1170x770.jpg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full">
            <img
              src="https://cdn11.bigcommerce.com/s-hh9ad/images/stencil/original/e/cotscotbeds-internalbanner-june22__65634.original.jpg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-full">
            <img
              src="https://assets-global.website-files.com/627b58f5e6ebae48302dd1f6/64f44bcbf4808529eee61d68_two-kids-chairs-and-a-table.jpg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full">
            <img
              src="https://www.modholic.in/cdn/shop/files/MD-1012-BEI_07_23f9a9fa-7c43-4baa-aefe-2430abf3c0fd.jpg?v=1700155998&width=1445"
              className="w-full h-full object-cover"
            />
          </div>
        </Carousel>
      </main>
    </>
  );
}
export default CarouselComponent;
