import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IModalInitialState {
  isModalVisible: boolean;
  productId: number;
}

const initialState: IModalInitialState = {
  isModalVisible: false,
  productId: 0,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, action: PayloadAction<boolean>) => {
      state.isModalVisible = action.payload;
    },
    setProductId: (state, action: PayloadAction<number>) => {
      state.productId = action.payload;
    },
  },
});

export const { showModal, setProductId } = modalSlice.actions;
export default modalSlice.reducer;
