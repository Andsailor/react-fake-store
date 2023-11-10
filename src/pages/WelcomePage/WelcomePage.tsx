import { useNavigate } from "react-router-dom";

export function WelcomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Welcome to Fake Store</h1>
      <button onClick={() => navigate("/login")}>Login</button>
    </div>
  );
}
