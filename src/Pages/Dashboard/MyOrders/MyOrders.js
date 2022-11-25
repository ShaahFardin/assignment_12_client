import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(AuthContext);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

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
                                        <button className='text-green-500 font-semibold'>pay</button>
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