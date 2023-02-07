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
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="light" light expand="lg" className="page-nav fixed-top ">
        <NavbarBrand className=" nav-brand" href="/">
          <h1>
            <span className="nb-text">rva</span>events
          </h1>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className=" nav-2 me-auto" navbar>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              ignoreCancelEvents={true}
            >
              <NavItem className="mx-5 ">
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
            <Link
              to="events"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              ignoreCancelEvents={true}
            >
              <NavItem className="mx-5">
                <NavLink>Events</NavLink>
              </NavItem>
            </Link>
            <Link
              to="map"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              ignoreCancelEvents={true}
            >
              <NavItem className="mx-5">
                <NavLink>Map</NavLink>
              </NavItem>
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
