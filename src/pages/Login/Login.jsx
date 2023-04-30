import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    // console.log(location.state.from.pathname)
    const from = location.state?.from?.pathname || '/category/0';

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from)
        })
        .catch(err => {
            console.log(err.message)
        })
    }
    return (
        <Form onSubmit={handleLogin} className='w-25 border p-2 rounded mx-auto'>
            <h2 className='fw-bold text-center'>Please Login</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Login
            </Button>
            <br />
            <Form.Text className="text-muted">
                Don't you have an account <Link to="/register">Register</Link>
            </Form.Text>
        </Form>
    );
};

export default Login;