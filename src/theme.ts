import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#ff8a00", contrastText: "#ffffff" },
    background: { default: "#f7f8fb", paper: "#ffffff" },
    text: { primary: "#111827", secondary: "#667085" },
  },
  shape: { borderRadius: 18 },
  typography: {
    fontFamily: 'Inter, Roboto, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
});

export default theme;
