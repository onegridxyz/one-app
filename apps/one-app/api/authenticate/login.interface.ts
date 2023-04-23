export interface LoginRequest {
  username: string;
  password: string;
  rememberMe?: string;
}

export interface LoginResponse {
  id_token: string;
}
