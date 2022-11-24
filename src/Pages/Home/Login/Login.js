import { faCalendarCheck, faHome, faList, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import { setToken } from '../../../Hooks/setToken';


const Login = () => {

    const { googleSignIn, loginNewUser } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()

    const handleLogin = data => {
        loginNewUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                setToken(user)
                toast.success('Login successfull')
            })
    }
    
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {               
                toast.success("Google sign in successfull");
                setToken(result.user)
                navigate('/')
            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className='text-4xl font-thin'>Login</h1>
                <form className='my-5' onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email?.message}</p>}
                    </div>

                    <div className='form-control w-full max-w-xs'>
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6 }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password?.message}</p>}
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                    </div>
                    <div>

                    </div>
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                </form>
                <p>New to Doctors Portal?
                    <Link to='/register' className='text-primary underline'>
                        Create new account
                    </Link>
                </p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className="btn btn-outline w-full text-black">Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;