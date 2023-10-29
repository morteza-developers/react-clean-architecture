const { makeStyles } = require("@mui/styles");

export const useStyles = makeStyles((theme: any) => ({
  tip_icon: {
    cursor: "pointer",
    padding: "8px",
    paddingTop: "0px",
    marginTop: "-4px",
    minWidth: "35px",
    minHeight: "35px",
    color: theme.palette.info.main + "!important",
    "& :hover": {
      color: theme.palette.primary.main + "!important",
    },
  },
}));
