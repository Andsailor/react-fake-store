import { useRef } from "react";
import { useGetSingleProduct } from "../../hooks/products/useGetSingleProduct";
import { showModal, setProductId } from "../../store/slices/modalSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";
import {
  setIsCartVisible,
  setProductToCart,
  setTotalPrice,
} from "../../store/slices/cartSlice";

import { Spinner } from "../components";
import Slider from "react-slick";
import starIcon from "../../assets/star.png";
import cartIcon from "../../assets/cart.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./productModal.scss";

export function ProductModal() {
  const productId = useAppSelector((store) => store.modal.productId);
  const productsInCart = useAppSelector((store) => store.cart.productsInCart);

  const modalRef = useRef<null | HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const { data, isFetching } = useGetSingleProduct(productId);

  const settings = {
    dots: true,
    slidesToShow: 1,
  };

  function handleCloseModalClick() {
    dispatch(showModal(false));
    document.body.style.overflow = "visible";
    dispatch(setProductId(0));
  }

  function handleOnAddToCartButtonClick() {
    if (data && productsInCart.includes(data)) {
      window.scroll(0, 0);
      handleCloseModalClick();
      dispatch(setIsCartVisible(true));
    } else {
      dispatch(setProductToCart(data!));
      dispatch(setTotalPrice(data!.price));
    }
  }

  return (
    <div
      className="modal"
      onClick={(e) => {
        if (!modalRef.current?.contains(e.target as HTMLDivElement)) {
          handleCloseModalClick();
        }
      }}
    >
      <div className="modal-wrapper" ref={modalRef}>
        {isFetching && (
          <div>
            <Spinner width="100px" height="100px" />
          </div>
        )}
        {data && !isFetching && (
          <div>
            <div className="modal-wrapper-carousel">
              <Slider {...settings}>
                {data.images.map((item, i) => {
                  return <img key={i} src={item} alt="slider image" />;
                })}
              </Slider>
            </div>
            <div className="modal-wrapper-information">
              <hr
                style={{
                  width: "80%",
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "1rem",
                }}
              >
                <h1 className="modal-wrapper-information-title">
                  {data?.title}
                </h1>
                <h3 className="modal-wrapper-information-rating">
                  <img
                    className="modal-wrapper-information-star"
                    src={starIcon}
                    alt="rating star image"
                  />
                  {data?.rating}/5
                </h3>
              </div>
              <span className="modal-wrapper-information-category">
                {data?.category}
              </span>
              <p className="modal-wrapper-information-description">
                {data?.description}
              </p>
              <div className="modal-wrapper-information-footer">
                <div className="modal-wrapper-information-footer-price">
                  {data?.price}$
                </div>
                <button
                  className="modal-wrapper-information-footer-button"
                  style={{
                    backgroundColor: productsInCart.includes(data)
                      ? "#DCDCDC"
                      : "",
                    color: productsInCart.includes(data) ? "#ff5e0e" : "",
                  }}
                  onClick={handleOnAddToCartButtonClick}
                >
                  <img src={cartIcon} alt="cart icon" />
                  {!productsInCart.includes(data) ? "Add to cart" : "Open cart"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div onClick={handleCloseModalClick} className="modal-close">
        <span></span>
        <span></span>
      </div>
    </div>
  );
}
