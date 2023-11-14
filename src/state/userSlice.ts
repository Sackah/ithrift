import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../config";
import { UserState } from "../types/types";

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

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Failed to fetch user data");
    }
  }
);

export const { logout } = userSlice.actions;

export default userSlice.reducer;
