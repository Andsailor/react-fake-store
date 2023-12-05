import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IFilterInitialState {
  filter: string;
  filterSearchParam: string;
}

const initialState: IFilterInitialState = {
  filter: "",
  filterSearchParam: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    setFilterSearchParam: (state, action: PayloadAction<string>) => {
      state.filterSearchParam = action.payload;
    },
  },
});

export const { setFilter, setFilterSearchParam } = filterSlice.actions;

export default filterSlice.reducer;
