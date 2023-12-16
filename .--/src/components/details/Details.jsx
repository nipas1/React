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
    userId,
}) {
    const navigate = useNavigate();
    const [computer, setComputer] = useState({});
    const { computerId } = useParams();

    useEffect(() => {
        computerService.getOne(computerId).then(setComputer);
    }, [computerId]);

    //     const isOwner = userId === computer.ownerId
    // console.log(computer.ownerId);
    return (
        <>
            <div
                style={{
                    margin: "100px",
                    border: "flex",
                    textAlign: "center",
                }}
            >
                <Card.Img
                    variant="top"
                    src={computer.imageUrl}
                    style={{
                        border: "center",
                        textAlign: "center",
                        height: "200px",
                        width: "300px",
                    }}
                />
                <Card.Body>
                    <Card.Title style={{ fontWeight: "bold" }}>
                        {computer.model}
                    </Card.Title>
                    <Card.Text style={{ fontWeight: "bold" }}>
                        Type: {computer.compType}
                    </Card.Text>
                    <Card.Text style={{ fontWeight: "bold" }}>
                        Processor: {computer.processor}
                    </Card.Text>
                    <Card.Text style={{ fontWeight: "bold" }}>
                        VideoCard: {computer.videoCard}
                    </Card.Text>
                    <Card.Text style={{ fontWeight: "bold" }}>
                        RAM: {computer.ram}
                    </Card.Text>
                    <Card.Text style={{ fontWeight: "bold" }}>
                        SSD: {computer.ssd}
                    </Card.Text>
                    <Card.Text style={{ fontWeight: "bold" }}>
                        Price: {computer.price}$
                    </Card.Text>
                </Card.Body>
                <div style={{ margin: "20px" }}>
                    <Link
                        to={`/computers/${computer._id}/edit`}
                        className="details-button"
                        style={{
                            border: "10px",
                            borderRadius: "10px",
                            fontSize: "20px",
                            padding: "10px",
                            margin: "20px",
                            textAlign: "center",
                            fontWeight: "bold",
                            backgroundColor: "black",
                            color: "white",
                        }}
                    >
                        Edit
                    </Link>
                    <Link
                        to={`/computers/${computer._id}/delete`}
                        className="details-button"
                        style={{
                            border: "10px",
                            borderRadius: "10px",
                            fontSize: "20px",
                            padding: "10px",
                            margin: "20px",
                            textAlign: "center",
                            fontWeight: "bold",
                            backgroundColor: "black",
                            color: "white",
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
