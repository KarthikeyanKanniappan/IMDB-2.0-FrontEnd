import React,{useEffect,useState} from "react";
import {Multiselect} from "multiselect-react-dropdown"
import ModalComponent from "./ModalComponent";
import ModalProducer from "./ModalProducer";
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from "react-redux";
import {getActors} from "../redux/actorSlice"
import { getProducer } from "../redux/producerSlice";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { createMovie } from "../redux/movieSlice";

const MainForm = () => {
  const dispatch = useDispatch();
  const { allActors, loading1 } = useSelector((state) => ({ ...state.actor }));
  const { allProducer, loading } = useSelector((state) => ({ ...state.producer }));

  const [actor,setActor] = useState([])
  const [producer,setProducer] = useState([])
  const [member, setMember] = useState([]);
  const [member1, setMember1] = useState([]);
  const navigate = useNavigate();
 
  useEffect(() => {
    dispatch(getActors());
    dispatch(getProducer());
    setActor(allActors)
    setProducer(allProducer)
  }, []);

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
    validate: (values) => {
      let errors = {};
      if (values.movieName === "") {
        errors.movieName = "Please enter a movie name ";
      }
      if (values.yearOfRelease === "") {
        errors.yearOfRelease = "Please enter yearOfRelease";
      }
      if (values.plot === "") {
        errors.plot= "Please enter plot of movie";
      }
      if (values.poster === "") {
        errors.poster = "Please enter poster of movie";
      }
      // if (values.actors[0] === undefined) {
      //   errors.actors = "Please enter actors";
      // }
      // if (values.producer === "") {
      //   errors.producer = "Please enter producer";
      // }
      return errors;
    },
    onSubmit:  (values) => {
      let updatedValue ={ ...values , actors:member,producer:member1[0],allActors:"",
      allProducer:""}
      console.log(updatedValue)
     dispatch(createMovie({updatedValue,navigate}))
    },
  });

  return (
    <div style={{ color: "white", fontSize: "1.2rem" }} className="container ">
      <div className="mb-4">About Movie</div>
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
  );
};

export default MainForm;
