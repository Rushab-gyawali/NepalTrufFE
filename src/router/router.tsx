import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./protectedRoute";

import routesConfig from "../routeConfig";

export const MainRoute: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          {routesConfig.publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element= {React.createElement(route.component)}
            />
          ))}

          {/* Protected routes */}
          {routesConfig.protectedRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <ProtectedRoute>
                  {React.createElement(route.component)}
                </ProtectedRoute>
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};
