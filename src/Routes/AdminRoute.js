import React, { Children, useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const AdminRoute = () => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <progress className="progress w-56 items-center"></progress>
    }

    if(user){
        return Children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminRoute;