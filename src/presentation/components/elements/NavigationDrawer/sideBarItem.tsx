import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
export type SideBarItemType = {
  title: string;
  icon: any;
  href: string;
  id: string;
  child?: ChildType;
}[];

type ChildType = {
  id: string;
  title: string;
  icon: any;
  href: string;
}[];

const sideBarItem: SideBarItemType = [
  {
    id:"Dashboard",
    title: "Dashboard",
    icon: <SpaceDashboardOutlinedIcon />,
    href: "/",
  },
  {
    id:"appslider",
    title: "appslider",
    icon: <CollectionsOutlinedIcon />,
    href: "/appSlider",
  },
  {
    id:"ParentBlog",
    title: "Blog",
    icon: <AutoStoriesOutlinedIcon fontSize="small" />,
    href: "",
    child: [
      {
        id:"BlogCategory",
        title: "BlogCategory",
        icon: "",
        href: "blog/category",
      },
      {
        id:"Blog",
        title: "Blog",
        icon: "",
        href: "blog",
      },
    ],
  },
];

export default sideBarItem;
