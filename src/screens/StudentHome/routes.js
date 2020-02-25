import { authGuardWithWrapper } from "../../auth/guard";
import StudentHome from "./index";
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
