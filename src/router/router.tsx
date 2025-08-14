// MainRoute.tsx
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routesConfig from "../routeConfig";
import PublicRoute from "./publicRoutes";
import ProtectedRoute from "./protectedRoute";
import Spinner from "../components/spinner";

export const MainRoute: React.FC = () => {
  return (
    <Suspense fallback={<Spinner/>}>
      <BrowserRouter>
        <Routes>
          {routesConfig.map((route) => {
            const Wrapper = route.protected ? ProtectedRoute : PublicRoute;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Wrapper>{React.createElement(route.component)}</Wrapper>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
