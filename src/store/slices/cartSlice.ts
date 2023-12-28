import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { ISingleProduct } from "../../types/types";

interface ICartInitialState {
  isCartVisible: boolean;
  totalPrice: number;
  productsInCart: ISingleProduct[];
}

const initialState: ICartInitialState = {
  isCartVisible: false,
  totalPrice: 0,
  productsInCart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setIsCartVisible: (state, action: PayloadAction<boolean>) => {
      state.isCartVisible = action.payload;
    },
    setTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice = state.totalPrice + action.payload;
    },
    setProductToCart: (state, action: PayloadAction<ISingleProduct>) => {
      state.productsInCart.push(action.payload);
    },
    deleteProductFromCart: (state, action: PayloadAction<number>) => {
      state.productsInCart = state.productsInCart.filter((item) => {
        return item.id != action.payload;
      });
    },
  },
});

export const {
  setIsCartVisible,
  setTotalPrice,
  setProductToCart,
  deleteProductFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
