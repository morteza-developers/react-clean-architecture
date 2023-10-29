import createPalette from "@mui/material/styles/createPalette";

const darkTheme = () => ({
  mode: "dark",
  pink: {
    main: "#d76a6a",
    contrastText: "#FFFFFF",
    dark: "#d76a6a",
  },
  primary: {
    main: "#1EBEC2",
    light: "#062627",
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: "#f50057",
  },
  info: {
    main: "#397FE4",
    contrastText: "#fff",
    light: "#397FE429",
  },
  neutral: {
    main: "#CBCBCB14",

    contrastText: "#fff",
  },
  white: {
    main: "#131829",
    contrastText: "#fff",
  },
  error: {
    main: "#FF2626",
    contrastText: "#fff",
    light: "#E81B1B29",
  },
  warning: {
    main: "#FF7A00",
    contrastText: "#fff",
    light: "#FF7A0029",
  },
  success: {
    main: "#00A707",
    contrastText: "#fff",
    light: "#00A70729",
  },
  background: {
    default: "#050911",
  },
  paper: {
    main: "#0A1320",
    contrastText: "#FFFFFF",
  },
  gray: {
    main: "#757575",
    contrastText: "#FFFFFF",
    light: "#252729",
  },
  appBar: {
    main: "#0A1320",
    contrastText: "#fff",
  },
  text: {
    primary: "#ffffff",
    secondary: "#CBCBCB ",
  },
});

const lightTheme = () => {
  return {
    mode: "light",
    primary: {
      main: "#1EBEC2 ",
      light: "#D2F2F3",
      contrastText: "#fff",
    },
    secondary: {
      main: "#373E8F",
    },
    info: {
      main: "#397FE4",
      contrastText: "#fff",
      light: "#397FE429",
    },
    neutral: {
      main: "#D7D7D7",
      contrastText: "#000",
    },
    white: {
      main: "#fff",
      contrastText: "#000",
    },
    black: {
      main: "#000",
      contrastText: "#fff",
    },
    divider: "#cbced9",
    text: {
      primary: "#272727",
      secondary: "#757575 ",
      disabled: "#D7DBEC",
    },
    gray: {
      main: "#757575",
      contrastText: "#FFFFFF",
      light: "#F0F0F0",
    },
    pink: {
      main: "#fda0a0",
      contrastText: "#FFFFFF",
      dark: "#d76a6a",
    },
    error: {
      main: "#FF2626 ",
      contrastText: "#FFFFFF",
      light: "#E81B1B29",
    },
    warning: {
      main: "#FF7A00 ",
      contrastText: "#FFFFFF",
      light: "#FF7A0029",
    },
    success: {
      main: "#00A707",
      contrastText: "#FFFFFF",
      light: "#00A70729",
    },
    background: {
      default: "#F0F1F7",
    },
    paper: {
      main: "#FFFFFF",
      contrastText: "#272727",
    },
    appBar: {
      main: "#fff",
      contrastText: "#000",
    },
  };
};

const getpalette = ({ themeType }) => {
  return createPalette(themeType === "light" ? lightTheme() : darkTheme());
};

export default getpalette;
