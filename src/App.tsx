import "./app.scss";
import { Route, Routes } from "react-router-dom";

import { AuthPage, WelcomePage, MainPage, SuccessPage } from "./pages/pages";
import { Footer } from "./components/components";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/registration" element={<AuthPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
