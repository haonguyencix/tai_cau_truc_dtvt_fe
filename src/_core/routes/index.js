import React from "react";
import { Switch, Route } from "react-router-dom";

// import routes
import StudentLogin from "../../screens/StudentLogin/routes";
import StudentHome from "../../screens/StudentHome/routes";
import LectureLogin from "../../screens/LectureLogin/routes";
import ToDoList from "../../screens/ToDoList/routes";

const ROUTES = [...StudentLogin, ...StudentHome, ...LectureLogin, ...ToDoList];

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
