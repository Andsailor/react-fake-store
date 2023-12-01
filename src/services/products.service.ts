import axios from "axios";
import {
  IGetProductsResponse,
  IGetAllCategoriesResponse,
} from "../types/types";

class ProductsServise {
  private ALL_PRODUCTS_URL = "https://api.escuelajs.co/api/v1/products";
  private ALL_CATEGORIES_URL = "https://api.escuelajs.co/api/v1/categories";

  getAllProducts(offset: number) {
    return axios.get<IGetProductsResponse[]>(
      `${this.ALL_PRODUCTS_URL}?offset=${offset}&limit=12`
    );
  }

  getAllCategories() {
    return axios.get<IGetAllCategoriesResponse[]>(this.ALL_CATEGORIES_URL);
  }
}

export default new ProductsServise();
