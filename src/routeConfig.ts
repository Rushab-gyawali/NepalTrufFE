import React, { Component } from "react";
import "./router/router.tsx"
import {
  LOGIN,
  SPORTSFIELDS,
  EVENTS,
  BOOKINGS,
  NEWSPORTSFIELDS,
} from "./util/constants/routeConstant.ts";
import path from "path";

const routesConfig = {
  publicRoutes: [
    {
      path: LOGIN,
      component: React.lazy(
        () => import("./pages/login.tsx")
      ),
      protected: false,
    }
  ],
  protectedRoutes: [
    {
      path: SPORTSFIELDS,
      component: React.lazy(
        () => import("./pages/sportsField/index.tsx")
      ),
      protected: false
    },
    {
      path: NEWSPORTSFIELDS,
      component: React.lazy(
        () => import("./pages/sportsField/form.tsx")
      ),
      protected: true
    }
  ],
};

export default routesConfig;
