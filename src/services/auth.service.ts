import axios from "axios";
import type { IAuthFormParams } from "../types/types";

class AuthService {
  private REG_URL = "https://api.escuelajs.co/api/v1/users/";
  private LOG_URL = "https://api.escuelajs.co/api/v1/auth/login";

  createUser(params: IAuthFormParams) {
    axios.post(this.REG_URL, params).then((r) => console.log(r));
  }

  verifyUser(params: IAuthFormParams) {
    axios.post(this.LOG_URL, params).then((r) => console.log(r));
  }
}

export default new AuthService();
