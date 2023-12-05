import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useState, useEffect } from "react";
import * as computerService from "../../services/userService";

const SingleComputer = ({
    imageUrl,
    model,
    compType,
    processor,
    ram,
    ssd,
    price,
    videoCard,
}) => {
    const [computer, setComputer] = useState([]);

    useEffect(() => {
        computerService.getAll().then((result) => setComputer(result));
    }, []);

    return (
        <>
            <Card
                style={{
                    display: "flex",
                    border: "1px solid #dadada",
                    transition: "0.2s",
                    width: "50%",
                }}
            >
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                    <Card.Title>{model}</Card.Title>
                    <Card.Text>
                        Type: {compType}
                        Processor: {processor}
                        Video Card: {videoCard}
                        RAM: {ram}
                        SSD: {ssd}
                    </Card.Text>
                    <Card.Text>Price: {price}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default SingleComputer;
