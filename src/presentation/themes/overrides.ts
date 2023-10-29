import { lighten, alpha } from "@mui/material/styles";

import shape from "./shape";

const overrides = ({ palette }: any): any => {
  return {
    MuiCssBaseline: {
      "@global": {
        a: {
          textDecoration: "none",
          color: palette.text.primary,
        },
        code: {
          color: palette.secondary.main,
        },
        "::-webkit-scrollbar": {
          width: "8px",
          height: "8px",
        },
        "::-webkit-scrollbar-track": {
          background: palette.paper.main,
        },
        "::-webkit-scrollbar-thumb": {
          background: alpha(palette.primary.main, 0.1),
          borderRadius: shape.borderRadius,
        },
        "::-webkit-scrollbar-thumb:hover": {
          background: alpha(palette.primary.main, 0.5),
        },
        "::-webkit-scrollbar-corner": {
          background: lighten(palette.paper.main, 0.2),
        },
      },
    },
    MuiTextField: {
      root: {
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderRadius: shape.borderRadius,
          },
        },
      },
    },

    // MuiButton: {
    //   styleOverrides: {
    //     // Name of the slot
    //     root: {
    //       // Some CSS
    //       fontSize: '1rem',
    //     },
    //   },
    // },
  };
};

export default overrides;
