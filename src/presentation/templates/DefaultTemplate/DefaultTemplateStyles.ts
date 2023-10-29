import { makeStyles } from "@mui/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "100%",
    "& ::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.1)",
      borderRadius: "5px",
      height: "7px",
      backgroundColor: "#F5F5F5",
    },
    "& ::-webkit-scrollbar": {
      width: "11px",
      height: "11px",
      backgroundColor: "#F5F5F5",
      cursor: "pointer",
    },
    "& ::-webkit-scrollbar-thumb": {
      height: "7px",
      borderRadius: "5px",
      boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.16)",
      backgroundColor: "#00000024",
    },
  },
  toolbar: theme?.mixins?.toolbar,
  content: {
    overflowX: "clip",
    flex: 1,
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },

  contentWrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex start",
  },

  loading: {
    height: "8px !important",
    width: "100% !important",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: "9999 !important",
  },
  container: {
    padding: "0px !important",
    flex: 1,
  },
}));
