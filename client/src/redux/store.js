/** @format */
"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import { Provider } from "react-redux";
import producttSlice from "./slices/productSlice";

const rootReducer = combineReducers({
  auth: userSlice,
  product: producttSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
