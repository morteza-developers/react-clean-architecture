export const APP_BAR_HEIGHT = 75 as const;
export const DRAWER_HEADER_HEIGHT = 166 as const;
export const DRAWER_HEADER_WIDTH = 260 as const;
export const PAGE_HEADER_HEIGHT = 51 as const;
export const FOLDED_DRAWER_WIDTH = 88 as const ;
export const PAGE_TITLE_HEIGHT = DRAWER_HEADER_HEIGHT + 40;
export const LIMIT = 15 as const;
export const MAP_URL="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
export const MAP_ATTRIBUTION='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
export const PLATE_LETTERS = [
  "الف",
  "پ",
  "ب",
  "ت",
  "ج",
  "د",
  "س",
  "ص",
  "ط",
  "ق",
  "ک",
  "ع",
  "ل",
  "م",
  "ن",
  "و",
  "ه",
  "ی",
] as const;

export const PHONE_BOOK_TYPE = {
  1: "Landline phone",
  2: "Mobile",
  3: "Email",
} as const;
export const PHONE_BOOK_List = [
  {
    type: 1,
    name: "Landline phone",
  },
  {
    type: 2,
    name: "Mobile",
  },
  {
    type: 3,
    name: "Email",
  },
] as const;
