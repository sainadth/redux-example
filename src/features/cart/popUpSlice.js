import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpened: false,
};

const popUpSlice = createSlice({
  name: "popUp",
  initialState: initialState,
  reducers: {
    toggle: (state, action) => {
      state.isOpened = state.isOpened ? false : true;
    },
  },
});

console.log(popUpSlice);

export const { toggle } = popUpSlice.actions;
export default popUpSlice.reducer;
