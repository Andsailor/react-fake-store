import { useState, Dispatch, SetStateAction } from "react";
import { useAppDispatch } from "../../../store/store";
import {
  setFilter,
  setFilterSearchParam,
} from "../../../store/slices/filterSlice";

import search from "../../../assets/search.png";
import "./filterSearch.scss";

interface IProps {
  formWidth?: string;
  setIsModalFilterVisible?: Dispatch<SetStateAction<boolean>>;
}

export function FilterSearch({ formWidth, setIsModalFilterVisible }: IProps) {
  const dispatch = useAppDispatch();
  const [searchFieldValue, setSearchFieldValue] = useState("");

  function handleSubmit() {
    if (searchFieldValue) {
      dispatch(setFilter(""));
      dispatch(setFilterSearchParam(searchFieldValue));
      setIsModalFilterVisible && setIsModalFilterVisible(false);
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
