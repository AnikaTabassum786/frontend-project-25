import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';
import Loading from '../layouts/Loading';

const PrivateRoute = ({children}) => {

    const {user,loader} = use(AuthContext)

    if(loader){
        return (
            <>
            <Loading></Loading>
            </>
        )
    }

    if(!user){
        return <Navigate to='/auth/login'></Navigate>
    }

    return children
};

export default PrivateRoute;