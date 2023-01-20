import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
});

export const getMovie = () => {
  return API.get("/movie/");
};

export const getActors = () => {
  return API.get("/actor/");
};

export const getProducer = () => {
  return API.get("/producer/");
};

export const createMovie = () => {
  return API.post("/movie/add");
};