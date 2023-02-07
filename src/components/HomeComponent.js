import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Container, Row, Col, Button } from "reactstrap";
import home1 from "../assets/img/home1.jpg";
import home2 from "../assets/img/home2.jpg";
import home3 from "../assets/img/home3.jpg";
import { About } from "./AboutComponent";
import { PageNav } from "./NavComponent";
import { Events } from "./EventsComponent";
import { Bar } from "./BarComponent";
import { Map } from "./MapComponent";
import { Footer } from "./FooterComponent";
import ScrollToTop from "react-scroll-to-top";
import { Link } from "react-scroll";

export const Home = () => {
  return (
    <div>
      <Container fluid className="home-bg " id="home">
        <div className="home-group ">
          <ScrollToTop
            smooth
            style={{
              width: "4rem",
              height: "4rem",
              borderRadius: "10px",
            }}
            className="back-top"
          />
          <Row>
            <Col className="home-text">
              <h1>Join the Community</h1>
              <br></br>
              <h1>to stay connected to yours.</h1>
            </Col>
          </Row>
          <Row className="home-text">
            <Col>
              <p>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been is
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                ignoreCancelEvents={true}
              >
                <Button className="home-btn ">Start Here!</Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                ignoreCancelEvents={true}
              >
                <IoIosArrowDown className="home-arrow " />
              </Link>
            </Col>
          </Row>
        </div>
      </Container>{" "}
      <About />
      <Events />
      <Bar />
      <Map />
      <Footer />
    </div>
  );
};
