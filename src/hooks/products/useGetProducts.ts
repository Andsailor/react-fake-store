import { useQuery } from "@tanstack/react-query";
import productsService from "../../services/products.service";

export const useGetProducts = (offset: number = 0) => {
  return useQuery({
    queryKey: ["get-products"],
    queryFn: () => {
      return productsService.getAllProducts(offset);
    },
    select({ data }) {
      return data;
    },
  });
};
