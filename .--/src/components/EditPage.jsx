import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import * as computerService from "../services/computerService";
import { useNavigate } from "react-router-dom";

function Edit({ _id, processor, ram, ssd, videoCard, price, type }) {
    const navigate = useNavigate();
    const createComputerHandler = async (e) => {
        e.preventDefault();

        const compData = Object.fromEntries(new FormData(e.currentTarget));
        console.log(compData);
        try {
            await computerService.create(compData);

            navigate("/catalog");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Form onSubmit={createComputerHandler}>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Add Image</Form.Label>
                        <Form.Control
                            id="imageUrl"
                            type="text"
                            name="imageUrl"
                            placeholder="Upload img"
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Computer model</Form.Label>
                        <Form.Control name="model" placeholder="Model" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Type</Form.Label>
                        <Form.Control
                            nmae="compType"
                            placeholder="Gaming,Office"
                        />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Processor</Form.Label>
                    <Form.Control name="processor" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Video Card</Form.Label>
                    <Form.Control name="videoCard" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Ram</Form.Label>
                        <Form.Control name="ram" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>SSD</Form.Label>
                        <Form.Control name="ssd" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Price</Form.Label>
                        <Form.Control name="price" />
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit">
                    Edit
                </Button>
            </Form>
        </>
    );
}

export default Edit;
