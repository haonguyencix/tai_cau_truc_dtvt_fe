import { authGuardWithWrapper } from "../../auth/guard";
import LectureLogin from "./index";
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
