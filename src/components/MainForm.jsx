import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const MainForm = () => {
  return (
    <div style={{ color: "white", fontSize: "1.2rem" }} className="container ">
      <div className="mb-4">About Movie</div>
      <form>
        <div className="row">
          <div className="col-lg-6 mb-5">
            <input
              type="text"
              className="form-control"
              placeholder="Movie name"
            />
          </div>
          <div className="col-lg-6 mb-5">
            <input
              type="text"
              className="form-control"
              placeholder="Year Of Release"
            />
          </div>
          <div className="col-lg-6 mb-5">
            <label className="mb-3" htmlFor="exampleFormControlTextarea1">
              Movie Poster
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Poster in link"
            />
          </div>
          <div className="form-group col-lg-7 ">
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
        <div></div>
      </form>
    </div>
  );
};

export default MainForm;
