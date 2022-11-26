import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import MyProductCard from './MyProductCard';

const MyProducts = () => {

    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/allcars?email=${user?.email}`;

    const { data: myproducts = [], refetch } = useQuery({
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
            <h1 className='text-3xl font-semibold tracking-wider text-gray-500'>My Products</h1>
            <div>
                {
                    myproducts.map(product =>
                        <MyProductCard
                            key={product._id} refetch={refetch} product={product}>

                        </MyProductCard>)
                }
            </div>
        </div>
    );
};

export default MyProducts;