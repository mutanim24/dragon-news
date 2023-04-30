import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container className='text-center'>
            <h2>Accept Terms And Condition</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat omnis minus blanditiis quo! Atque fugiat magnam accusantium suscipit provident repellat qui, velit eos asperiores dicta soluta libero, quam natus praesentium.</p>
            <p>Back to <Link to="/register">Register</Link></p>
        </Container>
    );
};

export default Terms;