"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productSlice from "./slice/productSlice";
const rootReducer = combineReducers({
  product: productSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
