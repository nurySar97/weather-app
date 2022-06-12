import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import { useStore } from "@src/hooks";
import { regions } from "@src/routes";

export const NavbarComponent = () => {
  const navigate = useNavigate();
  const { setCurrentWeather, weathers } = useStore();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  const onItemClick = (region) => {
    setCurrentWeather(weathers[region]);
    navigate("/weather");
  };

  return (
    <Navbar color="secondary" expand="sm">
      <Link className="navbar-brand text-light" to="/">
        reactstrap
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse className="justify-content-end" isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {regions.map((region, index) => (
            <NavItem key={index}>
              <div
                className="nav-link text-light cursor-pointer"
                onClick={() => onItemClick(region)}
              >
                {region}
              </div>
            </NavItem>
          ))}
        </Nav>
      </Collapse>
    </Navbar>
  );
};
