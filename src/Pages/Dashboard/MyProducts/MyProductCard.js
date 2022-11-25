import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const MyProductCard = ({ product , event}) => {

    const { carName, brandName, image, price, availabe, _id } = product;

    const handleAdvertise = () =>{

        fetch('http://localhost:5000/advertisedProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data);
            toast.success('Advertisement successfull');
            event.target.reset()
        })
    }

    return (
        <div className='lg:w-96 md:w-1/2 p-4 w-full'>
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

                </h3>

                <h2 className='text-gray-900 title-font text-base font-medium'>
                    {carName}
                </h2>

                <p className='mt-1 font-thin text-xs'> Resale Price :
                    <span className='font-bold'> ${price}</span>
                </p>
                <div className='flex justify-between mt-2'>

                    <button >
                        <p className='text-xs text-orange-400 font-semibold'>Delete</p>
                    </button>
                    <div className='text-xs font-thin'>
                        <span className='mr-1'></span>
                        <button onClick={handleAdvertise} >
                            { availabe && <p className='text-xs text-green-400 font-semibold'>
                                Advertise
                                </p>}
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