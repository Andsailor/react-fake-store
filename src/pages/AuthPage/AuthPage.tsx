import { AuthForm } from "../../features/features";

import shopLogo from "../../assets/logo.png";

import "./authPage.scss";

export function AuthPage() {
  return (
    <div className="auth">
      <img className="auth-logo" src={shopLogo} alt="main shop logo" />
      <AuthForm />
    </div>
  );
}
