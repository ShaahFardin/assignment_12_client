import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const DisplayError = () => {

    const { logoutUser } = useContext(AuthContext)
    const error = useRouteError();
    const navigate = useNavigate();

    const handleSignOut = () => {
        logoutUser()
            .then(() => {
                toast.success("Logout successfull");
                navigate('/login')
            })
            .catch((error) => console.log(error.message))
    }


    return (
        <div>
            <p className='text-5xl text-red-500 font-bold mt-64'>Sorry! Something Went Wrong</p>
            <p className='text-xl text-red-500'>{error.statusText || error.message}</p>
            <p>
                Please
                <button
                    className='mx-2 underline text-blue-500'
                    onClick={handleSignOut} >SignOut
                </button>
                and log back in
            </p>
        </div>
    );
};

export default DisplayError;