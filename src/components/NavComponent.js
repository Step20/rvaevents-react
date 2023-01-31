import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavbarBrand,
  Container,
  NavLink,
} from "reactstrap";

import { Link } from "react-scroll";

export const PageNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Container fluid>
        <Navbar color="white" light expand="sm" className="page-nav fixed-top ">
          <NavbarBrand className="p-5 nav-brand" href="/">
            <h1>
              <span style={{ color: "orange" }}>rva</span>events
            </h1>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mx-5 nav-2 " navbar>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                ignoreCancelEvents={true}
              >
                <NavItem className="mx-5">
                  <NavLink>Home</NavLink>
                </NavItem>
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                ignoreCancelEvents={true}
              >
                <NavItem className="mx-5">
                  <NavLink>About</NavLink>
                </NavItem>
              </Link>
              <NavItem className="mx-5">
                <NavLink>Projects</NavLink>
              </NavItem>
              <NavItem className="mx-5">
                <NavLink>Resume</NavLink>
              </NavItem>{" "}
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </div>
  );
};
