import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPaginationInitialState {
  paginationOffset: number;
  isPaginationVisible: boolean;
}

const initialState: IPaginationInitialState = {
  paginationOffset: 0,
  isPaginationVisible: true,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setPaginationOffset: (state, action: PayloadAction<number>) => {
      state.paginationOffset = action.payload;
    },
    setIsPaginationVisible: (state, action: PayloadAction<boolean>) => {
      state.isPaginationVisible = action.payload;
    },
  },
});

export const { setPaginationOffset, setIsPaginationVisible } =
  paginationSlice.actions;

export default paginationSlice.reducer;
