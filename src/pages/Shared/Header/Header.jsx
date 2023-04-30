import React, { useContext } from 'react';
import logo from "../../../assets/logo.png"
import moment from "moment";
import { Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { AuthContext } from '../../../provider/AuthProvider';

const Header = () => {
    const {user} = useContext(AuthContext);
    // console.log(user)
    return (
        <Container>
            <div className="text-center">
                <img className='my-4' src={logo} alt="" />
                <p><small>Journalism Without Fear or Favour</small></p>
                <p><small>{moment().format('dddd, MMMM D, YYYY')}</small></p>
            </div>
            <div className='d-flex bg-light p-2 mb-3'>
                <div className="btn btn-danger">Breaking</div>
                <Marquee className='text-danger' speed={100}>
                    I can be a React component, multiple React components, or just some text.....
                    I can be a React component, multiple React components, or just some text...............
                    {}
                </Marquee>
            </div>
            
        </Container>
    );
};

export default Header;