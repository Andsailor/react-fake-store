import { useQuery } from "@tanstack/react-query";
import authService from "../../services/auth.service";

export const useGetUserByToken = () => {
  return useQuery({
    queryKey: ["get-user-by-token"],
    queryFn: () => {
      return authService.getUserByToken(localStorage.getItem("access_token"));
    },
    select({ data }) {
      return data;
    },
  });
};
