import React from "react";

import { Container, Row, Col, Button } from "reactstrap";
import home1 from "../assets/img/home1.jpg";
import home2 from "../assets/img/home2.jpg";
import home3 from "../assets/img/home3.jpg";

export const Home = () => {
  return (
    <div>
      <Container fluid className="home-bg " id="home">
        <div className="home-group ">
          <Row className="home-title">
            <Col>
              <h1>Join the Community</h1>
              <br></br>
              <h1>to stay connected to yours.</h1>
            </Col>
          </Row>
          <Row className="home-text">
            <Col>
              <p>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="home-btn">
              <Button>Join the Community</Button>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
