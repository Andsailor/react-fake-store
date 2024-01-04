import { useAppSelector, useAppDispatch } from "../../store/store";
import { setIsCartVisible } from "../../store/slices/cartSlice";

import { ShoppingCartProduct } from "./shopping-cart-product/ShoppingCartProduct";

import closeLogo from "../../assets/close.png";
import emptyCartLogo from "../../assets/emptycart.png";
import "./shoppingCart.scss";

export function ShoppingCart() {
  const dispatch = useAppDispatch();

  const products = useAppSelector((store) => store.cart.productsInCart);
  const totalPrice = useAppSelector((store) => store.cart.totalPrice);

  return (
    <div className="cart">
      <div className="cart-wrapper">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 className="cart-wrapper-title">Your Bag</h1>
          <img
            onClick={() => {
              dispatch(setIsCartVisible(false));
            }}
            className="cart-wrapper-close"
            src={closeLogo}
            alt="close cart icon"
          />
        </div>
        <h3 className="cart-wrapper-price">To pay: {totalPrice}$</h3>
        <div
          style={{
            marginTop: 10,
          }}
        >
          {products.length === 0 && (
            <img className="cart-wrapper-empty" src={emptyCartLogo} />
          )}
          {products &&
            products.map((item, i) => {
              return (
                <ShoppingCartProduct
                  key={i}
                  image={item.images[0]}
                  title={item.title}
                  price={item.price}
                  id={Number(item.id)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
