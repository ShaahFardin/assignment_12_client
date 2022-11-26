import React from 'react';

const AdvertiseProduct = ({product}) => {
    return (
        <div className="card w-60 glass">
            <figure><img src={product?.image} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product?.carName}</h2>
                <p>Price : {product?.resalePrice}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Book now!</button>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseProduct;