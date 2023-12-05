import { useState, useEffect, Fragment } from "react";
import * as computerService from "../../services/computerService";
import SingleComputer from "./SingleComputer";
import { useParams } from "react-router-dom";

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
            {computers.map((computer) => (
                <SingleComputer key={computer._id} {...computer} />
            ))}

            {computers.length === 0 && <h1>THERE ARENT ANY COMPUTERS YET</h1>}
        </>
    );
};

export default Catalog;
