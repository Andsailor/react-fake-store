import { useNavigate } from "react-router-dom";

import mainLogo from "../../assets/logo.png";
import "./successPage.scss";

export function SuccessPage() {
  const navigate = useNavigate();
  return (
    <div className="success">
      <img className="success-img" src={mainLogo} alt="main store logo" />
      <h1>
        You have successfuly created account! <br /> Welcome to{" "}
        <span>EZSHOP</span>!
      </h1>
      <button onClick={() => navigate("/login")} className="success-button">
        Sign in
      </button>
    </div>
  );
}
