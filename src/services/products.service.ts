import axios from "axios";
import {
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

  const GET_ALL_PRODUCTS_URL = `${BASE_URL}?limit=100`;
  const GET_ALL_CATEGORIES_URL = `${BASE_URL}/categories`;
  const GET_PRODUCT_BY_CATEGORY = `${BASE_URL}/category/`;
  const GET_SEARCH_PRODUCT_URL = `${BASE_URL}/search?q=`;

  const CURRENT_URL = filter
    ? GET_PRODUCT_BY_CATEGORY
    : filterSearchParam
    ? GET_SEARCH_PRODUCT_URL
    : GET_ALL_PRODUCTS_URL;

  function getAllProducts(category = "", product = "") {
    return axios.get<IGetProductsResponse>(
      `${CURRENT_URL}${category}${product}`
    );
  }

  function getAllCategories() {
    return axios.get<IGetAllCategoriesResponse>(GET_ALL_CATEGORIES_URL);
  }

  return {
    getAllCategories,
    getAllProducts,
  };
};

export default ProductsServise;
