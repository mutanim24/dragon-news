import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../provider/AuthProvider';
import { Link } from 'react-router-dom';

const NavigationVar = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then()
        .catch(err => {
            console.log(err.message)
        })
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto text-primary ">
                            <Link to="/">Home</Link>
                            <Link className='mx-3'>About</Link>
                            <Link>Career</Link>
                        </Nav>
                        <Nav>
                            {user && <Nav.Link href="#deets"><FaUserCircle className='text-5xl'></FaUserCircle></Nav.Link>}
                            <Nav.Link eventKey={2} href="#memes">
                                {user ? <button onClick={handleLogOut} className='btn btn-primary'>Logout</button> : <Link to="/login"><button className='btn btn-primary'>Login</button></Link>}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationVar;