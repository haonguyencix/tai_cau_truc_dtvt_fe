import React from "react";
import { Switch, Route } from "react-router-dom";

import StudentLoginRoutes from "../screens/StudentLogin/routes";
import StudentHomeRoutes from "../screens/StudentHome/routes";
import LectureLoginRoutes from "../screens/LectureLogin/routes";
import ToDoListRoutes from "../screens/ToDoList/routes";

const ROUTES = [
  ...StudentLoginRoutes,
  ...StudentHomeRoutes,
  ...LectureLoginRoutes,
  ...ToDoListRoutes
];

function RouteCustom(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} routes={route.routes} />}
    />
  );
}

export function RenderRoutes({ routes }) {
  return (
    <Switch>
      {routes.map(route => {
        return <RouteCustom key={route.key} {...route} />;
      })}
      <Route component={() => <h1>Not Found!</h1>} />
    </Switch>
  );
}

export default ROUTES;
