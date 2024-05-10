import Sidebar from "@/components/dashboard/sidebar/sidebar";

export default function RootLayout({ children }) {
  return (
    <main className="flex">
      <div>
        <Sidebar />
      </div>
      <div>{children}</div>
    </main>
  );
}
