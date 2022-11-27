import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const MyProductCard = ({ product, refetch }) => {

    const { carName, brandName, image, resalePrice, availabe, _id, location } = product;
    const [itemAvailable, setItemAvailable] = useState(true)

    const handleAdvertise = () => {

        const advertisedProduct = {
            carName: carName,
            brandName: brandName,
            resalePrice: resalePrice,
            location: location,
            image: image,
            availabe: availabe,    
        }

        fetch('http://localhost:5000/shownAddProductCollection', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(advertisedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Advertisement successfull');
                setItemAvailable(false)
            })
    }

    const handleDeleteProducts = id =>{
        fetch(`http://localhost:5000/allcars/${id}`, {
            method: 'DELETE',
            headers:{
                authorization: `bearer ${localStorage.getItem('carvanaToken')}`
            }
        })
        .then( res => res.json())
        .then( data =>{
            toast.success("Product Deleted Successfully")
            refetch();
        })
    }

    return (
        <div className='lg:w-80 md:w-1/2 p-4 w-full'>
            <Link

                className='block relative h-32 rounded overflow-hidden'
            >
                <img
                    alt=''
                    className='object-cover object-center w-full h-full block'
                    src={image}
                />
            </Link>
            <div className='mt-4'>
                <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
                    {location}
                </h3>

                <h2 className='text-gray-900 title-font text-base font-medium'>
                    {carName}
                </h2>

                <p className='mt-1 font-thin text-xs'> Resale Price :
                    <span className='font-bold'> ${resalePrice}</span>
                </p>
                <div className='flex justify-between mt-2'>

                    <button onClick={()=>handleDeleteProducts(_id)}>
                        <p className='text-xs text-orange-400 font-semibold'>Delete</p>
                    </button>
                    <div className='text-xs font-thin'>
                        <span className='mr-1'></span>
                        <button onClick={handleAdvertise} >
                            {
                                itemAvailable &&
                                <p className='text-xs text-green-400 font-semibold'>
                                    Advertise
                                </p>
                            }
                        </button>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default MyProductCard;