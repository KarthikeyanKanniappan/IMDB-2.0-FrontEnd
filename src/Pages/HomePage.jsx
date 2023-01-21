import React, { useEffect } from "react";
import Carder from "../components/Carder";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../redux/movieSlice";
import {getActors} from "../redux/actorSlice"
import { getProducer } from "../redux/producerSlice";
const HomePage = () => {
  const dispatch = useDispatch();
  const { AllMovies, loading } = useSelector((state) => ({ ...state.movie }));

  useEffect(() => {
    dispatch(getMovie());
    dispatch(getActors());
    dispatch(getProducer());
  }, []);

  return (
    <div className="container-fluid mt-3 ">
      <div className="row m-auto ">
        {AllMovies.map((movie, i) => {
          return (
            <div key={i} className="col-lg-4 col-md-6 m-auto pb-4">
              <Carder movie={movie} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
