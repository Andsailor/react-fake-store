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

export interface IGetProductsResponse {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: string[];
}

export interface IGetAllCategoriesResponse {
  id: number;
  name: string;
}
