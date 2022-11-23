import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { setToken } from '../../../Hooks/useToken';

const Registration = () => {

    const { createNewUserManually, updateUser } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signupError, setSignupError] = useState('');
    const navigate = useNavigate()

    const handleSignUp = (data) => {

        const image = data.image[0]
        const formData = new FormData()
        formData.append('image', image)

        const url = "https://api.imgbb.com/1/upload?key=c0c288d3b71cdf6e06fc9836f621bfc8"
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then((imageData) => {
                console.log("image data", imageData.data.url);
                const userInfo = {
                    displayName: data.name,
                    photoURL: imageData.data.url
                }
                createNewUserManually(data.email, data.password)
                    .then(result => {
                        setToken(result.user)
                        updateUser(userInfo)
                            .then(() => {                               
                                toast.success("user created successfully")
                                navigate('/')
                            })
                    })
            })
    }


    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className='text-4xl font-thin'>SignUp</h1>
                <form className='my-5' onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text"
                            {...register('name', { required: true })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>First name is required</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Photo</span></label>
                        <input type="file" placeholder='Your Photo URL'
                            {...register('image', { required: true })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.image && <p className='text-red-500'>Photo URL is must</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email"
                            {...register('email', { required: true })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>Email name is required</p>}
                    </div>

                    <div className='form-control w-full max-w-xs'>
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register('password', { required: "Password must be atleast 6 character" })}
                            className="input input-bordered w-full max-w-xs" />

                        {signupError && <p className='text-red-500'>{errors.password.message}</p>}

                    </div>

                    <input className='btn btn-accent w-full mt-5' value="Login" type="submit" />
                </form>
                <p>New to Doctors Portal?
                    <Link to='/login' className='text-primary underline'>
                        Login
                    </Link>
                </p>
                <div className="divider">OR</div>
                <button className="btn btn-outline w-full text-black">Continue with Google</button>
            </div>
        </div>
    );
};

export default Registration;