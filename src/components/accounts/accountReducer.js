// import const
import { FETCH_LOGIN, FETCH_ACCOUNT_ID } from "./accountConst";

// import services
import { getLocalStorage } from "../../services/common";

let initialState = {
  accountLogin: null,
  accountId: getLocalStorage("studentId")
    ? getLocalStorage("studentId")
    : getLocalStorage("lectureId")
};

const AccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGIN: {
      return {
        ...state,
        accountLogin: action.payload.accountLogin
      };
    }

    case FETCH_ACCOUNT_ID: {
      return {
        ...state,
        accountId: action.payload
      };
    }

    default:
      return state;
  }
};

export default AccountReducer;
