import { alpha } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("md")]: {},
  },

  barElement: {
    "&::before": {
      display: "flex",
      content: '""',
      width: "2px",
      height: "16px",
      borderRadius: "5px",
      alignItems: "center",
      backgroundColor: theme.palette.text.primary,
    },
  },

  head: {
    display: "flex",
    alignItems: "center",
    columnGap: "8px",
  },
  badge: {
    backgroundColor: theme.palette.gray.light,
    borderRadius: "8px",
    fontWeight: "700",
    fontSize: "14px",
    padding: "3px 10px 0px 10px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    lineHeight: "15px",
  },
  warper: {
    rowGap: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "nowrap",
    height: "40px",
    columnGap: "8px",
    [theme.breakpoints.down("sm")]: {
      flexWrap: "wrap",
      height: "auto",
    },
  },
  searchBar: {
    height: "100%",
    width: "100%",
    // [theme.breakpoints.down("sm")]: {
    //   height: "auto",
    // },
  },

  restoreBtn: {
    backgroundColor: theme.palette.gray.light,
    color: theme.palette.text.primary,
    display: "flex",
    columnGap: "4px",
  },

  restoreBadge: {
    backgroundColor: theme.palette.neutral.main,
    borderRadius: "8px",
    fontWeight: "700",
    fontSize: "14px",
    padding: "3px 10px 0px 10px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    lineHeight: "15px",
  },
  actionWarper: {
    columnGap: "8px",
    rowGap: "8px",
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));
