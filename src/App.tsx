import "./app.scss";
import { useAppSelector } from "./store/store";
import { Route, Routes } from "react-router-dom";

import {
  AuthPage,
  WelcomePage,
  MainPage,
  SuccessPage,
  ProductsPage,
} from "./pages/pages";
import { ProductModal } from "./components/components";

function App() {
  const isModalVisible = useAppSelector((state) => state.modal.isModalVisible);
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
      {isModalVisible && <ProductModal />}
    </div>
  );
}

export default App;
