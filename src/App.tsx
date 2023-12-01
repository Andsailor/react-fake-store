import "./app.scss";
import { Route, Routes } from "react-router-dom";

import {
  AuthPage,
  WelcomePage,
  MainPage,
  SuccessPage,
  ProductsPage,
} from "./pages/pages";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/registration" element={<AuthPage />} />
        <Route path="/main" element={<MainPage />}>
          <Route path="products" element={<ProductsPage />} />
        </Route>
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </div>
  );
}

export default App;
