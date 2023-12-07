import { useQuery, keepPreviousData } from "@tanstack/react-query";
import productsService from "../../services/products.service";

export const useGetProducts = (
  category: string = "",
  product: string = "",
  pagination: number = 0
) => {
  const { getAllProducts } = productsService();
  return useQuery({
    queryKey: ["get-products", category, product, pagination],
    queryFn: () => {
      return getAllProducts(category, product, pagination);
    },
    select({ data }) {
      return data;
    },
    placeholderData: keepPreviousData,
  });
};
