// routes/publicRoutes.tsx
import React from "react";
import Header from "../components/header";
import { SPORTSFIELDS } from "../util/constants/routeConstant";

const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <>
      <Header menuItems={[{ label: "About-us", path: SPORTSFIELDS }]} />
      <main>{children}</main>
    </>
  );
};

export default PublicRoute;
