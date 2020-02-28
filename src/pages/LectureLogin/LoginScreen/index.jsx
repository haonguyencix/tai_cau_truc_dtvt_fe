import React from "react";
import styles from "./styles.module.scss";

// import libraries
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

// import Material UI
import { TextField, Button } from "@material-ui/core";
import { PersonAdd } from "@material-ui/icons";

// import components
import InputPassword from "components/InputPassword";
import FabProgress from "components/FabProgress";

// import action
import { login } from "redux/accounts/accountAction";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Title}>
        <h2>Đăng nhập FEThub</h2>
        <span>(Giảng viên)</span>
      </div>
      <div className={styles.FormWrapper}>
        <FabProgress
          className={styles.FabProgress}
          slug="/"
          icon={PersonAdd}
          title="Trở về trang chủ"
        />
        <Formik
          initialValues={{
            id: "",
            password: ""
          }}
          onSubmit={values => {
            console.log("TCL: Login -> values", values);
            dispatch(login(values, history.push, true));
          }}
        >
          {({ handleChange }) => {
            return (
              <Form className={styles.Form}>
                <TextField
                  label="Mã số giảng viên"
                  variant="outlined"
                  type="text"
                  name="id"
                  onChange={handleChange}
                  autoComplete="username"
                  margin="normal"
                  className={styles.TextField}
                  helperText={
                    <Link to="/lecture-signup">Chưa có tài khoản?</Link>
                  }
                  fullWidth
                  required
                />
                <InputPassword
                  id="signInPassword"
                  handleChange={handleChange}
                  fullWidth={true}
                  className={styles.TextField}
                />
                <Button
                  className={styles.Submit}
                  type="submit"
                  variant="outlined"
                  fullWidth
                >
                  Đăng nhập
                </Button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
