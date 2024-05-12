import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isLoading: false,
  isError: false,
};

export const globalSlice = createSlice({
  name: "global",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => action.type.endsWith("pending"),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("fulfilled"),
        (state) => {
          state.isLoading = false;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("rejected"),
        (state) => {
          state.isLoading = false;
          state.isError = true;
        }
      );
  },
});

export const globalReducer = globalSlice.reducer;
