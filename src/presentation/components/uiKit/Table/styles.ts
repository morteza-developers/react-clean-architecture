import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    // filter: ({ disable }: any) => (disable ? `blur(1px)` : "none"),
    "& ::-webkit-scrollbar": {
      display: "none",
      width: "8px !important",
    },
    "& :hover::-webkit-scrollbar": {
      display: "block",
      cursor: "pointer",
    },
  },

  back_drop: {
    background: "#3e3e3e26",
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 99,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
}));
