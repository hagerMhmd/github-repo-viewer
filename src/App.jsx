import { ThemeProvider } from "@emotion/react";
import "./App.css";
import AlertProvider from "./common/components/AlertProvider.jsx";
import theme from "./common/style/theme.js";
import { store } from "./redux/store.js";
import AppRoute from "./routes/AppRoutes.jsx";
import { Provider as ReduxProvider } from "react-redux";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ReduxProvider store={store}>
          <AlertProvider>
            <AppRoute />
          </AlertProvider>
        </ReduxProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
