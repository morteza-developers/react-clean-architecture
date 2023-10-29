import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  loginContainer: {
    width: "100%",
    display: "flex",
    alignItems: "strech",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  left: {
    flex: "1",
    overflow: "hidden",
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
  right: {
    flex: "1",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    rowGap: "20px",
    justifyContent: "center",
    padding: "20px 40px",
    [theme.breakpoints.down("md")]: {
      padding: "20px",
    },
  },
  title: {
    paddingBottom: " 60px",
    fontSize: "25px !important",
    [theme.breakpoints.down("md")]: {
      padding: "10px 0",
    },
  },
  footer: {
    justifyContent: "space-between",
    display: "flex",
    width: "100%",
  },
}));
