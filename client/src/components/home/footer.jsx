"use client";
import React from "react";
import { IconButton } from "@material-tailwind/react";

function FooterComponent() {
  return (
    <>
      <div className="flex flex-col items-center w-full h-[550px] bg-[#dfdfdf] pb-10">
        <main className="grid w-full h-full sm:flex">
          <section className="flex items-center w-1/2">
            <div className="flex items-center w-2/4 gap-2 mx-3 lg:mx-20 md:mx-8">
              <img src={"/logo/jwp-03.png"} className="w-36" />
              <div>
                <p className="translate-y-2 text-2xl">
                  Jakarta Warehouse Project
                </p>
                <p className=" translate-y-6 text-sm">
                  everywhere, anywhere. from us to your house
                </p>
              </div>
            </div>
          </section>
          <section className="flex flex-col justify-center w-1/2 gap-4 px-3 lg:px-20 md:px-8">
            <div className="flex gap-20">
              <div className="flex-col">
                <p>About Us</p>
                <p>FAQ</p>
                <p>Policy</p>
              </div>
              <div className="flex-col">
                <h2 className="text-md">contact service</h2>
                <p> 887900</p>
                <p>+62100576000</p>
              </div>
            </div>
            <div className="mt-8">
              <h2>Follow Us</h2>
              <div className="flex gap-2 mt-2">
                <a href="">
                  <IconButton className="rounded-full w-7 h-7">
                    <svg
                      class="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        fill="#dfdfdf"
                      />
                      <path
                        d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                        fill="#dfdfdf"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                        fill="#dfdfdf"
                      />
                    </svg>
                  </IconButton>
                </a>
                <a href="">
                  <IconButton className="rounded-full w-7 h-7">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="#dfdfdf"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                      />
                    </svg>
                  </IconButton>
                </a>
                <a href="">
                  <IconButton className="rounded-full bg-transparent w-7 h-7">
                    <svg
                      class="w-[46px] h-[44px]"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 12.05C19.9813 10.5255 19.5273 9.03809 18.6915 7.76295C17.8557 6.48781 16.673 5.47804 15.2826 4.85257C13.8921 4.2271 12.3519 4.01198 10.8433 4.23253C9.33473 4.45309 7.92057 5.10013 6.7674 6.09748C5.61422 7.09482 4.77005 8.40092 4.3343 9.86195C3.89856 11.323 3.88938 12.8781 4.30786 14.3442C4.72634 15.8103 5.55504 17.1262 6.69637 18.1371C7.83769 19.148 9.24412 19.8117 10.75 20.05V14.38H8.75001V12.05H10.75V10.28C10.7037 9.86846 10.7483 9.45175 10.8807 9.05931C11.0131 8.66687 11.23 8.30827 11.5161 8.00882C11.8022 7.70936 12.1505 7.47635 12.5365 7.32624C12.9225 7.17612 13.3368 7.11255 13.75 7.14003C14.3498 7.14824 14.9482 7.20173 15.54 7.30003V9.30003H14.54C14.3676 9.27828 14.1924 9.29556 14.0276 9.35059C13.8627 9.40562 13.7123 9.49699 13.5875 9.61795C13.4627 9.73891 13.3667 9.88637 13.3066 10.0494C13.2464 10.2125 13.2237 10.387 13.24 10.56V12.07H15.46L15.1 14.4H13.25V20C15.1399 19.7011 16.8601 18.7347 18.0985 17.2761C19.3369 15.8175 20.0115 13.9634 20 12.05Z"
                        fill="#000000"
                      />
                    </svg>
                  </IconButton>
                </a>
                <a href="">
                  <IconButton className="rounded-full w-7 h-7 bg-transparent">
                    <svg
                      class="w-[29px] h-[29px]"
                      xmlns="http://www.w3.org/2000/svg"
                      shape-rendering="geometricPrecision"
                      text-rendering="geometricPrecision"
                      image-rendering="optimizeQuality"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 0c141.385 0 256 114.615 256 256S397.385 512 256 512 0 397.385 0 256 114.615 0 256 0z" />
                      <path
                        fill="#fff"
                        fill-rule="nonzero"
                        d="M318.64 157.549h33.401l-72.973 83.407 85.85 113.495h-67.222l-52.647-68.836-60.242 68.836h-33.423l78.052-89.212-82.354-107.69h68.924l47.59 62.917 55.044-62.917zm-11.724 176.908h18.51L205.95 176.493h-19.86l120.826 157.964z"
                      />
                    </svg>
                  </IconButton>
                </a>
              </div>
            </div>
          </section>
        </main>
        <div className="flex justify-center items-center w-full px-2 gap-8">
          <div className="w-24">
            <img
              src={"/investor/mandirilivin.png"}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-24">
            <img
              src={"/investor/GoPay.png"}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-32">
            <img
              src={"/investor/Kementerian.png"}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-24">
            <img
              src={"/investor/Biznet.png"}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-20">
            <img
              src={"/investor/tata.png"}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-32">
            <img
              src={"/investor/AirFrance.png"}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
}
export default FooterComponent;
