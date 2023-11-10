import { FormEvent, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import authService from "../../../services/auth.service";
import "./authForm.scss";

// TODO :
// 1. Refactoring component.
// 2. Styling form.
// 3. Route changing and error handling.
// 4. Form validation.

export function AuthForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentLocation = location.pathname.slice(1);
  const submitButtonText = currentLocation === "registration" ? "Create account" : "Login";

  const formChangeLinkParams = {
    path: currentLocation === "login" ? "/registration" : "/login",
    question: currentLocation === "login" ? "New member?" : "Already have an account?",
    text: currentLocation === "login" ? "Registration" : "Sign in",
  };

  const [formParams, setFormParams] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "https://variety.com/wp-content/uploads/2021/04/Avatar.jpg",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (currentLocation === "registration") {
      authService.createUser(formParams);
    } else {
      authService.verifyUser(formParams);
    }
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormParams((formParams) => ({ ...formParams, [name]: value }));
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="form">
        {currentLocation === "registration" && (
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input onChange={(e) => handleInputChange(e)} type="text" name="name" />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input onChange={(e) => handleInputChange(e)} type="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input onChange={(e) => handleInputChange(e)} type="password" name="password" />
        </div>
        <div className="form-buttons">
          <button type="submit" className="form-buttons_button">
            {submitButtonText}
          </button>
          <button onClick={() => navigate("/")} className="form-buttons_button">
            Back
          </button>
        </div>

        <div className="form-registration">
          {formChangeLinkParams.question} <Link to={formChangeLinkParams.path}>{formChangeLinkParams.text}</Link>
        </div>
      </form>
    </>
  );
}
