import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext);
    const location = useLocation();
    console.log(location)

    if(loader){
        return <Spinner className='mx-auto' animation="border" />
    }

    if(user){
        return children;
    }
    else{
        return <Navigate state={{from: location}} to="/login" replace></Navigate>
    }
}

export default PrivateRoute;