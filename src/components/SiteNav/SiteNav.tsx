import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { RxAvatar } from "react-icons/rx";
import Buttontry from "../DarkModeToggle/Buttontry";

const SiteNav = () => {

  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="bg-body-tertiary" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home">{!isLoggedIn ? "React-Bootstrap" : "Profile"}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="visible">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
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
        </Navbar.Collapse>
        <Navbar.Collapse className=" visible justify-end" >
          <Nav>
            {!isLoggedIn && <><NavLink to="/register">Register</NavLink><NavLink to="/login">Login</NavLink></>}
            {isLoggedIn && (<>
              <NavLink to="/profile"><RxAvatar /></NavLink>
              <button
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
              >
                Logout
              </button>
            </>)}
          </Nav>
          <Buttontry />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default SiteNav;
