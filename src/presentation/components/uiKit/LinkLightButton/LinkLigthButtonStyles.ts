import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "8px",
    lineHeight: "1.3",
    "& > a , span": {
      minHeight: "32px",
      padding: "8px 12px",
      color: "inherit",
      display: "flex",
    },
  },
  disable: {
    userSelect: "none",
    opacity: 0.4,
    cursor: "not-allowed",
  },
}));
