import emptyProductPageImage from "../../assets/noproduct.png";
import "./notFound.scss";

export function NotFound() {
  return (
    <div className="empty">
      <img
        style={{
          height: 100 + "%",
        }}
        src={emptyProductPageImage}
        alt="no products available image"
      />
      <div>
        <h3>No products found</h3>
        <div>
          We weren't able to find any existing product. Try to find another one.
        </div>
      </div>
    </div>
  );
}
