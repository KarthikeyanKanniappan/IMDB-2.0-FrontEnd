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

export const createMovie = createAsyncThunk(
  "movie/createMovie",
  async ({updatedValue,navigate},{rejectWithValue})=>{
    try{
      const response = await api.createMovie(updatedValue);
      alert("Movie Added")
      navigate("/");
      return response.data;
    }catch(err){
      return rejectWithValue(err.response.data);
    }
  }
)

export const getMovieByUser = createAsyncThunk(
  "movie/getMovieByUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getMovieByUser(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateMovie = createAsyncThunk(
  "movie/updateMovie",
  async ({ id, values,navigate }, { rejectWithValue }) => {
    try {
      const response = await api.updateMovie(values, id);
     alert("Movie Updated Successfully");
      navigate("/");
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
    movies:[],
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
    [createMovie.pending]: (state, action) => {
      state.loading = true;
    },
    [createMovie.fulfilled]: (state, action) => {
      state.loading = false;
      state.AllMovies = action.payload;
    },
    [createMovie.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getMovieByUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getMovieByUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.movies = action.payload;
    },
    [getMovieByUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [updateMovie.pending]: (state, action) => {
      state.loading = true;
    },
    [updateMovie.fulfilled]: (state, action) => {
      state.loading = false;
      // const {
      //   arg: { id },
      // } = action.meta;
      // if (id) {
      //   state.updatedMovies = state.updatedMovies.map((item) =>
      //     item._id === id ? action.payload : item
      //   );
      //   state.AllMovies = state.AllMovies.map((item) =>
      //     item._id === id ? action.payload : item
      //   );
      // }
    },
    [updateMovie.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default movieSlice.reducer;
