import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import { ExpNav } from "./ExpNavComponent";
import CardRender from "./CardComponent";

export default function Explore(props) {
  const [currentSelectedCard, setCurrentSelectedCard] = useState({
    image: " ",
    title: " ",
    tag: " ",
    tag2: " ",
    tag3: " ",
    desc: " ",
  });

  const callback = ({ image, title, tag, tag2, tag3, desc }) => {
    setCurrentSelectedCard({ image, title, tag, tag2, tag3, desc });
  };

  return (
    <div>
      <ExpNav />
      <Container fluid id="explore" className="explore-group">
        <Row className="explore-content mx-auto">
          <Col>
            <div className="box-l">
              <h1 className="text-center">All Events</h1>
              <div className="box-in">
                {props.eventsList.map((eventsList, index) => {
                  return (
                    <CardRender
                      callback={callback}
                      key={index}
                      image={eventsList.image}
                      title={eventsList.title}
                      tag={eventsList.tag}
                      tag2={eventsList.tag2}
                      tag3={eventsList.tag3}
                      desc={eventsList.desc}
                    ></CardRender>
                  );
                })}
              </div>
            </div>
          </Col>
          <Col className="">
            <div className="box-r">
              <div className="bc ">
                <div className="box-up ">
                  <div className="bc-img inline-block">
                    <img
                      style={{ borderRadius: ".5rem" }}
                      src={currentSelectedCard.image}
                    />
                  </div>
                  <div className="bc-text inline-block">
                    <div className="bc-title  text-center ">
                      <h3>{currentSelectedCard.title}</h3>
                    </div>
                    <div className="bc-tag">
                      <ul>
                        <li>{currentSelectedCard.tag}</li>{" "}
                        <li>{currentSelectedCard.tag2}</li>{" "}
                        <li>{currentSelectedCard.tag3}</li>
                      </ul>
                    </div>
                    <div className="bc-desc "></div>
                  </div>

                  <div className="box-mid pt-1 ">
                    <p className="text-muted">{currentSelectedCard.desc}</p>
                  </div>
                  <div className="box-low">
                    <Button className="box-btn">More Details</Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
