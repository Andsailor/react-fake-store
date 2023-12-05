import { useQuery, keepPreviousData } from "@tanstack/react-query";
import productsService from "../../services/products.service";

export const useGetProducts = (category: string = "", product: string = "") => {
  const { getAllProducts } = productsService();
  return useQuery({
    queryKey: ["get-products", category, product],
    queryFn: () => {
      return getAllProducts(category, product);
    },
    select({ data }) {
      return data;
    },
    placeholderData: keepPreviousData,
  });
};
