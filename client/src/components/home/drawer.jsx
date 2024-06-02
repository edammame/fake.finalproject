"use client";
import React from "react";
import { Button, Collapse, Drawer, IconButton } from "@material-tailwind/react";

function DrawerComponent() {
  const [openNav, setOpenNav] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const closeNav = () => setOpenNav(false);
  const toggleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <div className="flex gap-4">
      <a href="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
            clipRule="evenodd"
          />
        </svg>
      </a>
      <a href="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
        </svg>
      </a>
    </div>
  );

  const List = (
    <div className="flex flex-col gap-2">
      <a href="">Bedroom Furniture</a>
      <a href="">Bathroom Furniture</a>
      <a href="">livingroom Furniture</a>
      <a href="">Diningroom Furniture</a>
      <a href="">Kitchen Furniture</a>
      <a href="">Kitchen Set</a>
      <a href="">Dining Set</a>
      <a href="">Decorations</a>
      <a href="">Gardening</a>
      <a href="">Cleaning Suplies</a>
      <a href="">Laundry Suplies</a>
      <a href="">Tools & Materials</a>
    </div>
  );
  return (
    <>
      <div className="fixed flex justify-end right-3 z-50 top-[42px] lg:right-20 md:right-8">
        <IconButton
          variant="text"
          className="h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </IconButton>
      </div>
      <Drawer
        placement="right"
        open={openNav}
        transition={{ type: "tween", duration: 0.3 }}
        size={500}
        // overlay={{
        //   position: "absolute",
        //   inset: "inset-0",
        //   width: "w-full",
        //   height: "h-full",
        //   pointerEvents: "pointer-events-auto",
        //   zIndex: "z-[9995]",
        //   backgroundColor: "bg-black",
        //   backgroundOpacity: "bg-opacity-60",
        //   backdropBlur: "backdrop-blur-sm",
        // }}
      >
        <div className="flex justify-between mb-5">
          <IconButton variant="text" color="blue-gray" onClick={closeNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              class="w-5 h-5"
            >
              <path
                fill-rule="evenodd"
                d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </IconButton>
          <div className="lg:hidden mt-3 mr-5">{navList}</div>
        </div>
        <div className="mx-[86px] mt-16">
          <div className="flex flex-col items-center justify-center">
            <a href="">
              <h1 className="text-2xl font-bold mb-6">ALL PRODUCT</h1>
            </a>
            <div className="flex flex-col gap-4 font-semibold w-full">
              <a href="">Offers</a>
              <a href="">Last Chance!</a>
              <a href="">Everyday Essentials under 100K</a>
              <p onClick={toggleOpen}>Product Of Your Need</p>
            </div>
          </div>
          <Collapse open={open}>
            <div className="my-2">{List}</div>
          </Collapse>
          <div className="flex flex-col gap-2 items-center mt-8">
            <a href="" className="w-full">
              <Button size="sm" className="w-full">
                Order Status
              </Button>
            </a>
            <a href="" className="w-full ">
              <Button size="sm" className="w-full" variant="outlined">
                Store Information
              </Button>
            </a>
          </div>
        </div>
      </Drawer>
    </>
  );
}
export default DrawerComponent;
