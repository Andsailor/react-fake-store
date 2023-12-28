import { useState, useEffect } from "react";
import { useGetProducts } from "../../hooks/products/useGetProducts";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { setProductId, showModal } from "../../store/slices/modalSlice";

import {
  ProductCard,
  Burger,
  CardPlaceholder,
  NotFound,
} from "../../components/components";
import { Filter, FilterModal, Pagination } from "../../features/features";

import placeholderImage from "../../assets/empty.png";

import "./productsPage.scss";
import "./../../components/product-card/productCard.scss";

export function ProductsPage() {
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [isModalFilterVisible, setIsModalFilterVisible] = useState(false);

  const filter = useAppSelector((state) => state.filter.filter);
  const filterSearchParam = useAppSelector(
    (state) => state.filter.filterSearchParam
  );
  const paginationOffset = useAppSelector(
    (state) => state.pagination.paginationOffset
  );

  const { data, isFetching } = useGetProducts(
    filter,
    filterSearchParam,
    paginationOffset
  );

  const dispatch = useAppDispatch();

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

  function handleOnProductCardClick(id: number) {
    dispatch(setProductId(id));
    document.body.style.overflow = "hidden";
    dispatch(showModal(true));
  }

  const produtcsPadding = isFilterVisible
    ? "2rem 1rem 2rem 1rem"
    : "3.2rem 1rem";

  return (
    <div
      style={{
        padding: produtcsPadding,
      }}
      className="products"
    >
      {isModalFilterVisible && !isFilterVisible && (
        <FilterModal setIsModalFilterVisible={setIsModalFilterVisible} />
      )}
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
        {data?.products.length === 0 && <NotFound />}
        {data && (
          <div className="products-cards">
            {data.products.map((product) => (
              <div
                onClick={() => handleOnProductCardClick(Number(product.id))}
                key={product.id}
                style={{
                  position: "relative",
                }}
              >
                <div>
                  <ProductCard
                    title={product.title}
                    image={
                      product.images[0] ? product.images[0] : placeholderImage
                    }
                    price={product.price}
                    category={product.category}
                    key={product.id}
                  />
                </div>
                {isFetching && <CardPlaceholder />}
              </div>
            ))}
          </div>
        )}
        <Pagination />
      </div>
    </div>
  );
}
