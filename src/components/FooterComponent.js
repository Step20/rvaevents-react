import React from "react";
import {
  Container,
  Row,
  Col,
  Input,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import { FiMail } from "react-icons/fi";
import { MdPhoneInTalk } from "react-icons/md";
import { TiSocialTwitter } from "react-icons/ti";

export const Footer = () => {
  return (
    <div>
      <Container fluid className="footer-group">
        <Row>
          <Col sm="6">
            <div className="ft-box-hold mx-2">
              <div className="ft-box mx-auto ">
                <h2 className="text-center">Subscribe Newsletter</h2>
                <InputGroup size="lg" className="ft-in mx-auto mt-4">
                  <InputGroupText>
                    <FiMail />
                  </InputGroupText>
                  <Input />
                </InputGroup>
                <p className="text-center mt-2" style={{ opacity: ".5" }}>
                  Lorem ipsum dolor sit amet or consectetur
                </p>
              </div>
            </div>
          </Col>
          <Col className="ft-box2  ">
            <ul className="inline-block mx-3">
              <h2 className="mb-4 ">Service</h2>
              <li>About us</li>
              <li>Contact Us</li>
              <li>Features</li>
              <li>Blogs</li>
            </ul>

            <ul className="inline-block mx-3">
              <h2 className="mb-4 ">Resources</h2>
              <li>Apps</li>
              <li>Developer</li>
              <li>Integration</li>
              <li>Pricing</li>
            </ul>

            <ul className="inline-block mx-3">
              <h2 className="mb-4 ">Contact</h2>
              <li>
                <FiMail style={{ fontSize: "1.3rem", marginRight: "1rem" }} />
                rvaevents@gmail.co
              </li>
              <li>
                <MdPhoneInTalk
                  style={{ fontSize: "1.3rem", marginRight: "1rem" }}
                />
                +1 804-523-4444
              </li>
              <li>
                <TiSocialTwitter
                  style={{ fontSize: "1.3rem", marginRight: "1rem" }}
                />
                @rvaevents
              </li>
              <li>
                <br></br>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr
              style={{
                color: "white",
                width: "90%",
                opacity: ".1",
              }}
              className="mx-auto mt-4"
            ></hr>
            <p
              style={{
                color: "white",
                fontSize: "small",
                opacity: ".1",
              }}
              className="text-center"
            >
              ©2023 ARK Innovations All rights reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
