import { useGetSingleProduct } from "../../hooks/products/useGetSingleProduct";
import { showModal, setProductId } from "../../store/slices/modalSlice";
import { useAppDispatch, useAppSelector } from "../../store/store";

import { Spinner } from "../components";
import Slider from "react-slick";
import star from "../../assets/star.png";
import cart from "../../assets/cart.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./productModal.scss";

export function ProductModal() {
  const dispatch = useAppDispatch();

  const productId = useAppSelector((store) => store.modal.productId);
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

  return (
    <div className="modal">
      <div className="modal-wrapper">
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
                    src={star}
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
                <img
                  className="modal-wrapper-information-footer-cart"
                  src={cart}
                  alt="cart icon"
                />
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
