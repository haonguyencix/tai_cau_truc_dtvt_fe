import { authGuardWithWrapper } from "../../_core/auth/guard";

// layout
import LectureLogin from "../../layouts/LectureLogin";

// screens
import LoginScreen from "./LoginScreen";

const LectureLoginRoutes = [
  {
    path: "/lecture",
    key: "LECTURE",
    exact: true,
    component: authGuardWithWrapper({
      authen: "lecture-login",
      layout: LectureLogin,
      screen: LoginScreen,
      redirect: "/home"
    })
  }
];

export default LectureLoginRoutes;
