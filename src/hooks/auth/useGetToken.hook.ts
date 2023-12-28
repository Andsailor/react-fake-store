import axios from "axios";
import authService from "../../services/auth.service";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import type { IAuthFormParams } from "../../types/types";

export const useGetToken = () => {
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  return {
    getToken: useMutation({
      mutationKey: ["get-token"],
      mutationFn: (params: IAuthFormParams) => {
        return authService.getAuthToken(params);
      },
      onSuccess({ data }) {
        navigate("/main/products");
        localStorage.setItem("access_token", data.access_token);
      },
      onError(error) {
        if (axios.isAxiosError(error)) {
          setIsError(true);
        }
      },
    }),
    isError,
    setIsError,
  };
};
