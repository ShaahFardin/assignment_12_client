import { faCircleCheck, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ buggatti }) => {

    const { image, location, carName, originalPrice, resalePrice, sellerName, sellerVerified , usedYear} = buggatti;

    return (
        <div className='lg:w-60 md:w-1/2 p-4 w-full'>
            <Link
                to='/coming-soon'
                className='block relative h-32 rounded overflow-hidden'
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
                <h2 className='text-gray-900 title-font text-base font-medium'>
                    {carName}
                </h2>
                <p className='font-thin text-xs'>
                    Original price <span className='mt-1 '>${originalPrice}</span>
                </p>
                <p className='mt-1 font-thin text-xs'> Resale Price :
                    <span className='font-bold'> ${resalePrice}</span>
                </p>
                {/* <div className='flex justify-around text-xs mt-1'>
                    <div>
                        <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                        <FontAwesomeIcon className='text-orange-400' icon={faStar}></FontAwesomeIcon>
                    </div>
                    <p className='text-xs '>Used {usedYear} year</p>
                </div> */}
                <div className='flex justify-between mt-2'>
                    <button >
                        <p className='text-xs text-orange-400 font-semibold'>Book Now</p>
                    </button>
                    <div className='text-xs font-thin'>
                        <span className='mr-1'>{sellerName}</span>
                        <span>
                            {sellerVerified && <FontAwesomeIcon className='text-blue-500' icon={faCircleCheck}></FontAwesomeIcon>}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;