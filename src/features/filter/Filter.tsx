import { useEffect, useState } from "react";
import { useGetCategories } from "../../hooks/products/useGetCategories.ts";
import {
  setFilter,
  setFilterSearchParam,
} from "../../store/slices/filterSlice.ts";
import { useAppDispatch, useAppSelector } from "../../store/store.ts";

import { Footer } from "../../components/components.tsx";
import { FilterSearch } from "./filter-search/FilterSearch.tsx";
import "./filter.scss";

interface IProps {
  filterStyleParams: {
    searchFormWidth?: string;
    fontSize?: string;
  };
}

export function Filter({ filterStyleParams }: IProps) {
  const [inputValue, setInputValue] = useState("");
  const productFilter = useAppSelector((store) => store.filter.filter);

  useEffect(() => {
    if (productFilter === "") {
      setInputValue("");
    }
  }, [productFilter]);

  const dispatch = useAppDispatch();
  const { data } = useGetCategories();

  function setFilterToState() {
    dispatch(setFilterSearchParam(""));
    dispatch(setFilter(inputValue));
  }

  return (
    <aside className="filter">
      <h4>Search:</h4>
      <FilterSearch formWidth={filterStyleParams.searchFormWidth} />
      <h4>Category:</h4>
      <div className="filter-group">
        <input
          type="checkbox"
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            setInputValue(target.value);
          }}
          checked={inputValue == ""}
          value={""}
          name={"all"}
          id="all"
          key={"all"}
        />
        <label htmlFor={"all"}>All</label>
      </div>
      {data &&
        data.map((filter, i) => {
          return (
            <div key={i} className="filter-group">
              <input
                onChange={(e) => {
                  const target = e.target as HTMLInputElement;
                  setInputValue(target.value);
                }}
                checked={inputValue == filter}
                value={filter}
                type="checkbox"
                name={filter}
                id={filter}
              />
              <label htmlFor={filter}>
                {filter.slice(0, 1).toUpperCase() + filter.slice(1)}
              </label>
            </div>
          );
        })}
      <button onClick={setFilterToState} className="filter-button">
        Show
      </button>
      <Footer />
    </aside>
  );
}
