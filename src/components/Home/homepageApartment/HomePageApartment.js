import React from "react";
import { Button, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker, faBed, faBath } from "@fortawesome/free-solid-svg-icons";

const HomePageApartment = (props) => {
  const {
    serviceTitle,
    price,
    location,
    noOfBathRoom,
    noOfBedRoom,
    thumbnail,
  } = props.apartment;

  return (
    <div className="col-md-4" style={{marginTop:"20px"}}>
      <Card style={{ width: "20rem" }}>
        <Card.Img variant="top" src={thumbnail} />
        <Card.Body>
          <Card.Title>{serviceTitle}</Card.Title>
          <Card.Text>
            <FontAwesomeIcon icon={faMapMarker} />
            <p>{location}</p>
          </Card.Text>
          <Card.Text>
            <div className="row">
              <div className="col-md-6">
                <FontAwesomeIcon icon={faBed} />
                <p>{noOfBedRoom}</p>
              </div>
              <div className="col-md-6">
                <FontAwesomeIcon icon={faBath} />
                <p>{noOfBathRoom}</p>
              </div>
            </div>
          </Card.Text>
          <div className="row">
                      <div className="col-md-5">
                      <h3>{price}</h3>
                      </div>
            <div className="col-md-7">
              <Button variant="primary">View Details</Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomePageApartment;
