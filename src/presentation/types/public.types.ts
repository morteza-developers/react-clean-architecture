import { ReactNode } from "react";



export type IStatus = "success" | "loading" | "error";
export type LangType = "fa-IR" | "en-US";
export type ThemeType = "light" | "dark";
export type DirectionType = "rtl" | "ltr";

export type RouteType = {
  isAccess: boolean;
  element: ReactNode;
  path?: string;
  children?: RouteTypeChildren[];
}[];
type RouteTypeChildren = {
  isAccess: boolean;
  element: ReactNode;
  path?: string;
  children?: RouteTypeChildren[];
};
export type InputType = "text" | "number" | "tell" | "submit" | "password";