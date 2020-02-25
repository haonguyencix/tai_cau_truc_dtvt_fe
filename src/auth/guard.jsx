import React from "react";
import { Redirect } from "react-router-dom";
import { getLocalStorage } from "../services/common";

const checkAuthen = authen => {
  if (authen === "student-home") {
    return getLocalStorage("studentLogin");
  } else if (authen === "student-login") {
    return !getLocalStorage("studentLogin");
  } else if (authen === "verify") {
    return !getLocalStorage("studentLogin") && getLocalStorage("studentId");
  } else if (authen === "reset-pasword") {
    return getLocalStorage("token") && getLocalStorage("studentId");
  } else if (authen === "lecture-login") {
    return !getLocalStorage("lectureLogin");
  }
};

export const authGuardWithWrapper = ComponentProps => {

  return props => {
    if (checkAuthen(ComponentProps.authen)) {
      return (
        <ComponentProps.layout>
          <ComponentProps.screen {...props} />
        </ComponentProps.layout>
      );
    }
    return <Redirect to={ComponentProps.redirect} />;
  };
};
