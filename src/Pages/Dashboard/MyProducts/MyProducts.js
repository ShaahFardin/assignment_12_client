import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import MyProductCard from './MyProductCard';

const MyProducts = () => {

    const {user} = useContext(AuthContext);

    const url = `http://localhost:5000/myproduct?email=${user?.email}`;

    const { data: myproducts = [] } = useQuery({
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
            <h1 className='text-3xl tracking-wider'>My Products {myproducts.length}</h1>
            <div>
                {
                   myproducts.map(product =>
                     <MyProductCard key={product._id}  product={product}>

                     </MyProductCard>) 
                }
            </div>
        </div>
    );
};

export default MyProducts;