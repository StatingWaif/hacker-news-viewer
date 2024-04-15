import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlePage from "./pages/ArticlePage";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "./themes";
import { SwitchToggle } from "./components/SwitchToggle";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "./store/actions";
import { RootState } from "./store/store";

const App = () => {
  const isDarkMode = useSelector((state: RootState) => state.isDarkMode);
  const dispatch = useDispatch();

  const toggleDarkModeHandler = () => {
    dispatch(toggleDarkMode());
  };
  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <ThemeProvider theme={theme}>
      <SwitchToggle
        checked={isDarkMode}
        onChange={toggleDarkModeHandler}
        sx={{ margin: "1rem" }}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </ThemeProvider>
  );
};
export default App;
