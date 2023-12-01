import { useGetCategories } from "../../hooks/products/useGetCategories.ts";

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
  const { data } = useGetCategories();

  return (
    <aside className="filter">
      <h4>Search:</h4>
      <FilterSearch formWidth={filterStyleParams.searchFormWidth} />
      <h4>Category:</h4>
      {data &&
        data
          .filter((item) => item.name !== "")
          .map((filter) => {
            return (
              <div className="filter-group">
                <input
                  value={filter.id}
                  type="checkbox"
                  name={filter.name}
                  key={filter.id}
                />
                <label htmlFor={filter.name}>{filter.name}</label>
              </div>
            );
          })}
      <button className="filter-button">Show</button>
      <Footer />
    </aside>
  );
}
