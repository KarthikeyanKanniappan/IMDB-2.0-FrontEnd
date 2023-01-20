import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "./api";


export const getActors = createAsyncThunk(
  "actor/getActors",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getActors();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const createActor = createAsyncThunk(
  "actor/createActor",
  async ({values,navigate},{rejectWithValue})=>{
    try{
      const response = await api.createActor(values);
      alert("Actor Added")
      navigate("/");
      return response.data;
    }catch(err){
      return rejectWithValue(err.response.data);
    }
  }
)

const actorSlice = createSlice({
  name: "actor",
  initialState: {
    allActors: [],
    error: "",
    loading: false,
  },
  extraReducers: {
    [getActors.pending]: (state, action) => {
      state.loading = true;
    },
    [getActors.fulfilled]: (state, action) => {
      state.loading = false;
      state.allActors = action.payload;
    },
    [getActors.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [createActor.pending]: (state, action) => {
      state.loading = true;
    },
    [createActor.fulfilled]: (state, action) => {
      state.loading = false;
      state.AllMovies = action.payload;
    },
    [createActor.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default actorSlice.reducer;