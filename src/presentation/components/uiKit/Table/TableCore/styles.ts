import { makeStyles } from "@mui/styles";
import { SPACING_HALF, SPACING_LEAST } from "core/utils//constants/spacing";

export const useStyles = makeStyles((theme) => ({
  paper: {
    width: "100%",
  },
  header: {
    display: "flex",
    alignItems: "center",
  },

  actionsSection: {
    padding: theme.spacing(SPACING_HALF, 0),
    marginTop: 0,
    alignItems: "center",
    display: "flex",
  },
  exportWrapper: {
    margin: "5px 0px",
    flex: 1,
  },
  bulkActions: {
    marginLeft: theme.spacing(SPACING_HALF),
    display: "flex",
    alignItems: "center",
  },
  bulkButton: {
    margin: theme.spacing("0", SPACING_LEAST / 2),
  },
  loading: {
    width: "100%",
    // position: 'absolute',
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    "& span": {
      margin: "4px 0px",
      borderRadius: "5px",
    },
  },
  tableFooter: {
    direction: "rtl",
    alignItems: "center",
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  tableContainer: {
    minHeight: 150,
    minWidth: "100px",
    maxHeight: "calc(100vh - 330px)",
    border: `1px solid ${theme.palette.gray.light}`,
    borderRadius: "8px",
  },
  tool_bar: {
    padding: "0px",
  },
}));
