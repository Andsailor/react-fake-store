import { useFormik } from "formik";
import { useCreateUser } from "../../hooks/auth/useCreateUser";
import { useGetToken } from "../../hooks/auth/useGetToken.hook";
import * as Yup from "yup";

export const useFormConfig = () => {
  const { createUser } = useCreateUser();
  const { getToken, isError, setIsError } = useGetToken();

  const formik = useFormik({
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .max(15, "Max 15 characters")
        .min(3, "Min 3 characters"),
      email: Yup.string()
        .email("Invalid email adress")
        .required("This field is required"),
      password: Yup.string()
        .min(4, "Min 4 characters")
        .required("Password is required"),
      avatar: Yup.string(),
    }),
    initialValues: {
      name: "",
      email: "",
      password: "",
      avatar:
        "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg",
    },
    onSubmit: (values) => {
      if (location.pathname.slice(1) === "registration") {
        createUser.mutate(values);
      } else {
        getToken.mutate(values);
      }
    },
  });

  return { formik, isError, setIsError, getToken, createUser };
};
