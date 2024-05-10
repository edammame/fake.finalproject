import { Inter } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/redux/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jakarta Warehouse Project",
  description: "Multi Warehouse E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </StoreProvider>
  );
}
