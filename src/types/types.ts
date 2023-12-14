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

export interface ISingleProduct {
  id: number | string;
  title: string;
  description: string;
  price: number;
  rating: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface IGetProductsResponse {
  products: ISingleProduct[];
  total: number;
}

export type IGetAllCategoriesResponse = string[];
