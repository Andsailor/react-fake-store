import { useState } from "react";
import { useAppDispatch } from "../../../store/store";
import {
  setFilter,
  setFilterSearchParam,
} from "../../../store/slices/filterSlice";

import search from "../../../assets/search.png";
import "./filterSearch.scss";

interface IProps {
  formWidth?: string;
}

export function FilterSearch({ formWidth }: IProps) {
  const [searchFieldValue, setSearchFieldValue] = useState("");
  const dispatch = useAppDispatch();

  function handleSubmit() {
    if (searchFieldValue) {
      dispatch(setFilter(""));
      dispatch(setFilterSearchParam(searchFieldValue));
    } else {
      dispatch(setFilterSearchParam(""));
      dispatch(setFilter(""));
    }
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="search"
    >
      <input
        value={searchFieldValue}
        onChange={(e) => setSearchFieldValue(e.target.value)}
        style={{
          width: formWidth,
        }}
        type="text"
      />
      <button type="submit">
        <img src={search} alt="search icon" />
      </button>
    </form>
  );
}
