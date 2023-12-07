import { useState } from "react";
import { useGetProducts } from "../../hooks/products/useGetProducts";
import { useAppSelector } from "../../store/store";

import { setPaginationOffset } from "../../store/slices/paginationSlice";
import { useAppDispatch } from "../../store/store";

import "./pagination.scss";

export function Pagination() {
  const [activeButton, setActiveButton] = useState(1);

  const filter = useAppSelector((state) => state.filter.filter);
  const filterSearchParam = useAppSelector(
    (state) => state.filter.filterSearchParam
  );

  const dispatch = useAppDispatch();

  const { data } = useGetProducts(filter, filterSearchParam);

  function renderPaginationButtons() {
    if (data) {
      const pages: number[] = [];
      for (let i = 1; i <= Number((data.total / 12).toFixed()); i++) {
        pages.push(i);
      }
      return pages;
    }
  }

  return (
    <div className="pagination">
      {renderPaginationButtons()?.map((item) => (
        <button
          key={item}
          onClick={() => {
            setActiveButton(item);
            item === 1
              ? dispatch(setPaginationOffset(0))
              : dispatch(setPaginationOffset(12 * item));
          }}
          className={`${
            activeButton === item
              ? "pagination-button active"
              : "pagination-button"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
