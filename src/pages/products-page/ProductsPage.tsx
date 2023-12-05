import { useState, useEffect } from "react";
import { useGetProducts } from "../../hooks/products/useGetProducts";
import { useAppSelector } from "../../store/store";

import { ProductCard, Burger } from "../../components/components";
import { Filter, FilterModal } from "../../features/features";

import placeholderImage from "../../assets/empty.png";
import emptyProductPageImage from "../../assets/noproduct.png";

import "./productsPage.scss";
import "./../../components/product-card/productCard.scss";

export function ProductsPage() {
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [isModalFilterVisible, setIsModalFilterVisible] = useState(false);
  const filter = useAppSelector((state) => state.filter.filter);
  const filterSearchParam = useAppSelector(
    (state) => state.filter.filterSearchParam
  );
  const { data, isFetching } = useGetProducts(filter, filterSearchParam);

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
        {data?.products.length === 0 && (
          <div className="products-empty">
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
                We weren't able to find any existing product. Try to find
                another one.
              </div>
            </div>
          </div>
        )}
        {data && (
          <div className="products-cards">
            {data.products.map((product) => (
              <div
                style={{
                  position: "relative",
                }}
              >
                <ProductCard
                  title={product.title}
                  image={
                    product.images[0] ? product.images[0] : placeholderImage
                  }
                  price={product.price}
                  category={product.category}
                  key={product.id}
                />
                {isFetching && (
                  <div className="placeholder">
                    <div className="placeholder-img"></div>
                    <div className="placeholder-title"></div>
                    <div className="placeholder-category"></div>
                    <div className="placeholder-price"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
