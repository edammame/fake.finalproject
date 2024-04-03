/** @format */

import NavbarComponent from "@/components/navbar";

export const metadata = {
  title: "Test - Home",
  description: "test",
};

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <div className="flex flex-col justify-center max-w-screen-2xl w-full items-center m-auto"></div>
    </>
  );
}
