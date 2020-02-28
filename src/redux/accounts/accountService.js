import { restConnector } from "services/axios";

class AccountService {
  signUp(account, type) {
    return restConnector({
      url: `accounts/${type ? "lecture" : "student"}`,
      method: "POST",
      data: account
    });
  }

  login(account, type) {
    return restConnector({
      url: `accounts/${type ? "lecture" : "student"}/login`,
      method: "POST",
      data: account
    });
  }

  resetPassword(newPassword) {
    return restConnector({
      url: "accounts/password/reset",
      method: "POST",
      data: newPassword
    });
  }
}

export default new AccountService();
