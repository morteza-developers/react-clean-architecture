import { createTheme as createMuiTheme } from "@mui/material/styles";
import { faIR } from "@mui/material/locale";
import typography from "./typography";
import shadows from "./shadows";
import shape from "./shape";
import overrides from "./overrides";
import getpalette from "./palette";
const theme = ({ direction, fontFamily, themeType }) => {
  const palette = getpalette({ themeType });
  return createMuiTheme(
    {
      direction: direction,
      shape,
      overrides: overrides({ palette }),
      palette,
      shadows,
      typography: typography({ fontFamily }),
      spacing: 8,
      components: {
        MuiButton: {
          defaultProps: { size: "medium" },
          styleOverrides: {
            sizeLarge: { height: "48px" },
            sizeMedium: { height: "40px" },
            sizeSmall: { height: "34px" },
          },
        },
        MuiTextField: {
          defaultProps: { size: "medium" },
          styleOverrides: {
            root: {
              "& .Mui-disabled": {
                WebkitTextFillColor: "rgba(131, 131, 131, 1) !important",
              },
            },
          },
        },
      },

      props: {
        MuiTextField: {
          InputLabelProps: {
            shrink: true,
          },
        },
        MuiAutocomplete: {
          disablePortal: true,
        },
      },
    },
    faIR
  );
};

export default theme;
