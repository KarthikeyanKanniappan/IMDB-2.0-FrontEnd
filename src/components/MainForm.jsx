import React from "react";
import {Multiselect} from "multiselect-react-dropdown"
import ModalComponent from "./ModalComponent";
import ModalProducer from "./ModalProducer";
import Button from 'react-bootstrap/Button';

const MainForm = () => {
  return (
    <div style={{ color: "white", fontSize: "1.2rem" }} className="container ">
      <div className="mb-4">About Movie</div>
      <form>
        <div className="row">
          <div className="col-lg-6 mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Movie name"
            />
          </div>
          <div className="col-lg-6 mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Year Of Release"
            />
          </div>
          <div className="col-lg-7 mb-4">
            <label className="mb-3" htmlFor="exampleFormControlTextarea1">
              Movie Poster
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Poster in link"
            />
          </div>
          <div className="form-group col-lg-7 mb-4 ">
            <label className="mb-3" >
              Select-Actor
            </label>
          <Multiselect className="mb-4" style={{border: "none",
	          fontSize: "10px",
	          minHeight: "50px",}} displayValue="Actors name" />
            <span>Actors Unavailable <ModalComponent/></span>
        </div>
        <div className="form-group col-lg-7 mb-4 ">
            <label className="mb-3" >
              Select-Producer
            </label>
          <Multiselect className="mb-4" style={{border: "none",
	          fontSize: "10px",
	          minHeight: "50px",}} displayValue="Actors name" />
            <span>Producer Unavailable <ModalProducer/></span>
        </div>
          <div className="form-group col-lg-7 mb-4">
            <label className="mb-3" htmlFor="exampleFormControlTextarea1">
              Movie Plot
            </label>
            <textarea
              className="form-control "
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>
      </form>
      <Button variant="secondary" >
          Add Movies
        </Button>
    </div>
  );
};

export default MainForm;
