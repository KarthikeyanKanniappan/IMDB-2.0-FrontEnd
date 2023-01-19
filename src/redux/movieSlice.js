import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "./api";

export const getMovie = createAsyncThunk(
  "movie/getMovie",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getMovie();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    AllMovies: [],
    error: "",
    loading: false,
  },
  extraReducers: {
    [getMovie.pending]: (state, action) => {
      state.loading = true;
    },
    [getMovie.fulfilled]: (state, action) => {
      state.loading = false;
      state.AllMovies = action.payload;
    },
    [getMovie.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default movieSlice.reducer;
