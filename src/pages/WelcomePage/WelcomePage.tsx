import { useNavigate } from "react-router-dom";
import "./welcomePage.scss";
import logo from "../../assets/logo.png";

export function WelcomePage() {
  const navigate = useNavigate();
  return (
    <div className="welcome">
      <img src={logo} alt="main store logo" className="welcome-logo" />
      <h1 className="welcome-title">
        Welcome to <span>EZSHOP</span>
      </h1>
      <h2 className="welcome-subtitle">
        Better Things | <span>Lower Price</span>
      </h2>
      <div className="welcome-buttons">
        <button
          className="welcome-buttons_login"
          onClick={() => navigate("/login")}
        >
          Sign in
        </button>
        <button
          className="welcome-buttons_registration"
          onClick={() => navigate("/registration")}
        >
          Become a member
        </button>
      </div>
    </div>
  );
}
