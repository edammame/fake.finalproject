import SidebarPage from "@/components/dashboard/sidebar/superadminsidebar";
import NavbarPage from "@/components/dashboard/navbar/navbar";

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
