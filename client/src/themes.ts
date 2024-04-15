import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#3f51b5",
    },
    background: {
      default: "#fafafa",
    },
  },
});
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
    background: {
      default: "#303030",
    },
  },
});
