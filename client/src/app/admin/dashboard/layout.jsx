import SidebarPage from "@/components/dashboard/sidebar/sidebar";
import NavbarPage from "@/components/dashboard/navbar/navbar";
import { Navbar } from "flowbite-react";
import UsersPage from "./users/page";

export default function RootLayout({ children }) {
  return (
    <main className="flex gap-3">
      <div>
        <SidebarPage />
      </div>
      <div>
        <NavbarPage />
        {children}
      </div>
    </main>
  );
}
