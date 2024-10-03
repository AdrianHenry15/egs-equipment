import { NavMenuType } from "./types"

export type NavMenuItems = "Home" | "About" | "Contact" | "Products" | "Parts"

export type NavMenuLinks = "/" | "/about" | "/contact" | "/products" | "/parts"

export enum AltNavMenuLinks {
  CONTACT_US = "/contact-us",
  ESTIMATE = "/estimate",
}

export const NavMenu: NavMenuType[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Products",
    link: "/products",
  },
]

export const ServicesList = [
  { name: "None" },
  { name: "Window Cleaning" },
  { name: "Pressure Washing" },
  { name: "House Wash" },
  { name: "Roof Wash" },
  { name: "Holiday Lighting" },
  { name: "Other" },
]

export const FrequencyList = [
  { name: "Once A Year" },
  { name: "Twice A Year" },
  { name: "Quarterly" },
  { name: "Monthly" },
  { name: "Other" },
]
