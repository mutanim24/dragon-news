import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { useContext } from 'react';
import { useState } from 'react';

const Register = () => {
    const [terms, setTerms] = useState(false);
    const { createUser } = useContext(AuthContext);

    const handleSignIn = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(loggedUser);
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    return (
        <Form onSubmit={handleSignIn} className='w-25 border p-2 rounded mx-auto'>
            <h2 className='fw-bold text-center'>Register now</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Phot url</Form.Label>
                <Form.Control name='photo' type="text" placeholder="Photo url" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check onClick={(e) => setTerms(e.target.checked)} type="checkbox" label={<>Accept <Link to="/terms">terms and condition</Link></>} />
            </Form.Group>
            <Button
                variant="primary"
                type="submit"
                disabled={!terms}
            >
                Register
            </Button>
            <br />
            <Form.Text className="text-muted">
                Already have an account <Link to="/login">Login</Link>
            </Form.Text>
        </Form>
    );
};

export default Register;