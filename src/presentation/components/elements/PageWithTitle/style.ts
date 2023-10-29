import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  pageContainer: {
    margin: "24px",
    [theme.breakpoints.down("sm")]: {
      margin: "24px 8px",
    },
  },

  upSection: {
    height: "32px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "16px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      height: "auto",
    },
  },

  titleContainer: {
    fontSize: "22px !important",
    display: "flex",
    columnGap: "5px",
    alignItems: "center",
    justifyContent: "flex-start",
    userSelect: "none",
  },
  titleText: {
    fontSize: "19px !important",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  breadCrump: {
    fontSize: "11px !important",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
    zIndex: "2",
    backgroundColor: theme.palette.paper.main,
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    borderRadius: "16px",
    padding: "16px",
    [theme.breakpoints.down("sm")]: {
      padding: "16px 8px",
    },
  },
  breadCrumpItem: {
    color: "inherit",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: "12px",
    columnGap: "4px",
    padding: "5px",
  },
  lastBreadCrumpItem: {
    color: theme.palette.primary.main,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: "12px",
    columnGap: "4px",
  },
}));
