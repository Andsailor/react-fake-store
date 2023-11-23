import { useMutation } from "@tanstack/react-query";
import authService from "../../services/auth.service";
import { IAuthFormParams } from "../../types/types";
import { useNavigate } from "react-router-dom";

export const useCreateUser = () => {
  const navigate = useNavigate();
  return {
    createUser: useMutation({
      mutationKey: ["create-user"],
      mutationFn: (params: IAuthFormParams) => {
        return authService.createUser(params);
      },
      onSuccess() {
        navigate("/success");
      },
    }),
  };
};
