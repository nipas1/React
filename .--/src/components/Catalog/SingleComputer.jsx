import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useState, useEffect } from "react";
import * as computerService from "../../services/userService";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/esm/Col";

const SingleComputer = ({ _id, imageUrl, model, compType, price, }) => {
    const [computer, setComputer] = useState([]);

    useEffect(() => {
        computerService.getAll().then((result) => setComputer(result));
    }, []);

    return (
        <>
            <Col>
                <Card style={{
                        display: "flex",
                        border: "1px solid #dadada",
                        transition: "0.2s",
                        width: "100%",
                    }}>
                    <Card.Img variant="top" src={imageUrl} />
                    <Card.Body>
                        <Card.Title>{model}</Card.Title>
                        <Card.Text>Type: {compType}</Card.Text>
                        <Card.Text>Price: {price}$</Card.Text>
                        <Link
                            to={`/computers/${_id}`}
                            className="details-button"
                        >
                            Details
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default SingleComputer;
