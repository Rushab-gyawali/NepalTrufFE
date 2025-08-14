import React, { Suspense } from "react";
import Header from "../components/header";
import { PUBLICDASHBOARD, SPORTSFIELDS } from "../util/constants/routeConstant";
import { Navigate } from "react-router-dom";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to={PUBLICDASHBOARD} replace />;
  }

  return (
    <>
      <Header menuItems={[{ label: "SportsField", path: SPORTSFIELDS }]} />
      {children}
    </>
  );
};

export default ProtectedRoute;
