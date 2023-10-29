import { alpha } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { DRAWER_HEADER_WIDTH, FOLDED_DRAWER_WIDTH } from "core/utils/constants/mixins";

export const FOLDED_ANIMATION_DURATION = 300;

export const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("md")]: {
      width: DRAWER_HEADER_WIDTH,
      minWidth: DRAWER_HEADER_WIDTH,
    },
    "& ::-webkit-scrollbar": {
      transition: "0.5s !important",
      display: "none",
      width: "4px !important",
    },
    "& :hover::-webkit-scrollbar": {
      display: "block",
    },
  },
  list: {
    overflowX: "auto",
    padding: "16px !important",
    "& > *": {
      marginBottom: "12px !important",
    },
  },
  rootFolded: {
    height: "64px",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      width: FOLDED_DRAWER_WIDTH,
      minWidth: FOLDED_DRAWER_WIDTH,
    },
  },

  drawerPaper: {
    backgroundImage: "none !important",
    borderRight: "none !important",
    left: "auto !important",
    right: "auto !important",
    border: "none !important",
    width: DRAWER_HEADER_WIDTH,
    transition: theme.transitions.create(["all"], {
      duration: FOLDED_ANIMATION_DURATION,
    }),
    backgroundColor: `${theme.palette.paper.main} !important`,
  },
  drawerFolded: {
    width: FOLDED_DRAWER_WIDTH,
    minWidth: FOLDED_DRAWER_WIDTH,
    position: "fixed",
    top: 0,
    bottom: 0,
    $drawer: {
      width: FOLDED_DRAWER_WIDTH,
    },
  },
  drawerFoldedOpen: {
    width: DRAWER_HEADER_WIDTH,
    minWidth: DRAWER_HEADER_WIDTH,
  },
  drawerFoldedClose: {
    "& $menuIconWrapper": {
      justifyContent: "center",
    },
  },
  menuIconWrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },

  content: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },

  icon: {
    minWidth: "auto !important",
    transition: theme.transitions.create(["padding"]),
    "& > *": {
      width: 24,
      height: 24,
    },
  },

  listItem: {
    maxHeight: "40px",
    padding: "8px 16px !important",
    borderRadius: "8px !important",
    width: "100%",
    columnGap: "8px",
    transition: theme.transitions.create(["background", "color", "opacity"]),
    "&.active": {
      color: theme.palette.primary.main + "!important",
      fontWeight: 700,
    },
    "&.active $icon": {
      color: theme.palette.primary.contrastText,
    },
  },
  listItemSingle: {
    maxHeight: "40px",
    padding: "8px 16px !important",
    borderRadius: "8px !important",
    width: "100%",
    columnGap: "8px",
    transition: theme.transitions.create(["background", "color", "opacity"]),
    "&.active": {
      backgroundColor: theme.palette.primary.main + "!important",
      color: "#fff",
    },
    "&.active $icon": {
      color: theme.palette.primary.contrastText,
    },
  },

  listItemText: {
    borderRight: `1px solid ${theme.palette.neutral.main}`,
    padding: "6px 10px",
  },
  menuIcon: {
    padding: "7px !important",
    [theme.breakpoints.down("md")]: {
      padding: "6px !important",
    },
  },
  mobileMenuIcon: {
    position: "absolute",
    zIndex: 9,
  },

  mainList: {
    "&:has(.active) > div:first-child": {
      backgroundColor: theme.palette.primary.main + "!important",
      color: "#fff",
      "&.active": {
        backgroundColor: theme.palette.primary.main + "!important",
        color: "#fff",
      },
      "& $icon": {
        color: theme.palette.primary.contrastText,
      },
    },
  },
  subMenuContainer: {
    margin: "8px",
  },

  miniLogo: {
    maxWidth: "56px",
    maxHeight: "56px",
  },
  typeLogo: {
    maxHeight: "56px",
    maxWidth: "240px",
  },
  displayNone: {
    display: "none",
  },
}));
