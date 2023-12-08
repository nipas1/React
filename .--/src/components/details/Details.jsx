import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import * as computerService from "../../services/computerService";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Details({
    _id,
    processor,
    ram,
    ssd,
    videoCard,
    model,
    compType,
    price,
}) {
    const navigate = useNavigate();
    const [computer, setComputer] = useState({});
    const { computerId } = useParams();

    useEffect(() => {
        computerService.getOne(computerId).then(setComputer);
    }, [computerId]);

    return (
        <>
            <div>
                <Card.Img
                    variant="top"
                    style={{
                        border: "flex",
                        textAlign: "center",
                        height: "250px",
                        width: "350px",
                    }}
                    src={computer.imageUrl}
                />
                <Card.Body>
                    <Card.Title>{computer.model}</Card.Title>
                    <Card.Text>Type: {computer.compType}</Card.Text>
                    <Card.Text>Processor: {computer.processor}</Card.Text>
                    <Card.Text>VideoCard: {computer.videoCard}</Card.Text>
                    <Card.Text>RAM: {computer.ram}</Card.Text>
                    <Card.Text>SSD: {computer.ssd}</Card.Text>
                    <Card.Text>Price: {computer.price}</Card.Text>
                </Card.Body>
                <div
                    style={{
                        border: "1px white",
                        height: "5rem",
                        placeItems: "center",
                        display: "inline-block",
                    }}
                >
                    <Link
                        to={`/computers/${computer._id}`}
                        className="details-button"
                        style={{
                            borderRadius: "10px",
                            fontSize: "20px",
                            padding: "20px",
                            margin: "5px",
                            textAlign: "center",
                            fontWeight: "bold",
                            color: "black",
                        }}
                    >
                        Edit
                    </Link>
                    <Link
                        to={`/computers/${computer._id}`}
                        className="details-button"
                        style={{
                            borderRadius: "10px",
                            fontSize: "20px",
                            padding: "20px",
                            margin: "5px",
                            textAlign: "center",
                            fontWeight: "bold",
                            color: "black",
                        }}
                    >
                        Delete
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Details;
