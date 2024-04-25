/** @format */
"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import LoadingPage from "@/components/loading";
import { redirect } from "next/dist/server/api-utils";

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
const routes = [];

routes.push(new Route("/", userOnly)),
  routes.push(new Route("/auth/login", userOnly)),
  routes.push(new Route("/auth/register", userOnly)),
  routes.push(new Route("/auth/forgot-password", userOnly)),
  routes.push(new Route("/admin/dashboard", adminOnly)),
  routes.push(new Route("/super-admin/dashboard", superAdminOnly)); // example route for superAdmin

export default function ProtectedPage({ children }) {
  const userSelector = useSelector((state) => state.auth);
  const pathname = usePathname;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkRoute = routes.find((route) => route.path === pathname);
    if (checkRoute) {
      switch (checkRoute.type) {
        case adminOnly:
          if (userSelector.role !== "admin") {
            return redirect("/auth/login");
          }
          break;
        case superAdminOnly:
          if (userSelector.role !== "superAdmin") {
            return redirect("/auth/login");
          }
          break;
        case needLogin:
          if (!userSelector.isLoggedIn) {
            return redirect("/auth/login");
          }
          break;
        case userOnly:
          if (userSelector.isLoggedIn) {
            return redirect("/");
          }
          break;
        // No default case needed
      }
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [children, userSelector.id, pathname]);

  return <div>{isLoading ? <LoadingPage /> : children}</div>;
} // Using React.Fragment to avoid adding extra divs
