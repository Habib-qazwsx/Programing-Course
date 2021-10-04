import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import "./ShowCard.css";

const ShowCard = (props) => {
  const { img, title, rating, reviews } = props.loadData;
  console.log(props.loadData);
  return (
    <Col className="mb-5">
      <Card style={{ width: "22rem" }} className="showCard">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Rating: {rating}</Card.Text>
          <Card.Text>Total reviews: {reviews}</Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ShowCard;
