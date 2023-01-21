import axios from "axios";

const API = axios.create({
  baseURL: "https://i-mdb-2-0-server-git-main-karthikeyankanniappan.vercel.app",
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

export const createMovie = (value) => {
  return API.post("/movie/add",value);
};

export const createActor = (value) => {
  return API.post("/actor/add",value);
};

export const createProducer = (value) => {
  return API.post("/producer/add",value);
};

export const getMovieByUser = (id) => API.get(`/movie/particular/${id}`);

export const updateMovie = (values, id) => {
  return API.patch(`/movie/edit/${id}`, values);
};

// export const getMovieByUser = (id) => API.get(`/movie/edit/${id}`);
