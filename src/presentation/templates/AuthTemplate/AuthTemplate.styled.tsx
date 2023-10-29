import { makeStyles } from "@mui/styles";
import { APP_BAR_HEIGHT } from "constants/mixins";
import { DRAWER_WIDTH } from ".";
import { SPACING_THIRD } from "core/utils//constants/spacing";

export const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex",
    alignItems: "center",
  },

  drawerPaper: {
    border: "none",
    width: DRAWER_WIDTH,
    transition: theme.transitions.create(["all"]),
    // background: theme.palette.sideBar.background,
  },
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    [theme.breakpoints.down("md")]: {
      alignItems: "center",
    },
  },
  content: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      maxWidth: "412px",
    },
  },
  authCard: {
    margin: "auto",
    display: "flex",
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    height: "100%",
    minHeight: "50vh",
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[10],
    [theme.breakpoints.down("md")]: {
      maxWidth: 640,
      height: "80vh",
    },
  },
  link: {
    textDecoration: "none",
    margin: theme.spacing("auto", SPACING_THIRD),
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing("auto" as any),
    },
  },
  wrapper: {
    display: "flex",
    justifyContent: "flex-end",
  },
  logo: {
    margin: "0px 5px",
    color: "#31A94E",
    whiteSpace: "nowrap",
  },
}));
