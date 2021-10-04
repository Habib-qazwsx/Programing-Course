import React from "react";
import { Container, Row } from "react-bootstrap";
import { data } from "../Fake Data/FakeData";
import ShowCard from "../Show Card/ShowCard";
import "./Home.css";

const Home = () => {
  const loadData = data.slice(0, 4);
  return (
    <div>
      <div className="homeTitle">
        <h1>CHECK OUT OUR COURSES</h1>
      </div>
      <Container className="mt-5">
        <Row>
          {loadData.map((element) => {
            return <ShowCard loadData={element} key={element.key}></ShowCard>;
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
<h1>This is home</h1>;
