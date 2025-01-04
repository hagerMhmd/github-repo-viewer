import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

import Loading from "../common/components/Loading.jsx";
import NotFound from "../common/components/NotFound.jsx";
const Layout = lazy(() => import("@/common/components/Layout.jsx"));
const LoginPage = lazy(() =>
  import("@/features/authentication/components/Login.jsx")
);
const ReposPage = lazy(() =>
  import("@/features/repositories/components/RepoPage.jsx")
);
const SuspenseFun = ({ children }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = Cookies.get("accessToken");
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

const AppRoute = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <ProtectedRoute>
              <SuspenseFun>
                <ReposPage />
              </SuspenseFun>
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <SuspenseFun>
              <LoginPage />
            </SuspenseFun>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

const ChildrenPropType = PropTypes.node.isRequired;

SuspenseFun.propTypes = {
  children: ChildrenPropType,
};

ProtectedRoute.propTypes = {
  children: ChildrenPropType,
};
export default AppRoute;
