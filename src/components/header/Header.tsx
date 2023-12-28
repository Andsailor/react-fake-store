import { Dispatch, SetStateAction } from "react";
import { useGetUserByToken } from "../../hooks/auth/useGetUserByToken.hook";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { setIsCartVisible } from "../../store/slices/cartSlice";

import mainLogo from "../../assets/logo.png";
import cartIcon from "../../assets/cart.png";

import "./header.scss";

interface IProps {
  togglePopup: Dispatch<SetStateAction<boolean>>;
}

export function Header({ togglePopup }: IProps) {
  const dispatch = useAppDispatch();
  const { data } = useGetUserByToken();

  const quantityOfProducts = useAppSelector(
    (store) => store.cart.productsInCart.length
  );

  return (
    <header className="header">
      <img src={mainLogo} alt="header main logo" className="header-logo" />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "end",
            gap: 5,
            position: "relative",
          }}
        >
          {quantityOfProducts > 0 && (
            <div className="header-quantity">{quantityOfProducts}</div>
          )}
          <img
            onClick={() => dispatch(setIsCartVisible(true))}
            src={cartIcon}
            alt="user cart icon"
            className="header-cart"
          />
        </div>
        <img
          onClick={() => togglePopup((isPopup) => !isPopup)}
          className="header-avatar"
          src={data?.avatar}
          alt="user avatar"
        />
      </div>
    </header>
  );
}
