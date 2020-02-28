import { restConnector } from "services/axios";

class ClassroomService {
  studentSignUp(student) {
    return restConnector({
      url: 'Accounts/Student',
      method: "POST",
      data: student
    });
  }
}

export default new ClassroomService();