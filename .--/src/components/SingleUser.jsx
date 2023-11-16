import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { useState,useEffect } from 'react';
import * as userService from "../services/userService"

const SingleUser = () => {
    const [user,setUser] = useState([])

    useEffect(() => {
        userService.getAll().then(result => setUser(result))
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
                src="https://cdn-icons-png.flaticon.com/512/21/21104.png"
            />
            <Card.Body>
                <Card.Title>Full Name</Card.Title>
                <Card.Text>
                    Job
                </Card.Text>
                <Button variant="primary">Person Details</Button>
            </Card.Body>
        </Card>
        </>
    );
};

export default SingleUser;
