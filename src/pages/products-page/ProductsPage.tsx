import { useState, useEffect } from "react";
import { useGetProducts } from "../../hooks/products/useGetProducts";
import { ProductCard, Burger } from "../../components/components";
import { Filter, FilterModal } from "../../features/features";

import imgPlaceholder from "../../assets/empty.png";
import "./productsPage.scss";

export function ProductsPage() {
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [isModalFilterVisible, setIsModalFilterVisible] = useState(false);
  const { data, isFetching } = useGetProducts(0);

  const produtcsPadding = isFilterVisible
    ? "2rem 1rem 2rem 1rem"
    : "3.2rem 1rem";

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsFilterVisible(false);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1024) {
        setIsFilterVisible(false);
      } else {
        setIsFilterVisible(true);
        setIsModalFilterVisible(false);
      }
    });
  }, []);

  return (
    <div
      style={{
        padding: produtcsPadding,
      }}
      className="products"
    >
      {isModalFilterVisible && !isFilterVisible && <FilterModal />}
      {!isFilterVisible && <Burger toggleModal={setIsModalFilterVisible} />}
      {isFilterVisible && (
        <div
          style={{
            width: 20 + "%",
          }}
        >
          <Filter
            filterStyleParams={{
              searchFormWidth: "clamp(130px, 8vw, 200px)",
            }}
          />
        </div>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="products-cards">
          {data &&
            data
              .filter((product) => product.title !== "New Product")
              .map((product) => (
                <ProductCard
                  title={product.title}
                  image={product.images[0] ? product.images[0] : imgPlaceholder}
                  price={product.price}
                  category={product.category.name}
                />
              ))}
        </div>
        <button disabled={isFetching} className="products-button">
          Show more
        </button>
      </div>
    </div>
  );
}
