import React from "react";
import "./course.css";
import { Container, Row, Col } from "reactstrap";
import a1 from "../images/cli2.jpeg";
import a2 from "../images/cli1.jpeg";
import a3 from "../images/cli3.jpeg";
import CourseCard from "./CourseCard";

const courseData = [
  {
    id: "01",
    title: "Ananya Singh",
    lesson: 12,
    students: 12.5,
    rating: 8.3,
    p: "The commitments they give are always folowed through, being genuine and giving proper advice, these are all the qualities required to establish trust. I cant emphasize enough how well they check out in all these aspects, if u are someone who is stuck or have no idea what to do just believe in them and you wont regret it.",
    imgUrl: a1,
  },
  {
    id: "02",
    title: "Rohit Kumar",
    lesson: 12,
    students: 12.5,
    rating: 7.9,
    p: "I had a great experience with Oxford Consultancy Services , amazing platform for all the students planning for higher studies. They are very cooperative and available whenever required. I would recommend them unreservedly. they have quick service. Thank you once again..",
    imgUrl: a2,
  },
  {
    id: "03",
    title: "Sharon Shetty",
    lesson: 12,
    students: 12.5,
    rating: 8.5,
    p: "Being genuine, building trust and supporting are their specialty. They have good experience and are reliable to give you best guidance with any scenario present and won't misguide. professional and personal touch well balanced.",
    imgUrl: a3,
  },
];
const Courses = () => {
  return (
    <div>
      <Container id="course" style={{ width: "85%" }}>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course_top d-flex justify-content-between align-items-center">
              <div className="course_top_left">
                <h2> Client Reviews</h2>
                <p className="texting">
                  Oxford consultancy emerges as a savior for all the students
                  and parents who are seeking for the best strategy to achieve
                  their academic goals. We are not just an advisor, but also a
                  guide that helps you in the identification of your true
                  potential. With our expert, one gets to analyze their strong
                  and weak areas, resulting in the best decisions and a path
                  towards a secure future.
                </p>
              </div>
              {/* <div>
                <button></button>
              </div> */}
            </div>
          </Col>
          {courseData.map((item) => (
            <Col lg="4" md="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
