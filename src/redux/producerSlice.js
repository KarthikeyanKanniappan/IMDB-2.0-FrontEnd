import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "./api";


export const getProducer = createAsyncThunk(
  "producer/getProducer",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getProducer();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const createProducer = createAsyncThunk(
  "producer/createProducer",
  async ({values,navigate},{rejectWithValue})=>{
    try{
      const response = await api.createProducer(values);
      alert("Producer Added")
      navigate("/");
      return response.data;
    }catch(err){
      return rejectWithValue(err.response.data);
    }
  }
)

const producerSlice = createSlice({
  name: "producer",
  initialState: {
    allProducer: [],
    error: "",
    loading: false,
  },
  extraReducers: {
    [getProducer.pending]: (state, action) => {
      state.loading = true;
    },
    [getProducer.fulfilled]: (state, action) => {
      state.loading = false;
      state.allProducer = action.payload;
    },
    [getProducer.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [createProducer.pending]: (state, action) => {
      state.loading = true;
    },
    [createProducer.fulfilled]: (state, action) => {
      state.loading = false;
      state.AllMovies = action.payload;
    },
    [createProducer.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default producerSlice.reducer;