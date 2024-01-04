import { useAppDispatch } from "../../../store/store";
import {
  deleteProductFromCart,
  setIsCartVisible,
  setTotalPrice,
} from "../../../store/slices/cartSlice";
import { setProductId, showModal } from "../../../store/slices/modalSlice";

import deleteIcon from "../../../assets/delete.png";
import "./shoppingCartProduct.scss";

interface ICartProduct {
  image: string;
  title: string;
  price: number;
  id: number;
}

export function ShoppingCartProduct({ image, title, price, id }: ICartProduct) {
  const dispatch = useAppDispatch();

  function handleOnImageClick() {
    document.body.style.overflow = "hidden";
    dispatch(setProductId(id));
    dispatch(setIsCartVisible(false));
    dispatch(showModal(true));
  }

  return (
    <div className="cart-product">
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          onClick={handleOnImageClick}
          src={image}
          alt="product image"
          className="cart-product-image"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginLeft: "10px",
          }}
        >
          <div className="cart-product-title">{title}</div>
          <div className="cart-product-price">{price}$</div>
        </div>
      </div>
      <img
        onClick={() => {
          dispatch(deleteProductFromCart(id));
          dispatch(setTotalPrice(price * -1));
        }}
        src={deleteIcon}
        alt="delete product from cart icon"
        className="cart-product-delete"
      />
    </div>
  );
}
