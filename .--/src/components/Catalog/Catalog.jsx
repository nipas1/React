import { useState, useEffect, Fragment } from "react";
import * as computerService from "../../services/computerService";
import SingleComputer from "./SingleComputer";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/esm/Row";

const Catalog = () => {
    const [computers, setComputer] = useState([]);
    const { computerId } = useParams();
    useEffect(() => {
        // computerService.getOne();
        computerService.getAll().then((result) => setComputer(result));
    }, []);
    // console.log(computers);
    return (
        <>
            <h1>Catalog Page</h1>
            <Row xs={1} md={3} className="g-4">
                {computers.map((computer) => (
                    <SingleComputer key={computer._id} {...computer} />
                ))}

                {computers.length === 0 && (
                    <h1
                        style={{
                            borderRadius: "10px",
                            fontSize: "100px",
                            padding: "100px",
                            margin: "5px",
                            fontWeight: "bold",
                            color: "black",
                        }}
                    >
                        THERE ARENT ANY COMPUTERS YET
                    </h1>
                )}
            </Row>
        </>
    );
};

export default Catalog;
