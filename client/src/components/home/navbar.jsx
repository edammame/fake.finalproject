"use client";
import React from "react";
import { Button, Card, Collapse, IconButton } from "@material-tailwind/react";

function NavbarComponent() {
  const [openBar, setOpenBar] = React.useState(false);

  const closeBar = () => setOpenBar(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenBar(false)
    );
  }, []);

  const navList = (
    <div className="flex gap-7">
      <a href="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
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
          class="w-6 h-6"
        >
          <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
        </svg>
      </a>
    </div>
  );

  const searchBox = (
    <input
      className="w-full h-full px-4 rounded-3xl bg-transparent outline-none"
      placeholder="search product here"
    ></input>
  );

  const draList = (
    <div className="ml-10">
      <div className="mb-6 flex items-center justify-between">
        <a href="">Product</a>
      </div>
      <p className="mb-8 pr-4">
        Material Tailwind features multiple React and HTML components, all
        written with Tailwind CSS classes and Material Design guidelines.
      </p>
      <div className="flex gap-2">
        <Button size="sm" variant="outlined">
          Documentation
        </Button>
        <Button size="sm">Get Started</Button>
      </div>
    </div>
  );

  return (
    <>
      <div className="sticky top-0 w-full bg-white z-50">
        <div className="flex items-center justify-between py-2 mx-3 lg:mx-20 md:mx-8">
          <div className="flex items-center gap-2">
            <img src={"/logo/jwp-02.png"} className="w-20" />
            <p className="w-40">Jakarta warehouse Project</p>
          </div>

          <div className="hidden sm:flex w-8/12 h-14 items-center py-2 px-4 rounded-full bg-gray-100 gap-3 mr-10">
            {searchBox}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>

          <div className="hidden lg:flex mr-14">{navList}</div>

          <IconButton
            variant="text"
            className="text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent sm:hidden mr-7"
            ripple={false}
            onClick={() => setOpenBar(!openBar)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </IconButton>
        </div>
        <Collapse open={openBar} onClose={closeBar}>
          <Card className="mx-auto h-14 w-11/12 rounded-full bg-gray-100">
            {searchBox}
          </Card>
        </Collapse>
      </div>
    </>
  );
}
export default NavbarComponent;
