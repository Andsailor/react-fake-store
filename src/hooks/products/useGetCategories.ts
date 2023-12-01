import { useQuery } from "@tanstack/react-query";
import productsService from "../../services/products.service";

export const useGetCategories = () => {
  return useQuery({
    queryKey: ["get-all-categories"],
    queryFn: () => {
      return productsService.getAllCategories();
    },
    select({ data }) {
      return data;
    },
  });
};
