import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  //   category: "",
};
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    changeProductName: (state, action) => {
      return { ...state, name: action.payload };
    },
    // changeEventCategory: (state, action) => {
    //   console.log(action.payload);
    //   return { ...state, category: action.payload };
    // },
  },
});

export const { changeProductName } = productSlice.actions;
export default productSlice.reducer;