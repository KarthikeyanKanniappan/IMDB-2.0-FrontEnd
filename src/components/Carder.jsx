import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom"
const Carder = ({ movie }) => {
  return (
    <Card
      className="m-auto"
      style={{ width: "18rem", backgroundColor:"#000000", color: "white", border: "none" }}
    >
      <Card.Img
        style={{ width: "18rem", height: "18rem" }}
        variant="top"
        src={movie.poster}
      />
      <Card.Body>
        <Card.Title>{movie.movieName}</Card.Title>
        <Card.Text>{movie.yearOfRelease}</Card.Text>
        <Card.Text>{movie.plot}</Card.Text>
        <Card.Text>Actors</Card.Text>
        <div className="d-flex flex-row justify-content-between mb-4">
          {movie.allActors.map((el, i) => {
            return (
              <div key={i}>
                <img
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50px",
                  }}
                  src={el.picture}
                />
              </div>
            );
          })}
        </div>
        <Card.Text>Producer</Card.Text>
        <div className="d-flex flex-row justify-content-between mb-4">
          <img
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50px",
              margin: "auto",
            }}
            src={movie.allProducer.picture}
          />
        </div>
        <div className="d-flex flex-row justify-content-around ">
          <Button as={Link} to={`/edit/${movie._id}`} className="pl-4" variant="light">
            Edit
          </Button>
          <Button variant="light">Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Carder;
