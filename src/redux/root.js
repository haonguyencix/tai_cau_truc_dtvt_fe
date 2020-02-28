import { combineReducers } from "redux";
import LoadingReducer from "../components/FabProgress/reducer";
import AccountReducer from "./accounts/accountReducer";
import OtpReducer from "./otp/otpReducer";

const rootReducer = combineReducers({
  isLoading: LoadingReducer,
  accountData: AccountReducer,
  otpData: OtpReducer
});

export default rootReducer;
