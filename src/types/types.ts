export interface IAuthFormParams {
  name?: string;
  email: string;
  password: string;
  avatar?: string;
}

export interface IGetTokenResponse {
  access_token: string;
  refresh_token: string;
}

export interface IGetUserByTokenResponse {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
  creationAt: string;
  updatedAt: string;
}
