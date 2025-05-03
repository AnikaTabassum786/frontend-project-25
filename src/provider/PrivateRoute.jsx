import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../layouts/Loading';

const PrivateRoute = ({children}) => {

    const {user,loader} = use(AuthContext)
    const location = useLocation()

    if(loader){
        return (
            <>
            <Loading></Loading>
            </>
        )
    }

    if(!user){
        return <Navigate state={location?.pathname} to='/auth/login'></Navigate>
    }

    return children
};

export default PrivateRoute;