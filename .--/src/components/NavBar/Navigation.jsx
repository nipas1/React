import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";

import React from "react";

const Navigation = () => {
    const { isAuthenticated, username } = useContext(AuthContext);

    return (
        <>
            <style type="text/css">
                {`.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 10%;
}

    .nav-links {
        list-style: none;
    }
`}
            </style>
            <Navbar bg="dark" data-bs-theme="dark" fixed="top">
                <Container>
                    <Navbar.Brand>MyLaptop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/catalog">
                            Catalog
                        </Nav.Link>
                        {isAuthenticated && (
                            <>
                                <Nav.Link as={Link} to="/addComputer">
                                    Add Laptop
                                </Nav.Link>
                                <Nav.Link as={Link} to="/logout">
                                    Logout
                                </Nav.Link>
                            </>
                        )}
                        {!isAuthenticated && (
                            <>
                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>
                                <Nav.Link as={Link} to="/register">
                                    Register
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </>
    );
};

export default Navigation;
