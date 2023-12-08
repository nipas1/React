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
        <>
            <h1 style={{fontWeight: "bold",}}>Login</h1>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ fontWeight: "bold" }}>
                        Email
                    </Form.Label>
                    <input
                        type="email"
                        name={LoginFormKeys.Email}
                        placeholder="Enter email"
                        value={values[LoginFormKeys.Email]}
                        onChange={onChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{ fontWeight: "bold" }}>
                        Password
                    </Form.Label>
                    <input
                        type="password"
                        name={LoginFormKeys.Password}
                        placeholder="Password"
                        value={values[LoginFormKeys.Password]}
                        onChange={onChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </>
    );
};

export default Login;
