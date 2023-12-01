import "./productCard.scss";

interface IProps {
  image: string;
  title: string;
  price: number;
  category: string;
}

export function ProductCard({ image, title, price, category }: IProps) {
  return (
    <div className="product">
      <img className="product-image" src={image} alt="product view" />
      <h3 className="product-title">{title}</h3>
      <h4 className="product-category">{category}</h4>
      <div className="product-price">{price}$</div>
    </div>
  );
}
