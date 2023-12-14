import { useQuery } from "@tanstack/react-query";
import ProductsServise from "../../services/products.service";

export const useGetSingleProduct = (id: number) => {
  const { getSingleProduct } = ProductsServise();
  return useQuery({
    queryKey: ["get-single-product", id],
    queryFn: () => {
      return getSingleProduct(id);
    },
    select({ data }) {
      return data;
    },
  });
};
