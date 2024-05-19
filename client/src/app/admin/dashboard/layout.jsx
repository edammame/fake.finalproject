import SidebarPage from "@/components/dashboard/sidebar/adminsidebar";
import NavbarPage from "@/components/dashboard/navbar/navbar";
import { Navbar } from "flowbite-react";
import UsersPage from "./users/page";

export default function RootLayout({ children }) {
  return (
    <div className="flex gap-3 w-full">
      <div className="flex-shrink-0">
        <SidebarPage />
      </div>
      <div className="flex-grow">
        {/* <NavbarPage /> */}
        {children}
      </div>
    </div>
  );
}
