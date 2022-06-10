import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";

const regions = ["Ahal", "Mary", "Lebap", "Balkan", "Dashoguz"];

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div>
      <Navbar color="secondary" expand="sm">
        <Link className="navbar-brand text-light" to="/">
          reactstrap
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse className="justify-content-end" isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {regions.map((region, index) => (
              <NavItem key={index}>
                <Link className="nav-link text-light" to={`/weather/${region}`}>
                  {region}
                </Link>
              </NavItem>
            ))}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
