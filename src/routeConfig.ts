// routeConfig.ts
import React from "react";
import {
  // LOGIN,
  SPORTSFIELDS,
  EVENTS,
  BOOKINGS,
  NEWSPORTSFIELDS,
  UPDATESPORTSFIELDS,
  PUBLICDASHBOARD,
} from "./util/constants/routeConstant.ts";

const routesConfig = [
  // {
  //   path: LOGIN,
  //   component: React.lazy(() => import("./pages/login.tsx")),
  //   protected: false,
  // },
  {
    path: PUBLICDASHBOARD,
    component: React.lazy(() => import("./pages/sportsField/publicVenueDetail.tsx")),
    protected: false,
  },
  {
    path: SPORTSFIELDS,
    component: React.lazy(() => import("./pages/sportsField/index.tsx")),
    protected: true,
  },
  {
    path: NEWSPORTSFIELDS,
    component: React.lazy(() => import("./pages/sportsField/form.tsx")),
    protected: true,
  },
  {
    path: `${UPDATESPORTSFIELDS}/:id`,
    component: React.lazy(() => import("./pages/sportsField/form.tsx")),
    protected: true,
  }
];

export default routesConfig;
