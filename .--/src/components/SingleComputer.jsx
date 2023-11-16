import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { useState,useEffect } from 'react';
import * as computerService from "../services/userService"

const SingleComputer = () => {
    const [computer,setComputer] = useState([])

    useEffect(() => {
        computerService.getAll().then(result => setComputer(result))
    },[])

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
            <Card.Img
                variant="top"
                src="https://s13emagst.akamaized.net/products/49581/49580068/images/res_a262459b19ed69904b4ef7a2ec7c9a47.jpg?width=450&height=450&hash=815DAC38DE3E4357E69B2CD70F29F023"
            />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        </>
    );
};

export default SingleComputer;
