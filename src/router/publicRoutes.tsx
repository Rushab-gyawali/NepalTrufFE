import React, { Suspense } from "react";
import Dashboard from "../components/dashboard/dashboard";

const publicRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return(
    <Suspense fallback={<div>Loading...</div>}>
      <Dashboard>{children}</Dashboard>
    </Suspense>
  );
};

export default publicRoute;
