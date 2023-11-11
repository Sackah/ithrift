import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../config";

export type UserData = {
  id: number;
  name: string;
  phone: string;
  createdAt: string;
  updatedAt: string;
};

export type item = {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  userId: string;
  price: string;
  userName: string;
  createdAt: string;
  updatedAt: string;
  user?: UserData;
};

export type UserState = {
  data: UserData | null;
};

const initialState: UserState = {
  data: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      console.log("loading");
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.data = null;
    });
  },
});

export const login = createAsyncThunk(
  "user/login",
  async (accessToken: string) => {
    const response = await fetch(`${BASE_URL}users/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      throw new Error("Failed to fetch user data");
    }
  }
);

export const { logout } = userSlice.actions;

export default userSlice.reducer;
