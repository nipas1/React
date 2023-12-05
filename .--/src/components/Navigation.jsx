import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import AuthContext from "../contexts/authContext";

const Navigation = () => {
    const { isAuthenticated, username } = useContext(AuthContext);

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
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
                                    Add Computer
                                </Nav.Link>
                                <Nav.Link as={Link} to="/singleUser">
                                    {username}
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
