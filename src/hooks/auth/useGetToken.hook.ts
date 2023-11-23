import { useState } from "react";
import authService from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { IAuthFormParams } from "../../types/types";
import axios from "axios";

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
        console.log(data.access_token);
        navigate("/main");
        localStorage.setItem("access_token", data.access_token);
      },
      onError(error) {
        if (axios.isAxiosError(error)) {
          console.log(error);
          setIsError(true);
        }
      },
    }),
    isError,
    setIsError,
  };
};
