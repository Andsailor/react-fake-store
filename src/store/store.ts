import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import filterSlice from "./slices/filterSlice";
import paginationSlice from "./slices/paginationSlice";
import modalSlice from "./slices/modalSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    filter: filterSlice,
    pagination: paginationSlice,
    modal: modalSlice,
    cart: cartSlice,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
