import { createSlice } from "@reduxjs/toolkit";
export type items = {
  id: string;
  itemName: string;
  image: string;
  price: string;
};

export type UserState = {
  id: number;
  username: string;
  items: items[];
} | null;

const initialState: UserState = {
  id: 0,
  username: "",
  items: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state = action.payload;
    },
    logout: (state) => {
      state = { id: 0, username: "", items: [] };
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
