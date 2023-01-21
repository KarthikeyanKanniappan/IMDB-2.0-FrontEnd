import React,{useEffect,useState} from "react";
import {Multiselect} from "multiselect-react-dropdown"
import ModalComponent from "./ModalComponent";
import ModalProducer from "./ModalProducer";
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import { updateMovie } from "../redux/movieSlice";
import { useFormik } from "formik";
import { useNavigate,useParams } from "react-router-dom";
import { getMovieByUser } from "../redux/movieSlice"

const EditMovie = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { allActors, loading1 } = useSelector((state) => ({ ...state.actor }));
  const { allProducer, loading } = useSelector((state) => ({ ...state.producer }));
  const { movies } = useSelector((state) => ({ ...state.movie }));
  const [actor,setActor] = useState([])
  const [producer,setProducer] = useState([])
  const [member, setMember] = useState([]);
  const [member1, setMember1] = useState([]);
  const navigate = useNavigate();
 
  useEffect(() => {
    setActor(allActors)
    setProducer(allProducer)
  }, []);

  useEffect(() => {  
    if (id) {
      dispatch(getMovieByUser(id));
    if(movies){
      formik.setValues({
        movieName: movies[0].movieName,
        yearOfRelease: movies[0].yearOfRelease,
        plot: movies[0].plot,
        poster: movies[0].poster,
      });
    }
    }
  }, [id]);

  let formik = useFormik({
    initialValues: {
      movieName:"",
      yearOfRelease:"",
      plot:"",
      poster:"",
      actors:[],
      producer:"",
      allActors:"",
      allProducer:""
    },
    onSubmit: (values) => {

      if(member[0] === undefined){
        values.actors= movies[0].actors
        values.allActors= movies[0].allActors
      }else{
        values.actors=""
        values.allActors= member
      }
      if(member1[0] === undefined){
        values.producer= movies[0].producer
        values.allProducer= movies[0].allProducer
      }else{
        values.producer=""
        values.allProducer=member1[0]
      }
      console.log(values)
       dispatch(updateMovie({ id, values, navigate}));
    },
  });

  return (
    <div style={{ color: "white", fontSize: "1.2rem" }} className="container ">
    <div className="mb-4">Edit Movie</div>
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Movie name"
            value={formik.values.movieName}
            onChange={formik.handleChange}
            name="movieName"
          />
          <span style={{ color: "red" }}>{formik.errors.movieName}</span>
        </div>
        <div className="col-lg-6 mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Year Of Release"
            value={formik.values.yearOfRelease}
            onChange={formik.handleChange}
            name="yearOfRelease"
          />
          <span style={{ color: "red" }}>{formik.errors.yearOfRelease}</span>
        </div>
        <div className="col-lg-7 mb-4">
          <label className="mb-3" htmlFor="exampleFormControlTextarea1">
            Movie Poster
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Poster in link"
            value={formik.values.poster}
            onChange={formik.handleChange}
            name="poster"
          />
           <span style={{ color: "red" }}>{formik.errors.poster}</span>
        </div>
        <div className="form-group col-lg-7 mb-4 ">
          <label className="mb-3" >
            Select-Actor
          </label>
        <Multiselect 
          options={actor} 
          displayValue="name"
          onSelect={(e) => {
            setMember(e);
          }}
          className="mb-4"  
           />
          <span>if Actors Unavailable <ModalComponent/></span>
      </div>
      <div className="form-group col-lg-7 mb-4 ">
          <label className="mb-3" >
            Select-Producer
          </label>
        <Multiselect 
        options={producer} 
        displayValue="name"
        onSelect={(e) => {
          setMember1(e);
        }}
        className="mb-4"  
         />
          <span>if Producer Unavailable <ModalProducer/></span>
      </div>
        <div className="form-group col-lg-7 mb-4">
          <label className="mb-3" htmlFor="exampleFormControlTextarea1">
            Movie Plot
          </label>
          <textarea
            className="form-control "
            id="exampleFormControlTextarea1"
            rows="3"
            value={formik.values.plot}
            onChange={formik.handleChange}
            name="plot"
          ></textarea>
          <span style={{ color: "red" }}>{formik.errors.plot}</span>
        </div>
      </div>
    <Button type="submit" variant="secondary" >
        Add Movies
      </Button>
    </form>
  </div>
  )
}

export default EditMovie