import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import useForm from "../hooks/useForm";
import { useContext } from "react";
import AuthContext from "../contexts/authContext";

const LoginFormKeys = {
    Email: "email",
    Password: "password",
};

const Login = () => {
    const { loginSubmitHandler } = useContext(AuthContext);

    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LoginFormKeys.Email]: "",
        [LoginFormKeys.Password]: "",
    });

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    name={LoginFormKeys.Email}
                    placeholder="Enter email"
                    onChange={onChange}
                    value={values[LoginFormKeys.Email]}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    name={LoginFormKeys.Password}
                    placeholder="Password"
                    onChange={onChange}
                    values={values[LoginFormKeys.Password]}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
        </Form>
    );
};

export default Login;
