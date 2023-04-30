import React, { useEffect, useState } from 'react';
import { Link, NavLink,  } from 'react-router-dom';
import LeftNavNews from '../LeftNavNews/LeftNavNews';
const isActive = (navlinkUrl) => {
    return navlinkUrl === location.pathname;
  };

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/categories")
        .then(res => res.json())
        .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <div>
            <h4 className='mb-4'>All Category</h4>
            {
                categories.map(category => <p key={category.id}><NavLink to={`category/${category.id}`} className={`text-dark text-decoration-none`}>{category.name}</NavLink></p>)
            }
            </div>
            <div>
               <LeftNavNews></LeftNavNews> 
            </div>
        </div>
    );
};

export default LeftNav;