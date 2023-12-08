import { Fragment } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";
import CardGroup from "react-bootstrap/CardGroup";
import Col from "react-bootstrap/esm/Col";

const Home = () => {
    return (
        <Row xs={1} md={3} className="g-4">
            <Col key="1">
                <Card
                    style={{
                        display: "flex",
                        border: "1px solid #dadada",
                        transition: "0.2s",
                        width: "100%",
                    }}
                >
                    <Card.Img
                        variant="top"
                        src="https://i.ytimg.com/vi/EZkNUmVXg6U/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGDcgSSh_MA8=&rs=AOn4CLABFnqOzNUFGfoGQyPydCca_EWTEg"
                    />
                    <Card.Body>
                        <Card.Title>model</Card.Title>
                        <Card.Text>Type: </Card.Text>
                        {/* <Card.Text>Processor: {processor}</Card.Text>
                    <Card.Text>Video Card: {videoCard}</Card.Text>
                    <Card.Text>RAM: {ram}</Card.Text>
                    <Card.Text>SSD: {ssd}</Card.Text> */}
                        <Card.Text>Price:</Card.Text>
                        <Link to={`/computers`} className="details-button">
                            Details
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col key="2">
                <Card
                    style={{
                        display: "flex",
                        border: "1px solid #dadada",
                        transition: "0.2s",
                        width: "100%",
                    }}
                >
                    <Card.Img
                        variant="top"
                        src="https://i.ytimg.com/vi/EZkNUmVXg6U/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGDcgSSh_MA8=&rs=AOn4CLABFnqOzNUFGfoGQyPydCca_EWTEg"
                    />
                    <Card.Body>
                        <Card.Title>model</Card.Title>
                        <Card.Text>Type: </Card.Text>
                        {/* <Card.Text>Processor: {processor}</Card.Text>
                    <Card.Text>Video Card: {videoCard}</Card.Text>
                    <Card.Text>RAM: {ram}</Card.Text>
                    <Card.Text>SSD: {ssd}</Card.Text> */}
                        <Card.Text>Price:</Card.Text>
                        <Link to={`/computers`} className="details-button">
                            Details
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col key="3">
                <Card
                    style={{
                        display: "flex",
                        border: "1px solid #dadada",
                        transition: "0.2s",
                        width: "100%",
                    }}
                >
                    <Card.Img
                        variant="top"
                        src="https://i.ytimg.com/vi/EZkNUmVXg6U/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGDcgSSh_MA8=&rs=AOn4CLABFnqOzNUFGfoGQyPydCca_EWTEg"
                    />
                    <Card.Body>
                        <Card.Title>model</Card.Title>
                        <Card.Text>Type: </Card.Text>
                        {/* <Card.Text>Processor: {processor}</Card.Text>
                    <Card.Text>Video Card: {videoCard}</Card.Text>
                    <Card.Text>RAM: {ram}</Card.Text>
                    <Card.Text>SSD: {ssd}</Card.Text> */}
                        <Card.Text>Price:</Card.Text>
                        <Link to={`/computers`} className="details-button">
                            Details
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col key="4">
                <Card
                    style={{
                        display: "flex",
                        border: "1px solid #dadada",
                        transition: "0.2s",
                        width: "100%",
                    }}
                >
                    <Card.Img
                        variant="top"
                        src="https://i.ytimg.com/vi/EZkNUmVXg6U/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGDcgSSh_MA8=&rs=AOn4CLABFnqOzNUFGfoGQyPydCca_EWTEg"
                    />
                    <Card.Body>
                        <Card.Title>model</Card.Title>
                        <Card.Text>Type: </Card.Text>
                        {/* <Card.Text>Processor: {processor}</Card.Text>
                    <Card.Text>Video Card: {videoCard}</Card.Text>
                    <Card.Text>RAM: {ram}</Card.Text>
                    <Card.Text>SSD: {ssd}</Card.Text> */}
                        <Card.Text>Price:</Card.Text>
                        <Link to={`/computers`} className="details-button">
                            Details
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col key="5">
                <Card
                    style={{
                        display: "flex",
                        border: "1px solid #dadada",
                        transition: "0.2s",
                        width: "100%",
                    }}
                >
                    <Card.Img
                        variant="top"
                        src="https://i.ytimg.com/vi/EZkNUmVXg6U/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGDcgSSh_MA8=&rs=AOn4CLABFnqOzNUFGfoGQyPydCca_EWTEg"
                    />
                    <Card.Body>
                        <Card.Title>model</Card.Title>
                        <Card.Text>Type: </Card.Text>
                        {/* <Card.Text>Processor: {processor}</Card.Text>
                    <Card.Text>Video Card: {videoCard}</Card.Text>
                    <Card.Text>RAM: {ram}</Card.Text>
                    <Card.Text>SSD: {ssd}</Card.Text> */}
                        <Card.Text>Price:</Card.Text>
                        <Link to={`/computers`} className="details-button">
                            Details
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
            <Col key="6">
                <Card
                    style={{
                        display: "flex",
                        border: "1px solid #dadada",
                        transition: "0.2s",
                        width: "100%",
                    }}
                >
                    <Card.Img
                        variant="top"
                        src="https://i.ytimg.com/vi/EZkNUmVXg6U/hqdefault.jpg?sqp=-oaymwE1CKgBEF5IVfKriqkDKAgBFQAAiEIYAXABwAEG8AEB-AH-CYAC0AWKAgwIABABGDcgSSh_MA8=&rs=AOn4CLABFnqOzNUFGfoGQyPydCca_EWTEg"
                    />
                    <Card.Body>
                        <Card.Title>model</Card.Title>
                        <Card.Text>Type: </Card.Text>
                        {/* <Card.Text>Processor: {processor}</Card.Text>
                    <Card.Text>Video Card: {videoCard}</Card.Text>
                    <Card.Text>RAM: {ram}</Card.Text>
                    <Card.Text>SSD: {ssd}</Card.Text> */}
                        <Card.Text>Price:</Card.Text>
                        <Link to={`/computers`} className="details-button">
                            Details
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};

export default Home;
