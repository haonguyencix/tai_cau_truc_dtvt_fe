import { authGuardWithWrapper } from "../../auth/guard";

// layout
import StudentLogin from "../../layouts/StudentLogin";

// screens
import VerifyScreen from "./VerifyScreen";
import SignUpScreen from "./SignUpScreen";
import IntroScreen from "./IntroScreen";
import ForgotPassScreen from "./ForgotPassScreen";
import ResetPassScreen from "./ResetPassScreen";

const StudentLoginRoutes = [
  {
    path: "/",
    key: "student-login",
    exact: true,
    component: authGuardWithWrapper({
      authen: "student-login",
      layout: StudentLogin,
      screen: IntroScreen,
      redirect: "/home"
    })
  },
  {
    path: "/verify",
    key: "VERIFY",
    exact: true,
    component: authGuardWithWrapper({
      authen: "verify",
      layout: StudentLogin,
      screen: VerifyScreen,
      redirect: "/home"
    })
  },
  {
    path: "/student-signup",
    key: "STUDENT_SIGNUP",
    exact: true,
    component: authGuardWithWrapper({
      authen: "student-login",
      layout: StudentLogin,
      screen: SignUpScreen,
      redirect: "/home"
    })
  },
  {
    path: "/forgot-password",
    key: "FORGOT_PASSWORD",
    exact: true,
    component: authGuardWithWrapper({
      authen: "student-login",
      layout: StudentLogin,
      screen: ForgotPassScreen,
      redirect: "/home"
    })
  },
  {
    path: "/reset-password",
    key: "RESET_PASSWORD",
    exact: true,
    component: authGuardWithWrapper({
      authen: "reset-pasword",
      layout: StudentLogin,
      screen: ResetPassScreen,
      redirect: "/home"
    })
  }
];

export default StudentLoginRoutes;
