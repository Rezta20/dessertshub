import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#5C3A2E", // 主要字色（深棕色）
    },
    secondary: {
      main: "#D78A76", // 焦糖色（用於次標題、按鈕等）
    },
    background: {
      default: "#FFFFFF", // 背景色（白色）
      paper: "#FFF1E1", // 卡片背景（淡焦糖色）
    },
    text: {
      primary: "#5C3A2E", // 深棕色字色
      secondary: "#D78A76", // 焦糖色字色
    },
  },
  typography: {
    fontFamily: `"Nunito", "Noto Sans TC", "sans-serif"`,
    h1: {
      fontSize: "2rem",
      fontWeight: 800,
      color: "#D78A76",
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 700,
      color: "#D78A76",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      color: "#5C3A2E",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#D78A76",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#C17D6D",
          },
          borderRadius: "8px",
          padding: "8px 16px",
          fontWeight: "bold",
        },
      },
    },
  },
});

export default theme;
