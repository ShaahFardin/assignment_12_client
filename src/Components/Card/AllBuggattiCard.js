import { faCircleCheck, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const AllBuggattiCard = ({ buggatti, setBookCar }) => {

    const { image, location, carName, originalPrice, resalePrice,
        sellerName, sellerVerified, posted, description } = buggatti;

    return (
        <div className='lg:w-full lg:px-48 md:w-1/2 p-4 w-full'>
            <Link
                to='/coming-soon'
                className='block relative h-64 rounded overflow-hidden'
            >
                <img
                    alt='e-commerce'
                    className='object-cover object-center w-full h-full block'
                    src={image}
                />
            </Link>
            <div className='mt-4'>
                <h3 className='text-gray-500 text-xs tracking-widest title-font mb-1'>
                    {location}
                </h3>

                <div className='text-start'>
                    <h2 className='text-gray-900 title-font text-lg font-medium'>
                        {carName}
                    </h2>
                    <p className='font-thin text-xs'>
                        Original price <span className='mt-1 '>${originalPrice}</span>
                    </p>
                    <p className='mt-1 font-thin text-xs'> Resale Price :
                        <span className='font-bold'> ${resalePrice}</span>
                    </p>
                    <p className='mt-1 font-thin text-xs'> Posted on :
                        <span className=''> ${posted}</span>
                    </p>
                    <p className='mt-1 font-thin text-xs'>
                        <span className=''> ${description}</span>
                    </p>
                </div>

                <div className='flex justify-between mt-2'>
                    <button onClick={()=>setBookCar(buggatti)}>
                        <label htmlFor="Booking-modal"
                            className="text-xs cursor-pointer bg-red-500 px-3 py-1 rounded-sm text-white font-semibold">Book Now</label>
                    </button>

                    <div className='flex justify-center text-xs mt-1'>
                        <div>
                            <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                            <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className='text-xs font-thin'>
                        <span className='mr-1'>Seller : {sellerName}</span>
                        <span>
                            {sellerVerified && <FontAwesomeIcon className='text-blue-500' icon={faCircleCheck}></FontAwesomeIcon>}
                        </span>
                    </div>
                </div>
            
            </div>
        </div>
    );
};

export default AllBuggattiCard;