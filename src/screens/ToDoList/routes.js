import { authGuardWithWrapper } from "../../auth/guard";
import TasksLayout from "./index";
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
