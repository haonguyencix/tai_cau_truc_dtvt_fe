import React from "react";
import { Switch, Route } from "react-router-dom";

// import routes
import StudentLogin from "./StudentLogin";
import StudentHome from "./StudentHome";
import LectureLogin from "./LectureLogin";
import ToDoList from "./ToDoList";

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
