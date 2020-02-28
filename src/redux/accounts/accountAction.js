// import libraries
import { toast } from "react-toastify";

// import const
import { FETCH_LOGIN, FETCH_ACCOUNT_ID } from "./accountConst";
import { FETCH_LOADING } from "components/FabProgress/const";

// import services
import AccountService from "./accountService";
import { setLocalStorage } from "services/common";

// import models
import { StudentAccount, LectureAccount, NewPassword } from "./account";

/**
 * type = true => giảng viên
 * type = false => sinh viên
 *  */

// async action
export const signUp = (values, push, type) => {
  const { id, password, birth, role } = values;
  let accountModel = type
    ? new LectureAccount(id, password, role)
    : new StudentAccount(id, password, birth, role);
  return dispatch => {
    dispatch({
      type: FETCH_LOADING["REQUEST"]
    });
    AccountService.signUp(accountModel, type)
      .then(res => {
        dispatch({
          type: FETCH_LOADING["SUCCESS"]
        });
        dispatch({
          type: FETCH_ACCOUNT_ID,
          payload: res.data.id
        });
        setLocalStorage(type ? "lectureId" : "studentId", res.data.id);
        toast.success("Đăng ký thành công!");
        push("/verify");
      })
      .catch(err => {
        dispatch({
          type: FETCH_LOADING["FAILURE"]
        });
        if (err.response) {
          toast.error(err.response.data.message);
        }
      });
  };
};

export const login = (values, push, type) => {
  return dispatch => {
    dispatch({
      type: FETCH_LOADING["REQUEST"]
    });
    AccountService.login(values, type)
      .then(res => {
        const accountData = res.data;
        dispatch({
          type: FETCH_LOADING["SUCCESS"]
        });
        dispatch({
          type: FETCH_LOGIN,
          payload: { accountLogin: accountData }
        });
        setLocalStorage(type ? "lectureLogin" : "studentLogin", accountData);
        toast.success(
          `Chào mừng ${accountData.profile &&
            accountData.profile.lastName} đến với FEThub!`
        );
        push("/home");
      })
      .catch(err => {
        dispatch({
          type: FETCH_LOADING["FAILURE"]
        });
        if (err.response) {
          toast.error(err.response.data.message);
        }
      });
  };
};

export const resetPassword = (values, push) => {
  let newPassword = new NewPassword(values.id, values.password);
  return dispatch => {
    dispatch({
      type: FETCH_LOADING["REQUEST"]
    });
    AccountService.resetPassword(newPassword)
      .then(res => {
        dispatch({
          type: FETCH_LOADING["SUCCESS"]
        });
        toast.success("Bạn đã có thể đăng nhập bằng mật khẩu mới!");
        push("/");
      })
      .catch(err => {
        dispatch({
          type: FETCH_LOADING["FAILURE"]
        });
        if (err.response) {
          toast.error(err.response.data.message);
        }
      });
  };
};
