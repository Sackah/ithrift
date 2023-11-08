import { createSlice } from "@reduxjs/toolkit";
type items = {
  id: number;
  itemName: string;
  image: string;
  price: string;
};

type UserState = {
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
