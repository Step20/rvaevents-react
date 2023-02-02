import React from "react";
import { Container, Row, Col } from "reactstrap";

export const Map = () => {
  return (
    <div>
      <Container id="map" className="map-group">
        <Row>
          <Col className="text-center  mt-4">
            <h1 className="mt-5">Explore Map</h1>
          </Col>
        </Row>
        <Row className="map-content ">
          <Col className="">
            <img
              className="map-img mt-5"
              src="https://picsum.photos/1150/480"
            />
            <div className="text-center mt-2">
              <p class="inline-block mx-1">
                Lorem ipsum dolor sit amet or consectetur adipisicing click{" "}
              </p>
              <a href="" class="inline-block">
                here
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
