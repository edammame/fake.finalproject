/** @format */
"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import LoadingPage from "@/components/loading";

// Define access types
const needLogin = "needLogin";
const userOnly = "userOnly";
const adminOnly = "adminOnly";
const superAdminOnly = "superAdminOnly";

class Route {
  constructor(path, type) {
    this.path = path;
    this.type = type;
  }
}

// Define routes and their access types
const routes = [
  new Route("/", userOnly),
  new Route("/auth/login", needLogin),
  new Route("/auth/register", needLogin),
  new Route("/admin/dashboard", adminOnly),
  new Route("/super-admin/dashboard", superAdminOnly), // example route for superAdmin
];

export default function ProtectedPage({ children }) {
  const userSelector = useSelector((state) => state.auth);
  const router = useRouter();
  const pathname = router.pathname; // declare the pathname variable
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkRoute = routes.find((route) => route.path === pathname);
    if (checkRoute) {
      switch (checkRoute.type) {
        case adminOnly:
          if (userSelector.role !== "admin") {
            router.push("/auth/login");
            return;
          }
          break;
        case superAdminOnly:
          if (userSelector.role !== "superAdmin") {
            router.push("/auth/login");
            return;
          }
          break;
        case needLogin:
          if (!userSelector.isLoggedIn) {
            router.push("/auth/login");
            return;
          }
          break;
        case userOnly:
          if (userSelector.isLoggedIn) {
            router.push("/");
            return;
          }
          break;
        // No default case needed
      }
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [pathname, userSelector]); // Now pathname is correctly added as a dependency

  if (isLoading) {
    return <LoadingPage />;
  }

  return <>{children}</>;
} // Using React.Fragment to avoid adding extra divs
