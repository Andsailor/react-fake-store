import axios from "axios";
import {
  ISingleProduct,
  IGetProductsResponse,
  IGetAllCategoriesResponse,
} from "../types/types";
import { useAppSelector } from "../store/store";

const ProductsServise = () => {
  const filter = useAppSelector((store) => store.filter.filter);
  const filterSearchParam = useAppSelector(
    (store) => store.filter.filterSearchParam
  );
  const BASE_URL = "https://dummyjson.com/products";

  const GET_ALL_PRODUCTS_URL = `${BASE_URL}?limit=12`;
  const GET_ALL_CATEGORIES_URL = `${BASE_URL}/categories`;
  const GET_PRODUCT_BY_CATEGORY = `${BASE_URL}/category/`;
  const GET_SEARCH_PRODUCT_URL = `${BASE_URL}/search?q=`;

  const CURRENT_URL = filter
    ? GET_PRODUCT_BY_CATEGORY
    : filterSearchParam
    ? GET_SEARCH_PRODUCT_URL
    : GET_ALL_PRODUCTS_URL;

  const offsetQueryParam = CURRENT_URL === GET_ALL_PRODUCTS_URL ? "&skip=" : "";

  function getAllProducts(category = "", product = "", pagination = 0) {
    return axios.get<IGetProductsResponse>(
      `${CURRENT_URL}${category}${product}${offsetQueryParam}${
        offsetQueryParam && pagination
      }`
    );
  }

  function getAllCategories() {
    return axios.get<IGetAllCategoriesResponse>(GET_ALL_CATEGORIES_URL);
  }

  function getSingleProduct(id: number) {
    return axios.get<ISingleProduct>(`${BASE_URL}/${id}`);
  }

  return {
    getAllCategories,
    getAllProducts,
    getSingleProduct,
  };
};

export default ProductsServise;
