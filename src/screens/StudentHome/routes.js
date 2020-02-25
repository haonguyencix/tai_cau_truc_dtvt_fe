import { authGuardWithWrapper } from "../../_core/auth/guard";

// layout
import StudentHome from "../../layouts/StudentHome";

// screens
import HomeScreen from "./HomeScreen";

const StudentHomeRoutes = [
  {
    path: "/home",
    key: "HOME",
    exact: true,
    component: authGuardWithWrapper({
      authen: "student-home",
      layout: StudentHome,
      screen: HomeScreen,
      redirect: "/"
    })
  }
];

export default StudentHomeRoutes;
