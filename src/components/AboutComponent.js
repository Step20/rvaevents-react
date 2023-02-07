import React from "react";
import home2 from "../assets/img/home2.jpg";
import { Container, Row, Col } from "reactstrap";

export const About = () => {
  return (
    <div>
      <Container fluid id="about" className="about-group ">
        <Row>
          <Col className="text-center  mt-4">
            <h1 className="mt-5 mb-5">About</h1>
          </Col>
        </Row>
        <Row className="about-content ">
          <Col sm="6">
            <img src={home2} />
          </Col>
          <Col sm="5">
            <h4>Our Mission</h4>
            <p>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
