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
import { TbArrowBackUp } from "react-icons/tb";
import { Link } from "react-scroll";

export const ExpNav = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar
        color="white"
        light
        expand="sm"
        className="ex-page-nav fixed-top "
      >
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="mx-5 nav-2 " navbar>
            <NavItem className="">
              <NavLink
                href="/"
                style={{
                  color: "#003ace",
                  opacity: ".8",
                  textDecoration: "underline",
                }}
              >
                <TbArrowBackUp className="mx-1" href="/" />
                <span href="/">Back to home</span>
              </NavLink>
            </NavItem>

            <NavbarBrand className=" ex-nav-brand " href="/">
              <h1 className="">
                <span className="ex-nb-text">rva</span>events
              </h1>
            </NavbarBrand>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
