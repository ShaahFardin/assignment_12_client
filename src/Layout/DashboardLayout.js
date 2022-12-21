import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hooks/useAdmin';
import useSeller from '../Hooks/useSeller';
import Header from '../Pages/Shared/Header/Header';

const DashboardLayout = () => {

    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)

    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content px-8 mt-10">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu text-xl  p-4 w-80 bg-primary text-base-300">
                             <li><Link to='/dashboard'>MY ORDERS</Link></li>

                        {
                            isSeller &&
                            <>
                                <li><Link to='/dashboard/addproduct'>ADD PRODUCTS</Link></li>
                                <li><Link to='/dashboard/myproducts'>MY PRODUCTS</Link></li>
                            </>
                        }


                        {
                            isAdmin &&
                            <>
                                
                                <li><Link to='/dashboard/allusers'>ALL SELLER</Link></li>
                                <li><Link to='/dashboard/addproduct'>ADD PRODUCTS</Link></li>
                                <li><Link to='/dashboard/myproducts'>MY PRODUCTS</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;