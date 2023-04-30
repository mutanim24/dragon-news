import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import EditorInsight from '../EditorInsight/EditorInsight';

const News = () => {
    const news = useLoaderData();
    console.log(news);
    const { title, details, image_url, category_id } = news;
    return (
        <div>
            <Card>
                <Card.Img className='p-2 mb-3' variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}> <Button variant="danger"><FaArrowLeft></FaArrowLeft> All news in this category</Button></Link>
                </Card.Body>
            </Card>
            <div className='my-4'>
                <h2>Editors Insight</h2>
                <EditorInsight></EditorInsight>
            </div>
        </div>
    );
};

export default News;