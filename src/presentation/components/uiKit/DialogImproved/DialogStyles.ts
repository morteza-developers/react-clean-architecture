import { makeStyles } from "@mui/styles";
import { SPACING_HALF } from "core/utils//constants/spacing";

export const useStyles = makeStyles((theme) => ({
  "MuiDialog-root": {
    "& .MuiDialog-paper": {
      margin: "0px !important",
      width: "calc(100% - 10px)",
      display: "flex",
      flexDirection: "column",
    },
  },

  secondaryAction: {
    marginLeft: theme.spacing(SPACING_HALF),
  },
  content: {
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      padding: "15px 8px !important",
    },
    padding: "26px !important",
  },
  dialogAction: {
    flexDirection: "row-reverse",
    padding: "10px",
  },

  appBar: {
    borderRadius: "4px 4px 12px 12px",
    zIndex: 2,
    position: "sticky !important" as any,
    top: 0,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "16px !important",
    paddingRight: "16px !important",
    height: "64px",
    borderBottom: `1px solid ${theme.palette.gray.light}`,
  },
  title: {
    align: "left",
    variant: "subtitle1",
    color: "inherit",
  },
  actionBox: {
    display: "flex",
    columnGap: "10px",
    alignItems: "center",
  },
}));
