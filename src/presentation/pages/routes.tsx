// import { IIPermissions } from "packages/permission/permission.types";
import { RouteType } from "presentation/types/public.types";
import { lazy } from "react";

const NotFoundPage = lazy(() => import("./notFound"));
const HomePage = lazy(() => import("./home"));
const BlogPage = lazy(() => import("./blog"));
const LoginPage = lazy(() => import("./login"));
const ForgetPasswordPage = lazy(() => import("./forgetPassword"));
const AddBlogPage = lazy(() => import("./blog/add"));

export const authRoutes = (): RouteType => {
  return [
    { path: "/*", element: <LoginPage />, isAccess: true },
    {
      isAccess: true,
      element: <ForgetPasswordPage />,
      path: "/forgetpassword",
    },
    {
      isAccess: true,
      element: <LoginPage />,
      path: "/login",
    },
  ];
};
export const protectedRoutes = (): RouteType => {
  return [
    { path: "*", element: <NotFoundPage />, isAccess: true },
    { path: "/access-denied", element: <NotFoundPage />, isAccess: true },
    {
      isAccess: true,
      element: <HomePage />,
      path: "/",
    },
    //blog
    {
      isAccess: true,
      element: <BlogPage />,
      path: "/blog",
    },
    {
      isAccess: true,
      element: <AddBlogPage />,
      path: "/blog/add",
    },
  ];
};
