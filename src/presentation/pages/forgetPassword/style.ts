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
      height: "100%",
      width: "100%",
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
      flexDirection: "column",
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
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  changeNumber: {
    width: "100%",
  },
  formContainer: {
    width: "100%",
  },
}));
