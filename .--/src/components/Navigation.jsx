import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navigation = () => {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand>Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/catalog">
                            Catalog
                        </Nav.Link>
                        <Nav.Link as={Link} to="/login">
                            Login
                        </Nav.Link>
                        <Nav.Link as={Link} to="/register">
                            Register
                        </Nav.Link>
                        <Nav.Link as={Link} to="/singleComputer">
                            Computer
                        </Nav.Link>
                        <Nav.Link as={Link} to="/singleUser">
                            User
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </>
    );
};

export default Navigation;
