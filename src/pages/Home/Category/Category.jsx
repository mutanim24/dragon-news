import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const [showNews, setShowNews] = useState(false);
    const { id } = useParams();
    const categoryNews = useLoaderData();
    // console.log(categoryNews);

    return (
        <div>
            {
                categoryNews.slice(1, showNews ? 20 : 5).map(news => <NewsCard
                    key={news._id}
                    news={news}
                ></NewsCard>)
            }
            <div className='text-center my-3'>
                <button onClick={() => setShowNews(!showNews)} className='btn btn-outline-primary'>More News</button>
            </div>
        </div>
    );
};

export default Category;