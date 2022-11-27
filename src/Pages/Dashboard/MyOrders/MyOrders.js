import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(AuthContext);
    const url = `https://server-ivory-alpha.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('carvanaToken')}`
                }
            });
            const data = await res.json();
            return data
        }
    })

    return (
        <div>
            <h1 className='text-3xl font-thin my-5'>My orders</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead >
                        <tr>
                            <th></th>
                            <th>Car Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th>Meeting Place</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map((booking, i) =>
                                <tr key={i}>
                                    <th>{i + 1}</th>
                                    <td>{booking.carName}</td>
                                    <td>$ {booking.price}</td>
                                    <td>{booking.meetingDate}</td>
                                    <td>{booking.meetingPlace}</td>
                                    <td>
                                        {
                                            booking.price && !booking.paid &&
                                            <Link to={`/dashboard/payment/${booking._id}`}>
                                                <button
                                                    className='px-6 py-2 font-medium tracking-wide
                                                     text-white capitalize transition-colors duration-300
                                                      transform bg-blue-600 rounded-md hover:bg-blue-500
                                                       focus:outline-none focus:ring focus:ring-blue-300
                                                        focus:ring-opacity-80'>
                                                    pay
                                                </button>
                                            </Link>
                                        }
                                        {
                                            booking.price && booking.paid &&
                                            <span className='text-green-500'>Paid</span>
                                        }
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;