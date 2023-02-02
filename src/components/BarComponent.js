import React from "react";
import { BsFillChatLeftFill } from "react-icons/bs";
import { BsPinMapFill } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { Container, Row, Col } from "reactstrap";

export const Bar = () => {
  return (
    <div>
      <Container fluid id="bar" className="bar-group ">
        <Row className="text-center mx-auto  bar-content">
          <Col className="mx-2">
            <BsFillChatLeftFill />
            <h4 className="mt-3">This is a wider card with text</h4>
          </Col>
          <Col className="mx-2">
            <BsPinMapFill />
            <h4 className="mt-3">This is a wider card with text</h4>
          </Col>
          <Col className="mx-2">
            <BsPeopleFill />
            <h4 className="mt-3">This is a wider card with text</h4>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
