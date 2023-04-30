import React from 'react';
import first from "../../../assets/1.png";
import second from "../../../assets/2.png";
import third from "../../../assets/3.png";
import { Card, Col, Row } from 'react-bootstrap';

const LeftNavNews = () => {
    return (
        <div>
            <Row xs={1} md={1} lg={1} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={first} />
                            <Card.Body>
                                <Card.Title>The brilliant kids</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additiona.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={second} />
                            <Card.Body>
                                <Card.Title>International student</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={third} />
                            <Card.Body>
                                <Card.Title>Brazil vs Argentina</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional cont.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
            </Row>
        </div>
    );
};

export default LeftNavNews;