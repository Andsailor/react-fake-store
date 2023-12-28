import { useQuery } from "@tanstack/react-query";
import productsService from "../../services/products.service";

export const useGetCategories = () => {
  const { getAllCategories } = productsService();
  return useQuery({
    queryKey: ["get-all-categories"],
    queryFn: () => {
      return getAllCategories();
    },

    select({ data }) {
      return data;
    },
  });
};
