import { configureStore } from "@reduxjs/toolkit";
import displayReducer from "./displaySlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    display: displayReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
