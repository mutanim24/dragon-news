import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBookmark, FaEye, FaRegBookmark, FaRegStar, FaShare, FaShareAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
    const { _id, title, details, image_url, author, rating, total_view } = news;
    return (
        <div>
            <Card className="mb-4">
                <Card.Header className='d-flex align-items-center'>
                    <Image style={{ width: "40px", height: "40px" }} src={author.img} roundedCircle />
                    <div className='flex-grow-1 ps-3'>
                        <p className='mb-0 fw-bold'>{author.name}</p>
                        <p>{author.published_date}</p>
                    </div>
                    <div>
                        <FaRegBookmark></FaRegBookmark> <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img className='my-3' variant="top" src={image_url} />
                    <Card.Text>
                        {details.length > 200 ?
                            <><span>{details.slice(0, 200)}....</span><Link to={`/news/${_id}`}>Read More</Link></> :
                            <p>{details}</p>}
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between align-items-center">
                    <div className='d-flex gap-2'>
                        <div>
                            <Rating
                                readonly
                                placeholderRating={rating.number}
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaRegStar></FaRegStar>}
                                fullSymbol={<FaStar className='text-primary'></FaStar>}
                            />
                        </div>
                        <div>{rating.number}</div>
                    </div>
                    <div>
                        <span className='pe-2'><FaEye></FaEye></span>
                        <span>{total_view}</span>
                    </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;