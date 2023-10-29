import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  "@keyframes gradient": {
    "0%": {
      backgroundPosition: "0% 0",
    },
    "100%": {
      backgroundPosition: "350% 0",
    },
  },
  appBarContainer: {
    flexGrow: 1,
    position: "sticky",
    top: "0px",
    width: "100%",
    // right: "0",
    zIndex: 2,
  },
  muiAppBar: {
    backgroundColor: `${theme.palette.appBar.main} !important`,
    color: `${theme.palette?.appBar?.contrastText} !important`,
  },
  appBarLeft: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "nowrap",
    alignItems: "center",
    columnGap: "8px",
  },
  itemsContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    columnGap: "20px",
  },
  iconsContainer: {
    display: "flex",
    alignItems: "center",
    columnGap: "5px",
  },
  appBarText: {
    padding: "7px !important",
    backgroundColor: theme.palette.info.main + "!important",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  iconButtonHide: {
    display: "flex",
    color: "#fff !important",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  avatar: {
    cursor: "pointer",
    width: 42,
    height: 42,
  },
  confirmBtn: {
    marginTop: "40px !important",
    width: "100%",
    backgroundColor: theme.palette.primary.main + "!important",
    color: theme.palette.primary.contrastText + "!important",
  },

  wallet: {
    color: theme.palette.primary.main + "!important",
    backgroundColor: theme.palette.primary.light + "!important",
  },
  userName: {
    display: "flex",
    columnGap: "8px",
    alignItems: "center",
  },
  profile: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    columnGap: "8px",
  },
  logOut: {
    color: theme.palette.error.main,
    display: "flex",
    columnGap: "5px",
  },
  profileInformation: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
