import { faBars, faCar, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const Header = () => {
    const { user, logoutUser } = useContext(AuthContext)

    const handleSignOut = () => {
        logoutUser()
            .then(() => toast.success("Logout successfull"))
            .catch((error) => console.log(error.message))
    }

    const menuItems =
        <>
            <>
                <li className='hover:bg-white hover:text-black hover:transition-all'><Link to='/'>Home</Link></li>
                <li className='hover:bg-white hover:text-black hover:transition-all'><Link to='/blogs'>Blogs</Link></li>     
                <li className='hover:bg-white hover:text-black hover:transition-all'><Link to='/registration'>Registration</Link></li>
            </>

            {user?.uid ?
                <>
                    <div className="dropdown dropdown-end  cursor-pointer">
                        <div tabIndex={0} className="avatar online">
                            <div className="w-8 ml-3 mt-2 md:w-14 rounded-full">
                                <img src={user?.photoURL} alt='' />
                            </div>
                        </div>
                        <ul tabIndex={0}
                            className="dropdown-content menu p-2  bg-[#1E2B47]  w-52">
                            <li className='hover:bg-base-100 hover:text-black'><Link to='/reviews'>{user?.displayName}</Link></li>
                            <li className='hover:bg-base-100 hover:text-black'><Link to='/dashboard'>Dashboard</Link></li>
                            <li className='hover:bg-base-100 hover:text-black'><button onClick={handleSignOut} >SignOut</button></li>
                        </ul>
                    </div>

                </>
                :
                <>
                    <li><Link to='/login'> <FontAwesomeIcon icon={faRightFromBracket} /> Login</Link></li>
                </>
            }

        </>

    return (
        <div className="navbar bg-primary flex justify-between text-sm ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 
                     text-white text-xl bg-primary shadow rounded-box w-52 ">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-2xl tracking-wider">
                    <p className=' text-white'>
                        <FontAwesomeIcon className='mr-2' icon={faCar}></FontAwesomeIcon>
                        CARVANA
                    </p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal items-center bg-primary text-xl  text-white p-0">
                    {menuItems}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost   lg:hidden">
                <FontAwesomeIcon className='text-white' icon={faBars}></FontAwesomeIcon>
               
            </label>
        </div>
    );
};

export default Header;