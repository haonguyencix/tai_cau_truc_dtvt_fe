import React from "react";
import { Redirect } from "react-router-dom";
import { getLocalStorage } from "../services/common";

const conditions = {
  "student-home": getLocalStorage("studentLogin"), // bảo vệ trang chủ của sinh viên (khi có local là studentLogin mới route được)
  "student-login": !getLocalStorage("studentLogin"), // bảo vệ trang đăng nhập của sinh viên...
  "verify": !getLocalStorage("studentLogin") && getLocalStorage("studentId"), // bảo vệ trang xác thực otp của sinh viên...
  "reset-password": getLocalStorage("token") && getLocalStorage("studentId"), // bảo vệ trang reset password...
  "lecture-login": !getLocalStorage("lectureLogin") // bảo vệ trang đăng nhập của giảng viên...
};

export const authGuardWithWrapper = ComponentProps => {
  return props => {
    if (conditions[ComponentProps.authen]) {
      return (
        <ComponentProps.layout>
          <ComponentProps.screen {...props} />
        </ComponentProps.layout>
      );
    }
    return <Redirect to={ComponentProps.redirect} />;
  };
};
