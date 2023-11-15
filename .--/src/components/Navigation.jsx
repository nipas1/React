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
                        <Nav.Link as={Link} to="/charCard">
                            CharCard
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <br />
        </>
    );
};

export default Navigation;
