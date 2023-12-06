import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../../detailsPage.css";

import * as computerService from "../services/computerService";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Details({ _id, processor, ram, ssd, videoCard, model, compType }) {
    const navigate = useNavigate();
    const [computer, setComputer] = useState({});
    const { computerId } = useParams();

    const imageStyle = {
        maxWidth: "50%",
        height: "auto",
        borderRadius: "1px",
        margin: "auto",
    };

    useEffect(() => {
        computerService.getOne(computerId).then(setComputer);
    }, [computerId]);

    return (
        <>
            <body>
                <main>
                    <img
                        src={computer.imageUrl}
                        style={imageStyle}
                        alt="Placeholder Image"
                    />
                    <h1>Type :{computer.compType}</h1>
                    <p>{computer.processor}</p>
                    <p>{computer.videoCard}</p>
                    <p>{computer.ram}</p>
                </main>

                <footer>&copy; 2023 MyLaptop</footer>
            </body>
        </>
    );
}

export default Details;
