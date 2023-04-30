import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import QZone from '../QZone/QZone';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import bg from "../../../assets/bg.png"


const RightNav = () => {
    return (
        <div>
            <div className="my-3">
                <h4 className='mb-3'>Login With</h4>
                <Button className='w-100 mb-2' variant="outline-primary"> Login with google</Button>
                <Button className='w-100' variant="outline-primary">Login with github</Button>
            </div>
            <div className="my-5">
                <h4 className='mb-3'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook>  Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='text-center py-3 rounded bg-light'>
                <h4>Q-Zone</h4>
                <QZone></QZone>
            </div>
            <div className="text-center my-4">
                <img src={bg} alt="" />
                {/* <div>
                    <h3><b>Create an Amazing Newspaper</b></h3>
                    <p className="my-e">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <button className='btn btn-danger'>Learn More</button>
                </div> */}
            </div>
        </div>
    );
};

export default RightNav;