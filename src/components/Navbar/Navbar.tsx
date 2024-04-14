import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBS from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navbar = () => {
  return (
    <NavbarBS expand="lg" className="bg-body-tertiary">
      <Container>
        <NavbarBS.Brand href="#home">React-Bootstrap</NavbarBS.Brand>
        <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBS.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
  );
};

export default Navbar;