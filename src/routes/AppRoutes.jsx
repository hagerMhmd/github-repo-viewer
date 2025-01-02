import { lazy } from "react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "../common/components/Layout.jsx";

const LoginPage = lazy(() =>
  import("@/features/authentication/components/Login.jsx")
);
const ReposPage = lazy(() =>
  import("@/features/repositories/components/RepoPage.jsx")
);

const AppRoute = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginPage />} />
        <Route path="/repos" element={<ReposPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
export default AppRoute;
