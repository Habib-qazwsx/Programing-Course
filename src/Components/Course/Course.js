import { Container, Row } from "react-bootstrap";
import { data } from "../Fake Data/FakeData";
import ShowCard from "../Show Card/ShowCard";
import "./Course.css";

const Course = () => {
  const loadData = data;
  return (
    <div>
      <div className="courses">
        <h1>ALL COURSES</h1>
      </div>
      <div>
        <Container className="mt-5">
          <Row>
            {loadData.map((element) => {
              return <ShowCard loadData={element} key={element.key}></ShowCard>;
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Course;
