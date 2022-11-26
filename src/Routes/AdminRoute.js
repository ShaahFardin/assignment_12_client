import React, { Children, useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hooks/useAdmin';

const AdminRoute = () => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    const [isAdmin, isAdminLoading]= useAdmin(user?.email)

    if(loading || isAdminLoading){
        return <progress className="progress w-56 items-center"></progress>
    }

    if(user && isAdmin){
        return Children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminRoute;