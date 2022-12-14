import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { setToken } from '../../../Hooks/setToken';


const Registration = () => {

    const { createNewUserManually, updateUser, googleSignIn } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signupError, setSignupError] = useState('');
    const [role, setRole] = useState('')
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
                        setToken(result.user, data.identity)
                        updateUser(userInfo)
                            .then(() => {
                                console.log(`role of the user ${role}`);
                                toast.success("user created successfully")
                                navigate('/')
                            })
                    })
            })
    }


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
                setToken(result.user)
                toast.success("Google sign in successfull")
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 p-7 '>
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
                    <div className='form-control w-full max-w-xs mt-5'>
                        <select
                        onSelect={event=>setRole(event.target.value)}
                         {...register('identity', { required: "Confirm your identity" })} className="select select-bordered w-full max-w-xs">                            
                            <option>User</option>
                            <option>Seller</option>
                            <option>Admin</option>
                        </select>
                    </div>

                    <input className='btn btn-accent w-full mt-5' value="Signup" type="submit" />
                </form>
                <p>New to Doctors Portal?
                    <Link to='/login' className='text-[#1A73E8] ml-2 underline'>
                        Login
                    </Link>
                </p>
                <div className="divider">OR</div>
                <button
                 onClick={handleGoogleSignIn}
                  className="btn btn-outline w-full text-black">Continue with Google</button>
            </div>
        </div>
    );
};

export default Registration;