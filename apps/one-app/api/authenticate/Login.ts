import { environment } from "../../environments/environment";

import axios from "axios";

export interface LoginRequest {
  username: string;
  password: string;
  rememberMe?: string;
}

export interface LoginResponse {
  id_token: string;
}

export const postAuthenticate = (loginRequest: LoginRequest) => {
  const baseUrl = environment.gatewayUrl
  const requestUrl = `${baseUrl}/api/authenticate`;
  return axios.post<LoginResponse>(requestUrl, {
    username: loginRequest.username,
    password: loginRequest.password
  });
}
