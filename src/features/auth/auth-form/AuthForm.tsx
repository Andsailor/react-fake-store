import { useEffect } from "react";
import { useFormConfig } from "../../../utils/utils";
import { AxiosError } from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Spinner } from "../../../components/components";

import "./authForm.scss";

export function AuthForm() {
  const { formik, isError, setIsError, getToken, createUser } = useFormConfig();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.localStorage.getItem("access_token") && navigate("/main/products");
  });

  const currentLocation = location.pathname.slice(1);

  const formCustomizationParams = {
    path: currentLocation === "login" ? "/registration" : "/login",
    question:
      currentLocation === "login" ? "New member?" : "Already have an account?",
    text: currentLocation === "login" ? "Registration" : "Sign in",
    submitButtonText:
      currentLocation === "registration" ? "Create account" : "Sign in",
    validationErrorMessage:
      getToken.error instanceof AxiosError &&
      getToken.error.response &&
      getToken.error.response.data.message,
  };

  function resetFormFields() {
    formik.values.email = "";
    formik.values.name = "";
    formik.values.password = "";
    setIsError(false);
  }

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
            {formCustomizationParams.validationErrorMessage === "Unauthorized"
              ? "Wrong login or password"
              : formCustomizationParams.validationErrorMessage}
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
          <Link onClick={resetFormFields} to={formCustomizationParams.path}>
            {formCustomizationParams.text}
          </Link>
        </div>
      </form>
    </>
  );
}
