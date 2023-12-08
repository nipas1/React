import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useContext } from 'react';
import useForm from '../hooks/useForm';
import AuthContext from '../contexts/authContext';


const RegisterFormKeys = {
  Email: "email",
  Password: "password",
  RepeatPasswowrd: "repeatPassword"
};

const Register = () => {

  const { registerSubmitHandler } = useContext(AuthContext);

  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [RegisterFormKeys.Email]: "",
    [RegisterFormKeys.Password]: "",
    [RegisterFormKeys.RepeatPasswowrd]: "",
  });

  return (

    <>
    <h1 style={{fontWeight: "bold",}}>Register</h1>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label style={{fontWeight: "bold",}}>Email</Form.Label>
          <Form.Control
            type="email"
            name={RegisterFormKeys.Email}
            placeholder="Enter email"
            value={values[RegisterFormKeys.Email]}
            onChange={onChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{fontWeight: "bold",}}>Password</Form.Label>
          <Form.Control
            type="password"
            name={RegisterFormKeys.Password}
            placeholder="Password"
            value={values[RegisterFormKeys.Password]}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicRePassword">
          <Form.Label style={{fontWeight: "bold",}}>Repeat Password</Form.Label>
          <Form.Control
            type="password"
            name={RegisterFormKeys.RepeatPasswowrd}
            placeholder="Repeat Password"
            value={values[RegisterFormKeys.RepeatPasswowrd]}
            onChange={onChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" style={{fontWeight: "bold",}}>
          Register
        </Button>
      </Form>
    </>
  );
}

export default Register;