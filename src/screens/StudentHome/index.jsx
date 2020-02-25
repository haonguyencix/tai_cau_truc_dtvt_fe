import React, { useEffect } from "react";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { getLocalStorage, sendAccessToken } from "../../services/common";

// import const
import { FETCH_LOGIN } from "../../components/accounts/accountConst";

// import components
import Header from "./Header";
import Navbar from "./Navbar";
// import Footer from "./Footer";
import Classrooms from "./Classrooms";

// import Material UI
import { Container } from "@material-ui/core";

const StudentHome = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    const studentSignIn = getLocalStorage("studentLogin");

    if (studentSignIn) {
      dispatch({
        type: FETCH_LOGIN,
        payload: { studentSignIn }
      });
      sendAccessToken(studentSignIn.token);
    }
  }, [dispatch]);

  return (
    <React.Fragment>
      <Header />
      <Container>
        <div className={styles.Wrapper}>
          <div className={styles.Navbar}>
            <Navbar />
          </div>
          <div className={styles.Children}>{props.children}</div>
          <div className={styles.Classrooms}>
            <Classrooms />
          </div>
        </div>
      </Container>
      {/* <Footer /> */}
    </React.Fragment>
  );
};

export default StudentHome;
