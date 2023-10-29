import "@mui/material/styles/createPalette";
declare module "@mui/material/styles/createPalette" {
  interface Palette {
    appBar: { main: string; contrastText: string };
    gray: { main: string; contrastText: string; light: string };
    paper: { main: string; contrastText: string };
    neutral: { main: string; contrastText: string };
  }
  interface PaletteOptions {
    appBar?: { main: string; contrastText: string };
    gray?: { main: string; contrastText: string; light: string };
    paper?: { main: string; contrastText: string };
    neutral?: { main: string; contrastText: string };
  }
}
