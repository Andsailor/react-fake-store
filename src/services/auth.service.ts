import axios from "axios";
import type {
  IAuthFormParams,
  IGetTokenResponse,
  IGetUserByTokenResponse,
} from "../types/types";

class AuthService {
  private REG_URL = "https://api.escuelajs.co/api/v1/users/";
  private TOKEN_URL = "https://api.escuelajs.co/api/v1/auth/login";
  private LOG_URL = "https://api.escuelajs.co/api/v1/auth/profile";

  createUser(params: IAuthFormParams) {
    return axios.post(this.REG_URL, params);
  }

  getAuthToken(params: IAuthFormParams) {
    return axios.post<IGetTokenResponse>(this.TOKEN_URL, params);
  }

  getUserByToken(token: string | null) {
    return axios.get<IGetUserByTokenResponse>(this.LOG_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export default new AuthService();
