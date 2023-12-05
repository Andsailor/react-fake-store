import { Link, useLocation, useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { useGetToken } from "../../../hooks/auth/useGetToken.hook";
import { useFormik } from "formik";
import { useCreateUser } from "../../../hooks/auth/useCreateUser";
import * as Yup from "yup";

import { Spinner } from "../../../components/components";

import "./authForm.scss";
import { useEffect } from "react";

export function AuthForm() {
  const { createUser } = useCreateUser();
  const { getToken, isError, setIsError } = useGetToken();
  const location = useLocation();
  const navigate = useNavigate();
  const currentLocation = location.pathname.slice(1);

  useEffect(() => {
    window.localStorage.getItem("access_token") && navigate("/main/products");
  });

  const formCustomizationParams = {
    path: currentLocation === "login" ? "/registration" : "/login",
    question:
      currentLocation === "login" ? "New member?" : "Already have an account?",
    text: currentLocation === "login" ? "Registration" : "Sign in",
    submitButtonText:
      currentLocation === "registration" ? "Create account" : "Sign in",
  };
  const validationErrorMessage =
    getToken.error instanceof AxiosError &&
    getToken.error.response &&
    getToken.error.response.data.message;

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
      if (currentLocation === "registration") {
        createUser.mutate(values);
      } else {
        getToken.mutate(values);
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="form">
        {currentLocation === "registration" && (
          <div className="form-group">
            <label htmlFor="name">Name*</label>
            <input
              className={formik.errors.name && "validation"}
              value={formik.values.name}
              onChange={formik.handleChange}
              type="text"
              name="name"
            />
            <div className="form-group-error">
              {" "}
              {formik.errors.name && (
                <div className="form-group-error-circle"></div>
              )}
              {formik.errors.name}
            </div>
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email*</label>
          <input
            className={formik.errors.email || isError ? "validation" : ""}
            value={formik.values.email}
            onChange={formik.handleChange}
            type="email"
            name="email"
          />
          <div className="form-group-error">
            {formik.errors.email && (
              <div className="form-group-error-circle"></div>
            )}
            {formik.errors.email}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="">Password*</label>
          <input
            className={formik.errors.password || isError ? "validation" : ""}
            value={formik.values.password}
            onChange={formik.handleChange}
            type="password"
            name="password"
          />
          <div className="form-group-error">
            {formik.errors.password && (
              <div className="form-group-error-circle"></div>
            )}
            {formik.errors.password}
          </div>
        </div>
        {currentLocation === "registration" && (
          <div className="form-group">
            <label htmlFor="">Avatar (optional)</label>
            <input
              onChange={formik.handleChange}
              placeholder="Enter image URL"
              className={formik.errors.avatar || isError ? "validation" : ""}
              type="url"
              name="avatar"
            />
          </div>
        )}
        {isError && (
          <div className="form-error">
            {validationErrorMessage === "Unauthorized"
              ? "Wrong login or password"
              : validationErrorMessage}
          </div>
        )}
        <div className="form-buttons">
          <button
            disabled={getToken.isPending}
            type="submit"
            className="form-buttons_button"
          >
            {getToken.isPending || createUser.isPending ? (
              <Spinner />
            ) : (
              formCustomizationParams.submitButtonText
            )}
          </button>
          <button onClick={() => navigate("/")} className="form-buttons_button">
            Back
          </button>
        </div>

        <div className="form-registration">
          {formCustomizationParams.question}{" "}
          <Link
            onClick={() => {
              formik.values.email = "";
              formik.values.name = "";
              formik.values.password = "";
              setIsError(false);
            }}
            to={formCustomizationParams.path}
          >
            {formCustomizationParams.text}
          </Link>
        </div>
      </form>
    </>
  );
}
