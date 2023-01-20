import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import movieReducer from "./redux/movieSlice.js";
import actorReducer from "./redux/actorSlice.js"
import producerReducer from "./redux/producerSlice.js"
const store = configureStore({
  reducer: {
    movie: movieReducer,
    actor:actorReducer,
    producer:producerReducer
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
