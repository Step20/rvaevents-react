import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardGroup,
  CardText,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

export const Events = () => {
  return (
    <div>
      <Container id="events" className="events-group ">
        <Row>
          <Col className="text-center  mt-4">
            <h1 className="mt-5">Events</h1>
          </Col>
        </Row>
        <Row className="events-content mt-4 ">
          <CardGroup>
            <Col sm="4">
              <Card
                className="events-card "
                style={{
                  width: "75%",
                  height: "100%",
                  cursor: "pointer",
                }}
              >
                <CardImg
                  alt="Card image cap"
                  src="https://picsum.photos/318/180"
                  top
                  width="100%"
                />
                <CardBody>
                  <CardTitle tag="h3">Card title</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    This is a wider card with text below supporting
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card
                className="events-card "
                style={{
                  width: "75%",
                  height: "100%",
                  cursor: "pointer",
                }}
              >
                <CardImg
                  alt="Card image cap"
                  src="https://picsum.photos/318/180"
                  top
                  width="100%"
                />
                <CardBody>
                  <CardTitle tag="h3">Card title</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    This is a wider card with text below supporting
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card
                className="events-card "
                style={{
                  width: "75%",
                  height: "100%",
                  cursor: "pointer",
                }}
              >
                <CardImg
                  alt="Card image cap"
                  src="https://picsum.photos/318/180"
                  top
                  width="100%"
                />
                <CardBody>
                  <CardTitle tag="h3">Card title</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    This is a wider card with text below supporting
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </CardGroup>
        </Row>
        <Row className="events-content mt-4 ">
          <CardGroup>
            <Col sm="4">
              <Card
                className="events-card "
                style={{
                  width: "75%",
                  height: "100%",
                  cursor: "pointer",
                }}
              >
                <CardImg
                  alt="Card image cap"
                  src="https://picsum.photos/318/180"
                  top
                  width="100%"
                />
                <CardBody>
                  <CardTitle tag="h3">Card title</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    This is a wider card with text below supporting
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card
                className="events-card "
                style={{
                  width: "75%",
                  height: "100%",
                  cursor: "pointer",
                }}
              >
                <CardImg
                  alt="Card image cap"
                  src="https://picsum.photos/318/180"
                  top
                  width="100%"
                />
                <CardBody>
                  <CardTitle tag="h3">Card title</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    This is a wider card with text below supporting
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col sm="4">
              <Card
                className="events-card "
                style={{
                  width: "75%",
                  height: "100%",
                  cursor: "pointer",
                }}
              >
                <CardImg
                  alt="Card image cap"
                  src="https://picsum.photos/318/180"
                  top
                  width="100%"
                />
                <CardBody>
                  <CardTitle tag="h3">Card title</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    This is a wider card with text below supporting
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </CardGroup>
        </Row>
        <Row>
          <Col className="mt-2">
            <Link
              to="/explore"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              ignoreCancelEvents={true}
            >
              {" "}
              <Button className="events-btn mt-5">
                All Recent Events
              </Button>{" "}
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
