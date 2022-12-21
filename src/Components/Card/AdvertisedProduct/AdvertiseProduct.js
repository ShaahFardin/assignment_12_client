import React from 'react';
import { Link } from 'react-router-dom';

const AdvertiseProduct = ({ product }) => {
    return (
        <div className="card w-60 glass">
            <img src={product?.image} alt="car!" className='h-36 object-cover'/>
            <div className="card-body">
                <h2 className="card-title">{product?.carName}</h2>
                <p>Price : {product?.resalePrice}</p>
                <div className="card-actions justify-center">
                    <button className="bg-blue-600 rounded-sm px-5 py-2 shadow-md text-white">
                        <Link to='/category/volkswagen'>BOOK NOW</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseProduct;