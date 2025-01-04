import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2b3137",
    },
    secondary: {
      main: "#2dba4e",
    },
  },
  theme_palette: {
    primary: "#2b3137",
    secondary: "#2dba4e",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
