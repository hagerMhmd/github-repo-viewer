import "./App.css";
import AlertProvider from "./common/components/AlertProvider.jsx";
import AppRoute from "./routes/AppRoutes.jsx";

function App() {
  return (
    <>
      <AlertProvider>
        <AppRoute />
      </AlertProvider>
    </>
  );
}

export default App;
