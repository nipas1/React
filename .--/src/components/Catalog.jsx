import { useState, useEffect, Fragment } from "react";
import * as computerService from "../services/computerService";
import SingleComputer from "./SingleComputer";

const Catalog = () => {
    const [computers, setComputer] = useState([]);

    useEffect(() => {
        computerService.getAll().then((result) => setComputer(result));
    }, []);
    console.log(computers);
    {
        computers ? (
            <Fragment>
                <h1>Catalog Page</h1>
                {computers.map((computer) => (
                    <SingleComputer key={computer._id} {...computer} />
                ))}
            </Fragment>
        ) : (
            <h1>THERE ARE NOT ANY COMPUTERS</h1>
        );
    }
};

export default Catalog;
