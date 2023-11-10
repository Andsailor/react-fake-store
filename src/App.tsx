import "./app.scss";
import { Route, Routes } from "react-router-dom";

import { AuthPage, WelcomePage } from "./pages/pages";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/registration" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
