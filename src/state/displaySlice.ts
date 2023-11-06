import { createSlice } from "@reduxjs/toolkit";

interface DisplayState {
  isMobile: boolean;
}

const initialState: DisplayState = {
  isMobile: window.innerWidth < 1000,
};

const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    checkIsMobile: (state) => {
      state.isMobile = window.innerWidth < 1000;
    },
  },
});

export const { checkIsMobile } = displaySlice.actions;

export default displaySlice.reducer;
