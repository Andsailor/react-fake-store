import { useAppSelector } from "./store/store";
import { Route, Routes } from "react-router-dom";

import {
  AuthPage,
  WelcomePage,
  MainPage,
  SuccessPage,
  ProductsPage,
} from "./pages/pages";
import {
  ErrorPage,
  ProductModal,
  UserCartModal,
} from "./components/components";

import "./app.scss";

function App() {
  const isModalVisible = useAppSelector((state) => state.modal.isModalVisible);
  const isCartVisible = useAppSelector((state) => state.cart.isCartVisible);
  return (
    <div className="app">
      <Routes>
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/registration" element={<AuthPage />} />
        <Route path="/main" element={<MainPage />}>
          <Route path="products" element={<ProductsPage />} />
        </Route>
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
      {isModalVisible && <ProductModal />}
      {isCartVisible && <UserCartModal />}
    </div>
  );
}

export default App;
