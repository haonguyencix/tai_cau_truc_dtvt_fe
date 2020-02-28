import { authGuardWithWrapper } from "auth/guard";

// layout
import TasksLayout from "layouts/ToDoList";

// screens
import TasksScreen from "./TasksScreen";

const ToDoListRoutes = [
  {
    path: "/tasks",
    key: "TASKS",
    exact: true,
    component: authGuardWithWrapper({
      authen: "home",
      layout: TasksLayout,
      screen: TasksScreen,
      redirect: "/home"
    })
  }
];

export default ToDoListRoutes;
