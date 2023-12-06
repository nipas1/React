import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import AuthContext from "../contexts/authContext";

const Navigation = () => {
  const { isAuthenticated, username } = useContext(AuthContext);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">MyLaptop</Navbar.Brand>
          <Nav className="me-auto">
            <NavItem link="/" text="Home" />
            <NavItem link="/catalog" text="Catalog" />
            {isAuthenticated ? (
              <>
                <NavItem link="/addComputer" text="Add Computer" />
                <NavItem link="/singleUser" text={username} />
                <NavItem link="/logout" text="Logout" />
              </>
            ) : (
              <>
                <NavItem link="/login" text="Login" />
                <NavItem link="/register" text="Register" />
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
      <br />
    </>
  );
};

const NavItem = ({ link, text }) => (
  <Nav.Link as={Link} to={link}>
    {text}
  </Nav.Link>
);

export default Navigation;
