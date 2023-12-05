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
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name={RegisterFormKeys.Email}
            placeholder="Enter email"
            value={values[RegisterFormKeys.Email]}
            onChange={onChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name={RegisterFormKeys.Password}
            placeholder="Password"
            value={values[RegisterFormKeys.Password]}
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicRePassword">
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control
            type="password"
            name={RegisterFormKeys.RepeatPasswowrd}
            placeholder="repeatPassword"
            value={values[RegisterFormKeys.RepeatPasswowrd]}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </>
  );
}

export default Register;