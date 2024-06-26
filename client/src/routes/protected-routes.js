/** @format */
"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import { redirect } from "next/navigation";
import LoadingPage from "@/components/loading";

const userOnly = "userOnly";
const needLogin = "needLogin";
const adminOnly = "adminOnly";
const superAdminOnly = "superAdminOnly";

class Route {
  constructor(path, type) {
    this.path = path;
    this.type = type;
  }
}

const routes = [];
// routes.push(new Route("/"));
routes.push(new Route("/auth/login", userOnly));
routes.push(new Route("/auth/register", userOnly));
routes.push(new Route("/auth/forget-password", userOnly));
routes.push(new Route("/admin/dashboard", adminOnly));
routes.push(new Route("/super-admin/dashboard", superAdminOnly));

export default function ProtectedPage({ children }) {
  const userSelector = useSelector((state) => state.auth);
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkRoute = routes.find((route) => pathname.includes(route.path));
    if (checkRoute?.type == adminOnly && userSelector.role != "admin")
      return redirect("/auth/login");
    if (checkRoute?.type == superAdminOnly && userSelector.role != "superAdmin")
      return redirect("/auth/login");
    else if (checkRoute?.type == needLogin && !userSelector.email)
      return redirect("/auth/login");
    else if (checkRoute?.type == userOnly && userSelector.email)
      return redirect("/");
    else
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
  }, [children, userSelector.id, pathname]);

  return <div>{isLoading ? <LoadingPage /> : children}</div>;
}
